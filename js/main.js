var app = new Vue({
  el: "#app",
  data() {
    return {
      dataMoney: [
        {
          _50: 100,
          _20_: 100,
          _10: 100,
        },
      ],
      dataUser: [
        {
          nameUser: "Brayan",
          userId: "7269",
          userPin: "1234",
          money: 1000000,
        },
        {
          userId: 7894,
          userPin: 1234,
          money: 2000000,
        },
        {
          userId: 5612,
          userPin: 1234,
          money: 2000000,
        },
        ,
        {
          userId: 1123,
          userPin: 1234,
          money: 2000000,
        },
        ,
        {
          userId: 4567,
          userPin: 1234,
          money: 2000000,
        },
      ],
      prueba: [
        {
          name: "brayan",
          edad: 25,
        },
      ],
      dataOn: [],
      userId: "7269",
      userPin: "1234",
      nameUser: "",
      viewShow: false,
      viewMain: 0,
      viewInput: 0,
      viewAction: 0,
      viewAction2: 0,
    };
  },
  methods: {
    backup() {
      let dataUser = this.dataUser;
       dataUser = dataUser.filter((item) => item.userId === this.userId);
       dataUser = dataUser.find((item) => item.userId === this.userId);
       let userId = parseInt(dataUser.userId);
       if (this.userId.length > 4 || this.userId.length < 4) {
         alert("Ingrese los ultimos 4 digitos de su cedula");
       } else {
         if (userId === this.userId) {
           this.viewInput = 1;
         } else {
           alert("El usuario es incorrecto");
         }
       }
    },
    validateUser() {
            let dataUser = this.dataUser;
            let id = dataUser.filter((item) => item.userId === this.userId);
            if (this.userId.length > 4 || this.userId.length < 4) {
              alert("Ingrese los ultimos 4 digitos de su cedula");
            } else {
              if (id[0].userId === this.userId) {
                this.viewInput = 1;
              } else {
                alert("Error");
              }
            }
    },
    validatePin() {
    },
    validate() {
      if (this.viewInput === 0) {
        this.validateUser()
      } else {
        let dataUser = this.dataUser;
        let id = dataUser.filter((item) => item.userId === this.userId);
        if (this.userPin.length > 4 || this.userPin.length < 4) {
          alert("Ingrese el Pin de 4 digitos");
        } else {
          if (id[0].userPin === this.userPin ) {
            this.viewMain = 1;
            this.nameUser = id[0].nameUser
            this.viewAction = 1;
          } else {
            alert("Error");
          }
        }
      }
    },
    verDisplay(num) {
      if (this.viewInput === 1) {
        if (this.userPin.length < 4) {
          this.userPin += num;
        } else {
          alert("No se puede escribir mas de 4 digitos");
        }
      } else {
        if (this.userId.length < 4) {
          this.userId += num;
        } else {
          alert("No se puede escribir mas de 4 digitos");
        }
      }
    },
    action(num) {
      if (num === 1) {
        this.viewAction = 3;
        this.viewAction2 = 1;
      } else {
        this.viewAction = 2;
        this.viewAction2 = 1;
      }
    },
    cancel() {
      this.viewAction = 1;
      this.viewAction2 = 0;
    },
    erase() {
      if (this.viewInput === 0)
      {
        this.userId = ""
      } else {
        this.userPin=""
      }
    },
  },
});