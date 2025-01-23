## do -while -silmukka
do-while-silmukka on silmukka, joka suorittaa lohkonsa vähintään kerran, riippumatta siitä, täyttyykö ehto alussa. Ehdon tarkistaminen tapahtuu silmukan suorituksen jälkeen.

```javascript
function greetAtLeastOnce(name, times) {
    do {
        console.log(`hello ${name}`);
        times--;
    }while (times > 0);
}

greetAtLeastOnce('Jozia', 5);
