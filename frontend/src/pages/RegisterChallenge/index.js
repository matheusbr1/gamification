import React, { useCallback, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Background } from "../../styles/global";
import { Container, TextArea, Select } from "./style";
import api from "../../services/api";
import Button from "../../components/button";
import Input from "../../components/input";
import Title from "../../components/title";
import SpinnerLoading from "../../components/spinnerLoading";

function RegisterChallenge() {
  const history = useHistory();

  const { token } = useContext(AuthContext);
  const { setChallenge, Appdata, loading, setLoading } = useContext(AppContext);
  const { name } = Appdata;

  const [assignee, setAssignee] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();
  const [users, setUsers] = useState([]);
  const [difficulty, setDifficulty] = useState();

  const challangeData = {
    title,
    assignee: !!assignee ? assignee.split("-")[1] : "",
    description,
    difficulty,
    deadline,
    status: "open",
    requester: name,
  };

  useEffect(() => {
    console.log(challangeData);
  }, [challangeData]);

  useEffect(() => {
    api
      .get("users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUsers(response.data));
  }, [token]);

  const handleFormData = useCallback(() => {
    setLoading(true);
    setChallenge(challangeData);

    api
      .post(`/users/${assignee.split("-")[0]}/challenges`, challangeData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (!response) {
          setLoading(false);
          return alert("Error");
        }

        console.log(("response:", response));
        setLoading(false);
        alert("Challenge Created");
        history.push("/dashboard");
      });
  }, [setLoading, setChallenge, challangeData, assignee, token, history]);

  return (
    <Background>
      <Container>
        {loading ? (
          <SpinnerLoading />
        ) : (
            <>
              <Title>Create a Challenge</Title>
              <form>
                <Select onChange={(e) => setAssignee(e.target.value)}>
                  <option value="">Choose Colaborator</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id + "-" + user.name}>
                      {user.name}
                    </option>
                  ))}
                </Select>
                <Input
                  id="title"
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  margin
                />
                <TextArea
                  id="description"
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Select onChange={(e) => setDifficulty(parseInt(e.target.value))}>
                  <option value="">Choose the Difficulty</option>
                  <option value={1}> Very easy </option>
                  <option value={2}>Easy</option>
                  <option value={3}>Medium</option>
                  <option value={4}>Hard</option>
                  <option value={5}>Avanced</option>
                </Select>
                <label htmlFor="date"> Deadline </label>
                <Input
                  id="date"
                  type="date"
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </form>
              <Button type="submit" onClick={handleFormData}>
                Create
            </Button>
            </>
          )}
      </Container>
    </Background>
  );
}

export default RegisterChallenge;
