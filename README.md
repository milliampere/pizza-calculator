# Övning: Behavior Driven Development / Test Driven Development
> Gruppövning

## Introduktion

Vi skriver ofta våra test **BDD-style**. Själva begreppet _Behavior Driven Development_ är mycket större men bara stilen på hur man skriver test men många testramverk använder den här stilen för att göra test-koden med lättläslig.

```js
describe('describe what your are testing', () => {

    it('should be able to login via the login form', () => {
        const theThingWeAreTesting = true;
        expect(theThingWeAreTesting).toBeTruthy();
    })  
})
```

Jämför med den koden vi skrev i början av kursen, koden testar fortfarande men är med skriven enligt en stil som inte följer detta mönster och inte lägger så stor vikt vid att beskriva vad det är som testas:

```js
function add( a , b ){
  return a + b;
}
assert(add(1,1) === 2);
```


### Given When Then

Ett sätt att strukturera sina test samt upptäcka testscenarion är att jobba enligt **Test Driven Development**/**Behavior Driven Development**. Båda utgår från att man skriver testen först, sedan implementerar man testerna (som exemplet vi gjorde första test-tillfället: `sum()`). [**Given When Then**](https://martinfowler.com/bliki/GivenWhenThen.html) är en ytterliga struktur som man kan använda sig av för att skriva testen så att de både blir läsliga för icke-teckniska person och ur ett användarperspektiv. Det kan hjälpa en att se bortom koden och ens implementation och fokusera på att rätt saker testas. Ett typisk upplägg för ett test kan vara:

```yaml
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

Scenario: Buy last coffee
  Given there are 1 coffees left in the machine
  And I have deposited 1$
  When I press the coffee button
  Then I should be served a coffee
```

I det här scenarion spelar det ingen roll vilket språk/ramverk/bibliotek som används för att faktiskt skriva koden för att servera kaffe eller hur kaffeserveringen ska beräknas, enbart den `Feature` som ska implementeras samt ett eller flera `Scenario` som kan uppstå när denna `Feature` används.

## Övning - Implementera `PizzaCalculator`

`PizzaCalculator` är en applikation för att beräkna hur många pizzor och hur mycket dricka man måste köpa baserat på hur många personer som ska äta pizza.

Exempelscenario:

  * Är vi 6 personer måste vi köpa in två pizzor
  * Är vi 6 personer måste vi köpa 1 2l dricka + en 1l dricka.
  * Är vi 6 personer så blir den totala summan ca 300kr

Hur dessa beräkningar görs är dock upp till er. Sätt upp några grundvariabler som t.ex. _hur många personer kan dela på en pizza_, _hur mycket en standardpizza kostar_ samt _hur många personer som kan dela på en 2l dricka_.

**Ni behöver inte skapa något UI/GUI, applikationen ska göras helt i ren JavaScript och printa saker med `console.log`. Använd t.ex. det första repot om ni inte orkar skapa ett nytt: [unit-test-exercise](https://github.com/FEND16/unit-test-exercise). Ingen DOM behöver vara inblandad.**

1. Beskriv applikationens egenskaper (`Features`) enligt _Given When Then_-strukturen.
2. Sätt upp ett visst antal scenarion som ska inträffa enligt _Given When Then_-strukturen ovan. Ta utgångspunkt från mitt exempel med _6 personer_. Använd dock flera scenarion: _Om vi är 2 personer_, _Om vi är 20 personer_.
3. Sätt upp ett repo på GitHub. Sätt upp ert repo så att varje gång ni är klara med ett nytt scenario och har skrivit både tester och koden så pushar ni upp era ändringar till repot. Koppla ert repo till **Travis** samt sätt upp en `.travis.yml` i root-mappen. Om ni har lagt in `"npm test" : "jest"` är det minsta ni behöver:
```yaml
language: node_js
node_js:
  - 8
script:
  - npm test
```
**Ni behöver inte köra `jest --watchAll` då testen ska avslutas i Travis och inte ska watchas**.

4. Implementera enhetstester/integrationstester utifrån dessa scenarion. **Här ska ni jobba enligt TDD då ni skriver själva testerna först innan ni ens skriver koden för applikationen**. Sedan ska ni gradvis lägga till mer funktionaliten. Men varje del kod i applikationen måste ha ett redan färdigt skrivet test som första ska misslyckas, sedan ska ni få det att lyckas. När väl testar har lyckats ska ni se över om ni kan förbättra koden och fortfarade få testerna att lyckas. Ni är klara när ni har "översatt" alla scenarion som ni skrev i början till tester som går igenom.
5. Visa upp er lösning för läraren samt om ni vill: ladda upp er lösning som ett repository på FEND16-organizationen.

