---
title: Moje portfolio w 3D
date: '2022-11-27'
tags: ['strona', 'portfolio']
draft: false
summary: 'Portfolio wykonane przy użyciu modułu three.js i modeli w Blenderze'
---

# Początki

Pomysł stworzenia czegokolwiek w 3D pojawił się po obejrzeniu [filmu](https://www.youtube.com/watch?v=Q7AOvWpIVHU) na YouTube u Fireshipa. Stwierdziłem, że moduł jest niesamowity i na pewno w jakimś stopniu ma niewykorzystany potencjał. Jednocześnie zastanawiałem się, jak zaktualizować swoje stare portfolio, które jest wykonane z gotowego szablonu z CMSów.\
\
`Początkowo moje portfolio wyglądało tak:`
![portfolio](http://radzionkow.net/test/blog/images/portfolio3d/stare-portfolio.png)
Najbardziej mnie śmieszy niezmieniony mockup na samym początku. Po kilkunastu kursach zmieniłem je na takie:
![portfolio2](http://radzionkow.net/test/blog/images/portfolio3d/portfolio2.png)
Które wygląda już bardziej imponująco, trzeba przyznać. Oczywiście, znając mnie, znudziłem się i tym więc postanowiłem pójść w stronę **parallax effectu** i stworzyłem je, idealne pod tym względem:
![portfolio3](http://radzionkow.net/test/blog/images/portfolio3d/portfolio3.png)
Gdzie niestety nie mam już zdjęcia tego księżyca, dlatego jest `alt, Moon`, co trochę psuje efekt, ale musicie uwierzyć, było piękne. Jednakże, po kilku miesiącach znudziłem się i tym i postanowiłem zrobić coś zupełnie innego. Zdecydowałem się na **3D**.

## Modelowanie

Dowiedziałem się, że przecież można modele tworzyć w Blenderze, a nie od zera w czystym JavaScripcie, więc tutaj postanowiłem zacząć. Przycinanie każdego modelu w Blenderze to niezbyt ciężkie, ale niesamowicie czasochłonne zajęcie.

## Hitboxy

Żeby modele były klikalne i dostępne do interakcji użytkownika trzeba przecież dodać hitboxy. No tak, ale jak? Z pomocą tutaj przychodzą `Vectory`. Wystarczyło stworzyć prostokąt o wymiarach modelu i przypisać mu odpowiednią klasę, która pozwalałaby na interakcję z użytkownikiem. Wszystko działało idealnie, aż do momentu, gdy zdecydowałem się na dodanie **animacji**. 

# Tekstury
Ostatnią rzeczą do zrobienia przed implementacją funkcjonalności strony były tekstury. Gadka taka sama jak przy modelowaniu. Nic ciężkiego, ale bardzo czasochłonne. Szukanie odpowiednich wymiarów, przycinanie, składanie je w jeden plik, składanie ich w trójwymiarowej rzeczywistości... nieprzyjmne. Po prostu **nieprzyjemne**. Ale jakie to było piękne, gdy wszystko się udało.

## Animacje

Taaak. Animacje. **Najgorzej wspominany okres w tym czasie**. Animacje kamery, żeby wchodziły w interakcje z użytkownikiem i tworzyły swojego rodzaju **immersję** były niezmiernie ciężkie do wykonania. Przenoszenie kamery z punktu `(x,y,z)` do innego punktu `(x,y,z)` było łatwe, ale w 2D, gdzie to punkt ma tylko współrzędne `(x,y)`. Kiedy dochodzi trzecia przestrzeń nie jest już tak kolorowo. Wyrywając sobie kolejne włosy na kolejnych animacjach udało się stworzyć je w pełni kompletne.

# Dodanie nowych funkcjonalności
Zawsze mnie denerwowało kiedy na stronie nie można robić nic więcej niż się po niej przewijać scrollem.
Tak więc dodałem parę ekranów do całego pliku z Blendera, które pozwalają na odtworzenie filmików, z YouTube i własnych. Teraz, kiedy już użytkownik nie będzie nudzić się na stronie, jest w stanie zobaczyć coś więcej niż tylko moje portfolio - ❤️ włożone w pracę i uwagę do detali.

# Podsumowanie
Przygoda z modułem 3D była ciężka, ale niesamowicie satysfakcjonująca i ciekawa. Dzięki niemu nauczyłem się wielu rzeczy, które mogę wykorzystać w przyszłości. 
* Dzięki JavaScriptowi rozwinąłem się w programowaniu, a także w pracy z bibliotekami.
* Moja wyobraźnia przestrzenna w życiu nie była tak rozwinięta.
* Żaden silnik 3D nie jest mi już straszny.

### Linki 
* [Portfolio można zobaczyć tutaj](https://radzionkow.net)