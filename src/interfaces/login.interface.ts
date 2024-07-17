export namespace ILogin {
  export enum LAYOUT {
    NEW_PASSWORD = 'new-password',
    FORGOT_PASSWORD = 'forgot-password',
    LOGIN = 'login',
    REGISTER = 'register',
    ACCOUNT_INFO = 'account-info',
    SECURITY_QUESTION = 'security-question'
  }

  export const LayoutInfo = {
    [LAYOUT.NEW_PASSWORD]: {
      height: '380px'
    },
    [LAYOUT.FORGOT_PASSWORD]: {
      height: '400px'
    },
    [LAYOUT.LOGIN]: {
      height: '430px'
    },
    [LAYOUT.REGISTER]: {
      height: '470px'
    },
    [LAYOUT.ACCOUNT_INFO]: {
      height: '535px'
    },
    [LAYOUT.SECURITY_QUESTION]: {
      height: '400px'
    }
  }
}
