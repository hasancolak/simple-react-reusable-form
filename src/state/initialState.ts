import AppState from "../AppState";

export const initialState: AppState = {
  form: [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Eneter your name",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Eneter your email",
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "Eneter your message",
    },
  ],
  apiSuccess: false,
  disable: false,
  data: {},
};
