import { message } from "antd";

export const openNotification = (type, content) => {
    message[type](content);
};
