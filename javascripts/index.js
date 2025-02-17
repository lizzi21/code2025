

    // 1
    const str = "abce";
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[3]);
    
    // 2
    let num1 = parseInt(prompt("Введите первое число", "Ввод"));
    let num2 = parseInt(prompt("Введите второе число", "Ввод"));
    console.log(num1 > 0 || num2 > 0);
    
    // 3
    let age = parseInt(prompt("Введите свой возраст", "Ввод"));
    if (age >= 18){
      console.log("Вы совершеннолетний");
    } else {
      console.log("Вы несовершеннолетний");
    }