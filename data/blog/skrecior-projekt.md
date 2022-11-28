---
title: Skręcior - Discordowy Bot Muzyczny
date: '2022-11-27'
tags: ['bot', 'discord', 'muzyka']
draft: false
summary: Bot muzyczny stworzony przez ludzi dla ludzi. Wszystko zawarte w nim pochodzi prosto z ❤️
---

Czy szukałeś kiedyś bota na Discorda, który jest w pełni darmowy i posiada praktycznie wszystkie funkcje muzyczne, które u innych są płatne?
To źle trafiłeś. Skręcior to zwyczajny chłopak z klatki blokowej, który - jeśli go ładnie poprosisz - zrobi wszystko co jesteś w stanie wymarzyć. Wszystko co potrzebujesz to kanał głosowy, a on zrobi resztę.

## Pomysł

Sam pomysł na bota narodził się, kiedy zaczęły wymierać wszystkie boty muzyczne przez strike'i otrzymane od np. YouTube. Kolega, który wiedział, że zajmuję się programowaniem, napisał, czy przypadkiem nie byłym w stanie ukleić jakiegoś. Oczywiście, że byłem. Skorzystać z gotowej templatki znalezionej w 20 minut i podać token. Cała praca zajęła około 30 minut. Potem narodziły się większe problemy. Link do dodania bota został podsyłany coraz dalej i dalej. Użytkownicy domagali się wsparcia np. Spotify czy Apple Music, czego ta templatka nie posiadała wbudowanego. Zdecydowałem wtedy, że to nie jest to. Żeby mieć w pełni kontrolę nad kodem muszę napisać go własnoręcznie. Po wielu nieprzespanych nocach pojawiła się oficjalna `wersja 1.0`. Nie powiem, było z nią tyle problemów jak z niczym innym. Przykładowo, nie wspierała niczego innego jak zwykły link. Ah.. Strasznie to wyglądało. Podrzucam tu screena z tego czasu:
![Początki bywają ciężkie](https://i.imgur.com/A0bI4v5.png)

Nie wspominam już nawet o tym, że dokładność wyszukiwania, brak większości funkcji były na porządku dziennym. Co lepsze, korzystał z gotowego publicznego modułu do puszczania muzyki, więc można się domyślić, że jego stabilność była okropna.

## Rozwój

Natura perfekcjonisty przeważyła szalę goryczy i postanowiłem coś z tym w końcu zrobić. Szukałem rozwiązań nad **stworzeniem i hostowaniem własnego modułu**, nad którego stabilnością będę mógł mieć 150% kontrolę.
Szukając i szukając natknąłem się na moduł [`Lavalink`](https://github.com/freyacodes/Lavalink), który w każdym stopniu spełniał moje oczekiwania. Postanowiłem zrobić forka projektu na GitHubie i klikać coś po swojemu. Problem był jeden, ale poważny. **Nie znałem Javy w żadnym stopniu.** Można powiedzieć, że tym razem był to płotek nie do przeskoczenia. Nie pozostawało nic więcej niż tej Javy się nauczyć. Kolejne nieprzespane noce i ciężkie dnie poskutkowały finalnym stworzeniem przerobionego modułu, który - można określić - **był godzien** funkcjonować dla mojego Skręcika. Wystarczyło wybrać chmurę, w której Lavalink byłby hostowany i gotowe. Szybko, łatwo i sprawnie prawda? No... nie.

- Po pierwsze, w żadnym stopniu nie umiałem zaaplikować tego modułu do mojego bota.
- Po drugie, chmura, którą wybrałem, okazała się być całkowicie nieodpowiednia. _(Z grzeczności do twórców nie podam jej nazwy)_

Czas więc zobaczyć jakieś poradiki na YouTubie prawda? Tak. Przydałoby się. **TYLKO ŻE TAKICH NIE MA!** _Tutaj akurat moment na wciśnięcie autopromocji:_ Dlatego też nagrałem dla przyszłych pokoleń własny [poradnik](https://www.youtube.com/watch?v=kTbU4lvtQjk), zawierający to, czego inni nigdy nie omówili i musiałem boleśnie odkrywać i przeżywać samemu.

# Implementacja

Przyszedł czas, kiedy po zrozumieniu działania każdej rzeczy z osobna, doszło do implementacji tego w jedną, piękną całość. Niestety i na tym etapie pojawiły się problemy. Cały czas coś sypało błąd w konsoli, co zaprzestawało działanie bota. Poniżej zamieszczam wykres miesięcznych błędów wyłapanych w konsoli:
![Październik](https://i.imgur.com/07w6hEB.png)
![Listopad](https://i.imgur.com/u6lUe2C.png)
Drugi screen nie jest podpisany ale jest to **listopad**. Oba miesiące są z roku **2021**, gdzie to właśnie takowy zwykły Skręcik zaczynał ożywać. Nie chcę myśleć ile użytkowników na tym ucierpiało, ale na pewno ta ilość nie jest mała.\
W końcu przyszedł czas. Grudniowy, zimowy, świąteczny czas. Kiedy inni spędzali go pijąc gorącą czekoladę ja siedziałem w dalszym ciągu nad poprawą architektury serwera i co najważniejsze - **kodu źródłowego bota**, który okazał się być głównym prowoderem błędów. Okazywało się, że Lavalink po rozłączeniu się z botem, przez np. długi czas niekorzystania z niego **nie łączy się z nim automatycznie ponownie**. Więc za każdym razem trzeba było ręcznie go restartować. Pod koniec miesiąca wpadło mi do głowy rozwiązanie, kiedy idąc do domu przewróciłem się i mocniej trzasnąłem głową o krawężnik. **Wszystko było tak banalne**, a i tak dla mnie niezauważalne. No ale przecież, najciemniej pod latarnią. Od razu pobiegłem do komputera i wprowadziłem pomysł w życie. `TAK!` `TAK!` `TO BYŁO TO!`.\
Zastanawiające **CO** prawda? Sam do końca nie wiem, musiałem **zaktualizować używane moduły** xD.

## CZAS NA ZMIANY

Nie lubię długo tkwić w tym samym. To też obecna, jedynie podstawowa, funkcjonalność Skręcika mnie znudziła. Czas był nadać mu nową szatę graficzną, ulepszyć napisany kod i dodać nowe funkcje. No okej, ale jak?\
Sam nie wiedziałem, wiedziałem tylko, że to jest to, co **muszę** zrobić. Tak też stwierdziłem, że i tak jest to praktycznie **moje dziecko**, trzeba to zrobić dla niego, nie dla pieniędzy. Więc zrobiłem research z używanych funkcji, które w większości są płatne.

- Własne playlisty,
- Pełna kontrola muzyki,
- Własne prefixy komend,
- i te `NIESZCZĘSNE FILTRY`

Czemu **nieszczęsne**? A no dlatego, że ten moduł Lavalinka, który wykonałem okazał się być kompletnie niekompatybilny z wspieraniem jakiegokolwiek filtra muzycznego. Jeszcze większym problemem było to, że ludzie je ubóstwiali i nie mogli się bez nich obejść.\
Tak więc, trzeba było jedynie poczekać na paczkę z fixem do systemu, na którym hostowany jest mój Lavalink. Ale to przecież jest jak czekanie na pierwszą gwiazdkę w święta. Nie da się już wyczekać, a jej dalej na niebie nie ma. Tak jak i mojej paczki z fixem. Więc trzeba było napisać ją samemu.\
Nie będę nawet próbować opisywać tego co działo się ze mną przez tamten czas, można jedynie sobie wyobrażać.
Siwe włosy nie ustępowały i pochłaniały 80% mojej głowy. Równy tydzień, dzień w dzień, noc w noc, szukając rozwiązania, zostało one znalezione. Kończąc tym samym pracę nad architekturą serwera i kodem źródłowym Skręciora mogłem w spokoju spędzić święta. Tak mi się chociaż wydawało.

## Pierwsza weryfikacja Skręciora

Roztargnięcie spowodowało, że zapomniałem czemu zacząłem pracować nad tym botem. **Przez naruszanie praw autorskich**. Mimo to, wysłałem pełny opis bota do Discorda, gdzie na odpowiedź na weryfikację czekałem prawie tydzień. W tym czasie, zanim otrzymałem odpowiedź, zacząłem pracę nad nową wersją Skręciora.\
Wszystko się pięknie układało. Pamiętam do dziś, godzina 21, w wigilię, otrzymałem maila, że mój bot nie może zostać zweryfikowany bo narusza Terms of Service Discorda.\
Puknąłem się w głowę, czemu ja to w ogóle wysłałem, przecież przez to będę teraz na świeczniku.\
**Kompletny brak motywacji do dalszej pracy** spowodował, że zacząłem się zastanawiać nad tym, czy to wszystko jest warte mojego czasu.\
Warto dodać, że jeśli bot nie zostanie zweryfikowany, jego maksymalna liczba serwerów wynosi `100`.\
Tylko, że ta liczba niebezpiecznie z dnia na dzień się do tego zbliżała. Serwerów więcej i więcej a miejsca mniej i mniej.\
Wyszedłem z inicjatywą zrobienia **whitelisty**, która miała pomóc w rozwiązaniu problemu.
Ludzie zapisywali swoje serwery na listę, ja je zatwierdzałem, a z serwerów, których na tej whiteliście nie było, wychodziłem botem manualnie.\

## Wyjście z problemu

Wyjście z problemu nigdy nie było moim pomysłem. Zawdzięczam je w 100% nieznanemu mi osobiście niestety użytkownikowi, który wysunął tak proste rozwiązanie, że aż genialne.\
`Mejzu#7924`, użytkownik Skręciora na ten moment i - mam nadzieję - że do dziś, zaproponował to:
![Dziękuję Ci za to](https://i.imgur.com/7QQLMR7.png)
`Jeśli to czytasz, nie wiesz jak jestem Ci wdzięczny, za to że cała moja praca nie poszła na marne.`\
Na co odpowiedziałem:
![Moja odpowiedź](https://i.imgur.com/GRWaG9L.png)
**NO I WYSZŁO. PIERWSZY RAZ WSZYSTKO WYSZŁO JAK MIAŁO ZA PIERWSZYM RAZEM!** Szczęście było nie do opisania. Starej wersji zablokowałem możliwość dodawania go na serwery i do linka do zaproszenia go na serwer dodałem redirecta do zaproszenia nowej wersji.\
`Panie i panowie, powitajmy Skręciora!`\
A no tak, zapomniałem dopowiedzieć. **DJ Skręt Jąder** to pierwsza, oryginalna nazwa, którą się posługiwał bot. Każdy nazywał go zdrobniale Skręcior, więc chyba nie miałem innej opcji jak nazwanie tak drugiej wersji.\
![Skręcior](https://i.imgur.com/M0GAxeu.png)

Poszedł lekki spoiler, o jego weryfikacji poniżej.

# Weryfikacja wersji drugiej

Znając taktykę wroga i moje błędy z poprzedniej bitwy byłem w stanie wygrać wojnę. Wysłałem weryfikację, która w żadnym stopniu nie opisuje funkcjonalności muzycznej. **Genialne, niebanalne i twórcze.**\
Co lepsze, **weryfikacja została przyjęta na następny dzień** xD.
![Weryfikacja](https://i.imgur.com/zOk3EZW.png)
Byłem niesamowicie przeszczęśliwy, że teraz nie muszę się już martwić o nic.

- [x] Funkcjonalność Lavalinka
- [x] Perfekcyjny kod źródłowy bota
- [x] Weryfikacja

Mi to nie wystarczało. Ja chciałem więcej. Tak jak nazywa się EPka Belmondo ~ **Hustle As Usual** tak i ja byłem gotowy do **Hustle As Usual**.

# Finalne dopięcia

Użytkownicy rosną i rosną, a ja pracować nie przestaję. Odświeżony design, nowe komendy, nowe filtry, _które przestały być kulą u nogi_, usprawnienia struktury, usprawnienia kodu, wszystko nowe nowe i nowe.

Praca nad botem trwa już od ponad roku a użytkownicy nadal są zadowoleni z mojej pracy. Jest to niesamowite dostać takie komentarze jak, te, które można znaleźć poniżej. Gwarantuję, nie ma nic lepszego dla programisty niż docenienie jego pracań i starań włożonych w projekt.
![Komentarze](https://i.imgur.com/NQBOlC4.png)
![Komentarze](https://i.imgur.com/1OopmtO.png)
![Komentarze](https://i.imgur.com/hHxy8Tt.png)

Skręcior dzięki wam serwuje dziennie ponad `5 milionów` odtworzonych utworów dla ponad `50 tysięcy` użytkowników. **Statystyki z dnia 27.11.2022**\
_(Zsumowane statystyki z obu botów)_
![Statystyki](https://i.imgur.com/BV4lBT4.png)

Bardzo dziękuję każdemu, który włożył cegiełkę w tworzeniu Skręciora. Jak widać, jest to dla mnie coś więcej niż tylko aplikacja na Discordzie. Bardzo dziękuję za to, że jesteście z nami.\
Odmeldowuję się jak zawsze.
![Odmeldowanie](https://i.imgur.com/YVY1ply.png)

### Linki

- Link do serwera Discordowego, miejsce gdzie można przysiąść i pogadać z innymi użytkownikami Skręciora: [Klik](https://discord.gg/4TWmMfMU6N)
- Link do zaproszenia Skręciora na swój serwer: [Klik](https://discord.com/api/oauth2/authorize?client_id=939103800898224139&permissions=8&scope=bot)
- Link do Terms Of Service Skręciora: [Klik](http://radzionkow.net/terms)
- Link do mojej głównej strony internetowej: [Klik](http://radzionkow.net/portfolio)
