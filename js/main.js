var app = new Vue({
  el: "#app",
  data() {
    return {
      dataMoney: {
        _50: 100,
        _20: 100,
        _10: 100,
      },

      dataUser: [
        {
          userId: "7269",
          userPin: "1234",
          money: 1000000,
          staus: true,
        },
        {
          name: "Brayan Marin",
          userId: "7894",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        {
          name: "Adam Sandler",
          userId: "5612",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        ,
        {
          name: "Peper Pops",
          userId: "1123",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
        ,
        {
          name: "Tony Stark",
          userId: "4567",
          userPin: "1234",
          money: 2000000,
          staus: true,
        },
      ],
      dataOn: {},
      userId: "5612",
      userPin: "1234",
      nameUser: "",
      consignar: "",
      retirar: "",
      viewShow: false,
      viewMain: 0,
      viewInput: 0,
      viewAction: 0,
      viewAction2: 0,
      sacar: 0,
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
        return item.userId == this.userId;
      });
      console.log(index);
      if (index !== -1) {
        if (dataUser[index].userPin == this.userPin) {
          alert('Inicio de sesion correcto')
          this.dataOn= dataUser[index]
          this.viewMain = 1;
        }
      }
    },
    valitadeConsignar() {
      let consignar = parseInt(this.consignar)
      if (consignar < 10000) {
        alert('Monto minimo a consignar de $10.000')
      } else {
        this.dataOn.money = this.dataOn.money + consignar;
        this.viewAction2 = 2;
        this.viewAction = 1;
        this.viewShow = true;
      }
    },
    validateRetirar() {
      let retirar = parseInt(this.retirar)
      let k10 = this.dataMoney._10;
      let k20 = this.dataMoney._20;
      let k50 = this.dataMoney._50;
      let k10Money = parseInt(this.dataMoney._10)*10000;
      let k20Money = parseInt(this.dataMoney._20)*20000;
      let k50Money = parseInt(this.dataMoney._50) * 50000;
      let total = k10Money + k20Money + k50Money;
      let multiplo10 = retirar % 10000;
      let multiplo20 = retirar % 20000;
      let multiplo50 = retirar % 50000;
        if (this.dataOn.money >= retirar) {
          if (multiplo10 == 0) {
            this.dataOn.money=this.dataOn.money - retirar;
            console.log(this.dataOn.money);
            alert(`Se a retirado $${retirar} saldo: $${this.dataOn.money}`)
            this.viewAction2 = 1;
            this.viewAction = 4;
            this.viewShow = true;
          } else {
            alert(`Error en la la transaccion el dinero a retirar no es multiplo de $10.000`);
          }
        } else {
          alert(`Saldo insuficiente en su cuenta para retirar: ${retirar}`);
          alert(`Por favor retire un monto igual o menor a $${this.dataOn.money} `)
        }
    },
    validate() {
      if (this.viewMain == 0) {
        if (this.viewInput == 0) {
          this.validateUser();
        } else if (this.viewInput == 1) {
          this.viewInput = 2;
          this.validatePin();
        }
      } else if (this.viewAction == 2) {
        this.validateRetirar();
      } else if (this.viewAction == 3) {
        this.valitadeConsignar();
      }
      
    },
    verDisplay(num) {
      if (this.viewMain == 0) {
        if (this.viewInput == 1) {
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
      } else if (this.viewMain==1) {
        if (this.viewAction == 2) {
          this.retirar += num;
        } else if (this.viewAction == 3) {
          this.consignar += num;
        }
      }
    },
    action(num) {
      if (num==0) {
        this.viewAction = 0;
        this.consignar = '';
        this.retirar = '';
        this.viewShow = false;
        this.viewAction2 = 0;
      }
      else if(num == 1) {
        this.viewAction = 3;
      } else if(num==2) {
        this.viewAction = 2;
      } else if(num==3) {
        this.viewMain = 0;
        this.userId = "";
        this.userPin= "";
        this.nameUser= "";
        this.consignar= "";
        this.retirar= "";
        this.viewShow= false;
        this.viewMain= 0;
        this.viewInput= 0;
        this.viewAction= 0;
        this.viewAction2 = 0;
        this.dataOn = {};
      }
    },
    cancel() {
      this.viewAction = 1;
    },
    erase() {
      if (this.viewMain == 0) {
        if (this.viewInput == 0)
        {
          this.userId = ""
        } else if(this.viewInput==1) {
          this.userPin=""
        }
      } else if (this.viewMain == 1) {
        if (this.viewAction == 2) {
          this.retirar=''
        } else if (this.viewAction == 3) {
          this.consignar = '';
        }
      }
    },
  },
});