import instance from "./axios";

const userLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await instance.post("/login", { username, password });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getBreakOutRooms = async () => {
  try {
    const response = await instance.get("/breakout-rooms");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getChat = async ({ userId }: { userId: string }) => {
  try {
    const response = await instance.get(`/chats?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const verifyToken = async () => {
  try {
    const response = await instance.get("/verify-token");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { userLogin, getUsers, getBreakOutRooms, getChat, verifyToken };
