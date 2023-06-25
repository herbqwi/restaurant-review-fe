export namespace ILogin {
  export enum LAYOUT {
    LOGIN = 'login',
    REGISTER = 'register',
    ACCOUNT_INFO = 'account-info'
  }

  export const LayoutInfo = {
    [LAYOUT.LOGIN]: {
      height: '430px'
    },
    [LAYOUT.REGISTER]: {
      height: '470px'
    },
    [LAYOUT.ACCOUNT_INFO]: {
      height: '535px'
    }
  }
}
