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
          userId: "7269",
          userPin: "1234",
          money: 1000000,
          staus: true,
        },
        {
          userId: "7894",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        {
          userId: "5612",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        ,
        {
          userId: "1123",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        ,
        {
          userId: "4567",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
      ],
      prueba: [
        {
          name: "brayan",
          edad: 25,
        },
      ],
      dataOn: [],
      userId: "5611",
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
      const dataUser = Object.values(this.dataUser);
      const index = dataUser.findIndex((item) => {
        return item.userId === this.userId;
      });
      if (index != -1) {
        if (dataUser[index].userId === this.userId) {
          return (this.viewInput = 1);
        }
      } else {
        if (index === -1) {
          alert("El usuario no existe");
        }
      }
    },
    validatePin() {
      const dataUser = Object.values(this.dataUser);
      const index = dataUser.findIndex((item) => {
        return item.userId === this.userId;
      });
      if (index != -1) {
        if (dataUser[index].userPin === this.userPin) {
          return (this.viewInput = 1);
        }
      }
    },
    validate() {
      
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