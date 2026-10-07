// Baza pytań do quizu.
// id          - numer pytania w źródle
// pytanie     - treść pytania
// odpowiedzi  - cztery odpowiedzi w kolejności A, B, C, D (bez liter)
// poprawna    - litera poprawnej odpowiedzi
// obraz       - opcjonalnie: nazwa pliku ze zdjęciem z folderu inf04/

const BAZA_INF04 = [
    {
        id: 1,
        pytanie: "Przedstawiony zapis w języku C# oznacza definicję klasy Car, która:",
        odpowiedzi: [
            "jest klasą bazową (nie dziedziczy po żadnej klasie)",
            "jest zaprzyjaźniona z klasą Vehicle",
            "dziedziczy po Vehicle",
            "korzysta z pól prywatnych klasy Vehicle"
        ],
        poprawna: "C",
        obraz: "1.jpg"
    },
    {
        id: 2,
        pytanie: "Mechanizm obietnic (ang. promises) w języku JavaScript ma na celu",
        odpowiedzi: [
            "zastąpić mechanizm dziedziczenia w programowaniu obiektowym.",
            "obsłużyć przechwytywanie błędów aplikacji.",
            "poprawić czytelność kodu synchronicznego.",
            "obsłużyć funkcjonalność związaną z kodem asynchronicznym."
        ],
        poprawna: "D"
    },
    {
        id: 3,
        pytanie: "Zapisane w kodzie szesnastkowym składowe RGB koloru #AA41FF po przekształceniu do kodu dziesiętnego wynoszą kolejno",
        odpowiedzi: [
            "160, 64, 255",
            "160, 65, 255",
            "170, 64, 255",
            "170, 65, 255"
        ],
        poprawna: "D"
    },
    {
        id: 4,
        pytanie: "Oznaczeniem komentarza jednoliniowego w języku Python jest:",
        odpowiedzi: [
            "#",
            "!",
            "\"\"",
            "//"
        ],
        poprawna: "A"
    },
    {
        id: 5,
        pytanie: "Aplikacje Web wykonane we frameworku Angular lub bibliotece React i działające na domyślnych ustawieniach portów można uruchomić na lokalnym serwerze, wpisując w przeglądarce",
        odpowiedzi: [
            "localhost:8000 (React) lub localhost:49887 (Angular)",
            "localhost:8080 (React) lub localhost:8000 (Angular)",
            "localhost:3000 (React) lub localhost:4200 (Angular)",
            "localhost:5001 (React) lub localhost:8080 (Angular)"
        ],
        poprawna: "C"
    },
    {
        id: 6,
        pytanie: "Co można powiedzieć o metodach klasy Point?",
        odpowiedzi: [
            "Są przeładowane (przeciążone).",
            "Zawierają błąd, gdyż nazwy metod muszą się różnić.",
            "Zawierają przeładowanie (przeciążenie) operatora.",
            "Pełnią funkcję konstruktorów w zależności od liczby parametrów."
        ],
        poprawna: "A",
        obraz: "6.jpg"
    },
    {
        id: 7,
        pytanie: "Aby zaprojektować zestaw danych do zainicjowania algorytmu sortowania bąbelkowego tablicy, należy zastosować przynajmniej typy:",
        odpowiedzi: [
            "jeden tablicowy, dwa liczbowe do kontroli pętli, jeden do zamiany elementów miejscami",
            "jeden tablicowy, jeden liczbowy do kontroli pętli, dwa do zamiany elementów miejscami",
            "dwa tablicowe, jeden liczbowy do kontroli pętli",
            "dwa tablicowe, dwa do zamiany elementów miejscami"
        ],
        poprawna: "A"
    },
    {
        id: 8,
        pytanie: "Utworzenie procedury składowej o nazwie dodajUsera w MS SQL rozpoczyna się od poleceń",
        odpowiedzi: [
            "add dodajUsera procedure",
            "create procedure dodajUsera",
            "create dodajUsera procedure",
            "add procedure dodajUsera"
        ],
        poprawna: "B"
    },
    {
        id: 9,
        pytanie: "Okna dialogowe niemodalne służą do",
        odpowiedzi: [
            "kontrolowania stanu aplikacji poprzez systemy menu.",
            "blokowania działania aplikacji na czas wprowadzenia i zatwierdzenia danych.",
            "kontrolowania ustawień aplikacji, jako okno pozostające otwarte na ekranie przez cały czas trwania aplikacji.",
            "wyświetlania komunikatów z koniecznością ich potwierdzenia, aby dalej kontynuować działanie aplikacji."
        ],
        poprawna: "C"
    },
    {
        id: 10,
        pytanie: "Na podstawie opisu umieszczonego w ramce, wskaż który rysunek przedstawia element odpowiadający klasie Badge zdefiniowanej w bibliotece Bootstrap:",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "10.jpg"
    },
    {
        id: 11,
        pytanie: "Rekomendacje standardu WCAG 2.0 związane z percepcją dotyczą:",
        odpowiedzi: [
            "przedstawienia komponentów interfejsu użytkownika",
            "zapewnienia wystarczającej ilości czasu na przeczytanie i przetworzenie treści",
            "zapewnienia interakcji pomiędzy komponentami użytkownika przy użyciu klawiatury",
            "zrozumienia i rzetelności w dostarczonych treściach na stronie"
        ],
        poprawna: "A"
    },
    {
        id: 12,
        pytanie: "Przedstawione oznaczenie praw Creative Commons, pozwala na darmowe korzystanie z utworu:",
        odpowiedzi: [
            "pod warunkiem pozostawienia go w oryginalnej postaci",
            "w celu zmiany lub remiksowania",
            "w celach komercyjnych",
            "pod warunkiem udostępnienia go na tej samej licencji"
        ],
        poprawna: "B",
        obraz: "12.jpg"
    },
    {
        id: 13,
        pytanie: "W metodach klasy GoldCustomer są widoczne jedynie pola",
        odpowiedzi: [
            "GoldPoints, Name, Id, Age",
            "GoldPoints, Name",
            "GoldPoints, Name, Id",
            "GoldPoints"
        ],
        poprawna: "C",
        obraz: "13.jpg"
    },
    {
        id: 14,
        pytanie: "Przedstawiony kod XAML zostanie wyrenderowany jako:",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "14.jpg"
    },
    {
        id: 15,
        pytanie: "Rezultatem wykonania przedstawionego fragmentu kodu jest wypisanie liczb z przedziału od 2 do 20, które są",
        odpowiedzi: [
            "podzielne przez wartość zmiennej test.",
            "parzyste.",
            "pierwsze.",
            "podzielne przez wartość zmiennej check."
        ],
        poprawna: "C",
        obraz: "15.jpg"
    },
    {
        id: 16,
        pytanie: "Przedstawiony fragment kodu w języku Java wypełnia tablicę wartościami:",
        odpowiedzi: [
            "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
            "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
            "2, 2, 2, 2, 2, 2, 2, 2, 2, 2",
            "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
        ],
        poprawna: "D",
        obraz: "16.jpg"
    },
    {
        id: 17,
        pytanie: "Metoda poszukiwań w tablicach posortowanych, która polega na podzieleniu tablicy na kilka bloków i wyszukaniu liniowym tylko w tym bloku, w którym docelowy element może się znajdować, w języku angielskim nosi nazwę",
        odpowiedzi: [
            "Exponential search.",
            "Ternary search.",
            "Binary search.",
            "Jump search."
        ],
        poprawna: "D"
    },
    {
        id: 18,
        pytanie: "Na przedstawionych funkcjonalnie równoważnych sobie kodach źródłowych w wyniku wykonania operacji w zmiennej b zostanie zapisana wartość:",
        odpowiedzi: [
            "5",
            "6",
            "596",
            "5.96"
        ],
        poprawna: "A",
        obraz: "18.jpg"
    },
    {
        id: 19,
        pytanie: "Oprogramowaniem do śledzenia błędów oraz do zarządzania projektami jest:",
        odpowiedzi: [
            "Bugzilla",
            "Jasmine",
            "Git",
            "Jira"
        ],
        poprawna: "D"
    },
    {
        id: 20,
        pytanie: "Aby utworzyć aplikację mobilną typu cross-platform w języku C# można zastosować:",
        odpowiedzi: [
            "platformę Xamarin",
            "środowisko XCode",
            "środowisko Android Studio",
            "platformę React Native"
        ],
        poprawna: "A"
    },
    {
        id: 21,
        pytanie: "Która struktura danych może być zaimplementowana przy wykorzystaniu jedynie wymienionych metod?",
        odpowiedzi: [
            "tablica.",
            "stos.",
            "kolejka FIFO.",
            "drzewo binarne."
        ],
        poprawna: "B",
        obraz: "21.jpg"
    },
    {
        id: 22,
        pytanie: "Obiektowe podejście do rozwiązywania problemów obejmuje między innymi:",
        odpowiedzi: [
            "klasy, obiekty i hermetyzację",
            "pola, metody, rekurencję i kwerendy",
            "wyzwalacze i polimorfizm",
            "zmienne, procedury i funkcje"
        ],
        poprawna: "A"
    },
    {
        id: 23,
        pytanie: "Przedstawiona metoda jest implementacją algorytmu",
        odpowiedzi: [
            "sortującego napis od znaku o najniższym kodzie ASCII do znaku o najwyższym kodzie.",
            "sprawdzającego czy napis jest palindromem.",
            "wyszukującego znak w napisie.",
            "odwracającego napis."
        ],
        poprawna: "D",
        obraz: "23.jpg"
    },
    {
        id: 24,
        pytanie: "Przedstawiony cytat jest opisem metodyki RAD. Rozwinięcie tego skrótu można przetłumaczyć na język polski jako:",
        odpowiedzi: [
            "szybki rozwój aplikacji",
            "środowisko szybkiego programowania",
            "środowisko rozwijania aplikacji",
            "zintegrowane środowisko programistyczne"
        ],
        poprawna: "A",
        obraz: "25.jpg"
    },
    {
        id: 25,
        pytanie: "Cechami dobrego negocjatora są:",
        odpowiedzi: [
            "intuicja, cierpliwość, asertywność",
            "asertywność, pesymizm, buta",
            "dobra reputacja, przekora, porywczość",
            "lojalność, nieśmiałość, uczciwość"
        ],
        poprawna: "A"
    },
    {
        id: 26,
        pytanie: "Przedstawiony wykres obrazuje wyniki testów:",
        odpowiedzi: [
            "użyteczności",
            "funkcjonalności",
            "wydajnościowych",
            "bezpieczeństwa"
        ],
        poprawna: "C",
        obraz: "27.jpg"
    },
    {
        id: 27,
        pytanie: "W środowisku IDE do tworzenia aplikacji okienkowych utworzono okno Form1. Aby zmienić ustawienia, kolejno: nazwa okna widoczna na górnej belce, domyślny kursor na strzałkę oraz kolor tła okna, należy zmodyfikować następujące pola okna Properties:",
        odpowiedzi: [
            "Text, UseWaitCursor, BackColor.",
            "(Name), UseWaitCursor, BackgroundImage.",
            "Text, Cursor, BackColor.",
            "(Name), Cursor, BackgroundImage."
        ],
        poprawna: "C",
        obraz: "28.jpg"
    },
    {
        id: 28,
        pytanie: "Zastosowanie typu DECIMAL języka SQL wymaga wcześniejszego zdefiniowania długości (liczby cyfr) przed przecinkiem oraz długości cyfr po przecinku. Jest to zapis:",
        odpowiedzi: [
            "logiczny",
            "łańcuchowy",
            "stałoprzecinkowy",
            "zmiennoprzecinkowy"
        ],
        poprawna: "C"
    },
    {
        id: 29,
        pytanie: "Przedstawiony algorytm może być zaimplementowany w języku Java w oparciu o instrukcję:",
        odpowiedzi: [
            "while",
            "try",
            "switch",
            "if"
        ],
        poprawna: "A",
        obraz: "30.jpg"
    },
    {
        id: 30,
        pytanie: "Przedstawione równoważne funkcjonalnie fragmenty kodu w bibliotece React.js oraz we frameworku Angular mają za zadanie wyświetlić",
        odpowiedzi: [
            "jedynie przycisk i obsłużyć generowane nim zdarzenie click.",
            "liczbę kliknięć przycisku.",
            "liczbę 0 po przyciśnięciu przycisku.",
            "jedynie napis BTN_1."
        ],
        poprawna: "B",
        obraz: "31.jpg"
    },
    {
        id: 31,
        pytanie: "Dane z serwera do aplikacji front-end można przesłać za pomocą:",
        odpowiedzi: [
            "metody POST",
            "protokołu SSH",
            "formatu JSON",
            "biblioteki jQuery"
        ],
        poprawna: "C"
    },
    {
        id: 32,
        pytanie: "Programista może zastosować framework Angular w celu implementacji aplikacji:",
        odpowiedzi: [
            "mobilnej",
            "desktopowej",
            "typu front-end",
            "typu back-end"
        ],
        poprawna: "C"
    },
    {
        id: 33,
        pytanie: "Przedstawiony fragment kodu z Android Studio implementuje metodę nasłuchującą do obsługi zdarzenia:",
        odpowiedzi: [
            "wybrania daty",
            "wciśnięcia przycisku",
            "zmiany pola edycyjnego",
            "przełączenia kontrolki Switch"
        ],
        poprawna: "B",
        obraz: "34.jpg"
    },
    {
        id: 34,
        pytanie: "Poszkodowanego należy ułożyć w pozycji bocznej bezpiecznej w przypadku:",
        odpowiedzi: [
            "omdlenia, gdy osoba oddycha",
            "omdlenia i braku tętna",
            "urazu pleców, gdy osoba jest przytomna",
            "uszkodzenia kręgosłupa"
        ],
        poprawna: "A"
    },
    {
        id: 35,
        pytanie: "Na dwóch przykładach przedstawiono mechanizm o nazwie Binding. Ma on na celu",
        odpowiedzi: [
            "obsługiwanie zdarzenia kontrolek interfejsu użytkownika wywołując odpowiednie funkcje.",
            "wiązanie i eksportowanie plików z różnych modułów aplikacji.",
            "obsługiwanie mechanizmu obietnic (promises) lub obserwatora (observable) w programowaniu asynchronicznym.",
            "wiązanie właściwości (property) elementu interfejsu użytkownika z danymi bądź właściwością innego obiektu."
        ],
        poprawna: "D",
        obraz: "36.jpg"
    },
    {
        id: 36,
        pytanie: "Przedstawiony diagram Gantta dotyczy projektu informatycznego. Zakładając, że każdy członek zespołu ma wystarczające umiejętności, aby wykonać każde z zadań oraz do każdego z zadań można przydzielić tylko jedną osobę, która poświęca na zadanie cały dzień pracy, to minimalnie zespół musi liczyć:",
        odpowiedzi: [
            "5 osób",
            "4 osoby",
            "1 osobę",
            "2 osoby"
        ],
        poprawna: "D",
        obraz: "37.jpg"
    },
    {
        id: 37,
        pytanie: "Jednym z etapów publikacji mobilnej w sklepie Google Play są testy Beta, których cechą charakterystyczną jest to, że są one:",
        odpowiedzi: [
            "podzielone na testy funkcjonalne, wydajnościowe i skalowalności",
            "przeprowadzane w oparciu o dokument z przypadkami testowymi",
            "wykonane przez grupę docelowych użytkowników aplikacji",
            "wykonywane przez grupę zatrudnionych testerów z firmy Google"
        ],
        poprawna: "C"
    },
    {
        id: 38,
        pytanie: "Kolor Pale Green w systemie RGB ma postać RGB(152, 251, 152). Kod szesnastkowy tego koloru wynosi:",
        odpowiedzi: [
            "98 FE 98",
            "98 FB 98",
            "A0 FB A0",
            "A0 FE A0"
        ],
        poprawna: "B"
    },
    {
        id: 39,
        pytanie: "Modyfikator dostępu poprzedzający definicję metody Dodaj() zdefiniowanej w klasie Kalkulator powoduje, że:",
        odpowiedzi: [
            "jest ona dostępna w programie głównym i może być wywołana na rzecz instancji klasy Kalkulator",
            "nie jest ona dostępna z poziomu klas, które są zaprzyjaźnione z klasą Kalkulator",
            "nie jest ona dostępna w klasach dziedziczących po klasie Kalkulator",
            "jest ona dostępna wewnątrz klasy oraz wewnątrz klas dziedziczących po klasie Kalkulator"
        ],
        poprawna: "D",
        obraz: "40.jpg"
    },
    {
        id: 40,
        pytanie: "Środowiskiem natywnym do programowania aplikacji desktopowych za pomocą języka C# jest:",
        odpowiedzi: [
            "MS Visual Studio",
            "NetBeans",
            "Eclipse",
            "PyCharm"
        ],
        poprawna: "A"
    },
    {
        id: 41,
        pytanie: "W którym modelu Cyklu Życia Projektu Informatycznego występuje etap analizy ryzyka?",
        odpowiedzi: [
            "W spiralnym.",
            "W kaskadowym.",
            "W modelu Fry’ego",
            "W modelu z prototypem."
        ],
        poprawna: "A"
    },
    {
        id: 42,
        pytanie: "Na obrazie przedstawiono fragment emulacji iOS z kontrolką. Który kod XAML opisuje tę kontrolkę?",
        odpowiedzi: [
            "< Stepper Increment= \"1\" / >",
            "< Stepper Increment= \"1\" / >",
            "< Switch IsToggled= \"true\" / >",
            "< Entry IsPassword= \"true\" / >"
        ],
        poprawna: "C",
        obraz: "43.jpg"
    },
    {
        id: 43,
        pytanie: "Który z wymienionych algorytmów działających na tablicy jednowymiarowej ma złożoność obliczeniową O(n2)?",
        odpowiedzi: [
            "Wyszukiwanie binarne.",
            "Wypisanie elementów.",
            "Sortowanie bąbelkowe.",
            "Sortowanie szybkie."
        ],
        poprawna: "C"
    },
    {
        id: 44,
        pytanie: "Stosowanie wzorca Obserwator w programowaniu aplikacji WEB ma na celu:",
        odpowiedzi: [
            "obsługę funkcji synchronicznych w kodzie aplikacji",
            "powiadamianie obiektów o zmianie stanu innych obiektów",
            "obserwowanie interakcji użytkownika i wysyłanie wyjątków",
            "dopasowanie interfejsu użytkownika do różnych typów użytkowników"
        ],
        poprawna: "B"
    },
    {
        id: 45,
        pytanie: "Pierwotnym przeznaczeniem środowisk IDE o nazwach: IntelliJ IDEA, Eclipse, NetBeans jest programowania w języku:",
        odpowiedzi: [
            "C#",
            "C++",
            "Python",
            "Java"
        ],
        poprawna: "D"
    },
    {
        id: 46,
        pytanie: "Która z cech przycisków typu Radio-button wyspecyfikowanych w prezentowanym fragmencie dokumentacji jest prawdziwa?",
        odpowiedzi: [
            "Etykieta (label) może być umieszczona tylko po przycisku radio-button.",
            "Przyciski radio-button są grupowane w elemencie o nazwie <radio-group>.",
            "Właściwość labelPosition przyjmuje jedną z dwóch wartości.",
            "Właściwość value radio grupy przechowuje tekst podpisu dla każdego radio-button."
        ],
        poprawna: "C",
        obraz: "47.jpg"
    },
    {
        id: 47,
        pytanie: "Którą nazwę kontrolki należy zapisać w pierwszej linii kodu, w miejscu <??? aby została ona wyrenderowana w przedstawiony sposób:",
        odpowiedzi: [
            "SeekBar",
            "Switch",
            "Spinner",
            "RatingBar"
        ],
        poprawna: "B",
        obraz: "48.jpg"
    },
    {
        id: 48,
        pytanie: "W przedstawionym kodzie zdefiniowano abstrakcyjną klasę figura i dziedziczącą po niej klasę prostokąta ze zdefiniowanymi polami i konstruktorami. Wskaż minimalną implementację sekcji /* metody klasy */ dla klasy Prostokat:",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "49.jpg"
    },
    {
        id: 49,
        pytanie: "Obsługę wyjątku, który wygenerowała aplikacja należy zdefiniować w sekcji",
        odpowiedzi: [
            "catch",
            "try",
            "throw",
            "finally"
        ],
        poprawna: "A"
    },
    {
        id: 50,
        pytanie: "W języku C# szablon List implementuje funkcjonalność listy. Z inicjalizacji obiektu wykaz wynika, że jego elementami są:",
        odpowiedzi: [
            "liczby całkowite",
            "liczby rzeczywiste",
            "elementy typu List",
            "elementy o niezdefiniowanym typie"
        ],
        poprawna: "A",
        obraz: "51.jpg"
    },
    {
        id: 51,
        pytanie: "Która metodyka zarządzania projektem jest optymalna, gdy zakres projektu w początkowej fazie nie jest do końca znany, wymagania mogą ulec zmianie w trakcie trwania projektu oraz mogą pojawić się nowe wymagania?",
        odpowiedzi: [
            "Model kaskadowy",
            "Model V",
            "Agile",
            "PRINCE2"
        ],
        poprawna: "C"
    },
    {
        id: 52,
        pytanie: "Aplikacja mobilna wyświetla listę, której każdy z elementów może być dotknięty palcem, aby wyświetlić jego szczegóły. Zdarzenie odpowiadające tej akcji to",
        odpowiedzi: [
            "value changed.",
            "button clicked.",
            "tapped.",
            "toggled."
        ],
        poprawna: "C"
    },
    {
        id: 53,
        pytanie: "Założenie programowania obiektowego polegające na ukrywaniu składowych klasy tak, aby były one dostępne tylko metodom tej klasy lub funkcjom zaprzyjaźnionym, to",
        odpowiedzi: [
            "dziedziczenie.",
            "wyjątki.",
            "polimorfizm.",
            "hermetyzacja."
        ],
        poprawna: "D"
    },
    {
        id: 54,
        pytanie: "Które zdarzenie jest wygenerowane, gdy nieaktywne okno lub kontrolka zostaje kliknięta myszą?",
        odpowiedzi: [
            "blur.",
            "keyup.",
            "validating.",
            "focus."
        ],
        poprawna: "D"
    },
    {
        id: 55,
        pytanie: "Przedstawiony fragment programu w języku C# generuje hasło. Wskaż zdanie PRAWDZIWE określające własność tego hasła:",
        odpowiedzi: [
            "Może zawierać małe i wielkie litery, cyfry oraz symbole.",
            "Może zawierać małe i wielkie litery oraz cyfry.",
            "Jest co najwyżej 7-znakowe, co wyznacza zmienna i.",
            "Jest 8 znakowe lub dłuższe oraz zawiera małe i wielkie litery oraz cyfry."
        ],
        poprawna: "B",
        obraz: "56.jpg"
    },
    {
        id: 56,
        pytanie: "Przedstawiony zapis w języku Python prezentuje:",
        odpowiedzi: [
            "strukturę",
            "kolejkę (LIFO)",
            "stos",
            "tablicę asocjacyjną (słownik)"
        ],
        poprawna: "D",
        obraz: "57.jpg"
    },
    {
        id: 57,
        pytanie: "Strategia budowania algorytmu poprzez podział na dwa lub więcej mniejszych podproblemów tak długo, aż fragmentu staną się proste do bezpośredniego rozwiązania jest metodą:",
        odpowiedzi: [
            "heurystyczną",
            "komiwojażera",
            "dziel i zwyciężaj",
            "najkrótszej ścieżki"
        ],
        poprawna: "C"
    },
    {
        id: 58,
        pytanie: "Z tabeli przedstawiającej złożoność obliczeniową algorytmów sortowania na dowolnym, dużym, zbiorze wejściowym (ponad 100 elementów) wynika, że najszybszą metodą jest algorytm sortowania:",
        odpowiedzi: [
            "przez scalanie",
            "bąbelkowego",
            "przez zliczanie",
            "kubełkowego"
        ],
        poprawna: "C",
        obraz: "59.jpg"
    },
    {
        id: 59,
        pytanie: "Zadaniem interpretera jest:",
        odpowiedzi: [
            "analizowanie składni całego programu przed jego uruchomieniem",
            "wykonanie skryptu instrukcja po instrukcji",
            "optymalizowanie większej części kodu, w celu szybszego wykonania",
            "przetłumaczenie kodu na kod maszynowy"
        ],
        poprawna: "B"
    },
    {
        id: 60,
        pytanie: "W tabeli przedstawiono doświadczenie zawodowe pracowników firmy IT. Do zbudowania aplikacji front-end powinien/powinna zostać przydzielony/przydzielona:",
        odpowiedzi: [
            "Ewa",
            "Anna",
            "Patryk",
            "Krzysztof"
        ],
        poprawna: "D",
        obraz: "61.jpg"
    },
    {
        id: 61,
        pytanie: "W przedstawionym fragmencie kodu Java wskaż nazwę zmiennej, która będzie w stanie przechowywać wartość 'T'",
        odpowiedzi: [
            "zm1",
            "zm2",
            "zm4",
            "zm3"
        ],
        poprawna: "D",
        obraz: "62.jpg"
    },
    {
        id: 63,
        pytanie: "Reguła zaangażowania i konsekwencji jako jedna z reguł wywierania wpływu wiąże się",
        odpowiedzi: [
            "z odwdzięczeniem się osobie, która wyświadczyła nam przysługę",
            "z sugerowaniem się opinią danej społeczności",
            "z doprowadzeniem spraw do końca",
            "z posłuszeństwem wobec autorytetów"
        ],
        poprawna: "C"
    },
    {
        id: 64,
        pytanie: "W językach C++ lub C# słowo kluczowe virtual można stosować do",
        odpowiedzi: [
            "pól klasy",
            "konstruktorów",
            "metod klasy",
            "funkcji zaprzyjaźnionych"
        ],
        poprawna: "C"
    },
    {
        id: 65,
        pytanie: "Narzędziem dedykowanym do implementacji aplikacji w środowisku WPf (ang. Windows Presentation Foundation) jest",
        odpowiedzi: [
            "Visual Studio",
            "NetBeans",
            "PyCharm",
            "XamarinStudio"
        ],
        poprawna: "A"
    },
    {
        id: 66,
        pytanie: "Przedstawiony symbol przedstawia",
        odpowiedzi: [
            "Creative Commons",
            "domenę publiczną",
            "prawa autorskie",
            "prawo cytatu"
        ],
        poprawna: "B",
        obraz: "67.jpg"
    },
    {
        id: 67,
        pytanie: "Zastosowanie modyfikatora abstract w definicji metody klasy oznacza, że",
        odpowiedzi: [
            "w klasie tej należy zaimplementować tę metodę",
            "nie można dziedziczyć po tej klasie",
            "w klasach dziedziczących nie wolno implementować tej metody",
            "klasa ta jest bazowa dla innych klas"
        ],
        poprawna: "D"
    },
    {
        id: 68,
        pytanie: "Wskaż rodzaj testów, które przeprowadza się podczas fazy tworzenia kodu źródłowego",
        odpowiedzi: [
            "testy wydajnościowe",
            "testy kompatybilności",
            "testy wdrożeniowe",
            "testy jednostkowe"
        ],
        poprawna: "D"
    },
    {
        id: 69,
        pytanie: "Jedną z wytycznych standardu WCAG 2.0 jest",
        odpowiedzi: [
            "unikanie zapisu informacji w formie uproszczonej",
            "zmniejszanie zawartości strony poprzez zaniechanie stosowania alternatyw tekstowych dla obrazów i video",
            "stosowanie kilku schematów kolorystycznych, w tym bardzo kontrastowego",
            "stosowanie jednego, odpowiednio dużego rozmiaru czcionki"
        ],
        poprawna: "C"
    },
    {
        id: 70,
        pytanie: "Wskaż niestabilny algorytm sortowania",
        odpowiedzi: [
            "sortowanie bąbelkowe",
            "sortowanie przez wstawianie",
            "sortowanie szybkie",
            "sortowanie przez zliczanie"
        ],
        poprawna: "C"
    },
    {
        id: 71,
        pytanie: "Przedstawiona deklaracja zmiennych zapisanych językiem JAVA obejmuje",
        odpowiedzi: [
            "dwie zmienne typu napisowego, dwie typu całkowitego i jedną logiczną",
            "dwie zmienne typu strukturalnego",
            "jedną zmienną typu napisowego, dwie typu całkowitego, jedną znakowego i jedną logiczną",
            "jedną zmienną typu napisowego, jedną typu rzeczywistego, jedną całkowitego, jedną znakowego i jedną logiczną"
        ],
        poprawna: "C",
        obraz: "72.jpg"
    },
    {
        id: 72,
        pytanie: "Z przedstawionej definicji pola licznik można wywnioskować, że",
        odpowiedzi: [
            "aktualna wartość pola jest wspólna dla wszystkich instancji klasy i nie może być modyfikowana",
            "aktualna wartość pola jest wspólna dla wszystkich instancji klasy",
            "pole jest powiązane z daną instancją klasy i jego wartość jest charakterystyczna tylko dla tej instancji",
            "pole nie może być modyfikowane w kodzie klasy"
        ],
        poprawna: "B",
        obraz: "73.jpg"
    },
    {
        id: 73,
        pytanie: "Aby w aplikacji Web zaimplementować mechanizm gromadzenia na komputerach użytkowników danych statystycznych, można zastosować",
        odpowiedzi: [
            "buforowanie",
            "ciasteczka",
            "sesje",
            "formularze"
        ],
        poprawna: "B"
    },
    {
        id: 74,
        pytanie: "Zakładając, że przedstawiona hierarchia klas reprezentuje figury geometryczne została prawidłowo zaimplementowana funkcjonalnie, a każda z możliwych figur zawiera metodę liczenia pola, to sposób deklaracji metody liczPole() wskazuje, że znajduje się ona w klasie",
        odpowiedzi: [
            "figura",
            "trapez",
            "czworokąt",
            "trójkąt"
        ],
        poprawna: "A",
        obraz: "75.jpg"
    },
    {
        id: 75,
        pytanie: "Z przedstawionego fragmentu kodu można wywnioskować, że element o nazwie rysunek jest",
        odpowiedzi: [
            "konstruktorem",
            "polem klasy",
            "metodą klasy",
            "obiektem"
        ],
        poprawna: "C",
        obraz: "76.jpg"
    },
    {
        id: 76,
        pytanie: "W aplikacji desktopowej zdefiniowano listę rozwijaną i przypisano cztery funkcje obsługujące zdarzenia tej kontrolki. Który komunikat zostanie wyświetlony w momencie wyboru w liście?",
        odpowiedzi: [
            "Zdarzenie 3",
            "Zdarzenie 4",
            "Zdarzenie 1",
            "Zdarzenie 2"
        ],
        poprawna: "C",
        obraz: "77.jpg"
    },
    {
        id: 77,
        pytanie: "Programista chce dobrać najszybciej działający algorytm przetwarzania danych w swojej aplikacji. Na podstawie przedstawionej w tabeli złożoności obliczeniowej, należy wybrać algorytm numer",
        odpowiedzi: [
            "2 lub 3",
            "3",
            "4",
            "1 lub 5"
        ],
        poprawna: "C",
        obraz: "78.jpg"
    },
    {
        id: 78,
        pytanie: "Frameworkiem umożliwiającym programowanie aplikacji desktopowych jest",
        odpowiedzi: [
            "WPF",
            "Symfony",
            "Xamarin",
            "Angular"
        ],
        poprawna: "A"
    },
    {
        id: 79,
        pytanie: "Którą strukturę danych reprezentuje przedstawiony kod zapisany w języku C#?",
        odpowiedzi: [
            "tablicę jednowymiarową",
            "tablicę dwuwymiarową",
            "stos",
            "listę"
        ],
        poprawna: "B",
        obraz: "80.jpg"
    },
    {
        id: 80,
        pytanie: "Przedstawiony listing zawiera pola pewnej klasy. Które pole (pola) są dostępne z poziomu programu głównego poprzez wywołanie postaci nazwaObiektu.nazwaPola?",
        odpowiedzi: [
            "p1",
            "p3 i p4",
            "tylko p3",
            "tylko p3, p4, p5"
        ],
        poprawna: "C",
        obraz: "81.jpg"
    },
    {
        id: 81,
        pytanie: "Z której kolekcji należy skorzystać, aby przechowywać dane związane z elementem interfejsu użytkownika tak, aby element był ten informowany przez kolekcję o dodaniu, usunięciu lub zmianie jej elementu",
        odpowiedzi: [
            "ObservableCollection",
            "KeyedCollection",
            "Collection",
            "ReadOnlyCollection"
        ],
        poprawna: "A"
    },
    {
        id: 82,
        pytanie: "Na funkcjonalnie równoważnych sobie listingach fragmentów aplikacji Angular i React.js jest utworzona lista punktowana, która zawiera",
        odpowiedzi: [
            "tyle elementów, ile jest elementów w tablicy books, w każdym punkcie listy jest jeden element tablicy",
            "tyle elementów, ile jest elementów w tablicy books, w każdym punkcie listy jest element o treści {book}",
            "tylko jeden element o treści Harry Potter, Hobbit, Władca pierścieni",
            "tylko jeden element o treści Harry Potter"
        ],
        poprawna: "A",
        obraz: "83.jpg"
    },
    {
        id: 83,
        pytanie: "W środowisku do tworzenia aplikacji, którego menu zostało przedstawione, aby usunąć wszystkie pliki pośrednie i wyjściowe projektu należy wybrać opcję",
        odpowiedzi: [
            "Run Code Analysis on Solution",
            "Batch Build",
            "Build Solution",
            "Clean Solution"
        ],
        poprawna: "D",
        obraz: "84.jpg"
    },
    {
        id: 84,
        pytanie: "Pierwszym etapem tworzenia aplikacji jest",
        odpowiedzi: [
            "utworzenie przypadków testowych",
            "projekt architektury systemu",
            "dobór zestawu typów i zmiennych dla aplikacji",
            "analiza wymagań klienta"
        ],
        poprawna: "D"
    },
    {
        id: 85,
        pytanie: "Według dokumentacji menu Navbar z biblioteki Bootstrap 4, aby utworzyć menu należy zdefiniować listę",
        odpowiedzi: [
            "< ul class=\"a, .nav-item\" > ... < /ul>",
            "< ol class=\"navbar-nav\" > ... < /ol>",
            "< ol class=\"a, .nav-item\" > ... < /ol>",
            "< ul class=\"navbar-nav\" > ... < /ul>"
        ],
        poprawna: "D",
        obraz: "86.jpg"
    },
    {
        id: 87,
        pytanie: "Dziedziczenie jest stosowane, gdy istnieje potrzeba",
        odpowiedzi: [
            "asynchronicznej obsługi długotrwałych operacji",
            "definicji klasy bardziej specjalistycznej niż już zdefiniowana",
            "stosowania wartości stałych, niezmiennych przez czas trwania aplikacji",
            "zdefiniowania zakresu widzialności metod i pól jednej klasy"
        ],
        poprawna: "B"
    },
    {
        id: 88,
        pytanie: "Wskaż frazę, która w języku angielskim oznacza \"testy wydajnościowe\"",
        odpowiedzi: [
            "unit testing",
            "performance testing",
            "integration testing",
            "security testing"
        ],
        poprawna: "B"
    },
    {
        id: 89,
        pytanie: "Kod w języku JavaScript jest",
        odpowiedzi: [
            "prototypem metody klasy",
            "definicją zmiennej typu tablicowego",
            "prototypem interfejsu",
            "definicją funkcji strzałkowej"
        ],
        poprawna: "D",
        obraz: "90.jpg"
    },
    {
        id: 90,
        pytanie: "Teoria ustalania celów opisuje właściwie określony cel jako SMART, od pierwszych liter słów: specyficzny, Mierzalny, Ambitny, Realny i Terminowy. Wskaż cel, którego osiągnięcie wymaga wysiłku i stanowi wyzwanie dla pracownika",
        odpowiedzi: [
            "Mierzalny",
            "Ambitny",
            "Terminowy",
            "Specyficzny"
        ],
        poprawna: "B"
    },
    {
        id: 91,
        pytanie: "Co można obliczyć za pomocą przedstawionego algorytmu działającego na liczbach całkowitych dodatnich?",
        odpowiedzi: [
            "sumę cyfr wczytanej liczby",
            "liczbę cyfr we wczytanej liczbie",
            "największy wspólny dzielnik wczytanej liczby",
            "sumę wczytanych liczb"
        ],
        poprawna: "B",
        obraz: "92.jpg"
    },
    {
        id: 92,
        pytanie: "Którego kodu może dotyczyć przedstawiona treść wygenerowana podczas uruchomienia programu Java>",
        odpowiedzi: [
            "Kodu 4",
            "Kodu 2",
            "Kodu 3",
            "Kodu 1"
        ],
        poprawna: "A",
        obraz: "93.jpg"
    },
    {
        id: 93,
        pytanie: "Wskaż przykład wypadku przy pracy",
        odpowiedzi: [
            "oparzenie ręki, które nastąpiło w czasie nieobowiązkowego doszkalania w czasie wolnym pracownika",
            "złe samopoczucie wywołane przewlekła chorobą pracownika, które nastąpiło w miejscu pracy",
            "uraz stawu skokowego, który nastąpił podczas bezpośredniej drogi do pracy",
            "złamanie nogi podczas urlopu wypoczynkowego udzielonego przez pracodawcę"
        ],
        poprawna: "C"
    },
    {
        id: 94,
        pytanie: "Która dokumentacja funkcji jest prawidłowa dla przedstawionego kodu źródłowego?",
        odpowiedzi: [
            "Dokumentacja 1",
            "Dokumentacja 3",
            "Dokumentacja 4",
            "Dokumentacja 2"
        ],
        poprawna: "D",
        obraz: "95.jpg"
    },
    {
        id: 95,
        pytanie: "Przedstawiony zbiór operatorów należy do grupy operatorów",
        odpowiedzi: [
            "arytmetycznych",
            "przypisania",
            "logicznych",
            "porównania"
        ],
        poprawna: "A",
        obraz: "96.jpg"
    },
    {
        id: 96,
        pytanie: "Który typ testów może być opisany przedstawionym scenariuszem",
        odpowiedzi: [
            "testy wydajnościowe",
            "testy jednostkowe",
            "testy kompatybilności",
            "testy funkcjonalne"
        ],
        poprawna: "D",
        obraz: "97.jpg"
    },
    {
        id: 97,
        pytanie: "Którą wartość zwróci funkcja zapisana językiem C++, jeżeli jej parametr wejściowym jest tablica utworzona w następujący sposób: int tablica[6] = {3,4,2,4,10,0);?",
        odpowiedzi: [
            "10",
            "0",
            "23",
            "20"
        ],
        poprawna: "C",
        obraz: "98.jpg"
    },
    {
        id: 98,
        pytanie: "Aby zaimplementować w aplikacji jednokierunkową funkcję skrótu tzw. funkcję haszującą można posłużyć się algorytmem",
        odpowiedzi: [
            "DES",
            "RSA",
            "AES",
            "MD5"
        ],
        poprawna: "D"
    },
    {
        id: 99,
        pytanie: "Liczba A4 zapisana systemem heksadecymalnym ma postać binarną",
        odpowiedzi: [
            "1010100",
            "10100100",
            "10100010",
            "1011100"
        ],
        poprawna: "B"
    },
    {
        id: 100,
        pytanie: "Wskaż uproszczony kod XAML dla kontrolek w przedstawionym oknie dialogowym",
        odpowiedzi: [
            "Kod 3",
            "Kod 1",
            "Kod 2",
            "Kod 4"
        ],
        poprawna: "C",
        obraz: "101.jpg"
    },
    {
        id: 101,
        pytanie: "Przedstawiony kod napisany w języku XML/XAML definiuje",
        odpowiedzi: [
            "stepper",
            "listę rozwijaną",
            "suwak",
            "przełącznik"
        ],
        poprawna: "D",
        obraz: "102.jpg"
    },
    {
        id: 102,
        pytanie: "Przedstawiony opis licencji w ramce wskazuje, że jest to licencja",
        odpowiedzi: [
            "OEM",
            "Open Source",
            "Freeware",
            "Shareware"
        ],
        poprawna: "B",
        obraz: "103.jpg"
    },
    {
        id: 103,
        pytanie: "W wyniku wykonania przedstawionego kodu w konsoli wyświetlona zostanie liczba",
        odpowiedzi: [
            "108",
            "115",
            "73",
            "0"
        ],
        poprawna: "B",
        obraz: "104.jpg"
    },
    {
        id: 104,
        pytanie: "Klasa w programowaniu obiektowym to",
        odpowiedzi: [
            "zmienna",
            "wskaźnik",
            "instrukcja",
            "typ danych"
        ],
        poprawna: "D"
    },
    {
        id: 105,
        pytanie: "Przedstawiony kod funkcji \"wykonaj()\" sprawdza, czy",
        odpowiedzi: [
            "wszystkie elementy tablicy są równe wartości określonego elementu (argument)",
            "określony element (argument) znajduje się w tablicy zawierającej liczby całkowite",
            "w tablicy liczb całkowitych znajdują się tylko wartości 4, 15, -2, 9, 202",
            "określony element (argument) jest wartością z zakresu od 0 do 4"
        ],
        poprawna: "B",
        obraz: "106.jpg"
    },
    {
        id: 106,
        pytanie: "Poprawna definicja konstruktora przedstawionej klasy w języku C++ może wyglądać jak w",
        odpowiedzi: [
            "Deklaracji 1",
            "Deklaracji 2",
            "Deklaracji 3",
            "Deklaracji 4"
        ],
        poprawna: "A",
        obraz: "107.jpg"
    },
    {
        id: 107,
        pytanie: "Wywołanie funkcji zamien napisanej w języku C++ może wyglądać następująco",
        odpowiedzi: [
            "zamien(12, 34);",
            "zamien(*a, *b); //a,b - zmienne typu całkowitego",
            "zamien(&a, &b); //x,y - zmienne typu całkowitego",
            "zamien(m,n); //m,n - zmienne typu całkowitego"
        ],
        poprawna: "C",
        obraz: "108.jpg"
    },
    {
        id: 108,
        pytanie: "W programie napisanym w języku C++ należy utworzyć zmienną, która przechowa liczbę rzeczywistą. Określ typ tej zmiennej",
        odpowiedzi: [
            "int",
            "double",
            "number",
            "numeric"
        ],
        poprawna: "B"
    },
    {
        id: 109,
        pytanie: "Przedstawiony fragment opisuje funkcję resize języka C++. Funkcja ta zmniejszy długość elementu string, gdy wartość parametru",
        odpowiedzi: [
            "c jest mniejsza niż bieżąca długość łańcucha",
            "n jest mniejsza niż bieżąca długość łańcucha",
            "n jest większa niż bieżąca długość łańcucha",
            "c jest większa niż bieżąca długość łańcucha"
        ],
        poprawna: "B",
        obraz: "110.jpg"
    },
    {
        id: 110,
        pytanie: "Co stanie się po wykonaniu przedstawionego fragmentu kodu napisanego w języku C++?",
        odpowiedzi: [
            "do tablicy liczby, na jej początku, dodawane są kolejne wartości",
            "z tablicy liczby usuwane są elementy, za każdym obiegiem pętli usuwany jest element z jej końca",
            "z tablicy liczby usuwane są elementy, za każdym obiegiem pętli usuwany jest element z jej początku",
            "do tablicy liczby, na jej końcu, dodawane są kolejne wartości"
        ],
        poprawna: "D",
        obraz: "111.jpg"
    },
    {
        id: 111,
        pytanie: "Na rysunku przedstawiony jest fragment schematu blokowego pewnego algorytmu. Ile razy zostanie sprawdzony warunek n<7?",
        odpowiedzi: [
            "8",
            "5",
            "7",
            "6"
        ],
        poprawna: "D",
        obraz: "112.jpg"
    },
    {
        id: 112,
        pytanie: "Które narzędzie programistyczne służy do tłumaczenia kodu źródłowego do postaci zrozumiałej dla komputera, sprawdza wszystkie instrukcje kodu, czy nie występują w nich błędy, a następnie tworzy wykonywalny moduł?",
        odpowiedzi: [
            "interpreter",
            "kompilator",
            "debugger",
            "dekompilator"
        ],
        poprawna: "B"
    },
    {
        id: 113,
        pytanie: "Przedstawiona dokumentacja opisuje algorytm sortowania",
        odpowiedzi: [
            "szybkiego (Quicksort)",
            "przez wybór",
            "przez wstawianie",
            "bąbelkowe"
        ],
        poprawna: "D",
        obraz: "114.jpg"
    },
    {
        id: 114,
        pytanie: "Pracując w grupie i dbając o jej poprawne funkcjonowanie, nie należy",
        odpowiedzi: [
            "wzajemnie się motywować",
            "rzetelnie i na czas wywiązywać się ze swoich zobowiązań",
            "dbać wyłącznie o własny interes",
            "brać odpowiedzialność za podejmowane działania"
        ],
        poprawna: "C"
    },
    {
        id: 115,
        pytanie: "Który blok kodu zawiera przykład użycia rekurencji?",
        odpowiedzi: [
            "Blok 1",
            "Blok 3",
            "Blok 4",
            "Blok 2"
        ],
        poprawna: "A",
        obraz: "116.jpg"
    },
    {
        id: 116,
        pytanie: "Programy działające w systemach Android wykorzystują do interakcji z użytkownikiem klasę",
        odpowiedzi: [
            "Activity",
            "Screens",
            "Fragments",
            "Windows"
        ],
        poprawna: "A"
    },
    {
        id: 117,
        pytanie: "W wyniku wykonania przedstawionego kodu napisanego w języku C++ w konsoli zostanie wyświetlony ciąg liczb",
        odpowiedzi: [
            "1 2 3 4 5 6",
            "2 3 4 5 6 7",
            "1 2 3 4 5",
            "2 3 4 5 6"
        ],
        poprawna: "D",
        obraz: "118.jpg"
    },
    {
        id: 118,
        pytanie: "Do form przekazu werbalnego należy",
        odpowiedzi: [
            "mówienie",
            "wyraz twarzy",
            "pozycja ciała",
            "gestykulacja"
        ],
        poprawna: "A"
    },
    {
        id: 119,
        pytanie: "Przy pomocy którego obiektu można utworzyć kontrolkę wskazaną strzałką na obrazie?",
        odpowiedzi: [
            "Windows - dla biblioteki WPF; JFrame - dla biblioteki Swing",
            "Text - dla biblioteki WPF; JText - dla biblioteki Swing",
            "Box - dla biblioteki WPF; JField - dla biblioteki Swing",
            "TextBox - dla biblioteki WPF; JTextField - dla biblioteki Swing"
        ],
        poprawna: "D",
        obraz: "120.jpg"
    },
    {
        id: 120,
        pytanie: "Co zostanie wyświetlone po wykonaniu przedstawionego kodu zapisanego w języku C++?",
        odpowiedzi: [
            "Pochodna. Pochodna.",
            "Bazowa. Pochodna.",
            "Pochodna. Bazowa.",
            "Bazowa. Bazowa."
        ],
        poprawna: "A",
        obraz: "121.jpg"
    },
    {
        id: 121,
        pytanie: "W przedstawionym kodzie zostało zaprezentowane jedno z podstawowych założeń programowania obiektowego. Jest to",
        odpowiedzi: [
            "polimorfizm",
            "abstrakcja",
            "dziedziczenie",
            "hermetyzacja"
        ],
        poprawna: "C",
        obraz: "122.jpg"
    },
    {
        id: 122,
        pytanie: "Framework Angular został napisany w języku",
        odpowiedzi: [
            "Postscript",
            "PHP",
            "Typescript",
            "C#"
        ],
        poprawna: "C"
    },
    {
        id: 123,
        pytanie: "Jedną z możliwości testów funkcjonalnych wykonywanych na aplikacji webowej jest sprawdzenie",
        odpowiedzi: [
            "bezpieczeństwa aplikacji",
            "stopnia optymalizacji kodu aplikacji",
            "wydajności aplikacji",
            "poprawności wyświetlanych elementów aplikacji"
        ],
        poprawna: "D"
    },
    {
        id: 124,
        pytanie: "Wyróżnione elementy w przedstawionych ramkach mają za zadanie",
        odpowiedzi: [
            "pobranie nazwy obiektu reprezentującego okno aplikacji",
            "ustawienie nazwy obiektu reprezentującego okno aplikacji",
            "ustawienie tytułu okna na \"Tekst\"",
            "zapisanie tytułu okna do obiektu Tekst"
        ],
        poprawna: "C",
        obraz: "125.jpg"
    },
    {
        id: 125,
        pytanie: "Jaki będzie efekt działania przedstawionych dwóch równoważnych funkcjonalnie fragmentów kodu źródłowego?",
        odpowiedzi: [
            "wyświetlony na stronie tekst w akapicie: \"Egzamin zawodowy\"",
            "wyświetlony na stronie tekst w nagłówku: \"Egzamin zawodowy\"",
            "nadany tytuł każdego elementu HTML: \"Egzamin zawodowy\"",
            "nadany tytuł strony: \"Egzamin zawodowy\""
        ],
        poprawna: "B",
        obraz: "126.jpg"
    },
    {
        id: 126,
        pytanie: "Jaki kwalifikator należy nadać metodzie, aby dostęp do niej był możliwy tylko z ciała tej klasy i klas potomnych,a jednocześnie, żeby ta metoda nie była dostępna w dowolnej funkcji?",
        odpowiedzi: [
            "public",
            "private",
            "reinterpret_cast",
            "protected"
        ],
        poprawna: "D"
    },
    {
        id: 127,
        pytanie: "Co zostanie zapisane w etykiecie label po wykonaniu przedstawionego kodu, uruchomionego po kliknięciu w przycisk okna aplikacji?",
        odpowiedzi: [
            "suma liczb parzystych z przedziału od 0 do 100",
            "liczby parzyste z przedziału od 0 do 100",
            "suma liczb z przedziału od 0 do 100",
            "liczby z przedziału od 0 do 100"
        ],
        poprawna: "A",
        obraz: "128.jpg"
    },
    {
        id: 128,
        pytanie: "Szkodliwe oprogramowanie, zaprojektowane w celu zapewnienia hakerom uprawnień administracyjnych do komputera ofiary bez jej wiedzy, to",
        odpowiedzi: [
            "wirus",
            "keylogger",
            "robak",
            "rootkit"
        ],
        poprawna: "D"
    },
    {
        id: 129,
        pytanie: "Po wykonaniu przedstawionego kodu zapisanego w języku C++ na ekranie konsoli zostanie wyświetlony tekst:",
        odpowiedzi: [
            "\"%s dodawania: %d + %.2f=%f\", \"Wynik\", a, b, w",
            "dodawania: 5+5.12345=10.123450 Wynik",
            "Wynik dodawania: 5+5.12=10.123450",
            "\"%s dodawania: %d + %.2f = %f\", \"Wynik\", 5, 5.12345, 10.123450"
        ],
        poprawna: "C",
        obraz: "130.jpg"
    },
    {
        id: 130,
        pytanie: "Jaki ciąg tekstowy zostanie wyświetlony po wykonaniu jednego z przedstawionych kodów?",
        odpowiedzi: [
            "{{2+2}}",
            "{2+2}",
            "4",
            "{4}"
        ],
        poprawna: "C",
        obraz: "131.jpg"
    },
    {
        id: 131,
        pytanie: "W języku Java wyjątek ArrayIndexOutOfBoundsException może pojawić się w sytuacji odwołania się do elementu tablicy, którego",
        odpowiedzi: [
            "wartość jest większa niż rozmiar tablicy",
            "indeks jest równy lub większy od rozmiaru tablicy",
            "indeks jest z przedziału od 0 do n-1, gdzie n jest rozmiarem tablicy",
            "wartość jest większa niż jego indeks"
        ],
        poprawna: "B"
    },
    {
        id: 132,
        pytanie: "Resuscytacja krążeniowo-oddechowa polega na wykonywaniu",
        odpowiedzi: [
            "10 uciśnięć klatki piersiowej i 5 oddechów ratowniczych",
            "15 uciśnięć klatki piersiowej i 3 oddechów ratowniczych",
            "30 uciśnięć klatki piersiowej i 2 oddechów ratowniczych",
            "20 uciśnięć klatki piersiowej i 1 oddechu ratowniczego"
        ],
        poprawna: "C"
    },
    {
        id: 134,
        pytanie: "Która metoda biblioteki jQuery języka JavaScript odpowiada za naprzemienne dodawanie i usuwanie klasy elementu?",
        odpowiedzi: [
            ".toggleClass()",
            ".switchClass()",
            ".changeClass()",
            ".bingClass()"
        ],
        poprawna: "A"
    },
    {
        id: 135,
        pytanie: "Framework to",
        odpowiedzi: [
            "platforma programistyczna dostarczająca pewne komponenty i narzucająca pewien szkielet lub metodykę tworzenia aplikacji",
            "zbiór podprogramów, danych i złożonych typów danych wykorzystywanych w kodzie źródłowym aplikacji",
            "oprogramowanie, które metodą drag and drop umożliwia utworzenie interfejsu aplikacji",
            "narzędzie służące do tworzenia, modyfikowania, testowania i uruchamiania oprogramowania"
        ],
        poprawna: "A"
    },
    {
        id: 136,
        pytanie: "Diagram Gantta jest stosowany w celu",
        odpowiedzi: [
            "obrazowania funkcjonalności systemu",
            "szczegółowej analizy czasowo-kosztowej projektu",
            "planowania i zarządzania projektem",
            "wizualizacji zależności między elementami systemów"
        ],
        poprawna: "C"
    },
    {
        id: 137,
        pytanie: "Jednym z zadań widoku we wzorcu MVVM (Model_View-Viewmodel) jest",
        odpowiedzi: [
            "obsługa logiki aplikacji - zawiera implementację algorytmów",
            "obsługa interakcji użytkownika, utworzenie interfejsu użytkownika",
            "udostępnianie danych dla widoku oraz wymiana danych z modelem",
            "przechowywanie pobranych oraz przetworzonych danych"
        ],
        poprawna: "B"
    },
    {
        id: 138,
        pytanie: "Jednostką zalecaną przy tworzeniu układu interfejsu aplikacji jest",
        odpowiedzi: [
            "mm",
            "px",
            "dp",
            "pt"
        ],
        poprawna: "C"
    },
    {
        id: 139,
        pytanie: "Które logo przedstawia narzędzie, którego nie wykorzystuje się do tworzenia aplikacji mobilnych",
        odpowiedzi: [
            "4",
            "1",
            "3",
            "2"
        ],
        poprawna: "D",
        obraz: "140.jpg"
    },
    {
        id: 140,
        pytanie: "Frameworki/biblioteki typowe dla aplikacji webowych to",
        odpowiedzi: [
            "ASP.NET Core, jQuery, Joomla!, Wordpress, Angular",
            "jquery, Joomla!, Wordpress, android Studio, Xamarin",
            "ASP.NET Core, Django, Angular, React.js, Node.js",
            "Visual Studio, Eclipse, angular, React.js, Node.js"
        ],
        poprawna: "C"
    },
    {
        id: 141,
        pytanie: "Jak zaimportować tylko komponent z biblioteki React?",
        odpowiedzi: [
            "import React.Component from 'react'",
            "import [ Component ] from 'react'",
            "import Component from 'react'",
            "import { Component } from 'react'"
        ],
        poprawna: "D"
    },
    {
        id: 142,
        pytanie: "W wyniku wykonania przedstawionego kodu zostaną wypisane",
        odpowiedzi: [
            "elementy tablicy o następujących indeksach: 1, 2, 4, 5, 7, 8",
            "elementy spod indeksów tablicy podzielnych przez 3",
            "wszystkie elementy tablicy, które są podzielne przez 3",
            "wszystkie nieparzyste elementy tablicy"
        ],
        poprawna: "A",
        obraz: "142.jpg"
    },
    {
        id: 143,
        pytanie: "W firmie IT obowiązują przedstawione wytyczne dotyczące zarządzania projektami, Wynika z nich, że firma stosuje model zarządzania",
        odpowiedzi: [
            "prototypowy",
            "zwinny",
            "kaskadowy",
            "spiralny"
        ],
        poprawna: "B",
        obraz: "143.jpg"
    },
    {
        id: 144,
        pytanie: "Aby zastosować framework Django należy programować w języku",
        odpowiedzi: [
            "C#",
            "JavaScript",
            "Python",
            "Java"
        ],
        poprawna: "C"
    },
    {
        id: 145,
        pytanie: "Wskaż wspólną cechę wszystkich kontrolek przedstawionych w ramce",
        odpowiedzi: [
            "wszystkie są widoczne",
            "mają tło tego samego koloru",
            "mają ten sam kolor czcionki",
            "są w nich ustawione te same wartości domyślne"
        ],
        poprawna: "B",
        obraz: "145.jpg"
    },
    {
        id: 146,
        pytanie: "Aby programować aplikacje desktopowe za pomocą języka Java można wybrać środowisko",
        odpowiedzi: [
            "NetBeans",
            "SharpDevelop",
            "PyCharm",
            "Ms Visual Studio"
        ],
        poprawna: "A"
    },
    {
        id: 147,
        pytanie: "Przedstawiona pętla wykorzystuje obiekt random do",
        odpowiedzi: [
            "wielokrotnego losowania liczby, aby utworzyć napis składający się z liczb pseudolosowych",
            "wypełnienia tablicy wynik liczbami pseudolosowymi",
            "pojedynczego wylosowania znaku z podanej puli znaków",
            "wygenerowania 8-znakowego losowego napisu składającego się z liter"
        ],
        poprawna: "C",
        obraz: "147.jpg"
    },
    {
        id: 148,
        pytanie: "Ryzykiem zawodowym nazywa się",
        odpowiedzi: [
            "zagrożenie wypadkowe występujące na stanowisku pracy",
            "skutki zagrożeń wypadkowych wystepujących na stanowisku pracy",
            "ciężkość następstw niepożądanych zdarzeń związanych z wykonywaną pracą",
            "prawdopodobieństwo wystąpienia niepożądanych zdarzeń związanych z wykonywaną pracą, powodujących straty, w szczególności wystąpienia u pracowników niekorzystnych skutków zdrowotnych"
        ],
        poprawna: "D"
    },
    {
        id: 149,
        pytanie: "Który system operacyjny jest natywnym systemem do tworzenia aplikacji mobilnych w języku Swift?",
        odpowiedzi: [
            "iOS",
            "LG UX",
            "Android",
            "Windows UWP"
        ],
        poprawna: "A"
    },
    {
        id: 150,
        pytanie: "Które wyrażenie logiczne należy zastosować, aby sprawdzić czy zmienna x przechowuje wartości ujemne albo z przedziału (10, 100)",
        odpowiedzi: [
            "x > 10 || x < 100 || x < 0",
            "(x > 10 && x < 100) || x < 0",
            "x > 10 || x < 100 || x < 0",
            "(x > 10 || x < 100) && x < 0"
        ],
        poprawna: "B"
    },
    {
        id: 151,
        pytanie: "Odpowiednikami zmiennych i funkcji programowania strukturalnego są w programowaniu obiektowym",
        odpowiedzi: [
            "pola i metody",
            "metody statyczne i abstrakcyjne",
            "hermetyzacja i dziedziczenia",
            "pola i kwalifikatory dostępu"
        ],
        poprawna: "A"
    },
    {
        id: 152,
        pytanie: "Za pomocą React.js i Angular zapisano funkcjonalnie równoważne kody źródłowe. Aby w metodzie handleSubmit można było wyświetlić zawartość kontrolki input w miejscu oznaczonym ??? należy odnieść się do atrybutu o nazwie",
        odpowiedzi: [
            "nazwa4",
            "nazwa2",
            "nazwa1",
            "nazwa3"
        ],
        poprawna: "C",
        obraz: "152.jpg"
    },
    {
        id: 153,
        pytanie: "Który kod jest implementacją przedstawionego fragmentu algorytmu?",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "C",
        obraz: "153.jpg"
    },
    {
        id: 154,
        pytanie: "Dla podanego algorytmu złożoność obliczeniowa jest równa",
        odpowiedzi: [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(n2)"
        ],
        poprawna: "B",
        obraz: "154.jpg"
    },
    {
        id: 155,
        pytanie: "Wskaż kod funkcjonalnie równorzędny przedstawionemu",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "B",
        obraz: "155.jpg"
    },
    {
        id: 156,
        pytanie: "Środowiskiem dedykowanym do tworzenia aplikacji mobilnych dla urządzeń Apple i wykorzystującym do tego celu różne języki programowania w tym Java i Objective C jest",
        odpowiedzi: [
            "Android Studio",
            "NetBeans",
            "XCode",
            "React Native"
        ],
        poprawna: "C"
    },
    {
        id: 157,
        pytanie: "Przedstawiony symbol ochrony przeciwpożarowej oznacza",
        odpowiedzi: [
            "tablicę rozdzielczą",
            "alarm pożarowy",
            "wyłącznik prądu",
            "stanowisko zdalnego uwalniania"
        ],
        poprawna: "B",
        obraz: "157.jpg"
    },
    {
        id: 158,
        pytanie: "Systemem kontroli wersji jest",
        odpowiedzi: [
            "Trello",
            "Jira",
            "Git",
            "Bugzilla"
        ],
        poprawna: "C"
    },
    {
        id: 159,
        pytanie: "Sumą liczb binarnych 1101 i 1001 jest",
        odpowiedzi: [
            "1110",
            "10111",
            "1001",
            "10110"
        ],
        poprawna: "D"
    },
    {
        id: 160,
        pytanie: "Wskaż cechę charakterystyczną dla metody abstrakcyjnej",
        odpowiedzi: [
            "jest zawsze prywatna",
            "jest pusta w klasach potomnych",
            "nie jest zaimplementowana w klasie bazowej",
            "jest pusta w klasie bazowej"
        ],
        poprawna: "C"
    },
    {
        id: 161,
        pytanie: "Błędy interpretracji kodu wytworzonego za pomocą środowiska React.js lub Angular można śledzić przy pomocy",
        odpowiedzi: [
            "wbudowanego w środowisko debuggera",
            "konsoli przeglądarki internetowej",
            "narzędzi zainstalowanych po stronie serwera aplikacji",
            "kompilatora języka JavaScript"
        ],
        poprawna: "B"
    },
    {
        id: 162,
        pytanie: "W standardzie dokumentacji testów oprogramowania IEEE 829-1998 jest opisany dokument, który zawiera informacje o tym, które przypadki testowania zostały użyte, kto je użył i czy powiodły się. Jest to",
        odpowiedzi: [
            "Test Plan",
            "Test Procedure Specification",
            "Test Log",
            "Test Summary Report"
        ],
        poprawna: "C"
    },
    {
        id: 163,
        pytanie: "Klasie o nazwie samochod nadano cechy: marka, rocznik, parametry[]. Cechy te należy zdefiniować jako",
        odpowiedzi: [
            "funckje",
            "pola",
            "interfejsy",
            "metody"
        ],
        poprawna: "B"
    },
    {
        id: 164,
        pytanie: "Błąd kompilacji \"incompatible types\" może zostać wygenerowany, gdy",
        odpowiedzi: [
            "funkcja przyjmuje jako argument całkowitą, a wywołana została z napisem jako parametr",
            "popełniono błąd podczas deklaracji zmiennej, zastosowano typ, który nie istnieje",
            "zmiennej typu int została przypisana wartość 243",
            "funkcja zwraca typ void, a podczas wywołania nie jest przypisana do żadnej zmiennej"
        ],
        poprawna: "A"
    },
    {
        id: 165,
        pytanie: "Programista aplikacji mobilnych chce przekwalifikować się na pracownika Full-Stack Developer. Wskaż kurs, który powinien wybrać, aby było to możliwe",
        odpowiedzi: [
            "Mastering Cross-platform Developping",
            "Ultimate C# Serier from Beginner to Advanced",
            "Complete JavaScript React, SQL, Node.js Cource",
            "Raster and Vector Graphics with Adobe"
        ],
        poprawna: "C"
    },
    {
        id: 166,
        pytanie: "Oznaczeniem komentarza wieloliniowego w języku Java jest",
        odpowiedzi: [
            "/* ... */",
            "<!-- ... -->",
            "// ... //",
            "\"\"\" ... \"\"\""
        ],
        poprawna: "A"
    },
    {
        id: 167,
        pytanie: "Wskaż numeryczne typy stałoprzecinkowe",
        odpowiedzi: [
            "float, double",
            "int, short, long",
            "bool char, string",
            "long long, long double"
        ],
        poprawna: "B"
    },
    {
        id: 168,
        pytanie: "W którym języku programowania kod źródłowy programu, przed jego uruchomieniem, musi być skompilowany do kodu maszynowego konkretnej architektury procesora?",
        odpowiedzi: [
            "PHP",
            "Perl",
            "Java",
            "C++"
        ],
        poprawna: "D"
    },
    {
        id: 169,
        pytanie: "Projektując aplikację zorientowaną obiektowo należy założyć, że program będzie sterowany za pomocą",
        odpowiedzi: [
            "modułów z zawartymi w nich funkcjami i zmiennymi globalnymi",
            "pętli dyspozytora, która w zależności od zdarzenia wywoła odpowiednią funkcję",
            "definicji warunków końcowego rozwiązania",
            "zbioru instancji klas współpracujących ze sobą"
        ],
        poprawna: "D"
    },
    {
        id: 170,
        pytanie: "Które stwierdzenie dotyczące pojęcia obiekt jest prawdziwe?",
        odpowiedzi: [
            "obiekt jest typem złożonym",
            "obiekt jest instancją klasy",
            "obiekt i klasa są tożsame",
            "obiekt umożliwia zdefiniowanie klasy"
        ],
        poprawna: "B"
    },
    {
        id: 171,
        pytanie: "Która cecha wyróżnia framework od biblioteki?",
        odpowiedzi: [
            "Framework determinuje architekturę aplikacji i dostarcza jej szkielet",
            "Framework dostarcza funkcje użytkowe w danej dziedzinie problemu",
            "Framework jest zbiorem funkcjonalności, które programista może wykorzystać",
            "Framework dostarcza API do większego zestawu funkcji"
        ],
        poprawna: "A"
    },
    {
        id: 172,
        pytanie: "Narzędziem do monitorowania procesu wykonywania zadań przez członków zespołu projektowego może być diagram",
        odpowiedzi: [
            "Venna",
            "Gantta",
            "związków encji",
            "aktywności UML"
        ],
        poprawna: "B"
    },
    {
        id: 173,
        pytanie: "Jedną z chorób, która występuje u programistów na skutek długotrwałej pracy z myszą komputerową lub klawiaturą, chrakteryzującą się bólami, drętwieniem i zaburzeniami czucia w obszarze 1-3 palca ręki jest",
        odpowiedzi: [
            "zespół cieśni kanału nadgarstka",
            "zespół suchego oka",
            "kifoza",
            "dyskopatia"
        ],
        poprawna: "A"
    },
    {
        id: 174,
        pytanie: "Aby zadeklarować pole, które będzie pełniło funkcję licznika instancji klasy, należy definicję takiego pola poprzedzić słowem kluczowym",
        odpowiedzi: [
            "register",
            "static",
            "operator",
            "virtual"
        ],
        poprawna: "B"
    },
    {
        id: 175,
        pytanie: "Jeżeli w aplikacji występuje błąd działania, a programista musi sprawdzić wartości przechowywane w zmiennych, w danym momencie uruchomienia aplikacji, to należy do tego celu wykorzystać",
        odpowiedzi: [
            "analizator składni",
            "wirtualną maszynę",
            "debugger",
            "interpreter"
        ],
        poprawna: "C"
    },
    {
        id: 176,
        pytanie: "Która lista typów obejmuje jedynie typy złożone?",
        odpowiedzi: [
            "class, struct, float",
            "char, struct, union",
            "class, struct, union",
            "unsigned, struct, float"
        ],
        poprawna: "C"
    },
    {
        id: 177,
        pytanie: "Liczba 1AF zapisana kodem szesnastkowym po przeliczeniu na kod dziesiętny wynosi",
        odpowiedzi: [
            "431",
            "6890",
            "26",
            "257"
        ],
        poprawna: "A"
    },
    {
        id: 178,
        pytanie: "Wewnątrz klasy pracownik zdefiniowano przedstawione metody. Do której z nich można zgodnie z jej przeznaczeniem dopisać element diagnostyczny o treści: cout << \"Obiekt został usunięty\";?",
        odpowiedzi: [
            "operator==",
            "pracownik",
            "~pracownik",
            "wypisz"
        ],
        poprawna: "C",
        obraz: "178.jpg"
    },
    {
        id: 179,
        pytanie: "Zmienna typy logicznego może przyjąć wartości:",
        odpowiedzi: [
            "1, -1",
            "true, false",
            "0 oraz dowolną całkowitą",
            "trzy dowolne naturalne"
        ],
        poprawna: "B"
    },
    {
        id: 180,
        pytanie: "Szablon MojaTablica implementuje funkcjonalność tablicy o indeksach różnego typu i elementach różnego typu. Na podstawie przedstawionego kodu, który wykorzystuje szablon do inicjacji tablicy asocjacyjnej wskaż definicję wykorzystującą szablon do utworzenia tablicy, w której indeksami są liczby całkowite a elementy napisy",
        odpowiedzi: [
            "MojaTablica tab2 = MOjaTablica();",
            "int tab2[] = new MojaTablica();",
            "MojaTablica tab2 = new MojaTablica();",
            "int tab2 = new MojaTablica();"
        ],
        poprawna: "C",
        obraz: "180.jpg"
    },
    {
        id: 181,
        pytanie: "Na podstawie definicji przedstawionej w ramce wskaż, który rysunek przedstawia komponent Chip zdefiniowany w bibliotece Angular Material.",
        odpowiedzi: [
            "Rysunek 1",
            "Rysunek 2",
            "Rysunek 3",
            "Rysunek 4"
        ],
        poprawna: "D",
        obraz: "181.jpg"
    },
    {
        id: 182,
        pytanie: "Na przedstawionych rysunkach znajduje się okno aplikacji w stanie początkowym oraz po wypełnieniu danych. Zakładając, że pole \"Dostępne środki\" jest przeznaczone do wprowadzania wartości typu rzeczywistego, wskaż składowe struktury, które optymalnie pasują do tych danych",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "B",
        obraz: "182.jpg"
    },
    {
        id: 183,
        pytanie: "W procesorze, jednostką odpowiedzialną za działania na liczbach zmiennoprzecinkowych jest",
        odpowiedzi: [
            "IU",
            "FPU",
            "ALU",
            "AU"
        ],
        poprawna: "B"
    },
    {
        id: 184,
        pytanie: "Klasa Mieszkaniec zawiera pola: imie, nazwisko, ulica, nrDomu, rokUrodzenia. w klasie zdefiniowano przedstawione w punktach konstruktory (zapisano jedynie typy argumrntów). Do inicjowania obiektu konstruktorem kopiującym wykorzystany zostanie konstruktor przedstawiony w punkcie",
        odpowiedzi: [
            "1",
            "4",
            "3",
            "2"
        ],
        poprawna: "D",
        obraz: "184.png"
    },
    {
        id: 185,
        pytanie: "Który z warunków logicznych sprawdza, czy zmienna całkowita x jest dodatnią liczbą dwucyfrową podzielną przez 4?",
        odpowiedzi: [
            "(x > 9 && x < 100) && (x % 4 == 0)",
            "(x > 9 || x < 100) && (x / 4 == 0)",
            "(x > 9 && x < 100) || (x % 4 == 0)",
            "(x > 0 && x < 100) || (x / 4 == 0)"
        ],
        poprawna: "A"
    },
    {
        id: 186,
        pytanie: "Stosując jeden z dwóch przedstawionych zapisów inkrementacji w językach rodziny C lub Java, można stwierdzić, że",
        odpowiedzi: [
            "wartość zmiennej b będzie wyższa po wykonaniu zapisu drugiego w porównaniu z pierwszym",
            "zapis drugi jest niezgodny ze składnią, co spowoduje błędy kompilacji",
            "niezależnie od zapisu, w zmiennej b zawsze będzie ten sam wynik",
            "jedynie stosując zapis pierwszy, zmienna a zostanie zwiększona o 1"
        ],
        poprawna: "A",
        obraz: "186.png"
    },
    {
        id: 187,
        pytanie: "Które określenie najlepiej opisuje złożoność obliczeniową algorytmy quicksort?",
        odpowiedzi: [
            "jest wyższa niż złożoność sortowania bąbelkowego",
            "jest zawsze niższa niż złożoność każdego innego algorytmy sortowania",
            "jest wyższa niż O(n2).",
            "jest różna w zależności od wyboru elementu rozdzielającego"
        ],
        poprawna: "D"
    },
    {
        id: 188,
        pytanie: "Co zostanie wygenerowane w przeglądarce w wyniku działania kodu źródłowego zapisanego za pomocą dwóch równoważnych funkcjonalnie fragmentów?",
        odpowiedzi: [
            "Trzy paragrafy, każdy z kolejnym elementem tablicy tags",
            "jeden paragraf z kolejno wszystkimi elementami tablicy tags",
            "jeden paragraf z pierwszym elementem tablicy tags",
            "trzy paragrafy, w każdym z nich napis o treści: {tag}"
        ],
        poprawna: "A",
        obraz: "188.png"
    },
    {
        id: 189,
        pytanie: "W aplikacji mobilnej, aby zdefiniować warianty grafiki w zależności od rozdzielczości ekranu, należy (uwaga: odpowiedzi wariantowe dla dwóch platform - sugerować się platformą wykorzystywaną na zajęciach)",
        odpowiedzi: [
            "iOS: dodać do nazw przyrostki wskazujące na rozdzielczość, np.32ppi. Android: umieścić grafikę w odpowiednich folderach: 32ppi, 64ppi, 96ppi.",
            "iOS: dodać do nazw plików przyrostki @2x, @3x. Android: umieścić grafikę w odpowiednich folderach drawable: -hdpi, -xhpi, xxhdpi.",
            "iOS: dodać do nazw przyrostki #2x, #3x. Android: dodać do nazw przyrostek rozdzielczości: -32x32, -64x64, -96x96.",
            "iOS: utworzyć foldery hdpi, lhpi, xhpi i dodać do nich grafiki. Android: utworzyć foldery 32x32, 64x64, 96x96 i dodać do nich grafiki."
        ],
        poprawna: "B"
    },
    {
        id: 190,
        pytanie: "Programista projektuje obsługę bufora drukowania dokumentów. Najnowsze zadanie drukowania jest ustawiane na końcu kolejki, najstarsze jest przekazywane do wydruku. Strukturą danych najlepiej pasującą do problemu jest",
        odpowiedzi: [
            "Stos",
            "Sterta",
            "LIFO",
            "FIFO"
        ],
        poprawna: "D"
    },
    {
        id: 191,
        pytanie: "Która z akcji powinna być zaimplementowana w części back-end aplikacji internetowej?",
        odpowiedzi: [
            "wypisywanie danych pobranych z formularza w przeglądarce",
            "obsługa zdarzeń kontrolek",
            "walidacja formularzy w czasie rzeczywistym",
            "obsługa bazy danych"
        ],
        poprawna: "D"
    },
    {
        id: 192,
        pytanie: "Programista popełnił błąd w przedstawionym kodzie. Na czym ten błąd polega?",
        odpowiedzi: [
            "brak konstruktora w definicji klasy",
            "inicjacja obiektu jest nieprawidłowo zapisana",
            "w inicjacji obiektu powinny być przekazane argumenty konstruktora",
            "pole autor jest niedostępne z tego poziomu"
        ],
        poprawna: "D",
        obraz: "192.png"
    },
    {
        id: 193,
        pytanie: "Aby zaimplementować algorytm sortowania bąbelkowego dla tablicy n-elementowej, potrzeba",
        odpowiedzi: [
            "n-liczby warunków",
            "dwóch pętli działających na co najmniej (n+1) elementach każda",
            "jednej pętli działającej na 2n elementach i warunku",
            "dwóch pętli działających na najwyżej n-elementach każda"
        ],
        poprawna: "D"
    },
    {
        id: 194,
        pytanie: "W przedstawionych fragmentach kodu zdefiniowano funkcję o nazwie fun1. W funkcji tej należy umieścić obsługę",
        odpowiedzi: [
            "wybrania przycisku zatwierdzającego dialog",
            "aplikacji po zdarzeniu utraty focusa przez pola opcji",
            "inicjalizacji elementów interfejsu użytkownika",
            "usunięcia kontrolek z pamięci operacyjnej"
        ],
        poprawna: "A",
        obraz: "194.png"
    },
    {
        id: 195,
        pytanie: "Przedstawiona pętla operuje na zmiennej napisowej ciąg. Jej zadaniem jest",
        odpowiedzi: [
            "od każdego znaku w napisie, który nie jest równy 0, odjąć kod 32",
            "zamienić w napisie małe litery na wielkie",
            "od każdego znaku w napisie odjąć kod 32",
            "zamienić w napisie wielkie litery na małe"
        ],
        poprawna: "B",
        obraz: "195.png"
    },
    {
        id: 196,
        pytanie: "Przedstawiony sposób deklaracji Klasa2 oznacza, że",
        odpowiedzi: [
            "Klasa1 dziedziczy po Klasa2",
            "Klasa1 jest potomkiem Klasy2",
            "Klasa2 dziedziczy po Klasa1",
            "Klasa2 jest klasą bazową"
        ],
        poprawna: "C",
        obraz: "196.png"
    },
    {
        id: 197,
        pytanie: "Testy mające na celu wykrycie błędów w interfejsach pomiędzy modułami lub systemami to testy",
        odpowiedzi: [
            "wydajnościowe",
            "bezpieczeństwa",
            "integracyjne",
            "jednostkowe"
        ],
        poprawna: "C"
    },
    {
        id: 198,
        pytanie: "Metodyka zwinna (ang. agile) polega na",
        odpowiedzi: [
            "podziale przedsięwzięcia na następujące po sobie etapy: projekt, programowania, testy, wraz z ciągłym szacowaniem ryzyka przedsięwzięcia",
            "dekompozycji przedsięwzięcia na części, które są oddzielnie projektowane, wytwarzane i testowane w krótkich cyklach",
            "zaprojektowaniu całej aplikacji na początku trwania przedsięwzięcia i tworzeniu jej na przemian z testowaniem",
            "opracowaniu testów dla całego przedsięwzięcia, a następnie implementowaniu kolejnych jego części"
        ],
        poprawna: "B"
    },
    {
        id: 199,
        pytanie: "Mechanizm programowania obiektowego w C++, wykorzystujący funkcje wirtualne (z ang. Virtual), który przy wywołaniu metod zwalnia programistę z obowiązku sprawdzenia jaką klasę pochodną aktualnie obsługuje, np. przez wskaźnik nosi nazwę",
        odpowiedzi: [
            "dziedziczenia",
            "przeciążenia",
            "hermetyzacji",
            "polimorfizmu"
        ],
        poprawna: "D"
    },
    {
        id: 200,
        pytanie: "We frameworkach do tworzenia aplikacji mobilnych lub desktopowych występuje wzorzec MVVM, czyli Model-View-ViewModel. To podejście do programowania zakłada, że",
        odpowiedzi: [
            "interfejs użytkownika oraz logika aplikacji są kodowane w jednym pliku",
            "kontrolki i widoki interfejsu użytkownika są zaszyte w logice aplikacji",
            "interfejs użytkownika oraz logika aplikacji są rozdzielone",
            "w aplikacji występuje tylko interfejs użytkownika"
        ],
        poprawna: "C"
    },
    {
        id: 201,
        pytanie: "W której sekcji obsługi wyjątków jest zaimplementowana reakcja na rzucony wyjątek?",
        odpowiedzi: [
            "throw",
            "try",
            "finally",
            "catch"
        ],
        poprawna: "D"
    },
    {
        id: 203,
        pytanie: "Na obrazie widoczna jest aplikacja, która umozliwia",
        odpowiedzi: [
            "debugowanie kodu na wskazanej platformie Android",
            "zarządzanie emulacjami systemu Android",
            "kompilowanie kodu pod wskazaną platformę Android",
            "zarządzanie wirtualnymi dyskami emulacji systemu android"
        ],
        poprawna: "B",
        obraz: "203.png"
    },
    {
        id: 204,
        pytanie: "W oknie dialogowym aplikacji desktopowej umieszczono",
        odpowiedzi: [
            "trzy pola edycyjne, dwa pola opcji, jedno pole listy rozwijanej i dwa przyciski",
            "trzy pola edycyjne, dwa pola etykiet, pole listy rozwijanej i dwa przyciski",
            "trzy pola etykiet, dwa pola wyboru, pole opcji i dwa przyciski",
            "cztery pola edycyjne, dwa pola opcji i dwa przyciski"
        ],
        poprawna: "A",
        obraz: "204.png"
    },
    {
        id: 205,
        pytanie: "Liczba pierwiastków równania kwadratowego jest zależna od delty w sposób przedstawiony w ramce. Która instrukcja warunkowa odpowiada tej zależności, jeżeli delta to zmienna d?",
        odpowiedzi: [
            "Instrukcja 1",
            "Instrukcja 4",
            "Instrukcja 2",
            "Instrukcja 3"
        ],
        poprawna: "D",
        obraz: "205.png"
    },
    {
        id: 206,
        pytanie: "Aby opublikować aplikację w sklepie Google Play/Apple Store, wymagane jest aktywne konto programisty w aplikacji",
        odpowiedzi: [
            "poczta gmail/poczta Apple ID",
            "Google Search Console/Apple Store Connect",
            "Google Analitics/Apple Keynote",
            "konsola Google Play/iTunes Connect"
        ],
        poprawna: "D"
    },
    {
        id: 207,
        pytanie: "Program, który analizuje kod źródłowy programu i od razu wykonuje przeanalizowany fragment, jest nazywany",
        odpowiedzi: [
            "interpreterem",
            "konsolidatorem",
            "kompilatorem",
            "debuggerem"
        ],
        poprawna: "A"
    },
    {
        id: 208,
        pytanie: "Które zdanie dotyczące okna modalnego jest prawdziwe?",
        odpowiedzi: [
            "Okno modalne może zawierać system menu, ale nie może zawierać w sobie kontrolek.",
            "Okno modalne oddaje kontrolę innemu oknu, jeżeli to otrzymało zdarzenie.",
            "Okno modalne pozwala na obsługę wszystkich zdarzeń aplikacji.",
            "Okno modalne nie pozwala na obsługę zdarzeń dotyczących pozostałych okien aplikacji."
        ],
        poprawna: "D"
    },
    {
        id: 209,
        pytanie: "Które zdanie jest zgodne z informacjami o funkcjach zaprzyjaźnionych przedstawionych we fragmencie dokumentacji?",
        odpowiedzi: [
            "Gdy prototypy funkcji zaprzyjaźnionych znajdują się w definicji klasy, funkcje te są jej metodami.",
            "Funkcja zaprzyjaźniona nie ma dostępu do elementów protected klasy.",
            "Tylko funkcje mogą być zaprzyjaźnione.",
            "Funkcja zaprzyjaźniona, mimo że jest zdefiniowana na zewnątrz klasy ma dostęp do jej prywatnych elementów."
        ],
        poprawna: "D",
        obraz: "209.png"
    },
    {
        id: 210,
        pytanie: "Typami reprezentującymi liczby rzeczywiste są",
        odpowiedzi: [
            "float, unsigned",
            "double, char",
            "unsigned, long",
            "float, double"
        ],
        poprawna: "D"
    },
    {
        id: 211,
        pytanie: "W prezentowanym kodzie popełniono błąd logiczny, który polega na tym, że",
        odpowiedzi: [
            "w warunku powinna być sprawdzona wartość zmiennej a",
            "warunek powinien być zastąpiony pętlą while",
            "w warunku jest przypisanie zamiast porównania",
            "warunek nie ma sensu, środowisko uruchomieniowe samo sprawdzi argument dzielenia"
        ],
        poprawna: "C",
        obraz: "211.png"
    },
    {
        id: 212,
        pytanie: "Który z frameworków jest stosowany do budowy części back-end w aplikacjach WEB?",
        odpowiedzi: [
            "Django",
            "Xamarin",
            "React.js",
            "Angular"
        ],
        poprawna: "A"
    },
    {
        id: 213,
        pytanie: "Przedstawiona na obrazie idea sortowania odnosi się do sortowania",
        odpowiedzi: [
            "przez scalanie",
            "kubełkowego",
            "przez wybieranie",
            "bąbelkowego"
        ],
        poprawna: "A",
        obraz: "213.png"
    },
    {
        id: 214,
        pytanie: "Które z praw autorskich są niezbywalne i nieograniczone w czasie?",
        odpowiedzi: [
            "Prawa do dokumentów urzędowych.",
            "Autorskie prawa osobiste.",
            "Autorskie prawa majątkowe.",
            "Prawa do prostych informacji prasowych."
        ],
        poprawna: "B"
    },
    {
        id: 215,
        pytanie: "Wskaż środek ochrony, który nie jest zaliczany do środków ochrony zbiorowej",
        odpowiedzi: [
            "ekran dźwiękochłonny",
            "gaśnica",
            "barierki chroniące przed upadkiem z wysokości",
            "okulary ochronne"
        ],
        poprawna: "D"
    },
    {
        id: 216,
        pytanie: "Kod przedstawia operacje na 1000-elementowej tablicy wypełnionej liczbami całkowitymi. Aby zoptymalizować kod, nie tracąc na jego czytelności, należy",
        odpowiedzi: [
            "zmniejszyć o połowę liczbę iteracji pętli",
            "pętlę for zamienić na pętlę while",
            "wynik metody Pow wyliczyć przed pętlą",
            "zapisać kod bez pętli"
        ],
        poprawna: "C",
        obraz: "216.png"
    },
    {
        id: 217,
        pytanie: "W kodzie źródłowym dwóch równoważnych funkcjonalnie fragmentów zapisano:",
        odpowiedzi: [
            "obsługę zdarzenia dla przycisku",
            "przypisanie stylu o nazwie fun1 do przycisku",
            "obsługę błędów",
            "wywołanie funkcji, aby zainicjować stronę w przeglądarce"
        ],
        poprawna: "A",
        obraz: "217.png"
    },
    {
        id: 218,
        pytanie: "Wskaż cechę charakterystyczną szablonów programowania obiektowego",
        odpowiedzi: [
            "odnoszą się tylko do typów liczbowych",
            "zawierają informacje o formatowaniu stron internetowych",
            "definiują funkcjonalność uniwersalną dla różnych typów danych",
            "operują na danych jednego określonego typu"
        ],
        poprawna: "C"
    },
    {
        id: 219,
        pytanie: "Dana jest tablica liczb całkowitych o nazwie tbl. Po wykonaniu przedstawionych operacji w zmiennej wynik znajdzie się",
        odpowiedzi: [
            "liczba elementów tablicy",
            "suma elementów tablicy",
            "wynik dzielenia sąsiadujących elementów tablicy",
            "średnia arytmetyczna elementów tablicy"
        ],
        poprawna: "D",
        obraz: "219.png"
    },
    {
        id: 220,
        pytanie: "Wskaż system typu e-commerce",
        odpowiedzi: [
            "WordPress CMS bez dodatkowych wtyczek",
            "Dziennik elektroniczny Librus Synergia",
            "PrestaShop, platforma do tworzenia własnych sklepów internetowych",
            "Elektroniczna Platforma Usług Administracji Publicznej ePUAP"
        ],
        poprawna: "C"
    },
    {
        id: 221,
        pytanie: "Przedstawiony format plików, służący, między innymi, do wymiany danych pomiędzy częścią back-end a front-end aplikacji internetowej, to",
        odpowiedzi: [
            "JSX",
            "XML",
            "YAML",
            "JSON"
        ],
        poprawna: "D",
        obraz: "221.png"
    },
    {
        id: 222,
        pytanie: "Wskaż język programowania, w którym można utworzyć aplikację mobilną dla systemu Android",
        odpowiedzi: [
            "Java",
            "C++",
            "Obiective-C",
            "Swift"
        ],
        poprawna: "A"
    },
    {
        id: 223,
        pytanie: "Po wykonaniu przedstawionego kodu wartość przechowywana w zmiennej b wynosi",
        odpowiedzi: [
            "5",
            "2",
            "11",
            "20"
        ],
        poprawna: "A",
        obraz: "223.jpg"
    },
    {
        id: 224,
        pytanie: "Frameworkiem CSS służącym do określenia wyglądu aplikacji internetowych, którego klasy zostały zastosowane na prezentowanym przykładzie jest",
        odpowiedzi: [
            "Yaml",
            "Angular",
            "Symfony",
            "Bootstrap"
        ],
        poprawna: "D",
        obraz: "224.jpg"
    },
    {
        id: 225,
        pytanie: "Wskaż kod za pomocą, którego zostanie wygenerowane okno dialogowe widoczne na obrazie. Dla uproszczenia kodu, pominięto atrybuty znaczników.",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "B",
        obraz: "225.jpg"
    },
    {
        id: 226,
        pytanie: "Zmienna typu logicznego może przyjąć wartości",
        odpowiedzi: [
            "true, false",
            "1, -1",
            "0 oraz dowolną liczbę całkowitą",
            "dowolne naturalne liczby"
        ],
        poprawna: "A"
    },
    {
        id: 227,
        pytanie: "Wskaż kod, który jest implementacją w języku C++ przedstawionego fragmentu algorytmu",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "D",
        obraz: "227.jpg"
    },
    {
        id: 228,
        pytanie: "Poniższa definicja dotyczy wzorca projektowego o nazwie",
        odpowiedzi: [
            "Fasada",
            "Prototyp",
            "Dekorator",
            "Kompozyt"
        ],
        poprawna: "A",
        obraz: "228.jpg"
    },
    {
        id: 229,
        pytanie: "Wskaż prawidłową definicję interfejsu (szablonu klasy) w języki Java",
        odpowiedzi: [
            "Definicja 1",
            "Definicja 2",
            "Definicja 3",
            "Definicja 4"
        ],
        poprawna: "D",
        obraz: "229.jpg"
    },
    {
        id: 230,
        pytanie: "Przedstawionym na schemacie algorytmem Euklidesa należy się posłużyć do wyznaczenia",
        odpowiedzi: [
            "największego elementu zbioru liczb",
            "najmniejszej liczby pierwszej w przedziale",
            "najmniejszej wspólnej wielokrotności",
            "największego wspólnego dzielnika"
        ],
        poprawna: "D",
        obraz: "230.jpg"
    },
    {
        id: 231,
        pytanie: "Wydane polecenia dotyczące repozytorium Git zakładając, że aktywnym folderem jest folder projektu, mają na celu",
        odpowiedzi: [
            "rozpoczęcie pracy z nowym repozytorium, dodanie i zatwierdzenie kodu projektu pod nazwą first commit",
            "zamknięcie projektu, tak że wszystkie rewizje zostaną zarchiwizowane do lokalnego archiwum o nazwie first commit",
            "utworzenie kopii istniejącego repozytorium jedynie z rewizją zapisaną pod nazwą first commit",
            "rozpoczęcie sesji z istniejącym repozytorium i pobranie kodu projektu do lokalnego folderu"
        ],
        poprawna: "A",
        obraz: "231.jpg"
    },
    {
        id: 232,
        pytanie: "Cechą dobrego negocjatora jest",
        odpowiedzi: [
            "zarozumiałość",
            "egoizm",
            "opanowanie",
            "niepewność"
        ],
        poprawna: "C"
    },
    {
        id: 233,
        pytanie: "Programując przedstawioną na obrazie kontrolkę stepper w aplikacji mobilnej należy obsłużyć zmienną, która przechowuje zawsze jej aktualną wartość. Do uzyskania takiej funkcjonalności można skorzystać ze zdarzenia",
        odpowiedzi: [
            "DescendantAdded",
            "ValueChanged",
            "Unfocused",
            "SizeChanged"
        ],
        poprawna: "B",
        obraz: "233.jpg"
    },
    {
        id: 234,
        pytanie: "Które działanie dotyczące klasy abstrakcyjnej jest zabronione?",
        odpowiedzi: [
            "Powołanie instancji tej klasy",
            "Deklaracja pól publicznych",
            "Deklaracja metody wirtualnej",
            "Dziedziczenie po tej klasie"
        ],
        poprawna: "A"
    },
    {
        id: 235,
        pytanie: "Na równoważnych funkcjonalnie fragmentach kodu aplikacji Angular i React.js przedstawiono:",
        odpowiedzi: [
            "obsługę zdarzenia zatwierdzenia formularza",
            "wypisanie w konsoli przeglądarki danych pobranych z pól formularzy w czasie rzeczywistym, gdy użytkownik je wypełnia",
            "funkcję, która przepisuje do zmiennych f lub e dane z pola input formularza",
            "funkcję wypełniającą dane w formularzu podczas jego inicjacji"
        ],
        poprawna: "A",
        obraz: "235.jpg"
    },
    {
        id: 236,
        pytanie: "Wskaż komentarz jednoliniowy, który można dopisać do linii 3 w miejscu znaków zapytania tak, aby był poprawny składniowo i opisywał operację wykonywaną w tej linii",
        odpowiedzi: [
            "// wyswietlenie elementu tablicy",
            "# wypelnienie elementu tablicy",
            "// wypelnienie elementu tablicy",
            "# wyswietlenie elementu tablicy"
        ],
        poprawna: "A",
        obraz: "236.jpg"
    },
    {
        id: 237,
        pytanie: "Wskaż kod, który wygeneruje przedstawioną kontrolkę",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "C",
        obraz: "237.jpg"
    },
    {
        id: 238,
        pytanie: "W ramce zaprezentowano fragment opisu metody compile języka Java stosowanej przy pracy z wyrażeniami regularnymi. Który znak należy zastosować, aby znaleźć dopasowanie na końcu napisu?",
        odpowiedzi: [
            "^",
            "|",
            "$",
            "."
        ],
        poprawna: "C",
        obraz: "238.jpg"
    },
    {
        id: 239,
        pytanie: "Do rozwiązywania problemów przybliżonych lub takich, których nie można opisać algorytmem dokładnym, np. przewidywanie pogody, rozpoznawanie wirusów komputerowych służą algorytmy",
        odpowiedzi: [
            "liniowe",
            "iteracyjne",
            "heurystyczne",
            "rekurencyjne"
        ],
        poprawna: "C"
    },
    {
        id: 240,
        pytanie: "W ramce przedstawiono notatki testera dotyczące testów aplikacji. Który rodzaj testów ma zamiar wykonać tester?",
        odpowiedzi: [
            "jednostkowe",
            "wydajnościowe",
            "interfejsu",
            "bezpieczeństwa"
        ],
        poprawna: "B",
        obraz: "240.jpg"
    },
    {
        id: 241,
        pytanie: "W przedstawionym fragmencie kodu znajduje się błąd logiczny. Polega on na",
        odpowiedzi: [
            "braku inicjalizacji zmiennej x, który sprawia, że zmienna nie ma wartości początkowej",
            "błędnym zastosowaniem funkcji cout, który sprawia, że zmienna jest wczytywana w pętli",
            "nieprawidłowym warunku pętli, który sprawia, że pętla nigdy się nie wykona",
            "nieprawidłowym warunku pętli, który sprawia, że pętla jest nieskończona"
        ],
        poprawna: "D",
        obraz: "241.jpg"
    },
    {
        id: 242,
        pytanie: "Wskaż kod poprawny składniowo dla formatu JSON, służącego do wymiany danych pomiędzy częściami backend i frontend aplikacji",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "B",
        obraz: "242.jpg"
    },
    {
        id: 243,
        pytanie: "W wyniku wykonywania kodu języka C++ została wyświetlona wartość 0 (zamiast 50). Jaki jest tego powód?",
        odpowiedzi: [
            "Działanie wewnątrz funkcji jest zapisane niepoprawnie.",
            "Argument funkcji został przekazany przez wartość, a nie przez referencję.",
            "Funkcja zwraca wartość, a nie powinna jej zwracać.",
            "Zmienna x powinna być inicjowana wartością wynoszącą 1 a nie 0."
        ],
        poprawna: "B",
        obraz: "243.jpg"
    },
    {
        id: 244,
        pytanie: "W języku C++ zakładając, że przedstawiona linia kodu się skompiluje i wykona, to do zmiennej liczba zostanie przypisana wartość",
        odpowiedzi: [
            "równa 1000",
            "dowolna pseudolosowa z zakresu typu int",
            "rzeczywista podzielna przez 1000",
            "pseudolosowa nie większa niż 999"
        ],
        poprawna: "D",
        obraz: "244.jpg"
    },
    {
        id: 245,
        pytanie: "Programista zapisał w pliku HTML przedstawioną linię kodu, aby",
        odpowiedzi: [
            "skorzystać z funkcji biblioteki jQuery, która wcześniej została pobrana i zapisana lokalnie.",
            "umieścić kod JavaScript pomiędzy znacznikami <script></script>",
            "pobrać z Internetu w momencie odsłony strony i zastosować bibliotekę jQuery.",
            "zadeklarować własną funkcję JavaScript o nazwie min.js"
        ],
        poprawna: "A",
        obraz: "245.jpg"
    },
    {
        id: 246,
        pytanie: "Algorytm sekwencyjnego wyszukiwania elementu z wartownikiem polega na założeniu, że",
        odpowiedzi: [
            "na końcu przeszukiwanego zbioru należy wstawić wartownika.",
            "zbiór wejściowy musi być posortowany.",
            "zbiór jest zawsze 100 elementowy.",
            "szukany element musi powtórzyć się kilkakrotnie w zbiorze."
        ],
        poprawna: "A"
    },
    {
        id: 247,
        pytanie: "Analizując kod interfejsu graficznego zapisanego językiem XAML można stwierdzić, że",
        odpowiedzi: [
            "napis \"fotograf\" jest położony po prawej stronie obrazu",
            "elementy: napis, obraz, przycisk Like, przycisk Share, napis są ułożone jeden pod drugim",
            "przyciski są ułożone poziomo jeden obok drugiego",
            "obraz jest po lewej stronie, a pozostałe elementy po prawej"
        ],
        poprawna: "C",
        obraz: "246.jpg"
    },
    {
        id: 248,
        pytanie: "Jednym z zadań projektowania aplikacji jest funkcjonalność cofnięcia wykonywanych ostatnio czynności do 20 operacji wstecz (undo). Strukturą danych przeznaczoną do tego typu zadania, którą cechuje dostęp jedynie do ostatniego dodanego elementu jest",
        odpowiedzi: [
            "kolejka",
            "drzewo",
            "tablica",
            "stos"
        ],
        poprawna: "D"
    },
    {
        id: 249,
        pytanie: "Dla podawanego fragmentu kodu Java zostanie wygenerowany wyjątek, gdy zmienna index przyjmie wartość",
        odpowiedzi: [
            "5",
            "0",
            "1",
            "7"
        ],
        poprawna: "D",
        obraz: "249.jpg"
    },
    {
        id: 250,
        pytanie: "Wskaż odpowiedź, która wykorzystuje parafrazę jako technikę aktywnego słuchania, w sytuacji, gdy klient mówi: \"Interesuje mnie aplikacja, która działa szybko, nie zależnie od tego, czy korzysta z niej kilku czy tysiąc użytkowników\".",
        odpowiedzi: [
            "Dlaczego Pani poszukuje takiej aplikacji?",
            "Ilu dokładnie użytkowników będzie z niej korzystać?",
            "Wyczuwam niepewność w Pani głosie. Proszę pozwolić mi zadać kilka pytań.",
            "Jeśli prawidłowo zrozumiałem, chodzi o aplikację, która dobrze się skaluje do obciążenia"
        ],
        poprawna: "D"
    },
    {
        id: 251,
        pytanie: "Przedstawione listingi zawierają implementację funkcji oraz zdefiniowany jeden test automatyczny sprawdzający zachowanie funkcji w przypadku, gdy argumentem jest wartość ujemna. W miejscu kropek należy wstawić drugi test sprawdzający działanie funkcji, gdy argumentem jest wartość dodatnia. Który z kodów odpowiada temu testowi?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "251.jpg"
    },
    {
        id: 252,
        pytanie: "Które z wymienionych zadań, składających się na proces tworzenia prostej galerii zdjęć będącej aplikacją mobilną, jest zadaniem zespołowym?",
        odpowiedzi: [
            "Implementacja funkcji dodajZdjecie()",
            "Utworzenie dokumentacji kodu aplikacji",
            "Przygotowanie i skonfigurowanie repozytorium dla projektu",
            "Utworzenie testu jednostkowego dla funkcji przegladajZdjecia()"
        ],
        poprawna: "B"
    },
    {
        id: 253,
        pytanie: "Na obrazie przedstawiono fragment emulacji iOS z prostą aplikacją. Górna część strony zachodzi na belkę ze stanem baterii. Który z zapisów należy zastosować w miejscu znaków zapytania, aby wprowadzić tylko marginesy górne wyłącznie dla platformy iOS?",
        odpowiedzi: [
            "x:TypeArguments=”Thickness”(0, 20, 0, 0)",
            "x:TypeArguments=”Thickness” iOS=20",
            "x:TypeArguments=\"Thickness\" iOS=\"0, 0, 0, 0\" Android=\"0, 20, 0, 0\" WinPhone=\"0, 0, 0, 0\"",
            "x:TypeArguments=\"Thickness\" iOS=\"0, 20, 0, 0\" Android=”0, 0, 0, 0” WinPhone=\"0, 0, 0, 0\""
        ],
        poprawna: "D",
        obraz: "253.jpg"
    },
    {
        id: 254,
        pytanie: "Prawidłową i ergonomiczną pozycję pracy przy komputerze zapewni krzesło, którego",
        odpowiedzi: [
            "podłokietniki są 20 cm niżej niż blat",
            "podłokietniki są 30 cm wyżej niż blat",
            "oparcie zapewnia lordozę w odcinku lędźwiowym",
            "oparcie w odcinku szyi jest pochylone do przodu o 40 stopni"
        ],
        poprawna: "C"
    },
    {
        id: 255,
        pytanie: "Jaki typ służy do przechowywania wartości TRUE/FALSE w języku C++?",
        odpowiedzi: [
            "bool",
            "decimal",
            "byte",
            "char"
        ],
        poprawna: "A"
    },
    {
        id: 256,
        pytanie: "Natężenie dźwięku na stanowisku pracy w biurze nie może przekraczać",
        odpowiedzi: [
            "50 dB",
            "45 dB",
            "40 dB",
            "55 dB"
        ],
        poprawna: "D"
    },
    {
        id: 257,
        pytanie: "Mechanizm pozwalający programowi czytać informacje o samym sobie to",
        odpowiedzi: [
            "asemblacja",
            "lustro",
            "instacjonowanie",
            "refleksja"
        ],
        poprawna: "D"
    },
    {
        id: 258,
        pytanie: "Jaki typ służy do przechowywania wartości całkowitych z zakresu 0 do 255 w języku C++?",
        odpowiedzi: [
            "unsigned char",
            "char",
            "unsigned short",
            "short"
        ],
        poprawna: "A"
    },
    {
        id: 259,
        pytanie: "Metoda ustawiająca prywatne pole to",
        odpowiedzi: [
            "metoda abstrakcyjna",
            "getter",
            "setter",
            "metoda wirtualna"
        ],
        poprawna: "C"
    },
    {
        id: 260,
        pytanie: "W języku C# delegat jest to",
        odpowiedzi: [
            "specjalny typ do przechowywania typów prostych",
            "specjalny typ do przechowywania referencji na funkcję",
            "specjalny typ pełniący rolę wskaźnika do poruszania się po pliku",
            "specjalny typ pełniący rolę iteratora po kolekcji"
        ],
        poprawna: "B"
    },
    {
        id: 261,
        pytanie: "Do testowania REST API wykorzystuje się program",
        odpowiedzi: [
            "Postman",
            "ApiViewer",
            "Putty",
            "RestTeamViewer"
        ],
        poprawna: "A"
    },
    {
        id: 262,
        pytanie: "W języku C, aby wypisać odpowiednio string, znak, liczbę całkowitą ze znakiem oraz liczbę zmiennoprzecinkową za pomocą funkcji print(), należy posłużyć się ciągiem formatującym",
        odpowiedzi: [
            "%s %c %d %f",
            "%c %s %u %x",
            "%f %c %s %u",
            "%d %u %f %c"
        ],
        poprawna: "A"
    },
    {
        id: 263,
        pytanie: "Elementem języka C++, który pozwala definiować własne typy jest?",
        odpowiedzi: [
            "typ wyliczeniowy enum",
            "klasa",
            "struktura",
            "wszystkie pozostałe"
        ],
        poprawna: "D"
    },
    {
        id: 264,
        pytanie: "Wartość wyrażenia !5 w języku C++ to",
        odpowiedzi: [
            "1",
            "undefined",
            "false",
            "0xE"
        ],
        poprawna: "C"
    },
    {
        id: 265,
        pytanie: "Przykładem algorytmu typu dziel i zwyciężaj jest?",
        odpowiedzi: [
            "quick-sort",
            "algorytm kruskala",
            "algorytm Dijkstra",
            "insert-sort"
        ],
        poprawna: "A"
    },
    {
        id: 266,
        pytanie: "Przedstawiając algorytm za pomocą bloków, blok start/stop narysujemy w kształcie?",
        odpowiedzi: [
            "Równoległoboku.",
            "Elipsy.",
            "Trójkąta.",
            "Prostokąta."
        ],
        poprawna: "B"
    },
    {
        id: 267,
        pytanie: "Algorytm można przedstawić za pomocą?",
        odpowiedzi: [
            "Pseudokodem.",
            "Każdym z wymienionych sposobów.",
            "Schematem blokowym.",
            "Opisem słownym."
        ],
        poprawna: "B"
    },
    {
        id: 268,
        pytanie: "Z ilu klas może dziedziczyć klasa w C#/Java/Python?",
        odpowiedzi: [
            "1",
            "dowolnej ilości",
            "0",
            "2"
        ],
        poprawna: "A"
    },
    {
        id: 269,
        pytanie: "Przekazywanie zależności do klasy poprzez konstruktor nazywane jest",
        odpowiedzi: [
            "wstrzykiwaniem zależności",
            "żadnym z wymienionych",
            "dziedziczeniem zależności",
            "odwracaniem zależności"
        ],
        poprawna: "A"
    },
    {
        id: 270,
        pytanie: "Interfejs to konstrukcja znana np. z język C#. Jest ona podobna do",
        odpowiedzi: [
            "klasy abstrakcyjnej",
            "zwykłej klasy",
            "struktury",
            "uni"
        ],
        poprawna: "A"
    },
    {
        id: 271,
        pytanie: "Plik źródłowy języka C# ma rozszerzenie?",
        odpowiedzi: [
            ".sc",
            ".cc",
            ".cs",
            ".cp"
        ],
        poprawna: "C"
    },
    {
        id: 272,
        pytanie: "Pojęcie tablicy postrzępionej w języku C#, oznacza:",
        odpowiedzi: [
            "każdą tablicę w języku C#, niezależnie od jej wymiaru",
            "tablicę dwuwymiarową, gdzie każda podtablica jest równa",
            "tablicę dwuwymiarową, gdzie każda podtablica ma nieparzystą ilość elementów",
            "tablicę dwuwymiarową, gdzie każda podtablica jest innego rozmiaru"
        ],
        poprawna: "D"
    },
    {
        id: 273,
        pytanie: "Które zdanie o funkcji skrótu nie jest prawdziwe?",
        odpowiedzi: [
            "\"hash\" uzyskany z funkcji skrótu jest odwracalny.",
            "Wynik funkcji skrótu to tak zwany \"hash\".",
            "Funkcja skrótu przypisuje dowolnie dużej wartości krótką wartość o stałym rozmiarze.",
            "\"hash\" uzyskany z funkcji skrótu jest nieodwracalny."
        ],
        poprawna: "A"
    },
    {
        id: 274,
        pytanie: "Na obrazku klasa Repository jest dla klasy Server?",
        odpowiedzi: [
            "Zależnością twardą.",
            "Żadne z wymienionych.",
            "Klasą pochodną.",
            "Zależnością miękką."
        ],
        poprawna: "D",
        obraz: "274.png"
    },
    {
        id: 275,
        pytanie: "Typem delegata w języku C# nie jest?",
        odpowiedzi: [
            "Predicate",
            "Func",
            "Task",
            "Action"
        ],
        poprawna: "C"
    },
    {
        id: 276,
        pytanie: "Jakiego przełącznika należy użyć z poleceniem \"git reset\", aby cofnięte zmiany wylądowały na \"stage\"?",
        odpowiedzi: [
            "--medium",
            "--hard",
            "--mixed",
            "--soft"
        ],
        poprawna: "D"
    },
    {
        id: 277,
        pytanie: "Testy jednostkowe składają się z trzech głównych faz w kolejności",
        odpowiedzi: [
            "assert/arrange/act",
            "assert/act/arrange",
            "act/assert/arrange",
            "arrange/act/assert"
        ],
        poprawna: "D"
    },
    {
        id: 278,
        pytanie: "Zasada mówiąca o tym by unikać powtórzeń w kodzie to",
        odpowiedzi: [
            "YAGNI",
            "DRY",
            "SOLID",
            "KISS"
        ],
        poprawna: "B"
    },
    {
        id: 279,
        pytanie: "Na ilustracji został przedstawiony Diagram UML:",
        odpowiedzi: [
            "diagram klas",
            "diagram ERD",
            "diagram przypadków użycia",
            "diagram aktywności"
        ],
        poprawna: "C",
        obraz: "279.png"
    },
    {
        id: 280,
        pytanie: "W języku C# delegat \"Func<int, dobule, bool>\", zwraca:",
        odpowiedzi: [
            "int",
            "bool",
            "double",
            "nic"
        ],
        poprawna: "B"
    },
    {
        id: 281,
        pytanie: "Typem danych wykorzystywanym do precyzyjnego przechowywania liczb ułamkowych w języku C# jest:",
        odpowiedzi: [
            "double",
            "dynamic",
            "decimal",
            "float"
        ],
        poprawna: "C"
    },
    {
        id: 282,
        pytanie: "\"Indexer\", to konstrukcja języka C#, która",
        odpowiedzi: [
            "jest odpowiednikiem przeciążonego operatora &",
            "jest odpowiednikiem przeciążonego operatora []",
            "jest odpowiednikiem przeciążonego operatora ()",
            "jest odpowiednikiem przeciążonego operatora (type)"
        ],
        poprawna: "B",
        obraz: "282.png"
    },
    {
        id: 283,
        pytanie: "Listę plików/katalogów, które są ignorowane przez system kontroli wersji git należy umieścić w pliku:",
        odpowiedzi: [
            ".gitsettings",
            ".configgit",
            ".ignoregit",
            ".gitignore"
        ],
        poprawna: "D"
    },
    {
        id: 284,
        pytanie: "TDD (Test Driven Development) to:",
        odpowiedzi: [
            "metodologia pisania oprogramowania, gdzie testy pisze się przed kodem testowanym",
            "wzorzec projektowy",
            "metodologia pisania oprogramowania, gdzie testy wykorzystuje się do dokumentowania kodu",
            "wszystkie odpowiedzi są błędne"
        ],
        poprawna: "A",
        obraz: "284.png"
    },
    {
        id: 285,
        pytanie: "Skrót SPA oznacza:",
        odpowiedzi: [
            "Super-Pure Application",
            "Super-Page Application",
            "Simple-Page Application",
            "Single-Page Application"
        ],
        poprawna: "D"
    },
    {
        id: 286,
        pytanie: "Rozwinięciem skrótu ORM jest:",
        odpowiedzi: [
            "Object Relational Mapping",
            "Object Relational Macro",
            "Object Reconstruct Mapping",
            "Object Relational Model"
        ],
        poprawna: "A"
    },
    {
        id: 287,
        pytanie: "Metodą protokołu HTTP/HTTPS odpowiedzialną za aktualizowanie danych jest",
        odpowiedzi: [
            "POST",
            "PUT",
            "HEAD",
            "GET"
        ],
        poprawna: "B"
    },
    {
        id: 288,
        pytanie: "API typu REST wymienia dane w formacie zwanym",
        odpowiedzi: [
            "JSON",
            "JWT",
            "XML",
            "HTML"
        ],
        poprawna: "A"
    },
    {
        id: 289,
        pytanie: "Podatność stron internetowych polegająca na wstrzykiwaniu własnego kodu do strony to",
        odpowiedzi: [
            "XSS",
            "Hijacking",
            "SQL Injection",
            "Data Poisoning"
        ],
        poprawna: "A"
    },
    {
        id: 290,
        pytanie: "Kategorią zagrożeń na stanowisku pracy nie są",
        odpowiedzi: [
            "zagrożenia chemiczne",
            "zagrożenia biologiczne",
            "zagrożenia fizyczne",
            "zagrożenia psychofizyczne"
        ],
        poprawna: "B"
    },
    {
        id: 291,
        pytanie: "Czym jest automatyzacja procesu testowania?",
        odpowiedzi: [
            "Procesem integracji testów w środowisku programistycznym",
            "Wykorzystaniem narzędzi i skryptów do przeprowadzania testów automatycznie bez ingerencji człowieka",
            "Weryfikacją poprawności działania aplikacji na urządzeniach mobilnych",
            "Kompilacją kodu w celu optymalizacji wydajności"
        ],
        poprawna: "B"
    },
    {
        id: 292,
        pytanie: "Który rodzaj testów służy do weryfikacji funkcji prototypu interfejsu?",
        odpowiedzi: [
            "Testy wydajnościowe",
            "Testy interfejsu",
            "Testy zgodności",
            "Testy obciążeniowe"
        ],
        poprawna: "B"
    },
    {
        id: 293,
        pytanie: "Czym charakteryzują się testy interfejsu?",
        odpowiedzi: [
            "Testy wydajnościowe",
            "Sprawdzają poprawność działania elementów graficznych i interakcji użytkownika z aplikacją",
            "Testują zgodność aplikacji z wymogami prawnymi",
            "Optymalizują kod aplikacji"
        ],
        poprawna: "B"
    },
    {
        id: 294,
        pytanie: "Co powinno zostać uwzględnione w scenariuszu testowym aplikacji?",
        odpowiedzi: [
            "Szczegółowe instrukcje dotyczące implementacji kodu",
            "Dokumentacja techniczna aplikacji",
            "Plan wdrożenia aplikacji w środowisku produkcyjnym",
            "Opis kroków testowych, oczekiwanych wyników i warunków wstępnych"
        ],
        poprawna: "D"
    },
    {
        id: 295,
        pytanie: "Który rodzaj testów sprawdza użyteczność aplikacji z perspektywy użytkownika końcowego?",
        odpowiedzi: [
            "Testy obciążeniowe",
            "Testy funkcjonalne",
            "Testy użyteczności",
            "Testy zgodności"
        ],
        poprawna: "C"
    },
    {
        id: 296,
        pytanie: "Który z poniższych przykładów jest testem niefunkcjonalnym?",
        odpowiedzi: [
            "Testowanie wydajności aplikacji pod dużym obciążeniem",
            "Sprawdzenie poprawności logowania użytkownika",
            "Weryfikacja poprawności działania przycisku",
            "Sprawdzenie obsługi formularza rejestracji"
        ],
        poprawna: "A"
    },
    {
        id: 297,
        pytanie: "Czym różnią się testy funkcjonalne od niefunkcjonalnych?",
        odpowiedzi: [
            "Testy funkcjonalne sprawdzają wydajność aplikacji, a niefunkcjonalne poprawność kodu",
            "Testy funkcjonalne sprawdzają zgodność działania aplikacji z założeniami, a niefunkcjonalne testują aspekty wydajności, bezpieczeństwa i użyteczności",
            "Testy funkcjonalne są przeprowadzane tylko przez użytkowników końcowych, a niefunkcjonalne przez programistów",
            "Testy funkcjonalne skupiają się na interfejsie, a niefunkcjonalne na zapleczu aplikacji"
        ],
        poprawna: "B"
    },
    {
        id: 298,
        pytanie: "Do czego służy dokumentacja wdrożeniowa?",
        odpowiedzi: [
            "Do zarządzania bazą danych aplikacji",
            "Do testowania wydajności aplikacji",
            "Do tworzenia zadań w systemie kontroli wersji",
            "Do opisania procesu instalacji i konfiguracji aplikacji w środowisku produkcyjnym"
        ],
        poprawna: "D"
    },
    {
        id: 299,
        pytanie: "Które z poniższych nie jest elementem instrukcji użytkownika programu?",
        odpowiedzi: [
            "Opis procedur testowych i wyników przeprowadzonych testów",
            "Plan wdrożenia aplikacji",
            "Instrukcje dotyczące optymalizacji kodu",
            "Dane techniczne serwera"
        ],
        poprawna: "A"
    },
    {
        id: 300,
        pytanie: "Co zawiera dokumentacja wdrożenia projektu?",
        odpowiedzi: [
            "Opis błędów znalezionych podczas testów",
            "Informacje o etapach implementacji aplikacji w środowisku produkcyjnym",
            "Plan marketingowy aplikacji",
            "Instrukcję obsługi aplikacji dla użytkowników końcowych"
        ],
        poprawna: "B"
    },
    {
        id: 301,
        pytanie: "Co należy uwzględnić w instrukcji użytkownika aplikacji?",
        odpowiedzi: [
            "Opis instalacji, konfiguracji i obsługi programu",
            "Opis struktur danych używanych w kodzie",
            "Plan wdrożenia projektu",
            "Opis narzędzi programistycznych użytych podczas tworzenia aplikacji"
        ],
        poprawna: "A"
    },
    {
        id: 302,
        pytanie: "Czym jest dokumentacja pomocy programu?",
        odpowiedzi: [
            "Dokumentem zawierającym szczegóły techniczne kodu źródłowego",
            "Instrukcją wyjaśniającą, jak korzystać z funkcji programu",
            "Zbiorem testów jednostkowych i wyników",
            "Dokumentem zawierającym plany rozwoju aplikacji"
        ],
        poprawna: "B"
    },
    {
        id: 303,
        pytanie: "Który z poniższych elementów należy uwzględnić w dokumentacji kodu programu?",
        odpowiedzi: [
            "Szczegóły konfiguracji serwera",
            "Lista błędów wykrytych podczas testów",
            "Opis funkcji, klas i zmiennych w kodzie",
            "Plan marketingowy aplikacji"
        ],
        poprawna: "C"
    },
    {
        id: 304,
        pytanie: "Do czego służą komentarze w kodzie źródłowym programu?",
        odpowiedzi: [
            "Do dokumentowania działania kodu i ułatwienia jego zrozumienia",
            "Do uruchamiania kodu w trybie debugowania",
            "Do definiowania zmiennych globalnych",
            "Do optymalizacji wydajności kodu"
        ],
        poprawna: "A"
    },
    {
        id: 305,
        pytanie: "Który etap pozwala na poprawienie wydajności aplikacji przed jej publikacją?",
        odpowiedzi: [
            "Optymalizacja kodu",
            "Testowanie jednostkowe",
            "Tworzenie interfejsu graficznego",
            "Dodawanie komentarzy do kodu"
        ],
        poprawna: "A"
    },
    {
        id: 306,
        pytanie: "Co należy zrobić po znalezieniu błędu w kodzie podczas testowania?",
        odpowiedzi: [
            "Zignorować błąd, jeśli aplikacja działa poprawnie",
            "Poprawić błąd i ponownie przetestować aplikację",
            "Zgłosić błąd do użytkownika końcowego",
            "Usunąć moduł zawierający błąd"
        ],
        poprawna: "B"
    },
    {
        id: 307,
        pytanie: "Które narzędzie może być używane do automatycznego testowania aplikacji webowych?",
        odpowiedzi: [
            "Postman",
            "Blender",
            "Selenium",
            "Visual Studio Code"
        ],
        poprawna: "C"
    },
    {
        id: 308,
        pytanie: "Który z poniższych sposobów może służyć optymalizacji kodu źródłowego?",
        odpowiedzi: [
            "Usunięcie nieużywanych zmiennych i funkcji",
            "Zwiększenie liczby instrukcji warunkowych",
            "Użycie większej liczby komentarzy w kodzie",
            "Zastąpienie zmiennych globalnych lokalnymi"
        ],
        poprawna: "A"
    },
    {
        id: 309,
        pytanie: "Co oznacza termin debugowanie w programowaniu?",
        odpowiedzi: [
            "Publikowanie aplikacji w środowisku produkcyjnym",
            "Opracowywanie nowych funkcji aplikacji",
            "Wyszukiwanie i usuwanie błędów w kodzie",
            "Tworzenie dokumentacji kodu"
        ],
        poprawna: "C"
    },
    {
        id: 310,
        pytanie: "Który z poniższych etapów jest częścią testowania aplikacji?",
        odpowiedzi: [
            "Tworzenie bazy danych",
            "Debugowanie kodu w celu znalezienia błędów",
            "Tworzenie interfejsu graficznego",
            "Kompilowanie aplikacji"
        ],
        poprawna: "B"
    },
    {
        id: 311,
        pytanie: "Czym jest walidacja kodu programu?",
        odpowiedzi: [
            "Procesem tworzenia dokumentacji kodu",
            "Procesem publikowania aplikacji w sklepie",
            "Procesem kompilowania kodu",
            "Procesem sprawdzania poprawności i zgodności kodu z założeniami"
        ],
        poprawna: "D"
    },
    {
        id: 312,
        pytanie: "Który z poniższych mechanizmów pozwala na ograniczenie dostępu do niektórych części aplikacji webowej?",
        odpowiedzi: [
            "Dynamiczne formularze",
            "System logowania i kontroli dostępu",
            "Statyczne pliki CSS",
            "Mechanizm renderowania treści"
        ],
        poprawna: "B"
    },
    {
        id: 313,
        pytanie: "Jakie dane mogą być przechowywane w ciasteczkach przeglądarki?",
        odpowiedzi: [
            "Wrażliwe dane użytkownika, takie jak hasła",
            "Preferencje użytkownika, takie jak język lub motyw witryny",
            "Dane przechowywane w bazie danych",
            "Kod źródłowy aplikacji webowej"
        ],
        poprawna: "B"
    },
    {
        id: 314,
        pytanie: "Który z poniższych elementów najlepiej opisuje funkcjonalność e-sklepu?",
        odpowiedzi: [
            "System zarządzania koszykiem i realizacją zamówień",
            "Dostęp do bazy danych użytkownika",
            "Obsługa serwera e-mail",
            "Mechanizm renderowania grafiki 3D"
        ],
        poprawna: "A"
    },
    {
        id: 315,
        pytanie: "Która technologia jest używana do integracji aplikacji webowej z bazą danych?",
        odpowiedzi: [
            "HTTP",
            "SQL",
            "CSS",
            "JavaScript"
        ],
        poprawna: "B"
    },
    {
        id: 316,
        pytanie: "Który element jest niezbędny w dynamicznym formularzu logowania?",
        odpowiedzi: [
            "Plik graficzny",
            "Nagłówek HTTP",
            "Tabela w bazie danych",
            "Pola tekstowe do wprowadzania danych użytkownika"
        ],
        poprawna: "D"
    },
    {
        id: 317,
        pytanie: "Który framework wspiera tworzenie dynamicznych interfejsów użytkownika przy użyciu TypeScript?",
        odpowiedzi: [
            "Angular",
            "ASP.NET Core",
            "jQuery",
            "Django"
        ],
        poprawna: "A"
    },
    {
        id: 318,
        pytanie: "Co jest głównym celem stosowania frameworka Node.js w aplikacjach webowych?",
        odpowiedzi: [
            "Tworzenie aplikacji mobilnych",
            "Testowanie API",
            "Obsługa aplikacji serwerowych i przetwarzanie asynchroniczne",
            "Projektowanie graficznego interfejsu użytkownika"
        ],
        poprawna: "C"
    },
    {
        id: 319,
        pytanie: "Który framework opiera się na tworzeniu komponentów w języku JavaScript?",
        odpowiedzi: [
            "Node.js",
            "React.js",
            "Django",
            "ASP.NET Core"
        ],
        poprawna: "B"
    },
    {
        id: 320,
        pytanie: "Który element środowiska IDE jest kluczowy dla pracy nad aplikacjami webowymi?",
        odpowiedzi: [
            "Narzędzie do projektowania grafiki",
            "Emulator urządzeń mobilnych",
            "Debugger, edytor kodu, integracja z systemem kontroli wersji",
            "Zarządzanie bazami danych"
        ],
        poprawna: "C"
    },
    {
        id: 321,
        pytanie: "Które z poniższych narzędzi jest powszechnie używane do debugowania aplikacji webowych?",
        odpowiedzi: [
            "Git",
            "Blender",
            "Postman",
            "DevTools"
        ],
        poprawna: "D"
    },
    {
        id: 322,
        pytanie: "Czym różni się środowisko RAD od tradycyjnego IDE w kontekście aplikacji webowych?",
        odpowiedzi: [
            "RAD skupia się wyłącznie na tworzeniu frontendu aplikacji",
            "RAD pozwala na szybsze prototypowanie i rozwój aplikacji dzięki narzędziom wizualnym",
            "RAD działa tylko w systemach Windows",
            "RAD nie obsługuje żadnych języków backendowych"
        ],
        poprawna: "B"
    },
    {
        id: 323,
        pytanie: "Które z poniższych jest przykładem aplikacji mobilnej korzystającej z bazy danych?",
        odpowiedzi: [
            "Aplikacja przechowująca listę kontaktów użytkownika",
            "Aplikacja pokazująca godzinę lokalną",
            "Aplikacja do robienia zdjęć",
            "Aplikacja kalkulator"
        ],
        poprawna: "A"
    },
    {
        id: 324,
        pytanie: "Co jest głównym celem przygotowania aplikacji do publikacji w sklepie mobilnym?",
        odpowiedzi: [
            "Optymalizacja kodu aplikacji pod kątem szybkości działania",
            "Zmniejszenie rozmiaru aplikacji poniżej 20 MB",
            "Dostosowanie aplikacji do wymagań platformy i przepisów sklepu",
            "Umożliwienie korzystania z aplikacji tylko w trybie offline"
        ],
        poprawna: "C"
    },
    {
        id: 325,
        pytanie: "Który język programowania jest powszechnie używany do programowania interfejsów użytkownika za pomocą XAML?",
        odpowiedzi: [
            "C++",
            "Java",
            "C#",
            "Python"
        ],
        poprawna: "C"
    },
    {
        id: 326,
        pytanie: "W jaki sposób można przechowywać dane użytkownika w aplikacji mobilnej na system Android?",
        odpowiedzi: [
            "Za pomocą plików SharedPreferences",
            "W rejestrze systemu",
            "Wyłącznie w zewnętrznych bazach danych",
            "Tylko w pamięci RAM"
        ],
        poprawna: "A"
    },
    {
        id: 327,
        pytanie: "Który z poniższych komponentów UI aplikacji mobilnych odpowiada za nawigację między ekranami?",
        odpowiedzi: [
            "Przycisk",
            "ListView",
            "Navigation Drawer",
            "Pasek narzędziowy"
        ],
        poprawna: "C"
    },
    {
        id: 328,
        pytanie: "Co należy zrobić, aby obsłużyć zdarzenie kliknięcia przycisku w aplikacji desktopowej?",
        odpowiedzi: [
            "Zdefiniować metodę w systemie menu",
            "Podłączyć zdarzenie kliknięcia do odpowiedniej metody w kodzie",
            "Stworzyć nowy dialog modalny",
            "Zmodyfikować plik XAML"
        ],
        poprawna: "B"
    },
    {
        id: 329,
        pytanie: "Który z poniższych komponentów może być częścią systemu menu aplikacji desktopowej?",
        odpowiedzi: [
            "CheckBox",
            "MenuItem",
            "Canvas",
            "ScrollBar"
        ],
        poprawna: "B"
    },
    {
        id: 330,
        pytanie: "Do czego służy język XAML w programowaniu aplikacji desktopowych?",
        odpowiedzi: [
            "Do zarządzania bazami danych",
            "Do obsługi zdarzeń klawiatury",
            "Do optymalizacji działania aplikacji",
            "Do projektowania graficznego interfejsu użytkownika"
        ],
        poprawna: "D"
    },
    {
        id: 331,
        pytanie: "Czym różni się dialog modalny od niemodalnego?",
        odpowiedzi: [
            "Dialog modalny wymaga zamknięcia, aby wrócić do głównego okna aplikacji, dialog niemodalny tego nie wymaga",
            "Dialog modalny działa w tle, a dialog niemodalny jest zawsze na pierwszym planie",
            "Dialog modalny pozwala na interakcję z innymi oknami aplikacji, dialog niemodalny nie",
            "Dialog modalny jest ograniczony tylko do aplikacji konsolowych"
        ],
        poprawna: "A"
    },
    {
        id: 332,
        pytanie: "Który z poniższych elementów interfejsu użytkownika jest typowy dla aplikacji desktopowej?",
        odpowiedzi: [
            "Przycisk",
            "Strona HTML",
            "REST API",
            "Routing"
        ],
        poprawna: "A"
    },
    {
        id: 333,
        pytanie: "Które z poniższych stwierdzeń najlepiej opisuje WPF?",
        odpowiedzi: [
            "Framework służący do tworzenia aplikacji webowych",
            "Framework służący do tworzenia aplikacji desktopowych w środowisku Windows",
            "Biblioteka do przetwarzania danych w Pythonie",
            "Framework umożliwiający obsługę urządzeń IoT"
        ],
        poprawna: "B"
    },
    {
        id: 334,
        pytanie: "Czym jest framework w programowaniu?",
        odpowiedzi: [
            "System operacyjny służący do uruchamiania aplikacji",
            "Moduł do zarządzania bazami danych",
            "Zbiór gotowych bibliotek, narzędzi i reguł wspierających tworzenie aplikacji",
            "Edytor graficzny do projektowania interfejsów użytkownika"
        ],
        poprawna: "C"
    },
    {
        id: 335,
        pytanie: "Która z poniższych kart graficznych zapewnia większą wydajność w grach komputerowych?",
        odpowiedzi: [
            "Intel UHD Graphics 630 – zintegrowana",
            "AMD Radeon R7 240 – 2GB GDDR5, 64-bit",
            "AMD Radeon RX 580 – 8GB GDDR5, 256-bit",
            "NVIDIA GeForce GTX 1050 Ti – 4GB GDDR5, 128-bit"
        ],
        poprawna: "C"
    },
    {
        id: 336,
        pytanie: "Który z poniższych parametrów opisuje szybkość procesora?",
        odpowiedzi: [
            "Pojemność pamięci podręcznej",
            "Typ złącza",
            "Częstotliwość taktowania",
            "Ilość rdzeni"
        ],
        poprawna: "C"
    },
    {
        id: 337,
        pytanie: "Który z poniższych dysków zapewnia najszybszy odczyt danych?",
        odpowiedzi: [
            "SSD SATA III, prędkość odczytu do 550 MB/s",
            "HDD 5400 RPM, SATA II, 32 MB Cache",
            "HDD 7200 RPM, SATA III, 64 MB Cache",
            "SSD NVMe PCIe 3.0, prędkość odczytu do 3500 MB/s"
        ],
        poprawna: "D"
    },
    {
        id: 338,
        pytanie: "Który z poniższych parametrów dysku twardego ma największy wpływ na jego szybkość?",
        odpowiedzi: [
            "Prędkość obrotowa talerzy (RPM)",
            "Pojemność dysku",
            "Rodzaj złącza (SATA/PCIe)",
            "Ilość pamięci podręcznej (Cache)"
        ],
        poprawna: "A"
    },
    {
        id: 339,
        pytanie: "Ile kilobajtów (KB) mieści się w 1 megabajcie (MB)?",
        odpowiedzi: [
            "10",
            "100",
            "1000",
            "1024"
        ],
        poprawna: "D"
    },
    {
        id: 340,
        pytanie: "1 terabajt (TB) to ile gigabajtów (GB)?",
        odpowiedzi: [
            "1000",
            "1024",
            "2048",
            "512"
        ],
        poprawna: "B"
    },
    {
        id: 341,
        pytanie: "Jakie urządzenie techniki komputerowej najlepiej nadaje się do projektowania graficznego w programach typu CAD?",
        odpowiedzi: [
            "Serwer z dużą ilością pamięci RAM",
            "Laptop z zintegrowaną kartą graficzną",
            "Komputer stacjonarny z kartą graficzną NVIDIA Quadro",
            "Laptop z ekranem dotykowym"
        ],
        poprawna: "C"
    },
    {
        id: 342,
        pytanie: "Który rodzaj pamięci RAM należy wybrać do wydajnego komputera gamingowego?",
        odpowiedzi: [
            "DDR4",
            "DDR5",
            "DDR3",
            "LPDDR4"
        ],
        poprawna: "B"
    },
    {
        id: 343,
        pytanie: "Który z poniższych etapów przetwarzania rozkazów przez procesor następuje jako pierwszy?",
        odpowiedzi: [
            "Pobranie rozkazu z pamięci (Fetch)",
            "Zapis wyników do pamięci (Write Back)",
            "Wykonanie instrukcji (Execution)",
            "Dekodowanie rozkazu (Decode)"
        ],
        poprawna: "A"
    },
    {
        id: 344,
        pytanie: "Co określa zestaw instrukcji (ISA) procesora?",
        odpowiedzi: [
            "Instrukcje, które procesor jest w stanie wykonać",
            "Sposób zarządzania pamięcią podręczną",
            "Schemat połączeń między procesorem, a innymi komponentami",
            "Rodzaje danych przechowywanych w pamięci"
        ],
        poprawna: "A"
    },
    {
        id: 345,
        pytanie: "Jakie zadanie pełni pamięć operacyjna (RAM) w systemie komputerowym?",
        odpowiedzi: [
            "Stałe przechowywanie systemu operacyjnego",
            "Zapewnienie kopii zapasowej danych użytkownika",
            "Tymczasowe przechowywanie danych i instrukcji dla procesora",
            "Zarządzanie przepływem danych między urządzeniami wejścia/wyjścia"
        ],
        poprawna: "C"
    },
    {
        id: 346,
        pytanie: "Który element systemu komputerowego odpowiada za przesyłanie danych między procesorem a pamięcią RAM?",
        odpowiedzi: [
            "Karta graficzna",
            "Kontroler DMA",
            "Zasilacz",
            "Mostek północny (Northbridge)"
        ],
        poprawna: "D"
    },
    {
        id: 347,
        pytanie: "Jak procesor komunikuje się z pamięcią podręczną (cache)?",
        odpowiedzi: [
            "Wykorzystując jedynie pamięć RAM",
            "Poprzez system przerwań",
            "Bezpośrednio, z pominięciem mostków systemowych",
            "Za pomocą linii danych w magistrali systemowej"
        ],
        poprawna: "D"
    },
    {
        id: 348,
        pytanie: "Który z poniższych opisów najlepiej definiuje system informatyczny?",
        odpowiedzi: [
            "Oprogramowanie wspierające wyłącznie zarządzanie danymi osobowymi",
            "Zespół urządzeń technicznych wykorzystywanych do pracy biurowej",
            "Zespół ludzi, procedur, oprogramowania i sprzętu służący do przetwarzania danych",
            "Sieć komputerowa umożliwiająca komunikację między użytkownikami"
        ],
        poprawna: "C"
    },
    {
        id: 349,
        pytanie: "Który z poniższych przykładów jest systemem informacji przetwarzanym przez system informatyczny?",
        odpowiedzi: [
            "System PESEL",
            "System monitorowania temperatury serwerów",
            "System sterowania światłami drogowymi",
            "System wentylacji w biurowcach"
        ],
        poprawna: "A"
    },
    {
        id: 350,
        pytanie: "Gdzie są przechowywane dane w przypadku korzystania z chmury obliczeniowej?",
        odpowiedzi: [
            "Na dyskach optycznych użytkownika",
            "Na dyskach optycznych użytkownika",
            "Na serwerze lokalnym użytkownika",
            "Na zdalnych serwerach dostawcy usług"
        ],
        poprawna: "D"
    },
    {
        id: 351,
        pytanie: "Jaki system informatyczny powinien zostać wykorzystany do obsługi sprzedaży w sklepie internetowym?",
        odpowiedzi: [
            "System ERP",
            "System CMS",
            "System CRM",
            "System e-commerce"
        ],
        poprawna: "D"
    },
    {
        id: 352,
        pytanie: "Co jest główną funkcją portali społecznościowych?",
        odpowiedzi: [
            "Tworzenie kopii zapasowych danych",
            "Udostępnianie treści i komunikacja między użytkownikami",
            "Zarządzanie sprzedażą produktów i usług",
            "Analiza wyników biznesowych"
        ],
        poprawna: "B"
    },
    {
        id: 353,
        pytanie: "Która z poniższych zasad jest kluczowa dla bezpiecznego korzystania z portali społecznościowych?",
        odpowiedzi: [
            "Udostępnianie jak największej ilości danych osobowych",
            "Unikanie ustawiania silnych haseł do konta",
            "Zgłaszanie postów, które nie są zgodne z regulaminem",
            "Regularne sprawdzanie ustawień prywatności"
        ],
        poprawna: "D"
    },
    {
        id: 354,
        pytanie: "Który z poniższych przykładów jest zastosowaniem systemu informatycznego w działalności biznesowej?",
        odpowiedzi: [
            "System nawigacji GPS",
            "System sterowania ruchem miejskim",
            "E-sklep",
            "System wentylacji"
        ],
        poprawna: "C"
    },
    {
        id: 355,
        pytanie: "Które z poniższych rozwiązań ułatwia korzystanie z serwisów internetowych osobom niewidomym?",
        odpowiedzi: [
            "Dodanie czytnika ekranu (screen reader)",
            "Dostosowanie rozdzielczości ekranu",
            "Zmniejszenie liczby grafik na stronie",
            "Zapewnienie możliwości zmiany czcionki"
        ],
        poprawna: "A"
    },
    {
        id: 356,
        pytanie: "Co oznacza poziom dostępności AAA w WCAG 2.0?",
        odpowiedzi: [
            "Dostosowanie wyłącznie do użytkowników mobilnych",
            "Najwyższy poziom dostępności",
            "Średni poziom dostępności",
            "Minimalny poziom dostępności"
        ],
        poprawna: "B"
    },
    {
        id: 357,
        pytanie: "Która z poniższych topologii sieci charakteryzuje się połączeniem wszystkich urządzeń jednym kablem?",
        odpowiedzi: [
            "Topologia siatki",
            "Topologia magistrali",
            "Topologia pierścienia",
            "Topologia gwiazdy"
        ],
        poprawna: "B"
    },
    {
        id: 358,
        pytanie: "Który protokół modelu TCP/IP jest odpowiedzialny za niezawodne przesyłanie danych?",
        odpowiedzi: [
            "TCP",
            "UDP",
            "HTTP",
            "IP"
        ],
        poprawna: "A"
    },
    {
        id: 359,
        pytanie: "Ile warstw ma model TCP/IP?",
        odpowiedzi: [
            "4",
            "7",
            "2",
            "5"
        ],
        poprawna: "A"
    },
    {
        id: 360,
        pytanie: "Która z poniższych cech dotyczy sieci bezprzewodowej?",
        odpowiedzi: [
            "Wymaga użycia kabli do połączenia urządzeń",
            "Jest bardziej podatna na zakłócenia w transmisji danych",
            "Nie działa w miejscach z dużą liczbą urządzeń",
            "Nie wymaga zabezpieczeń, ponieważ jest automatycznie chroniona"
        ],
        poprawna: "B"
    },
    {
        id: 361,
        pytanie: "Jaką przepustowość ma sieć przesyłająca 500 MB danych w 10 sekund?",
        odpowiedzi: [
            "40 Mbps",
            "500 Mbps",
            "50 Mbps",
            "400 Mbps"
        ],
        poprawna: "D"
    },
    {
        id: 362,
        pytanie: "Jak nazywa się proces przesyłania danych z komputera lokalnego na serwer?",
        odpowiedzi: [
            "Wysyłanie danych",
            "Przesyłanie danych",
            "Streaming",
            "Pobieranie danych"
        ],
        poprawna: "A"
    },
    {
        id: 363,
        pytanie: "Które z poniższych określeń najlepiej opisuje oprogramowanie typu ransomware?",
        odpowiedzi: [
            "Oprogramowanie używane do przeprowadzania ataków DDoS",
            "Złośliwe aplikacje wyświetlające reklamy",
            "Programy zbierające dane osobowe bez zgody użytkownika",
            "Oprogramowanie blokujące dostęp do danych w celu wymuszenia okupu"
        ],
        poprawna: "D"
    },
    {
        id: 364,
        pytanie: "Co to jest własność intelektualna?",
        odpowiedzi: [
            "Lista plików przechowywanych w chmurze",
            "Zestaw ustaw o ochronie prywatności",
            "Koncepcja praw chroniących twórczość i wynalazki",
            "Zbiór danych osobowych"
        ],
        poprawna: "C"
    },
    {
        id: 365,
        pytanie: "Która z poniższych sytuacji narusza prawa autorskie?",
        odpowiedzi: [
            "Korzystanie z programu typu open-source zgodnie z licencją",
            "Publikowanie filmu chronionego prawami autorskimi bez zgody właściciela",
            "Zakup licencji na oprogramowanie",
            "Tworzenie kopii zapasowej posiadanego legalnie programu"
        ],
        poprawna: "B"
    },
    {
        id: 366,
        pytanie: "Jakie są podstawowe etapy tworzenia aplikacji?",
        odpowiedzi: [
            "Analiza wymagań, projektowanie, implementacja, testowanie, wdrożenie",
            "Projektowanie, wdrożenie, utrzymanie, dokumentacja",
            "Implementacja, testowanie, wdrożenie, analiza potrzeb",
            "Analiza wymagań, testowanie, projektowanie, wdrożenie"
        ],
        poprawna: "A"
    },
    {
        id: 367,
        pytanie: "Jakie jest główne zadanie serwera aplikacyjnego?",
        odpowiedzi: [
            "Przechowywanie danych",
            "Hostowanie stron HTML",
            "Obsługa logiki aplikacji",
            "Renderowanie grafiki"
        ],
        poprawna: "C"
    },
    {
        id: 368,
        pytanie: "Wzorzec MVC dzieli aplikację na:",
        odpowiedzi: [
            "Moduł, widok, kontroler",
            "Model, widok, kontroler",
            "Model, wersję, konfigurację",
            "Moduł, wersję, komponent"
        ],
        poprawna: "B"
    },
    {
        id: 369,
        pytanie: "Który algorytm służy do wyszukiwania najkrótszej drogi w grafie?",
        odpowiedzi: [
            "Algorytm Dijkstry",
            "Algorytm Kruskala",
            "Algorytm Floyda-Warshalla",
            "Algorytm Prim"
        ],
        poprawna: "A"
    },
    {
        id: 370,
        pytanie: "Jakiego typu dane przechowuje baza danych NoSQL?",
        odpowiedzi: [
            "Relacyjne dane tabelaryczne",
            "Dane hierarchiczne i nienormalizowane",
            "Wyłącznie dane tekstowe",
            "Dane tylko w formacie JSON"
        ],
        poprawna: "B"
    },
    {
        id: 371,
        pytanie: "W programowaniu obiektowym, co to jest enkapsulacja?",
        odpowiedzi: [
            "Dzielenie aplikacji na moduły",
            "Ukrywanie szczegółów implementacji",
            "Dziedziczenie cech między klasami",
            "Definiowanie interfejsów"
        ],
        poprawna: "B"
    },
    {
        id: 372,
        pytanie: "Jakie są główne zasady WCAG 2.0?",
        odpowiedzi: [
            "Elastyczna, prosta, przejrzysta, trwała",
            "Postępowa, responsywna, efektywna",
            "Percepcyjna, operacyjna, zrozumiała, solidna",
            "Dostosowana, szybka, mobilna, dostępna"
        ],
        poprawna: "C"
    },
    {
        id: 373,
        pytanie: "Która cecha wyróżnia sieć synchroniczną?",
        odpowiedzi: [
            "Nie wymaga synchronizacji zegarów",
            "Transmisja danych odbywa się w ustalonych odstępach czasu",
            "Przesyłanie danych odbywa się w sposób nieciągły",
            "Zapewnia większą elastyczność w przesyłaniu danych"
        ],
        poprawna: "B"
    },
    {
        id: 374,
        pytanie: "Która zasada poprawia bezpieczeństwo korzystania z sieci?",
        odpowiedzi: [
            "Unikanie aktualizacji systemu operacyjnego",
            "Pobieranie plików z niezaufanych źródeł",
            "Używanie silnych, unikalnych haseł",
            "Udostępnianie haseł wśród znajomych"
        ],
        poprawna: "C"
    },
    {
        id: 375,
        pytanie: "Która cecha wyróżnia sieć asynchroniczną?",
        odpowiedzi: [
            "Dane są przesyłane w sposób nieciągły, bez synchronizacji zegarów",
            "Wymaga synchronizacji zegarów",
            "Jest bardziej niezawodna niż sieć synchroniczna",
            "Dane są przesyłane tylko w ustalonych ramach czasowych"
        ],
        poprawna: "A"
    },
    {
        id: 376,
        pytanie: "Które narzędzie jest przykładem komunikatora audio-video?",
        odpowiedzi: [
            "Notion",
            "Slack",
            "Google Drive",
            "Microsoft Teams"
        ],
        poprawna: "D"
    },
    {
        id: 377,
        pytanie: "Która z poniższych zasad jest częścią netykiety?",
        odpowiedzi: [
            "Używanie nieformalnego języka w każdej rozmowie",
            "Publikowanie treści bez zgody autorów",
            "Unikanie pisania wielkimi literami w wiadomościach",
            "Ignorowanie wiadomości od innych użytkowników"
        ],
        poprawna: "C"
    },
    {
        id: 378,
        pytanie: "Jaka jest dziesiętna wartość liczby binarnej 1010?",
        odpowiedzi: [
            "12",
            "14",
            "8",
            "10"
        ],
        poprawna: "D"
    },
    {
        id: 379,
        pytanie: "Jaki jest zapis liczby dziesiętnej 255 w systemie szesnastkowym?",
        odpowiedzi: [
            "EF",
            "100",
            "FE",
            "FF"
        ],
        poprawna: "D"
    },
    {
        id: 380,
        pytanie: "Jaki jest kod uzupełnieniowy do dwóch dla liczby -5 w zapisie binarnym na 8 bitach?",
        odpowiedzi: [
            "11111101",
            "11111011",
            "10000101",
            "00000101"
        ],
        poprawna: "B"
    },
    {
        id: 381,
        pytanie: "Co charakteryzuje kod uzupełnieniowy do dwóch?",
        odpowiedzi: [
            "Umożliwia reprezentację liczb ujemnych w systemie binarnym",
            "Przedstawia liczbę w postaci odwrotnej binarnej",
            "Służy do konwersji liczb binarnych na liczby dziesiętne",
            "Umożliwia zamianę systemu binarnego na szesnastkowy"
        ],
        poprawna: "A"
    },
    {
        id: 382,
        pytanie: "Jaki jest wynik dodawania binarnego liczb 1011 + 110?",
        odpowiedzi: [
            "11001",
            "10101",
            "11101",
            "10001"
        ],
        poprawna: "D"
    },
    {
        id: 383,
        pytanie: "Jaki będzie wynik logicznej operacji AND dla liczb binarnych 1010 i 1100?",
        odpowiedzi: [
            "1110",
            "1000",
            "1100",
            "1010"
        ],
        poprawna: "B"
    },
    {
        id: 384,
        pytanie: "Które narzędzie najlepiej nadaje się do konwersji liczby szesnastkowej na binarną?",
        odpowiedzi: [
            "Kalkulator programisty",
            "Arkusz kalkulacyjny",
            "Przeglądarka internetowa",
            "Edytor tekstowy"
        ],
        poprawna: "A"
    },
    {
        id: 385,
        pytanie: "Które z poniższych narzędzi umożliwia jednoczesną pracę z systemami BIN, DEC i HEX?",
        odpowiedzi: [
            "Przeglądarka grafów",
            "Kalkulator systemowy",
            "GIMP",
            "MS Word"
        ],
        poprawna: "B"
    },
    {
        id: 386,
        pytanie: "Jaki rodzaj złośliwego oprogramowania działa w tle, przechwytując informacje o wpisywanych hasłach?",
        odpowiedzi: [
            "Keylogger",
            "Adware",
            "Trojan",
            "Spyware"
        ],
        poprawna: "A"
    },
    {
        id: 387,
        pytanie: "Co jest głównym celem ataku phishingowego?",
        odpowiedzi: [
            "Wykradanie haseł z pamięci operacyjnej urządzenia",
            "Przejęcie danych osobowych poprzez fałszywe strony lub wiadomości",
            "Zakłócenie działania sieci poprzez nadmiar zapytań",
            "Blokowanie dostępu do usług online"
        ],
        poprawna: "B"
    },
    {
        id: 388,
        pytanie: "Który atak hakerski polega na zasypywaniu serwera dużą liczbą zapytań, co powoduje jego przeciążenie?",
        odpowiedzi: [
            "Phishing",
            "SQL Injection",
            "Man-in-the-Middle",
            "DDoS"
        ],
        poprawna: "D"
    },
    {
        id: 389,
        pytanie: "Który z poniższych środków najlepiej zabezpiecza komputer przed wirusami?",
        odpowiedzi: [
            "Regularne tworzenie kopii zapasowych",
            "Aktualny program antywirusowy",
            "Unikanie korzystania z publicznych sieci Wi-Fi",
            "Używanie silnych haseł"
        ],
        poprawna: "B"
    },
    {
        id: 390,
        pytanie: "Co jest głównym celem firewalla w systemie komputerowym?",
        odpowiedzi: [
            "Ochrona danych na poziomie aplikacji internetowych",
            "Szyfrowanie przesyłanych danych",
            "Zapobieganie wyciekom danych na skutek błędów systemowych",
            "Zarządzanie ruchem sieciowym i blokowanie nieautoryzowanego dostępu"
        ],
        poprawna: "D"
    },
    {
        id: 391,
        pytanie: "Które z poniższych zachowań jest zagrożeniem dla sfery emocjonalnej człowieka w cyberprzestrzeni?",
        odpowiedzi: [
            "Przesyłanie niezaszyfrowanych plików",
            "Cyberstalking",
            "Nadmierne korzystanie z mediów społecznościowych",
            "Zła postawa podczas pracy przy komputerze"
        ],
        poprawna: "B"
    },
    {
        id: 392,
        pytanie: "Które zagrożenie związane z korzystaniem z cyberprzestrzeni dotyczy zdrowia fizycznego?",
        odpowiedzi: [
            "Depresja związana z cyberprzemocą",
            "Uzależnienie od gier komputerowych",
            "Rozprzestrzenianie fałszywych informacji",
            "Problemy z kręgosłupem spowodowane długim siedzeniem"
        ],
        poprawna: "D"
    },
    {
        id: 393,
        pytanie: "Który z poniższych sposobów pomaga przeciwdziałać uzależnieniu od Internetu?",
        odpowiedzi: [
            "Zwiększenie liczby godzin spędzanych w mediach społecznościowych",
            "Wprowadzenie regularnych przerw od korzystania z urządzeń cyfrowych",
            "Korzystanie z komputera tylko w nocy",
            "Zainstalowanie większej liczby aplikacji rozrywkowych"
        ],
        poprawna: "B"
    },
    {
        id: 394,
        pytanie: "Jak można zapobiec problemom społecznym wynikającym z nadmiernego korzystania z Internetu?",
        odpowiedzi: [
            "Zwiększać ilość czasu spędzanego przed ekranem",
            "Utrzymywać równowagę między relacjami online i offline",
            "Unikać kontaktu z ludźmi w rzeczywistości",
            "Wycofać się całkowicie z życia wirtualnego"
        ],
        poprawna: "B"
    },
    {
        id: 395,
        pytanie: "Co należy zrobić, aby bezpiecznie przechowywać dane na komputerze?",
        odpowiedzi: [
            "Udostępniać hasła do plików współpracownikom",
            "Nie korzystać z kopii zapasowych",
            "Przechowywać dane na niezaszyfrowanych urządzeniach przenośnych",
            "Regularnie aktualizować oprogramowanie i tworzyć kopie zapasowe"
        ],
        poprawna: "D"
    },
    {
        id: 396,
        pytanie: "Które z poniższych narzędzi najlepiej zabezpiecza dane na urządzeniu przenośnym?",
        odpowiedzi: [
            "Hasło ustawione na urządzeniu",
            "Zainstalowanie aplikacji rozrywkowych",
            "Szyfrowanie danych na urządzeniu",
            "Nieaktualne oprogramowanie"
        ],
        poprawna: "C"
    },
    {
        id: 397,
        pytanie: "Jakie działanie sprzyja ochronie cyfrowego wizerunku w Internecie?",
        odpowiedzi: [
            "Sprawdzanie ustawień prywatności na portalach społecznościowych",
            "Udostępnianie swoich danych logowania znajomym",
            "Publikowanie wszystkich informacji o swoim życiu prywatnym",
            "Niezweryfikowanie źródeł publikowanych treści"
        ],
        poprawna: "A"
    },
    {
        id: 398,
        pytanie: "Które z poniższych działań może narazić cyfrową tożsamość na niebezpieczeństwo?",
        odpowiedzi: [
            "Włączanie uwierzytelniania dwuskładnikowego",
            "Ustawianie unikalnych i silnych haseł",
            "Klikanie w podejrzane linki w wiadomościach e-mail",
            "Regularne zmienianie haseł do kont"
        ],
        poprawna: "C"
    },
    {
        id: 399,
        pytanie: "Jak można ograniczyć ilość danych zbieranych przez aplikacje mobilne?",
        odpowiedzi: [
            "Sprawdzać i dostosowywać uprawnienia aplikacji w ustawieniach",
            "Udostępniać aplikacjom wszystkie wymagane dane",
            "Nie wyłączać dostępu aplikacji do lokalizacji i kontaktów",
            "Korzystać z aplikacji bez weryfikowania ich pochodzenia"
        ],
        poprawna: "A"
    },
    {
        id: 400,
        pytanie: "Co jest podstawowym celem ochrony danych osobowych?",
        odpowiedzi: [
            "Zapewnienie anonimowości użytkownikom Internetu",
            "Publikowanie danych osobowych w celach marketingowych",
            "Ochrona danych osobowych przed nieuprawnionym dostępem i wykorzystaniem",
            "Utrudnienie pracy organom ścigania"
        ],
        poprawna: "C"
    },
    {
        id: 401,
        pytanie: "Który z poniższych aktów prawnych dotyczy ochrony danych osobowych w Unii Europejskiej?",
        odpowiedzi: [
            "GDPR (RODO)",
            "Open Source Initiative",
            "DMCA",
            "Creative Commons"
        ],
        poprawna: "A"
    },
    {
        id: 402,
        pytanie: "Co to jest własność intelektualna?",
        odpowiedzi: [
            "Zestaw ustaw o ochronie prywatności",
            "Lista plików przechowywanych w chmurze",
            "Koncepcja praw chroniących twórczość i wynalazki",
            "Zbiór danych osobowych"
        ],
        poprawna: "C"
    },
    {
        id: 403,
        pytanie: "Który z poniższych typów danych jest przykładem typu stałoprzecinkowego?",
        odpowiedzi: [
            "decimal",
            "int",
            "double",
            "float"
        ],
        poprawna: "B"
    },
    {
        id: 404,
        pytanie: "Jaka jest główna różnica między typami stałoprzecinkowymi a zmiennoprzecinkowymi?",
        odpowiedzi: [
            "Stałoprzecinkowe obsługują liczby ujemne, a zmiennoprzecinkowe tylko dodatnie",
            "Stałoprzecinkowe wymagają więcej pamięci niż zmiennoprzecinkowe",
            "Stałoprzecinkowe przechowują liczby całkowite, zmiennoprzecinkowe przechowują liczby z częściami dziesiętnymi",
            "Zmiennoprzecinkowe przechowują tylko liczby ujemne"
        ],
        poprawna: "C"
    },
    {
        id: 405,
        pytanie: "Czym różni się typ łańcuchowy od znakowego?",
        odpowiedzi: [
            "Typ znakowy przechowuje pojedyncze znaki, a łańcuchowy ciągi znaków",
            "Typ łańcuchowy przechowuje pojedyncze znaki, a znakowy długie ciągi znaków",
            "Typ łańcuchowy obsługuje liczby całkowite, a znakowy liczby zmiennoprzecinkowe",
            "Typ znakowy przechowuje dane logiczne, a łańcuchowy tekst"
        ],
        poprawna: "A"
    },
    {
        id: 406,
        pytanie: "Która instrukcja poprawnie deklaruje zmienną typu łańcuchowego w języku C++?",
        odpowiedzi: [
            "float name = \"Jan\"",
            "string name = \"Jan\"",
            "int name = \"Jan\"",
            "bool name = \"Jan\""
        ],
        poprawna: "B"
    },
    {
        id: 407,
        pytanie: "Jaką wartość przechowuje tablica jednowymiarowa?",
        odpowiedzi: [
            "Wartość logiczną true lub false",
            "Wiele wartości pod różnymi indeksami",
            "Wiele wartości pod jednym indeksem",
            "Tylko jedną wartość"
        ],
        poprawna: "B"
    },
    {
        id: 408,
        pytanie: "Które stwierdzenie najlepiej opisuje tablicę asocjacyjną?",
        odpowiedzi: [
            "Tablica, która zmienia rozmiar w czasie wykonania programu",
            "Tablica, która przechowuje tylko dane tekstowe",
            "Tablica przechowująca wartości dostępne tylko za pomocą indeksów numerycznych",
            "Tablica przechowująca dane w postaci par klucz-wartość"
        ],
        poprawna: "D"
    },
    {
        id: 409,
        pytanie: "Jakiej funkcji w C++ można użyć do dynamicznego alokowania pamięci dla tablicy?",
        odpowiedzi: [
            "delete[]",
            "free()",
            "malloc()",
            "sizeof()"
        ],
        poprawna: "C"
    },
    {
        id: 410,
        pytanie: "Które operacje na plikach są podstawowe?",
        odpowiedzi: [
            "Otwieranie, zapisywanie, odczytywanie, zamykanie",
            "Zmiana rozszerzenia plików w trakcie działania programu",
            "Tylko otwieranie i zamykanie plików",
            "Usuwanie i tworzenie nowych plików"
        ],
        poprawna: "A"
    },
    {
        id: 411,
        pytanie: "Do czego służy iterator w kolekcjach?",
        odpowiedzi: [
            "Do usuwania elementów z kolekcji",
            "Do zmiany typu kolekcji w trakcie działania programu",
            "Do przechodzenia przez elementy kolekcji",
            "Do tworzenia kopii kolekcji"
        ],
        poprawna: "C"
    },
    {
        id: 412,
        pytanie: "W którym przypadku kolekcja typu lista będzie bardziej efektywna niż tablica?",
        odpowiedzi: [
            "Kiedy chcemy uzyskać dostęp do elementów za pomocą indeksu",
            "Kiedy liczba elementów w kolekcji jest stała",
            "Kiedy liczba elementów w kolekcji dynamicznie się zmienia",
            "Kiedy znamy dokładny rozmiar kolekcji przed kompilacją"
        ],
        poprawna: "C"
    },
    {
        id: 413,
        pytanie: "Dlaczego warto używać kolekcji typu mapa (np. HashMap w Javie) przy projektowaniu zestawów danych?",
        odpowiedzi: [
            "Bo umożliwiają sortowanie danych bez dodatkowych operacji",
            "Ze względu na szybki dostęp do elementów za pomocą klucza",
            "Bo kolekcje typu mapa zajmują mniej pamięci niż tablice",
            "Bo nie wymagają znajomości rozmiaru danych przed kompilacją"
        ],
        poprawna: "B"
    },
    {
        id: 414,
        pytanie: "Co jest zaletą wykorzystania pseudokodu podczas projektowania algorytmu?",
        odpowiedzi: [
            "Zrozumiałość dla osób niezaznajomionych z programowaniem",
            "Łatwość w modyfikacji kodu maszynowego",
            "Tworzenie dynamicznych struktur danych",
            "Możliwość szybkiego wykonania algorytmu w dowolnym języku"
        ],
        poprawna: "A"
    },
    {
        id: 415,
        pytanie: "Jakie podejście najlepiej zastosować podczas projektowania aplikacji, która ma działać na różnych platformach?",
        odpowiedzi: [
            "Skupienie się wyłącznie na wyglądzie aplikacji",
            "Wyłącznie dostosowanie aplikacji do systemu Windows",
            "Zastosowanie technik responsywnego projektowania interfejsu",
            "Tworzenie dedykowanego kody dla każdej platformy"
        ],
        poprawna: "C"
    },
    {
        id: 416,
        pytanie: "Co należy wziąć pod uwagę przy projektowaniu struktury danych dla aplikacji?",
        odpowiedzi: [
            "Wyłącznie wymagania sprzętowe",
            "Brak związku między strukturą danych a wydajnością aplikacji",
            "Wyłącznie typ języka programowania",
            "Złożoność przetwarzania danych i ich optymalną organizację"
        ],
        poprawna: "D"
    },
    {
        id: 417,
        pytanie: "Czym charakteryzuje się biblioteka statyczna w porównaniu do dynamicznej?",
        odpowiedzi: [
            "Może być modyfikowana w trakcie działania programu",
            "Jest ładowana do pamięci podczas działania programu",
            "Jest dołączana do pliku wykonywalnego podczas kompilacji",
            "Nie wymaga obecności pliku wykonywalnego"
        ],
        poprawna: "C"
    },
    {
        id: 418,
        pytanie: "Językiem interpretowanym, niewymagającym kompilacji jest",
        odpowiedzi: [
            "Java",
            "C++",
            "C#",
            "Python"
        ],
        poprawna: "D"
    },
    {
        id: 419,
        pytanie: "Ze specyfikacji wymagań klienta wynika, że aplikacja mobilna ma umieszczone kontrolki w miejscach określonych bezwzględnymi współrzędnymi. W takim przypadku dla interfejsu użytkownika należy wybrać rozkład",
        odpowiedzi: [
            "RelativeLayout",
            "AbsoluteLayout",
            "FlexLayout",
            "StackLayout"
        ],
        poprawna: "B"
    },
    {
        id: 420,
        pytanie: "Proces utworzenia atrapy aplikacji, składającej się jedynie z GUI w celu przetestowania wyglądu aplikacji można nazwać",
        odpowiedzi: [
            "prototypowaniem.",
            "projektowaniem.",
            "testowaniem.",
            "analizowaniem."
        ],
        poprawna: "A"
    },
    {
        id: 421,
        pytanie: "Na przedstawionym schemacie znajdują się klasy połączone dziedziczeniem, gdzie poziom I to klasa bazowa a pozostałe klasy są jej potomkami. Należy zdefiniować metodę, która będzie się różniła dla samochodów osobowych i ciężarowych oraz na przyszłość wymusić utworzenie takiej metody dla dowolnej klasy poziomu II. Zgodnie z zasadami programowania obiektowego należy umieścić metodę",
        odpowiedzi: [
            "jedynie we wszystkich klasach poziomu III, zależnie od tego czy są to samochody osobowe czy ciężarowe.",
            "jedynie w klasach Osobowy i Ciężarowy.",
            "jako abstrakcyjną w klasach II poziomu.",
            "jako abstrakcyjną w klasie bazowej i jej implementacje w klasach Osobowy i Ciężarowy."
        ],
        poprawna: "D",
        obraz: "421.jpg"
    },
    {
        id: 422,
        pytanie: "Z prawa autorskiego są wyłączone",
        odpowiedzi: [
            "słowa piosenek zespołu muzycznego.",
            "krótkie opowiadania.",
            "pojęcia matematyczne.",
            "artykuły naukowe zawierający argumenty popierające tezę."
        ],
        poprawna: "C"
    },
    {
        id: 423,
        pytanie: "npm install bootstrap –save \nZa pomocą przedstawionego polecenia można zainstalować bibliotekę Bootstrap dla projektu wraz z",
        odpowiedzi: [
            "dodaniem jej do obiektu devDependencies.",
            "generowaniem całego pliku package.json dla projektu.",
            "dodaniem jej do folderu node_modules.",
            "modyfikacją pliku konfiguracyjnego .npmrc."
        ],
        poprawna: "C"
    },
    {
        id: 424,
        pytanie: "Po wykonaniu przedstawionego kodu zapisanego w języku C# zmienne a i b będą miały wartości",
        odpowiedzi: [
            "a = 30 oraz b = 7",
            "a = 63 oraz b = 8",
            "a = 31 oraz b = 7",
            "a = 62 oraz b = 8"
        ],
        poprawna: "B",
        obraz: "424.jpg"
    },
    {
        id: 425,
        pytanie: "if (zmienna == false) ... \nKtórego typu jest zmienna, jeśli przedstawiony kod jest poprawny semantycznie i został zapisany w języku o silnym typowaniu?",
        odpowiedzi: [
            "Liczbowego.",
            "Łańcuchowego.",
            "Strukturalnego.",
            "Logicznego."
        ],
        poprawna: "D"
    },
    {
        id: 426,
        pytanie: "Przedstawione na ilustracji narzędzie umożliwia",
        odpowiedzi: [
            "instalację oprogramowania RAD dla tworzenia aplikacji z Android SDK.",
            "uruchamianie emulacji urządzeń mobilnych z systemu Android.",
            "aktualizację narzędzi dla Android SDK.",
            "instalowanie narzędzi do tworzenia aplikacji na platformach mobilnych iOS i Android."
        ],
        poprawna: "C",
        obraz: "426.jpg"
    },
    {
        id: 427,
        pytanie: "Wskaż ideę sortowania przez wstawianie.",
        odpowiedzi: [
            "W nieuporządkowanym zbiorze wyszukiwany jest element maksymalny i wstawiany na odpowiednią pozycję zbioru uporządkowanego.",
            "Kolejny element jest umieszczany w odpowiednim miejscu zbioru posortowanego.",
            "Elementy są porządkowane w rekurencyjnie podzielonych zbiorach.",
            "Porównywane są elementy znajdujące się obok siebie oraz układane w odpowiednim porządku."
        ],
        poprawna: "B"
    },
    {
        id: 428,
        pytanie: "Aplikacja kalendarz ma za zadanie wyświetlać dni miesiąca tak, aby każdy z nich był umieszczony w odpowiednim wierszu i kolumnie. Który rozkład jest najlepiej dostosowany do tego zastosowania?",
        odpowiedzi: [
            "Stack",
            "Grid",
            "Flex",
            "Absolute"
        ],
        poprawna: "B"
    },
    {
        id: 429,
        pytanie: "Pewien algorytm jest szybszy od algorytmu wyszukiwania liniowego. Oznacza to, że jego złożoność obliczeniowa to",
        odpowiedzi: [
            "O(log n)",
            "O(n+m)",
            "O(n)",
            "O(n2)"
        ],
        poprawna: "A"
    },
    {
        id: 430,
        pytanie: "Który zestaw kontrolek został zastosowany w aplikacji utworzonej w Android Studio?",
        odpowiedzi: [
            "EditText, Switch, Chip, RatingBar.",
            "EditText, Switch, ImageView, RatingBar.",
            "EditText, ToggleButton, ImageView, RatingBar.",
            "EditText, Switch, ImageView, SeekBar."
        ],
        poprawna: "B",
        obraz: "430.jpg"
    },
    {
        id: 431,
        pytanie: "W języku XAML aby zdefiniować przycisk wypełniony obrazem o nazwie grafika.jpg należy zapisać",
        odpowiedzi: [
            "<Button>Source=\"grafika.jpg\"</Button>",
            "<Button Src=\"grafika.jpg\"/>",
            "<Button> <Img=\"grafika.jpg\"></Img> </Button>",
            "<Button> <Image Source=\"grafika.jpg\"></Image> </Button>"
        ],
        poprawna: "D"
    },
    {
        id: 432,
        pytanie: "Który rodzaj testów wykonuje się po testach jednostkowych, kiedy należy sprawdzić jak moduły funkcjonują w jednej aplikacji?",
        odpowiedzi: [
            "Testy jednostkowe.",
            "Testy interfejsu.",
            "Testy wdrożeniowe.",
            "Testy integracji."
        ],
        poprawna: "D"
    },
    {
        id: 433,
        pytanie: "Typowymi narzędziami do tworzenia aplikacji typu front-end są",
        odpowiedzi: [
            "Django i Angular",
            "ASP.NET i React.js",
            "Spring i Node.js",
            "Angular i React.js"
        ],
        poprawna: "D"
    },
    {
        id: 434,
        pytanie: "\"Definiują dane, z jakich składać się będzie każdy obiekt klasy. Danymi tymi mogą być wielkości dowolnego typu wbudowanego lub zdefiniowanego w programie\" Przedstawiona definicja dotyczy",
        odpowiedzi: [
            "pól klasy.",
            "kwalifikatorów dostępu.",
            "metod klasy.",
            "zmiennych."
        ],
        poprawna: "A"
    },
    {
        id: 435,
        pytanie: "Do których pól może odwołać się obiekt typu Klasa1 zainicjowany w programie głównym?",
        odpowiedzi: [
            "nazwa2, czyDodatnia",
            "nazwa, liczba, liczba2",
            "nazwa, liczba",
            "liczba2, nazwa2, czydodatnia"
        ],
        poprawna: "C",
        obraz: "435.jpg"
    },
    {
        id: 436,
        pytanie: "W aplikacji internetowej jednym z udogodnień dla osób z niepełnosprawnością jest",
        odpowiedzi: [
            "zapewnienie materiałów video zamiast audio.",
            "działanie tylko w popularnych przeglądarkach dla ujednolicenia interpretacji skryptów JS.",
            "czarno-żółta kolorystyka aplikacji.",
            "kolorystyka aplikacji spójna z logo i barwami firmy."
        ],
        poprawna: "C"
    },
    {
        id: 437,
        pytanie: "Metody abstrakcyjne mogą być definiowane w klasach",
        odpowiedzi: [
            "dla których powoływane są obiekty.",
            "dla których nie można powołać obiektów.",
            "w których nie można zdefiniować pól.",
            "po których nie może dziedziczyć inna klasa."
        ],
        poprawna: "B"
    },
    {
        id: 438,
        pytanie: "Przedstawiony rekurencyjny kod źródłowy zapisany językiem Python oblicza",
        odpowiedzi: [
            "NWW.",
            "sumę kolejnych pięciu liczb.",
            "silnię.",
            "wyraz ciągu Fibonacciego."
        ],
        poprawna: "C",
        obraz: "438.jpg"
    },
    {
        id: 439,
        pytanie: "W kodzie Angular lub React.js zapisano funkcję zatwierdz obsługującą zdarzenie zatwierdzenia formularza. Poprawne skojarzenie jej z formularzem przedstawia zapis",
        odpowiedzi: [
            "w Angular:  <form (ngSubmit)= \"zatwierdz(f)\"> w React.js: <form submit={this.zatwierdz}>",
            "w Angular:  <form #f= \"ngForm\" (ngSubmit)= \"zatwierdz(f)\"> w React.js: <form onSubmit={this.zatwierdz}>",
            "w Angular:  <form #f= \"ngForm\" onSubmit= \"zatwierdz(f)\"> w React.js: <form onSubmit={this}>",
            "w Angular:  <form #f= \"ngForm\" (onSubmit)= \"zatwierdz(f)\"> w React.js: <form onSubmit={zatwierdz()}>"
        ],
        poprawna: "B"
    },
    {
        id: 440,
        pytanie: "Błąd logiczny w kodzie C# wyświetlającym tablicę polega na zastosowaniu",
        odpowiedzi: [
            "typów niepasujących do problemu.",
            "warunku, który sprawia, że pętla jest nieskończona.",
            "nieprawidłowej inicjalizacji tablicy.",
            "warunku, który sprawia, że pętla nie wykona się ani razu."
        ],
        poprawna: "D",
        obraz: "440.jpg"
    },
    {
        id: 441,
        pytanie: "Kontrolką listy rozwijanej, umożliwiającą wybór tylko jednego elementu poprzez wciśnięcie przycisku ze strzałką w dół i uzyskanie listy elementów, jest",
        odpowiedzi: [
            "ListBox.",
            "ComboBox.",
            "ViewBox.",
            "CheckBox."
        ],
        poprawna: "B"
    },
    {
        id: 442,
        pytanie: "Pierwszą czynnością pomocy przedmedycznej przy krwotoku nogi lub ręki jest",
        odpowiedzi: [
            "rozmowa z poszkodowanym dotycząca okoliczności wypadku.",
            "oczyszczenie rany wraz z odkażeniem.",
            "wykonanie ucisku na ranę, następnie założenie opatrunku uciskowego.",
            "nałożenie na ranę luźnego jałowego opatrunku."
        ],
        poprawna: "C"
    },
    {
        id: 443,
        pytanie: "Na podstawie kodu źródłowego oraz pomocy do języka Java, można stwierdzić, że obiekt capitalCities typu Hashtable jest kolekcją",
        odpowiedzi: [
            "indeksowaną kolejnymi liczbami.",
            "zawierającą w każdej komórce dwie wartości: państwo i stolicę oraz indeksowaną liczbami.",
            "indeksowaną wartościami napisowymi.",
            "zawierającą napis składający się z dwóch wartości napisowych (String, String)"
        ],
        poprawna: "C",
        obraz: "443.jpg"
    },
    {
        id: 444,
        pytanie: "Administrator sklepu internetowego zauważył częste przypadki porzucania podstron. Korespondencja od sfrustrowanych klientów wskazuje na trudną obsługę witryny sklepu. Aby zbadać przyczyny, należy zlecić testy",
        odpowiedzi: [
            "wdrożeniowe.",
            "skalowalności.",
            "użyteczności.",
            "jednostkowe."
        ],
        poprawna: "C"
    },
    {
        id: 445,
        pytanie: "Zdarzenie MouseWheel występuje, gdy zostanie",
        odpowiedzi: [
            "wykonamy ruch myszą po podłożu.",
            "wciśnięty programowalny boczny przycisk myszy.",
            "wciśnięty lewy lub prawy przycisk myszy.",
            "poruszona rolka przewijania myszy."
        ],
        poprawna: "D"
    },
    {
        id: 446,
        pytanie: "Destruktor jest specjalną metodą, która",
        odpowiedzi: [
            "zawsze ma za zadanie usunięcie pamięci po obiekcie.",
            "jest wywoływana w dowolnym momencie korzystania z obiektu.",
            "jest przeznaczona do wywołania zaraz po wywołaniu konstruktora.",
            "służy do wykonania operacji przed usunięciem obiektu."
        ],
        poprawna: "D"
    },
    {
        id: 447,
        pytanie: "Definicja metody: protected bool Zatrudnij(int stawka) {...}\nOpis metody: mogą korzystać z niej wszystkie klasy dziedziczące po klasie bazowej Osoba, w tym klasy utworzone w przyszłości. Dla wszystkich klas metoda ma identyczną implementację\nNa obrazie przedstawiono schemat dziedziczenia klas oraz deklarację metody wraz z jej opisem. Zgodnie z zasadami programowania obiektowego metodę Zatrudnij powinno się umieścić",
        odpowiedzi: [
            "we wszystkich klasach drzewa dziedziczenia, także tych, które powstaną w przyszłości.",
            "tylko w klasie Osoba.",
            "tylko w klasach Pracownik, Student oraz w każdej nowo powstałej metodzie drzewa dziedziczenia.",
            "jedynie w klasie Pracownik."
        ],
        poprawna: "B",
        obraz: "447.jpg"
    },
    {
        id: 448,
        pytanie: "W serwisie internetowym podstępnie osadzono kod JavaScript, który pozwala na przejęcie kontroli dostępu do danych użytkownika. Taka technika hakerska to atak",
        odpowiedzi: [
            "brute force",
            "SQL Injection",
            "cross-site scripting",
            "path traversal"
        ],
        poprawna: "C"
    },
    {
        id: 449,
        pytanie: "Ideę którego typu złożonego przedstawiono na ilustracji?",
        odpowiedzi: [
            "Tablicy.",
            "Struktury.",
            "Wektora.",
            "Listy."
        ],
        poprawna: "D",
        obraz: "449.jpg"
    },
    {
        id: 450,
        pytanie: "Na podstawie fragmentu pomocy do frameworka .NET MAUI wskaż wyrównanie widoku, które zajmuje szerokość lub wysokość elementu nadrzędnego",
        odpowiedzi: [
            "Center.",
            "Fill.",
            "Start.",
            "End."
        ],
        poprawna: "B",
        obraz: "450.jpg"
    },
    {
        id: 452,
        pytanie: "Przedstawione funkcjonalnie sobie równoważne kody Angular i React.js mają za zadanie",
        odpowiedzi: [
            "wyświetlić przycisk Prześlij, gdy stan jest równy 1.",
            "wyświetlić przycisk Modyfikuj, gdy stan jest równy 1.",
            "wyświetlić dwa przyciski Modyfikuj i Prześlij.",
            "nie wyświetlać żadnego przycisku, gdy stan jest równy 2."
        ],
        poprawna: "B",
        obraz: "452.jpg"
    },
    {
        id: 453,
        pytanie: "Która czynność jest typowa dla testów bezpieczeństwa?",
        odpowiedzi: [
            "Sprawdzenie wydajności działania algorytmów szyfrujących dane aplikacji.",
            "Sprawdzenie podatności aplikacji internetowej na przepełnienia bufora.",
            "Sprawdzenie poprawności działania każdej metody w module.",
            "Sprawdzenie kompletności danych wprowadzanych w oknach dialogowych."
        ],
        poprawna: "B"
    },
    {
        id: 454,
        pytanie: "Jeżeli klasa pochodna dziedziczy po klasie nadrzędnej, to które zdanie dotyczące obiektów jest prawdziwe?",
        odpowiedzi: [
            "Obiekty klas pochodnych mają ten sam rozmiar pamięci co obiekty klas nadrzędnych.",
            "Do referencji wskazującej na obiekt klasy bazowej może być przypisany obiekt klasy pochodnej.",
            "Obiekty klas pochodnych można przypisać do obiektów klasy nadrzędnej przez wartość, bez zastosowania referencji",
            "Obiekty klas pochodnych nie mogą zmienić typu na typ klasy nadrzędnej."
        ],
        poprawna: "B"
    },
    {
        id: 455,
        pytanie: "W klasie zdefiniowano pole, do którego dalej w programie odwoływano się za pomocą nazwy klasy, bez tworzenia obiektu. Oznacza to, że pole musiało być zdefiniowane ze słowem kluczowym",
        odpowiedzi: [
            "private.",
            "static.",
            "virtual.",
            "final."
        ],
        poprawna: "B"
    },
    {
        id: 456,
        pytanie: "Na podstawie przedstawionych w ramce rozdziałów dokumentacji systemu informatycznego można stwierdzić, że jest to dokumentacja",
        odpowiedzi: [
            "testów systemu.",
            "techniczna.",
            "użytkownika systemu.",
            "wdrożenia."
        ],
        poprawna: "B",
        obraz: "456.jpg"
    },
    {
        id: 457,
        pytanie: "Który stabilny algorytm sortowania ma złożoność liniową O(n)?",
        odpowiedzi: [
            "Sortowanie przez wstawianie.",
            "Sortowanie bąbelkowe.",
            "Sortowanie szybkie.",
            "Sortowanie przez zliczanie."
        ],
        poprawna: "D"
    },
    {
        id: 458,
        pytanie: "Aby w bibliotece .NET MAUI wpisać obliczony kodem C# wynik do etykiety w miejscu trzech kropek należy zapisać",
        odpowiedzi: [
            "etykieta1.Text = \"Wynik: \" + wynik.ToString();",
            "etykieta1.wynik = \"Wynik: \" + wynik.ToString();",
            "Text =  \"Wynik: \" + wynik.ToString();",
            "etykieta1 =  \"Wynik: \" + wynik.ToString();"
        ],
        poprawna: "A",
        obraz: "458.jpg"
    },
    {
        id: 459,
        pytanie: "Składowe R G B koloru DarkMagenta w kodzie szesnastkowym 8B 00 8B w kodzie dziesiętnym mają postać",
        odpowiedzi: [
            "213 0 213",
            "139 0 139",
            "123 0 123",
            "138 0 138"
        ],
        poprawna: "B"
    },
    {
        id: 460,
        pytanie: "Wskaż zachowanie etyczne w zawodzie programisty.",
        odpowiedzi: [
            "Umieszczanie na prywatnej stronie internetowej ciekawszych części kodu napisanego w ramach pracy.",
            "Dzielenie się swoją wiedzą ogólną przez odpowiadanie na posty na forach programistycznych.",
            "Świadome ignorowanie procedur zapewnienia jakości produktu.",
            "Opowiadanie o aktualnych pracach zespołu kolegom z innych firm informatycznych."
        ],
        poprawna: "B"
    },
    {
        id: 461,
        pytanie: "W aplikacji do obsługi kadr zdefiniowano klasy: Pracownik, Sekretarka, Kierownik, Logistyk. Zakładając że nazewnictwo klas jest znaczące i zgodne z ich przeznaczeniem, klasą bazową jest",
        odpowiedzi: [
            "Sekretarka.",
            "Logistyk.",
            "Pracownik.",
            "Kierownik."
        ],
        poprawna: "C"
    },
    {
        id: 462,
        pytanie: "Wskaż symbol oznaczający urządzenie o I klasie ochronności przeciwporażeniowej.",
        odpowiedzi: [
            "Symbol 1.",
            "Symbol 2.",
            "Symbol 3.",
            "Symbol 4."
        ],
        poprawna: "B",
        obraz: "462.jpg"
    },
    {
        id: 463,
        pytanie: "Która kontrolka obrazu ma przypisaną akcję do zdarzenia, gdy dowolny przycisk myszy zostanie zwolniony?",
        odpowiedzi: [
            "<Image Source=\"motor.jpg\" Height=\"50\" Width=\"20\" MouseWheel=\"zd4\"/>",
            "<Image Source=\"motor.jpg\" Height=\"50\" Width=\"20\" MouseMove=\"zd2\"/>",
            "<Image Source=\"motor.jpg\" Height=\"50\" Width=\"20\" MouseUp=\"zd1\"/>",
            "<Image Source=\"motor.jpg\" Height=\"50\" Width=\"20\" MouseDown=\"zd3\"/>"
        ],
        poprawna: "C"
    },
    {
        id: 464,
        pytanie: "Opisanym obiektem jest",
        odpowiedzi: [
            "kolekcja.",
            "klucz podstawowy.",
            "iterator.",
            "indeks tablicy."
        ],
        poprawna: "C",
        obraz: "464.jpg"
    },
    {
        id: 465,
        pytanie: "Który z operatorów przedstawionych w ramce ma najniższy priorytet?",
        odpowiedzi: [
            "/ (dzielenie).",
            "+ (dodawanie).",
            "= (przypisanie)",
            "== (porównanie)"
        ],
        poprawna: "C",
        obraz: "465.jpg"
    },
    {
        id: 467,
        pytanie: "Wskaż czynność testową, która może zostać zaplanowana w przedstawionym scenariuszu testów.",
        odpowiedzi: [
            "Sprawdzić czy imię i nazwisko osoby zgada się z adresem email.",
            "Zatwierdzić formularz bez wprowadzonej treści wiadomości.",
            "Wpisać adres rozpoczynając od znaku @.",
            "Sprawdzić czy wpisano wszystkie pola formularza."
        ],
        poprawna: "C",
        obraz: "467.jpg"
    },
    {
        id: 468,
        pytanie: "Przedstawiony kod szuka określonej wartości w tablicy. Aby zoptymalizować kod pod względem iteracji pętli można wstawić",
        odpowiedzi: [
            "i = 0;  while(tab[i] != szukana)  i++; zamiast linii 9, 10 oraz usunąć linię 12",
            "i++; po linii 11",
            "i = 0;  while(i < tab.Length)  zamiast linii 5",
            "if (tab[i] != szukana) zamieniając warunek w linii 10"
        ],
        poprawna: "A",
        obraz: "468.jpg"
    },
    {
        id: 469,
        pytanie: "Na podstawie przedstawionego w ramce opisu komponentu offcanvas z biblioteki Bootstrap, wskaż zdanie prawdziwe.",
        odpowiedzi: [
            "Na stronie można jednocześnie pokazać kilka komponentów offcanvas.",
            "Przyciski są wyzwalaczami komponentu offcanvas, nie można do tego celu użyć kotwic.",
            "Komponent offcanvas może być jedynie po lewej lub prawej stronie obszaru roboczego.",
            "Komponent offcanvas może być chowany poza obszar roboczy."
        ],
        poprawna: "D",
        obraz: "469.jpg"
    },
    {
        id: 470,
        pytanie: "Który wynik został wygenerowany przedstawioną pętlą zapisaną w języku C#?",
        odpowiedzi: [
            "Wynik 1.",
            "Wynik 2.",
            "Wynik 3.",
            "Wynik 4."
        ],
        poprawna: "D",
        obraz: "470.jpg"
    },
    {
        id: 471,
        pytanie: "Czynności przedstawione w ramce są etapami",
        odpowiedzi: [
            "kompilacji.",
            "interpretacji.",
            "debugowania.",
            "linkowania."
        ],
        poprawna: "A",
        obraz: "471.jpg"
    },
    {
        id: 472,
        pytanie: "Wskaż okno dialogowe, które zostanie wygenerowane na podstawie przedstawionego fragmentu kodu XAML. Dla uproszczenia, w kodzie usunięto marginesy, wyrównania i rozmiary. Zaznaczenia dokonano po uruchomieniu aplikacji.",
        odpowiedzi: [
            "Okno 1.",
            "Okno 2.",
            "Okno 3.",
            "Okno 4."
        ],
        poprawna: "B",
        obraz: "472.jpg"
    },
    {
        id: 473,
        pytanie: "Na ilustracji przedstawiono okno tworzenia aplikacji",
        odpowiedzi: [
            "mobilnej typu cross-platform dla systemów Android i iOS.",
            "mobilnej jedynie dla telefonów firmy Apple.",
            "webowej, która będzie mogła być odtwarzana na telefonach.",
            "webowej dla platform Windows, Apple i iOS."
        ],
        poprawna: "A",
        obraz: "473.jpg"
    },
    {
        id: 474,
        pytanie: "Typami zmiennoprzecinkowymi są",
        odpowiedzi: [
            "float i short.",
            "long i char.",
            "int i long.",
            "float i doobule."
        ],
        poprawna: "D"
    },
    {
        id: 475,
        pytanie: "Systemy kontroli wersji przede wszystkim zapewniają",
        odpowiedzi: [
            "zarządzanie testami funkcjonalności.",
            "tworzenie diagramów Gantta dla zespołu programistów.",
            "śledzenie zmian w projekcie.",
            "sprawne zarządzanie testowaniem aplikacji."
        ],
        poprawna: "C"
    },
    {
        id: 476,
        pytanie: "Na podstawie przedstawionej ilustracji klasa LIFO odziedziczy metody zdefiniowane",
        odpowiedzi: [
            "jedynie w klasie Kolejka.",
            "w klasach Zbiór, Lista, Kolejka.",
            "w klasach Kolekcja i Kolejka.",
            "jedynie w klasie LIFO."
        ],
        poprawna: "C",
        obraz: "476.jpg"
    },
    {
        id: 477,
        pytanie: "Przedstawiony warunek zapisany w C# jest spełniony dla imion",
        odpowiedzi: [
            "Jacek, Janusz, Jaromir.",
            "Joanna, Janina, Jowita.",
            "Jowinian, Jarosław, Justrynian.",
            "Jeremi, Jonasz, Juliusz."
        ],
        poprawna: "B",
        obraz: "477.jpg"
    },
    {
        id: 478,
        pytanie: "Dla której wartości x zostanie wyświetlony napis TAK?",
        odpowiedzi: [
            "dla x = 15",
            "dla x = 5",
            "dla x = 3",
            "dla x = 12"
        ],
        poprawna: "A",
        obraz: "478.jpg"
    },
    {
        id: 479,
        pytanie: "Na podstawie opisu czterech kreacyjnych wzorców projektowych wskaż wzorzec pasujący do problemu:\nW aplikacji istnieje potrzeba kontroli dostępu do współdzielonego pliku. Z tego powodu podczas tworzenia nowego obiektu, gdy wcześniej już stworzono obiekt tej klasy, zamiast nowego obiektu jest zwracany ten uprzednio utworzony.",
        odpowiedzi: [
            "fabryka abstrakcyjna.",
            "Budowniczy.",
            "Singleton.",
            "Metoda wytwórcza."
        ],
        poprawna: "C",
        obraz: "479.jpg"
    },
    {
        id: 480,
        pytanie: "Algorytmy o nazwach: SHA-1, SHA-2, MD5 należą do rodziny",
        odpowiedzi: [
            "generatorów liczb pseudolosowych.",
            "algorytmów heurystycznych.",
            "funkcji skrótów kryptograficznych.",
            "algorytmów szyfrowania symetrycznego."
        ],
        poprawna: "C"
    },
    {
        id: 481,
        pytanie: "Aby uzyskać dwukierunkową kontrolę (zapis i odczyt) nad wartością kontrolki input we frameworku Angular lub bibliotece React.js należy zapisać",
        odpowiedzi: [
            "React.js: <input value=this.state.input1 /> bez obsługi zdarzenia onChange Angular: <input (ngModel)=\"input1\" />",
            "React.js: <input value={this.state.input1}/> bez obsługi zdarzenia onChange Angular: <input ngModel=\"input1\" />",
            "React.js: <input value=\"input1\" /> oraz obsłużyć zdarzenie onChange Angular: <input [(ngForm)]=\"input1\" />",
            "React.js: <input value={this.state.input1} /> oraz obsłużyć zdarzenie onChange Angular: <input [(ngModel)]=\"input1\" />"
        ],
        poprawna: "D"
    },
    {
        id: 482,
        pytanie: "Na podstawie ilustracji można stwierdzić, że tak skonfigurowane środowisko MS Visual Studio umożliwia tworzenie projektów w językach",
        odpowiedzi: [
            "C# i Python.",
            "Java i C++.",
            "Java i JavaScript.",
            "ANSI C, C++ i C#."
        ],
        poprawna: "A",
        obraz: "482.jpg"
    },
    {
        id: 483,
        pytanie: "W pakiecie zdefiniowano jedynie klasy Samochod i Ciezarowka. Dla przedstawionego kodu Java, aby pole przebieg mogło być zastosowane w metodzie WypiszDane, nie było dostępne poza metodami klas Samochod i Ciezarowka, w miejscu znaków zapytania należy zastosować kwalifikator dostępu",
        odpowiedzi: [
            "protected.",
            "public.",
            "private.",
            "final."
        ],
        poprawna: "A",
        obraz: "483.jpg"
    },
    {
        id: 484,
        pytanie: "Na ilustracji został przedstawiony diagram Gantta dla zespołu realizującego aplikację sklepu internetowego. Aktualnie rozpoczyna się drugi tydzień prac. Do projektu zostało dodane zadanie: integracja płatności, którego długość to tydzień. Każdy z członków zespołu może wykonać zadanie. Zadanie musi być w całości wykonane przed integracją. Aby nie przedłużać czasu wykonania całego projektu, zadanie to powinno być powierzone",
        odpowiedzi: [
            "Krzyśkowi.",
            "Ewie.",
            "Darkowi.",
            "Adzie."
        ],
        poprawna: "B",
        obraz: "484.jpg"
    },
    {
        id: 485,
        pytanie: "W ramce przedstawiono definicję",
        odpowiedzi: [
            "Hermetyzacji.",
            "Polimorfizmu.",
            "Zaprzyjaźnienia.",
            "Dziedziczenia."
        ],
        poprawna: "A",
        obraz: "485.jpg"
    },
    {
        id: 486,
        pytanie: "Możliwość oznaczenia utworu swoim nazwiskiem lub pseudonimem, a także możliwość nadzoru nad sposobem korzystania z utworu, w tym pozwolenie na jego użycie zapewnia autorowi",
        odpowiedzi: [
            "autorskie prawo osobiste.",
            "prawo cytatu.",
            "autorskie prawo majątkowe.",
            "prawo pokrewne."
        ],
        poprawna: "A"
    },
    {
        id: 487,
        pytanie: "W aplikacji desktopowej zastosowano pole wyboru przedstawione na ilustracji. Którą kontrolką mobilną powinno się zastąpić to pole, projektując interfejs graficzny na smartfon?",
        odpowiedzi: [
            "Kontrolką 1.",
            "Kontrolką 2.",
            "Kontrolką 3.",
            "Kontrolką 4."
        ],
        poprawna: "B",
        obraz: "487.jpg"
    },
    {
        id: 488,
        pytanie: "Podczas pozyskiwania od klienta wymagań do systemu, zastosowano metodę FURPS, opisaną w ramce. Pytania do klienta o wymagania dotyczące skalowalności systemu i czasu odpowiedzi są przyporządkowane do kategorii",
        odpowiedzi: [
            "Performance.",
            "Functionality.",
            "Supportability.",
            "Usability."
        ],
        poprawna: "A",
        obraz: "488.jpg"
    },
    {
        id: 489,
        pytanie: "Jak należy dokończyć kod deklarujący obiekt lista zapisany w języku C#?\nList<String> lista = ???",
        odpowiedzi: [
            "lista<String>;",
            "new List<String>();",
            "List;",
            "new lista<List>();"
        ],
        poprawna: "B"
    },
    {
        id: 490,
        pytanie: "W ramce przedstawiono testy jednostkowe dla funkcji FizzBuzz. Który kod powinien być zapisany w miejscu znaków zapytania",
        odpowiedzi: [
            "Kod 1.",
            "Kod 2.",
            "Kod 3.",
            "Kod 4."
        ],
        poprawna: "D",
        obraz: "490.jpg"
    },
    {
        id: 491,
        pytanie: "Testy, które dają bezpośrednią informację na temat tego, w jaki sposób docelowi użytkownicy korzystają z systemu, to testy",
        odpowiedzi: [
            "funkcjonalne.",
            "obciążeniowe.",
            "bezpieczeństwa.",
            "użyteczności."
        ],
        poprawna: "D"
    },
    {
        id: 492,
        pytanie: "Fragment funkcji zapisanej językiem C++ utworzono stosując",
        odpowiedzi: [
            "bibliotekę funkcji matematycznych.",
            "przeładowanie metody fib.",
            "rekurencję.",
            "obiektowość."
        ],
        poprawna: "C",
        obraz: "492.jpg"
    },
    {
        id: 493,
        pytanie: "Optymalnym narzędziem przeznaczonym do monitorowania czasu wykonywania zadań w projekcie jest",
        odpowiedzi: [
            "mapa myśli.",
            "tabela porównawcza.",
            "diagram Gantta.",
            "cykl życia projektu."
        ],
        poprawna: "C"
    },
    {
        id: 494,
        pytanie: "Frameworkiem przeznaczonym dla języka Python jest",
        odpowiedzi: [
            "ASP.NET Core",
            "Angular",
            "Django",
            "React.js"
        ],
        poprawna: "C"
    },
    {
        id: 495,
        pytanie: "Który z poniższych rodzajów testów najlepiej sprawdza odporność aplikacji na duże obciążenie?",
        odpowiedzi: [
            "Testy obciążeniowe",
            "Testy funkcjonalne",
            "Testy bezpieczeństwa",
            "Testy zgodności"
        ],
        poprawna: "A"
    },
    {
        id: 496,
        pytanie: "Przedstawione na ilustracji okno jest narzędziem środowiska programistycznego służącym do definiowania",
        odpowiedzi: [
            "hierarchii klas zastosowanych w projekcie.",
            "rodzajów kontrolek stosowanych w danym interfejsie graficznym.",
            "schematów kolorystycznych dla pliku manifestu projektu.",
            "atrybutów kontrolki interfejsu graficznego."
        ],
        poprawna: "D",
        obraz: "496.jpg"
    },
    {
        id: 497,
        pytanie: "Na ilustracji przedstawiono narzędzie środowiska IDE o nazwie",
        odpowiedzi: [
            "Error List.",
            "Toolbox.",
            "Properties.",
            "Solution Explorer."
        ],
        poprawna: "B",
        obraz: "497.jpg"
    },
    {
        id: 498,
        pytanie: "Wynikiem sumy dwóch liczb binarnych jest",
        odpowiedzi: [
            "111000110",
            "111101100",
            "111011011",
            "001101111"
        ],
        poprawna: "B",
        obraz: "498.jpg"
    },
    {
        id: 499,
        pytanie: "Korzystając z obsługi wyjątków, aby zdefiniować i rzucić własny wyjątek, można zastosować polecenie",
        odpowiedzi: [
            "finally.",
            "catch.",
            "throw.",
            "try."
        ],
        poprawna: "C"
    },
    {
        id: 500,
        pytanie: "Która czynność jest typowa dla testów bezpieczeństwa?",
        odpowiedzi: [
            "Sprawdzenie podatności aplikacji internetowej na przepełnienia bufora.",
            "Sprawdzenie wydajności działania algorytmów szyfrujących dane aplikacji.",
            "Sprawdzenie poprawności działania każdej metody w module.",
            "Sprawdzenie kompletności danych wprowadzanych w oknach dialogowych."
        ],
        poprawna: "A"
    },
    {
        id: 501,
        pytanie: "Na ilustracji przedstawiono fragment okna programu, który umożliwia",
        odpowiedzi: [
            "uruchomienie emulacji urządzenia mobilnego.",
            "wybranie debugera, z którym uruchomi się aplikacja.",
            "zarządzenie zasobami aplikacji mobilnej.",
            "zarządzanie kompilatorami aplikacji mobilnej."
        ],
        poprawna: "A",
        obraz: "501.jpg"
    },
    {
        id: 502,
        pytanie: "Aby w aplikacji mobilnej dynamicznie wstawić dane do kontrolki ListBox należy jej przypisać właściwość",
        odpowiedzi: [
            "List<String>",
            "<ListBoxItem>",
            "Items",
            "ItemsSource"
        ],
        poprawna: "D"
    },
    {
        id: 503,
        pytanie: "Jakiego koloru będzie tło etykiety  zdefiniowanej w poniższym kodzie?",
        odpowiedzi: [
            "Brown.",
            "White.",
            "Pen.",
            "Teal."
        ],
        poprawna: "D",
        obraz: "503.jpg"
    },
    {
        id: 504,
        pytanie: "Wskaż główny cel testów regresji.",
        odpowiedzi: [
            "Upewnienie się, że cała aplikacja jest bezpieczna podczas wymiany danych w sieci.",
            "Wskaż główny cel testów regresji.",
            "Upewnienie się, że cała aplikacja działa poprawnie po wprowadzeniu zmian w jednym module.",
            "Sprawdzenie czy aplikacja działa wystarczająco wydajnie."
        ],
        poprawna: "C"
    },
    {
        id: 505,
        pytanie: "Ile pól przedstawionej klasy nie jest dostępnych poza tą klasą oraz pola te mogą być zastosowane wewnątrz klas potomnych?",
        odpowiedzi: [
            "5",
            "6",
            "3",
            "2"
        ],
        poprawna: "D",
        obraz: "505.jpg"
    },
    {
        id: 506,
        pytanie: "Tablice mieszające (ang. hash tables) są optymalną strukturą danych dla",
        odpowiedzi: [
            "funkcji cofania do poprzedniego artykułu w serwisie internetowym.",
            "wyszukania słowa spośród tysięcy innych słów, dla funkcji sprawdzania pisowni.",
            "funkcji cofania do poprzedniego artykułu w serwisie internetowym.",
            "przeglądania zdjęć sekwencyjnie jedno po drugim."
        ],
        poprawna: "B"
    },
    {
        id: 507,
        pytanie: "Testy użyteczności polegają na sprawdzeniu czy",
        odpowiedzi: [
            "dokumentacja projektowa zawiera opis użytych technologii.",
            "system jest łatwy w obsłudze i zrozumiały dla użytkownika.",
            "system wydajnie działa dla dużej liczby odbiorców jednocześnie zalogowanych.",
            "interfejs graficzny ma wszystkie kontrolki wymagane przez klienta."
        ],
        poprawna: "B"
    },
    {
        id: 508,
        pytanie: "Które zdanie dotyczące konstruktora kopiującego jest prawdziwe?",
        odpowiedzi: [
            "Jest bezparametrowy.",
            "Jako argument przyjmuje referencję do obiektu swojej klasy.",
            "Ma tyle argumentów ile pól klasy należy ustawić w konstruktorze.",
            "Może być dowolnie przeciążany."
        ],
        poprawna: "B"
    },
    {
        id: 509,
        pytanie: "Przedstawiony kod źródłowy zapisany językiem Python jest przykładem zastosowania",
        odpowiedzi: [
            "polimorfizmu.",
            "rekurencji.",
            "dziedziczenia.",
            "hermetyzacji."
        ],
        poprawna: "B",
        obraz: "509.jpg"
    },
    {
        id: 510,
        pytanie: "Funkcjonalność, która zachodzi w momencie, gdy kursor myszy znajdzie się na kontrolce, i tam się zatrzyma może być zaimplementowana w obsłudze zdarzenia",
        odpowiedzi: [
            "MouseLeave",
            "MouseDown",
            "MouseMove",
            "MouseHover"
        ],
        poprawna: "D"
    },
    {
        id: 511,
        pytanie: "W aplikacji mobilnej sklepu należy zaprojektować wygląd strony z produktami tak, aby wyświetlać na niej produkty uporządkowane w wierszach i kolumnach. Najbardziej odpowiednim w tym przypadku rozkładem jest",
        odpowiedzi: [
            "AbsoluteLayout",
            "Grid",
            "StackLayout",
            "Frame"
        ],
        poprawna: "B"
    },
    {
        id: 513,
        pytanie: "Na podstawie przedstawionej dokumentacji do języka Java wskaż prawidłową deklarację zmiennej typu Map.",
        odpowiedzi: [
            "Map[Integer] Pracownicy<String>;",
            "Map(Integer, String) Pracownicy;",
            "Interface Map<Integer, String> Pracownicy;",
            "Map<Integer, String> Pracownicy;"
        ],
        poprawna: "D",
        obraz: "513.jpg"
    },
    {
        id: 514,
        pytanie: "Błąd logiczny w przedstawionym kodzie C++ polega na zastosowaniu",
        odpowiedzi: [
            "typów niepasujących do problemu.",
            "nieznanego operatora -=",
            "nieskończonej pętli.",
            "przypisania w warunku pętli."
        ],
        poprawna: "D",
        obraz: "514.jpg"
    },
    {
        id: 515,
        pytanie: "Algorytm polega na dwukrotnym wykonaniu prostych operacji na każdym elemencie tablicy. Złożoność obliczeniowa takiego problemu to",
        odpowiedzi: [
            "O(n)",
            "O(n2)",
            "O(n + m)",
            "O(log n)"
        ],
        poprawna: "A"
    },
    {
        id: 516,
        pytanie: "Zastosowanie wskazanej na ilustracji przez kursor opcji menu programu MS Visual Studio spowoduje uruchomienie",
        odpowiedzi: [
            "skompilowanej aplikacji na emulatorze Pixel 5.",
            "emulatora z systemem iOS.",
            "skompilowanej aplikacji na Windows Machine.",
            "emulatora Pixel 5 bez załadowania aplikacji."
        ],
        poprawna: "A",
        obraz: "516.jpg"
    },
    {
        id: 517,
        pytanie: "Która klasa nie pozwala na tworzenie jej obiektów?",
        odpowiedzi: [
            "będąca na szczycie drzewa dziedziczenia (bazowa), pod warunkiem implementacji wszystkich jej metod",
            "będąca ostatnią w schemacie dziedziczenia (finalna).",
            "Abstrakcyjna.",
            "Zaprzyjaźniona."
        ],
        poprawna: "C"
    },
    {
        id: 518,
        pytanie: "Symptomami stanu nagłego zagrożenia zdrowia i życia jest",
        odpowiedzi: [
            "łagodna reakcja na użądlenie przez osę, bez wstrząsu anafilaktycznego.",
            "sinienie skóry z nasiloną dusznością.",
            "wysokie ciśnienie krwi i przyspieszony puls utrzymujące się tydzień.",
            "ciągłe uczucie zimna i dreszcze w słabo ogrzewanym budynku."
        ],
        poprawna: "B"
    },
    {
        id: 519,
        pytanie: "Który kod Angular lub React.js sprawi, że przycisk „Zatwierdź” wyświetli się jedynie w przypadku wypełnienia całego formularza, co identyfikuje pole isComplete.",
        odpowiedzi: [
            "w Angular:   <div *ngIf=\"isComplete == true\">  <button>Zatwierdź</button> </div> w React.js, w funkcji Return():  <div> { this.isComplete == true && <button>Zatwierdź</button> } </div>",
            "w Angular:  <div *ngFor=\"isComplete == true\">  <button>Zatwierdź</button> </div> w React.js, w funkcji Return():  <div> { let isComplete => true && <button>Zatwierdź</button> } </div>",
            "w Angular:   <div isComplete == true>  <button>Zatwierdź</button> </div> w React.js, w funkcji Return():  <div> { isComplete == true && <button>Zatwierdź</button> } </div>",
            "w Angular:   <div *ngIf=\"isComplete()\">  <button>Zatwierdź</button> </div> w React.js, w funkcji Return():  <div> { this.isComplete == true => <button>Zatwierdź</button> } </div>"
        ],
        poprawna: "A"
    },
    {
        id: 520,
        pytanie: "Program obsługuje pobieranie danych z serwera zewnętrznego. W sytuacji, gdy pobranie danych nie powiedzie się, następuje wyjątek w wyniku którego należy ustawić domyślne wartości tych danych. Czynność ustawienia wartości domyślnych powinna być wykonana w sekcji",
        odpowiedzi: [
            "finally.",
            "try.",
            "switch lub match.",
            "catch lub expect."
        ],
        poprawna: "D"
    },
    {
        id: 521,
        pytanie: "Na podstawie fragmentu kodu C# wskaż zmienną zadeklarowaną typem złożonym",
        odpowiedzi: [
            "zmienna1.",
            "zmienna2.",
            "zmienna3.",
            "zmienna4."
        ],
        poprawna: "C",
        obraz: "521.jpg"
    },
    {
        id: 522,
        pytanie: "\"podprogram składowy klasy, którego zadaniem jest działanie na rzecz określonych elementów danej klasy lub klas z nią spokrewnionych\"\nKtóre pojęcie zostało zdefiniowane?",
        odpowiedzi: [
            "Dziedziczenie.",
            "Pole klasy.",
            "Metoda.",
            "Funkcja zaprzyjaźniona."
        ],
        poprawna: "C"
    },
    {
        id: 523,
        pytanie: "Na przedstawionym schemacie znajdują się klasy i związki dziedziczenia, gdzie poziom I to klasa bazowa, a pozostałe klasy są jej potomkami. Aby każda z klas poziomu III mogła wywołać tą samą metodę, która jest niezmienna dla nich wszystkich, to zgodnie z zasadami programowania obiektowego należy zdefiniować ją",
        odpowiedzi: [
            "we wszystkich klasach poziomu I oraz poziomu II.",
            "jedynie we wszystkich klasach poziomu III.",
            "jedynie w klasie poziomu  I.",
            "we wszystkich klasach."
        ],
        poprawna: "C",
        obraz: "523.jpg"
    },
    {
        id: 524,
        pytanie: "Firma przechowuje kopię bezpieczeństwa danych pracowników na swoim serwerze lokalnym. Aby zwiększyć bezpieczeństwo danych, drugą kopię bezpieczeństwa można umieścić",
        odpowiedzi: [
            "na tym samym serwerze, lecz na osobnej partycji.",
            "w chmurze z zaszyfrowaniem danych.",
            "na prywatnych nośnikach pendrive pracowników.",
            "na lokalnych komputerach pracowników."
        ],
        poprawna: "B"
    },
    {
        id: 525,
        pytanie: "Po wykonaniu przedstawionego kodu zapisanego w języku C# zmienne a i b będą miały wartości",
        odpowiedzi: [
            "a = 16 oraz b = 1",
            "a = 16 oraz b = 0",
            "a = 14 oraz b = 0",
            "a = 16 oraz b = 0"
        ],
        poprawna: "C",
        obraz: "525.jpg"
    },
    {
        id: 526,
        pytanie: "Definicja metody w klasie Ksiazka: protected bool Wypozycz(int ileDni) {...}\nNa schemacie przedstawiono diagram dziedziczenia klas oraz deklarację metody klasy rodzica. Metoda ta może być wywołana jedynie",
        odpowiedzi: [
            "na rzecz obiektu klasy Ksiazka.",
            "w metodach klas Ksiazka, Naukowa, Beletrystyka.",
            "w klasie Ksiazka.",
            "na rzecz obiektów klasy Naukowa i Beletrystyka."
        ],
        poprawna: "B",
        obraz: "526.jpg"
    },
    {
        id: 527,
        pytanie: "Projektując aplikację w paradygmacie obiektowym należy uwzględnić",
        odpowiedzi: [
            "podprogramy i znajdujące się w nich instrukcje wyboru i iteracji.",
            "pola, metody i sposób dziedziczenia.",
            "funkcje i zależności między nimi.",
            "zdarzenia i metody lub funkcje obsługujące te zdarzenia."
        ],
        poprawna: "B"
    },
    {
        id: 528,
        pytanie: "Dla aplikacji mobilnej wskaż pole edycyjne zapisane w języku XAML, dla którego podpowiedź jest zapisana zielonym kolorem tekstu.",
        odpowiedzi: [
            "<Entry PlaceholderColor=\"Blue\" BackgroundColor=\"Green\" />",
            "<Entry BackgroundColor=\"Blue\" TextColor=\"Green\" />",
            "<Entry TextColor=\"Brown\" PlaceholderColor=\"Green\" />",
            "<Entry PlaceholderColor=\"Blue\" TextColor=\"Green\" />"
        ],
        poprawna: "C"
    },
    {
        id: 529,
        pytanie: "Przedstawiona na ilustracji edytowalna kontrolka to",
        odpowiedzi: [
            "TextBox",
            "TabControl",
            "Label",
            "RichTextBox"
        ],
        poprawna: "D",
        obraz: "529.jpg"
    },
    {
        id: 530,
        pytanie: "Z zapisu deklaracji klasy Klasa1 w różnych językach programowania wynika, że wewnątrz tej klasy",
        odpowiedzi: [
            "można odwoływać się do pól chronionych zdefiniowanych w klasie Klasa2.",
            "chronione są wszystkie pola z klasy Klasa2.",
            "nie można definiować innych pól, niż te zdefiniowane w klasie Klasa2.",
            "należy odwoływać się do pól klasy Klasa2 poprzedzając je słowem kluczowym friend."
        ],
        poprawna: "A",
        obraz: "530.jpg"
    },
    {
        id: 531,
        pytanie: "W celu optymalizacji programu działającego na uporządkowanym zbiorze można zastosować metodę wyszukiwania",
        odpowiedzi: [
            "liniowego.",
            "bąbelkowego.",
            "binarnego.",
            "z wartownikiem."
        ],
        poprawna: "C"
    },
    {
        id: 532,
        pytanie: "Czym jest JSON?",
        odpowiedzi: [
            "Jest metodologią implementacji routingu w aplikacjach front-end.",
            "Jest dyrektywą frameworka Angular pozwalającą na formatowanie danych.",
            "Jest rodzajem obiektowej bazy danych wykorzystywanej w aplikacjach typu back-end.",
            "Jest formatem danych wykorzystywanym do komunikacji aplikacji front-end z back-end."
        ],
        poprawna: "D"
    },
    {
        id: 533,
        pytanie: "Z audytu bezpieczeństwa aplikacji internetowej wynika, że pozwala ona na niekontrolowany dostęp do plików i katalogów, do których zwykły użytkownik aplikacji nie powinien mieć dostępu. Oznacza to, że jest ona podatna na atak",
        odpowiedzi: [
            "Brute Force",
            "Cross-Site Scripting",
            "SQL Injection",
            "Path Traversal"
        ],
        poprawna: "D"
    },
    {
        id: 534,
        pytanie: "Wskaż szkielet interfejsu graficznego utworzonego w Android Studio, który odpowiada ilustracji, jeżeli w pierwszym polu po uruchomieniu aplikacji wpisano tekst „obrazek”.",
        odpowiedzi: [
            "<LinearLayout android:orientation=\"horizontal\" ... >     <EditText ... />     <ImageView ... />     <LinearLayout android:orientation=\"vertical\">         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />     </LinearLayout>     <SeekBar ... /> </LinearLayout>",
            "<LinearLayout android:orientation=\"vertical\" ... >     <EditText ... />     <ImageView ... />     <LinearLayout android:orientation=\"horizontal\">         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />     </LinearLayout>     <SeekBar ... /> </LinearLayout>",
            "<LinearLayout android:orientation=\"vertical\" ... >     <EditText ... />     <ImageView ... />     <LinearLayout android:orientation=\"horizontal\">         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />         <com.google.android.material.chip.Chip ... />         <SeekBar ... />     </LinearLayout> </LinearLayout>",
            "<LinearLayout android:orientation=\"vertical\" ... >     <EditText ... />     <ImageView ... />     <com.google.android.material.chip.Chip ... />     <com.google.android.material.chip.Chip ... />     <com.google.android.material.chip.Chip ... />     <SeekBar ... /> </LinearLayout>"
        ],
        poprawna: "B",
        obraz: "534.jpg"
    },
    {
        id: 535,
        pytanie: "Na zrzucie ekranu przedstawionym na ilustracji, pod kodem źródłowym znajduje się okno",
        odpowiedzi: [
            "przebiegu debugowania.",
            "testów jednostkowych aplikacji.",
            "ładowania programu do emulatora.",
            "błędów kompilacji."
        ],
        poprawna: "D",
        obraz: "535.jpg"
    },
    {
        id: 536,
        pytanie: "W wyniku wykorzystania funkcjonalnie równoważnych sobie kodów Angular i React.js zostanie uzyskany wynik",
        odpowiedzi: [
            "0: 1 Mercedes \n1: 2 Opel \n2: 3 Toyota",
            "1 Mercedes 2021",
            "Mercedes 2021 Opel 2014 Toyota 2019",
            "1 Mercedes 2021 \n2 Opel 2014 \n3 Toyota 2019"
        ],
        poprawna: "A",
        obraz: "536.jpg"
    },
    {
        id: 537,
        pytanie: "Aplikacja wykorzystuje typ zmiennoprzecinkowy float do zapisu ceny produktu. Aby zoptymalizować kod pod względem wydajności, nie tracąc pełnej funkcjonalności programu, można zamienić ten typ na typ",
        odpowiedzi: [
            "zespolony.",
            "zmiennoprzecinkowy double.",
            "int oraz zaokrąglać ceny zawsze w górę.",
            "stałoprzecinkowy oraz zapisywać liczbę jako całkowitą z przesunięciem przecinka o dwa miejsca w lewo."
        ],
        poprawna: "D"
    },
    {
        id: 538,
        pytanie: "Aby zainstalować bibliotekę Bootstrap w projekcie Angular lub React.js należy zastosować manager pakietów",
        odpowiedzi: [
            "YaST",
            "pkg",
            "YUM",
            "npm"
        ],
        poprawna: "D"
    },
    {
        id: 539,
        pytanie: "Na podstawie cytatu dotyczącego konwencji nazewnictwa metodologii BEM wskaż zdanie prawdziwe",
        odpowiedzi: [
            "litery ze znakami diakrytycznymi mogą występować w nazwach.",
            "nazwy rozpoczynają się od wielkiej litery.",
            "słowa w nazwie są oddzielone podwójnym podkreślnikiem.",
            "słowa w nazwie są oddzielone myślnikiem."
        ],
        poprawna: "D",
        obraz: "539.jpg"
    },
    {
        id: 540,
        pytanie: "Który z poniższych mechanizmów umożliwia śledzenie stanu użytkownika podczas sesji w aplikacji webowej?",
        odpowiedzi: [
            "HTML Forms",
            "HTTP Headers",
            "Sesje (Sessions)",
            "CSS Selectors"
        ],
        poprawna: "C"
    },
    {
        id: 541,
        pytanie: "Do czego służy mechanizm ciasteczek wykorzystywany w aplikacjach webowych?",
        odpowiedzi: [
            "Do przechowywania danych użytkownika po stronie serwera.",
            "Do przechowywania danych użytkownika w przeglądarce.",
            "Do przechowywania danych w bazie danych.",
            "Do tworzenia dynamicznych interfejsów użytkownika."
        ],
        poprawna: "B"
    },
    {
        id: 542,
        pytanie: "Który z wymienionych frameworków jest przeznaczony do tworzenia aplikacji webowych w języku C#?",
        odpowiedzi: [
            "React.js",
            "Django",
            "Angular",
            "ASP.NET Core"
        ],
        poprawna: "D"
    },
    {
        id: 543,
        pytanie: "Które z wymienionych zastosowań najlepiej opisuje bibliotekę jQuery?",
        odpowiedzi: [
            "Ułatwianie manipulacji DOM i obsługi zdarzeń w JavaScript.",
            "Tworzenie aplikacji mobilnych.",
            "Projektowanie struktur baz danych.",
            "Tworzenie interfejsów w aplikacjach desktopowych."
        ],
        poprawna: "A"
    },
    {
        id: 544,
        pytanie: "Który framework jest często używany do tworzenia aplikacji webowych w języku Python?",
        odpowiedzi: [
            "Django",
            "ASP.NET Core",
            "React.js",
            "Angular"
        ],
        poprawna: "A"
    },
    {
        id: 545,
        pytanie: "Które środowisko programistyczne jest często używane do tworzenia aplikacji webowych w języku Java?",
        odpowiedzi: [
            "Android Studio",
            "PyCharm",
            "Eclipse",
            "XCode"
        ],
        poprawna: "C"
    },
    {
        id: 546,
        pytanie: "Który z wymienionych aplikacji jest przykładem prostej aplikacji mobilnej?",
        odpowiedzi: [
            "Aplikacja monitorująca zużycie pamięci RAM.",
            "Aplikacja typu zegar.",
            "Aplikacja do analizy danych finansowych.",
            "Aplikacja z zaawansowanym systemem zarządzania projektami."
        ],
        poprawna: "B"
    },
    {
        id: 547,
        pytanie: "Który z komponentów UI aplikacji mobilnych odpowiada za nawigację między ekranami?",
        odpowiedzi: [
            "ListView",
            "Navigation Drawer",
            "Przycisk",
            "Pasek narzędziowy"
        ],
        poprawna: "B"
    },
    {
        id: 548,
        pytanie: "Do czego służy język Swift w kontekście aplikacji mobilnych?",
        odpowiedzi: [
            "Do tworzenia aplikacji na system iOS.",
            "Do testowania aplikacji mobilnych.",
            "Do obsługi baz danych w aplikacjach mobilnych.",
            "Do tworzenia aplikacji na system Android."
        ],
        poprawna: "A"
    },
    {
        id: 549,
        pytanie: "Czym różni się środowisko RAD od tradycyjnych IDE w kontekście aplikacji mobilnych?",
        odpowiedzi: [
            "RAD skupia się wyłącznie na debugowaniu aplikacji.",
            "RAD działa tylko na urządzeniach z systemem iOS.",
            "RAD nie wspiera obsługi interfejsu użytkownika.",
            "RAD umożliwia szybsze tworzenie aplikacji dzięki narzędziom do wizualnego projektowania i generowania kodu."
        ],
        poprawna: "D"
    },
    {
        id: 550,
        pytanie: "Jakie są zalety stosowania frameworków w programowaniu aplikacji desktopowych?",
        odpowiedzi: [
            "Ułatwiają zarządzanie wersjami systemu operacyjnego.",
            "Minimalizują zapotrzebowanie na pamięć operacyjną aplikacji.",
            "Skracają czas tworzenia aplikacji dzięki gotowym komponentom i narzędziom.",
            "Zapewniają dostęp do niskopoziomowego kodu systemowego."
        ],
        poprawna: "C"
    },
    {
        id: 551,
        pytanie: "Co oznacza skrót IDE w kontekście programowania?",
        odpowiedzi: [
            "Integrated Debugging Environment.",
            "Interactive Development Engine.",
            "Integrated Development Environment.",
            "Interactive Debugging Editor."
        ],
        poprawna: "C"
    },
    {
        id: 552,
        pytanie: "Aby zdefiniować własny wyjątek w języku C++, należy:",
        odpowiedzi: [
            "użyć standardowej funkcji obsługi błędów.",
            "stworzyć klasę dziedziczącą po std::exception.",
            "zastosować blok try z pustym blokiem catch.",
            "wywołać funkcję throw automatycznie."
        ],
        poprawna: "B"
    }
];
