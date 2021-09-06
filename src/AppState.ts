// tslint:disable-next-line:no-empty-interface
interface IInput {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}
interface AppState {
  form: IInput[];
  data: {};
  apiSuccess: boolean;
  disable: boolean;
}

export default AppState;
