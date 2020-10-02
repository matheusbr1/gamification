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
    const users = await User.findAll({
      attributes: ["id", "name", "coordinator", "stars", "avatar"],
    });
    return response.json(users);
  }

  async listByIndex(request, response) {
    const { index } = request.params;

    const user = await User.findOne({
      where: { id: index },
      attributes: ["id", "name", "coordinator", "avatar", "stars"],
    });

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.json(user);
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
