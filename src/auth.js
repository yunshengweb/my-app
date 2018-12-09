export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb,email,password) {
        if(password.length<5)
        {
            this.isAuthenticated = false;
            setTimeout(cb(false), 100);
        }
        else
        {
            this.isAuthenticated = true;
            setTimeout(cb(true), 100);
        }
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb(false), 100);
    }
  }
