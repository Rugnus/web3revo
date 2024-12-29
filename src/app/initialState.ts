export interface InitialState {
  user: string | null;
  loading: boolean;
}

const initialState: InitialState = {
  user: null,
  loading: false,
};

export default initialState;
