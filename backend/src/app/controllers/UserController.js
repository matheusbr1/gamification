import User from "../models/User";
import { hash } from "bcryptjs";

class UserController {
  async store(request, response) {
    const { name, email, password, coordinator, avatar } = request.body;

    const emailExists = await User.findOne({
      where: { email },
    });

    // check if email exists
    if (emailExists) {
      return response
        .status(400)
        .json({ message: "This email is already used" });
    }

    const saltRounds = 8;
    const password_hash = await hash(password, saltRounds);

    const user = await User.create({
      name,
      email,
      password_hash,
      coordinator,
      avatar,
      stars: 0,
    });

    return response.json({
      message: "User created sucessfuly",
      user,
    });
  }

  async list(request, response) {
    const users = await User.findAll();
    return response.json(users);
  }

  async listByIndex(request, response) {
    const { index } = request.params;

    const user = await User.findOne({
      where: { id: index },
    });

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.json({
      id: user.id,
      name: user.name,
      email: user.email,
      coordinator: user.coordinator,
      avatar:
        "/static/media/Artboards_Diversity_Avatars_by_Netguru-04.7591d041.png",
      stars: Math.floor(Math.random() * 5),
      challenges: [],
    });
  }

  async update(request, response) {
    const { name, email, oldPassword, password } = request.body;
    const { index } = request.params;

    const user = await User.findByPk(index);

    // Check Index
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    // check email
    if (email !== user.email) {
      // Check if new email already exists
      const emailExists = await User.findOne({
        where: { email },
      });

      // check if email exists
      if (emailExists) {
        return response
          .status(400)
          .json({ error: "This email is already used" });
      }
    }

    // check password
    if (oldPassword && oldPassword !== user.password_hash) {
      return response.status(401).json({ error: "Password does not match" });
    }

    if (oldPassword) {
      const userUpdated = await user.update({
        name,
        email,
        password_hash: password,
      });
    }

    // Update User
    const userUpdated = await user.update(request.body);

    return response.json({
      message: "User updated sucessfuly",
      userUpdated,
    });
  }

  async delete(request, response) {
    const { index } = request.params;

    const user = await User.findByPk(index);

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    // Verify permission for delete any user

    const userDeleted = await user.destroy({
      where: { id: index },
    });

    return response.json({ message: "User Deleted sucessfuly", userDeleted });
  }
}

export default new UserController();
