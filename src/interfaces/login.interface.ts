export namespace ILogin {
  export enum LAYOUT {
    LOGIN = 'login',
    REGISTER = 'register',
    ACCOUNT_INFO = 'account-info'
  }

  export const LayoutInfo = {
    [LAYOUT.LOGIN]: {
      height: '433px'
    },
    [LAYOUT.REGISTER]: {
      height: '476px'
    },
    [LAYOUT.ACCOUNT_INFO]: {
      height: '515px'
    }
  }
}