let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alertText: '',
        alarmInput: '',
        inputField: '',
        userAlarmSet: ''
    },

    created: function () {

        let self = this;
        self.clockstuff = self.setTime();

        setInterval(function() {
            self.clockstuff = self.setTime();
            self.alarmSet();

        }, 1000);

    },

    methods: {

        setTime: function () {

            let now = new Date();

            let hours = now.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            return hours + ':' + minutes + ':' + seconds;

        },


        alarmSet: function () {

          let me = this;

              if (me.clockstuff == me.alarmInput) {
              me.alertText = 'wakeup!';
                }
          },

        saveInput: function () {

          let input = inputField.value;
          localStorage.setItem('alarmInput', input);
          this.userAlarmSet = "Your alarm is set to " + localStorage.getItem('alarmInput');
          this.alarmInput = inputField.value;
          this.inputField = '';




          }



        //
        // clearInput: function () {
        //
        //   this
        // }




     // // Get the value from the input field
     // let input = color.value;
     //
     // // Save the value in localstorage
     // localStorage.setItem("favorite_color", input);
     //
     // // Update the message to show we've saved the input
     // message.innerHTML = "I just saved <strong>" + input + "</strong> as your favorite color.";

   }







});
