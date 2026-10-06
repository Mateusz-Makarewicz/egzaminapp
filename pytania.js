// Baza pytań do quizu.
// id          - numer pytania w bazie
// pytanie     - treść pytania
// odpowiedzi  - cztery odpowiedzi w kolejności A, B, C, D (bez liter)
// poprawna    - litera poprawnej odpowiedzi
// obraz       - opcjonalnie: nazwa pliku ze zdjęciem z folderu obrazki/

const BAZA_PYTAN = [
    {
        id: 1,
        pytanie: "Którego polecenia nalezy użyć, aby wyraz TEKST został wyświetleny w kolorze czarnym w oknie przeglądarki internetowej?",
        odpowiedzi: [
            "<body color=\"black\"> TEKST </font>",
            "<font color=\"czarny\"> TEKST </font>",
            "<font color=\"#000000\"> TEKST </font>",
            "<body bgcolor=\"black\"> TEKST </body>"
        ],
        poprawna: "C"
    },
    {
        id: 2,
        pytanie: "W poleceniach, których celem jest odtwarzanie na stronie internetowej dźwięku jako podkładu muzycznego NIE wykorzystuje się atrybutu",
        odpowiedzi: [
            "loop=\"10\"",
            "balance=\"-10\"",
            "volume=\"-100\"",
            "href=\"C:/100.wav\""
        ],
        poprawna: "D"
    },
    {
        id: 3,
        pytanie: "Jakiego znacznika należy użyć, aby przejść do kolejnej linii tekstu, nie tworząc akapitu na stronie internetowej?",
        odpowiedzi: [
            "<p>",
            "</b>",
            "<br>",
            "</br>"
        ],
        poprawna: "C"
    },
    {
        id: 4,
        pytanie: "Kaskadowe arkusze stylów tworzy się w celu",
        odpowiedzi: [
            "ułatwienia formatowania strony",
            "nadpisywania wartości znaczników już ustawionych na stronie",
            "połączenia struktury dokumentu strony z właściwą formą jego prezentacji",
            "blokowania jakichkolwiek zmian w wartościach znaczników już przypisanych w pliku CSS"
        ],
        poprawna: "A"
    },
    {
        id: 5,
        pytanie: "W podanej regule CSS: h1 {color: blue} h1 oznacza",
        odpowiedzi: [
            "klasę",
            "wartość",
            "selektor",
            "deklarację"
        ],
        poprawna: "C"
    },
    {
        id: 6,
        pytanie: "Edytor spełniający założenia WYSIWYG musi umożliwiać",
        odpowiedzi: [
            "tworzenie podstawowej grafiki wektorowej",
            "publikację strony na serwerze poprzez wbudowanego klienta FTP",
            "obróbkę plików dźwiękowych przed umieszczeniem ich na stronie internetowej",
            "uzyskanie zbliżonego wyniku tworzenej strony do jej obrazu w przegladarce interenetowej"
        ],
        poprawna: "D"
    },
    {
        id: 7,
        pytanie: "Do graficznego tworzenia stron internetowych należy wykorzystać.",
        odpowiedzi: [
            "edytor CSS",
            "przeglądarkę internetową",
            "program typu WYSIWYG",
            "program MS Office Picture Manager"
        ],
        poprawna: "C"
    },
    {
        id: 8,
        pytanie: "W procesie walidacji stron internetowych nie bada się",
        odpowiedzi: [
            "działania linków",
            "błędów składni kodu",
            "zgodności z przeglądarkami",
            "źródła pochodzenia narzędzi edytorskich"
        ],
        poprawna: "D"
    },
    {
        id: 9,
        pytanie: "Model opisu przestrzeni barw o parametrach: odcień, nasycenie i jasność, to",
        odpowiedzi: [
            "HSV",
            "RGB",
            "CMY",
            "CMYK"
        ],
        poprawna: "A"
    },
    {
        id: 10,
        pytanie: "Wskaż model barw, który stosuje się do wyświetlania kolorów na ekranie monitora komputerowego",
        odpowiedzi: [
            "HLS",
            "RGB",
            "CMY",
            "CMYK"
        ],
        poprawna: "B"
    },
    {
        id: 11,
        pytanie: "Który parametr obiektu graficznego ulegnie zmianie po modyfikacji wartości kanału alfa?",
        odpowiedzi: [
            "Nasycenie barw",
            "Przezroczystość",
            "Ostrość krawędzi",
            "Kolejność wyświetlenia pikseli"
        ],
        poprawna: "B"
    },
    {
        id: 12,
        pytanie: "Jakiego formatu należy użyć do zapisu obrazu z kompresją stratną?",
        odpowiedzi: [
            "GIF",
            "PNG",
            "PCX",
            "JPEG"
        ],
        poprawna: "D"
    },
    {
        id: 13,
        pytanie: "Najprostszy sposób zamiany obiektu oznaczonego cyfrą 1 na obiekt oznaczony cyfrą 2 polega na",
        odpowiedzi: [
            "animowaniu obiektu",
            "zmianie warstwy obiektu",
            "narysowaniu docelowego obiektu",
            "geometrycznym transformowaniu obiektu"
        ],
        poprawna: "D",
        obraz: "13.jpg"
    },
    {
        id: 14,
        pytanie: "Jak nazywa się proces przedstawienia, we właściwej dla danego środowiska formie, informacji zawartej w dokumencie elektronicznym?",
        odpowiedzi: [
            "Mapowanie",
            "Rasteryzacja",
            "Renderowanie",
            "Teksturowanie"
        ],
        poprawna: "C"
    },
    {
        id: 15,
        pytanie: "Proces filtracji sygnału wejściowego w dziedzinie czasu, obejmujący zasadę superpozycji, związany jest filtrem",
        odpowiedzi: [
            "liniowym",
            "przyczynowym",
            "niezmiennym w czasie",
            "o skończonej odpowiedzi impulsowej"
        ],
        poprawna: "A"
    },
    {
        id: 16,
        pytanie: "Jak nazywa się podzbiór strukturalnego języka zapytań, związany z formułowaniem zapytań do bazy danych za pomocą polecenia SELECT?",
        odpowiedzi: [
            "SQL DML (ang. Data Manipulation Language)",
            "SQL DDL (ang. Data Definition Language)",
            "SQL DCL (ang. Data Control Language)",
            "SQL DQL (ang. Data Query Language)"
        ],
        poprawna: "D"
    },
    {
        id: 17,
        pytanie: "Jakie sa nazwy typowych poleceń języka zapytań SQL, związane z wykonywaniem operacji na danych SQL DML (np.: umieszczanie danych w bazie, kasowanie dokonywanie zmian w danych)?",
        odpowiedzi: [
            "SELECT, SELECT INTO",
            "ALTER, CREATE, DROP",
            "DENY, GRANT, REVOKE",
            "DELETE, INSERT, UPDATE"
        ],
        poprawna: "D"
    },
    {
        id: 18,
        pytanie: "Jak posortowana będzie lista, utworzona ze wszystkich kolumn tabeli uczniowie i zawierająca uczniów ze średnią większą od 5, która zostanie zwrócona jako wynik przedstawionego zapytania?",
        odpowiedzi: [
            "Rosnąca według parametru klasa",
            "Malejąco według parametru klasa",
            "Rosnaco według parametru srednia",
            "Malejąco według parametru srednia"
        ],
        poprawna: "B",
        obraz: "18.jpg"
    },
    {
        id: 19,
        pytanie: "Według którego parametru oraz dla ilu tabel zostaną zwrócone wiersze na liście w wyniku przedstawionego zapytania?",
        odpowiedzi: [
            "Według parametru wyrob_id wyłącznie dla trzech tabel",
            "Według parametru wyrob_id dla wyłącznie dla trzech tabel",
            "Według parametru nr_id wyłącznie dla trzech tabel",
            "Według parametru nr_id dla wszystkich tabel"
        ],
        poprawna: "D",
        obraz: "19.jpg"
    },
    {
        id: 20,
        pytanie: "Który z obiektów relacyjnej bazy danych, będący kodem języka SQL, może być wywoływany w zapytaniach modyfikujących kolumny danych widoczne jako tabela, bez względu na to czy jest tworzony programowo, czy dynamicznie?",
        odpowiedzi: [
            "Reguła",
            "Wyzwalacz",
            "Procedura składowa",
            "Funkcja zdefiniowana"
        ],
        poprawna: "D"
    },
    {
        id: 21,
        pytanie: "Jak nazywa się element bazy danych, za pomocą którego można jedynie odczytać dane z bazy, prezentując je w postaci tekstu lub wykresu?",
        odpowiedzi: [
            "Tabela",
            "Raport",
            "Zapytanie",
            "Formularz"
        ],
        poprawna: "B"
    },
    {
        id: 22,
        pytanie: "Jakiego typu specjalizowane oprogramowanie narzędziowe należy zainstalować, aby umożliwić wykonywanie jego użytkownikowi operacji na zgromadzonych danych?",
        odpowiedzi: [
            "Klucz obcy",
            "System Zarządzania Bazą Danych (SZBD)",
            "Obiektowy System Zarządzania Bazą Danych",
            "Otwarty mechanizm komunikacji bazy danych"
        ],
        poprawna: "B"
    },
    {
        id: 23,
        pytanie: "Co należy zastosować w organizacji danych, aby zapytania w bazie danych były wykonywane szybciej?",
        odpowiedzi: [
            "Reguły",
            "Indeksy",
            "Wartości domyślne",
            "Klucze podstawowe"
        ],
        poprawna: "B"
    },
    {
        id: 24,
        pytanie: "W programie Microsoft Access formą zabezpieczeń dostępu do danych związaną z tabelą i kwerendą jest",
        odpowiedzi: [
            "stosowanie makr",
            "przypisanie uprawnień",
            "określanie przestrzeni tabel",
            "wprowadzenie limitów przestrzeni dyskowej"
        ],
        poprawna: "B"
    },
    {
        id: 25,
        pytanie: "Które z wymienionych osób odpowiadają za przygotowanie systemu bazy danych do pracy produkcyjnej w sposób ciągły, zarządzanie użytkownikami i instalowanie nowych wersji systemu bazodanowego?",
        odpowiedzi: [
            "Projektanci narzędzi deweloperskich",
            "Administratorzy systemu bazy danych",
            "Administratorzy serwerów i sieci komputerowych",
            "Projektanci i programiści Systemu Zarządzania Bazą Danych."
        ],
        poprawna: "B"
    },
    {
        id: 26,
        pytanie: "Z jakimi mechanizmami nadawania zabezpieczeń, dającymi możliwości wykonywania operacji na bazie danych, związane są zagadnienia zarządzania kontami, użytkownikami i uprawnieniami?",
        odpowiedzi: [
            "Z regułami",
            "Z atrybutami",
            "Z przywilejami obiektowymi",
            "Z przywilejami systemowymi"
        ],
        poprawna: "D"
    },
    {
        id: 27,
        pytanie: "Metoda udostępniania bazy danych w programie Microsoft Access, dotycząca wszystkich obiektów bazy umieszczonych na dysku sieciowym i używanych jednocześnie przez różne osoby nosi nazwę",
        odpowiedzi: [
            "folderu sieciowego",
            "serwera bazy danych",
            "dzielonej bazy danych",
            "witryny programu SharePoint"
        ],
        poprawna: "A"
    },
    {
        id: 28,
        pytanie: "Jakie należy posiadać uprawnienia, aby wykonać i odtworzyć kopię zapasową bazy danych Microsoft SQL Server 2005 Express?",
        odpowiedzi: [
            "Users",
            "Security users",
            "Użytkownik lokalny",
            "Administrator systemu"
        ],
        poprawna: "D"
    },
    {
        id: 29,
        pytanie: "Typ zmiennej w języku JavaScript",
        odpowiedzi: [
            "nie występuje",
            "jest tylko jeden",
            "następuje poprzez przypisanie wartości",
            "musi być zadeklarowany na początku skryptu"
        ],
        poprawna: "C"
    },
    {
        id: 30,
        pytanie: "Zmienne typu int odnoszą się do liczb",
        odpowiedzi: [
            "naturalnych",
            "całkowitych",
            "w notacji stałoprzecinkowej",
            "w notacji zmiennoprzecinkowej"
        ],
        poprawna: "B"
    },
    {
        id: 31,
        pytanie: "Co definiuje w języku C++ przedstawiony fragment kodu?",
        odpowiedzi: [
            "Hierarchię zmiennych",
            "Trzy zmienne niepowiązane ze sobą",
            "Typ strukturalny składający się z trzech pól",
            "Kontakt pomiędzy zmiennymi globalnymi i lokalnymi"
        ],
        poprawna: "C",
        obraz: "31.jpg"
    },
    {
        id: 32,
        pytanie: "Sposób programowania, w którym ciąg poleceń (sekwencji instrukcji) przekazywanych komputerowi jest postrzegany jako program, nosi nazwę programowania",
        odpowiedzi: [
            "stanowego",
            "logicznego",
            "funkcyjnego",
            "imperatywnego"
        ],
        poprawna: "D"
    },
    {
        id: 33,
        pytanie: "Które wartości będą kolejno wypisane w wyniku działania przedstawionego skryptu",
        odpowiedzi: [
            "2 2 1",
            "2 1 1",
            "1 2 1",
            "1 2 2"
        ],
        poprawna: "A",
        obraz: "33.jpg"
    },
    {
        id: 34,
        pytanie: "Fragment kodu prezentuje składnię języka",
        odpowiedzi: [
            "C",
            "C#",
            "PHP",
            "JavaScript"
        ],
        poprawna: "C",
        obraz: "34.jpg"
    },
    {
        id: 35,
        pytanie: "Jaki program komputerowy przekształca kod źródłowy, napisany w konkretnym języku programowania, na język komputera?",
        odpowiedzi: [
            "Debugger",
            "Kompilator",
            "Edytor kodu źródłowego",
            "Środowisko programistyczne"
        ],
        poprawna: "B"
    },
    {
        id: 36,
        pytanie: "Jak nazywa się program, który wykonuje instrukcje zawarte w kodzie źródłowym tworzonego programu bez uprzedniego generowania programu wynikowego?",
        odpowiedzi: [
            "Interpreter",
            "Kompilator",
            "Konwerter kodu",
            "Konwerter języka"
        ],
        poprawna: "A"
    },
    {
        id: 37,
        pytanie: "Który język skryptowy ogólnego przeznaczenia należy wykorzystać do tworzenia aplikacji WWW, zagnieżdżanych w języku HTML i uruchamianych po stronie serwera?",
        odpowiedzi: [
            "C#",
            "Perl",
            "PHP",
            "JavaScript"
        ],
        poprawna: "C"
    },
    {
        id: 38,
        pytanie: "Jak nazywa się technika umożliwiająca otwarcie połączenia klienta z serwerem i komunikację bez przeładowywania całej strony WWW w sposób asynchroniczny ?",
        odpowiedzi: [
            "PHP",
            "XML",
            "AJAX",
            "VBScript"
        ],
        poprawna: "C"
    },
    {
        id: 39,
        pytanie: "Jak nazywa się element oznaczony znakiem zapytania w strukturze platformy .NET, który umożliwia tworzenie własnych aplikacji z użyciem frameworków i zamianę kompilowanego kodu pośredniego na kod maszynowy procesora zainstalowanego w komputerze?",
        odpowiedzi: [
            "Infrastruktura językowa (CLI)",
            "Biblioteka klas bazowych (BCL)",
            "Wspólne środowisko programistyczne (CLP)",
            "Wspólne środowisko uruchomieniowe (CLR)"
        ],
        poprawna: "D",
        obraz: "39.jpg"
    },
    {
        id: 40,
        pytanie: "Jakiego rodzaju mechanizm kontroli bezpieczeństwa wykonywania aplikacji zawiera środowisko uruchomieniowe platformy .NET Framework?",
        odpowiedzi: [
            "Mechanizm wykonywania aplikacji dla bibliotek klas",
            "Mechanizm wykonywania aplikacji realizowany przez frameworki aplikacji internetowych (ASP.NET)",
            "Mechanizm wykonywania aplikacji realizowany przez funkcję Windows API (Application Programming Interface)",
            "Mechanizm wykonywania aplikacji oparty na uprawnieniach kodu (CAS - Code Access Security) i na rolach (RBS - Role-Based Security)"
        ],
        poprawna: "D"
    },
    {
        id: 41,
        pytanie: "Co to jest DBMS?",
        odpowiedzi: [
            "Strukturalny język zapytań kierowanych do bazy danych",
            "System zarządzania bazą danych",
            "Obiektowy język programowania do generowania stron www",
            "Kaskadowy arkusz stylów do opisu wyglądu strony www"
        ],
        poprawna: "B"
    },
    {
        id: 42,
        pytanie: "Który z odsyłaczy posiada poprawną konstrukcję?",
        odpowiedzi: [
            "<a href='mailto:adres'> tekst </a>",
            "<a href='http://adres'> tekst </a>",
            "<a href=\"http://adres\"> tekst <a>",
            "<a href=\"mailto:adres\"> tekst </a>"
        ],
        poprawna: "D"
    },
    {
        id: 43,
        pytanie: "Fragment kodu napisany w języku HTML zamieszczony w ramce przedstawia listę",
        odpowiedzi: [
            "wypunktowaną",
            "numerowaną",
            "odnośników",
            "skrótów"
        ],
        poprawna: "B",
        obraz: "43.jpg"
    },
    {
        id: 44,
        pytanie: "Polecenie colspan służy do łączenia komórek tabeli w poziomie, natomiast rowspan w pionie. Którą z tabel wyświetli fragment kodu napisany w języku HTML?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "44.jpg"
    },
    {
        id: 45,
        pytanie: "W znaczniku <head> (w części <meta>) strony www NIE umieszcza się informacji dotyczącej",
        odpowiedzi: [
            "autora",
            "kodowania",
            "typu dokumentu",
            "automatycznego odświeżania"
        ],
        poprawna: "C"
    },
    {
        id: 46,
        pytanie: "Wskaż sposób, w jaki należy odwołać się do pliku default.css, jeśli index.html znajduje się bezpośrednio w katalogu Strona?",
        odpowiedzi: [
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"./style/default.css\" />",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"C:/style/default.css\" />",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"...styledefault.css\" />",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"c:style/default.css\" />"
        ],
        poprawna: "A",
        obraz: "46.jpg"
    },
    {
        id: 47,
        pytanie: "Wskaż stwierdzenie, które jest prawdziwe dla następującej definicji stylu:",
        odpowiedzi: [
            "Jest to styl lokalny",
            "Zdefiniowano dwie klasy",
            "Akapit będzie transponowany na małe litery",
            "Odnośnik będzie pisany czcionką 14 punktów"
        ],
        poprawna: "B",
        obraz: "47.jpg"
    },
    {
        id: 48,
        pytanie: "W palecie kolorów RGB kolor żółty jest połączeniem dwóch kolorów: zielonego i czerwonego. Który z kodów szesnastkowych oznacza kolor żółty?",
        odpowiedzi: [
            "#FF00FF",
            "#00FFFF",
            "#FFFF00",
            "#F0F0F0"
        ],
        poprawna: "C"
    },
    {
        id: 49,
        pytanie: "Który z formatów NIE pozwala na zapis plików animowanych?",
        odpowiedzi: [
            "GIF",
            "ACE",
            "SWF",
            "SVG"
        ],
        poprawna: "B"
    },
    {
        id: 50,
        pytanie: "Który z formatów graficznych pozwala na zapis przejrzystego tła?",
        odpowiedzi: [
            "GIF",
            "RAW",
            "BMP",
            "JPEG"
        ],
        poprawna: "A"
    },
    {
        id: 51,
        pytanie: "Proces walidacji strony internetowej to",
        odpowiedzi: [
            "zespół działań mających na celu zwiększenie oglądalności",
            "sprawdzenie jej w celu wyeliminowania błędów",
            "publikowanie w sieci",
            "promocja strony"
        ],
        poprawna: "B"
    },
    {
        id: 52,
        pytanie: "Które oprogramowanie NIE JEST systemem zarządzania treścią (CMS)?",
        odpowiedzi: [
            "Joomla",
            "Apache",
            "Mambo",
            "WordPress"
        ],
        poprawna: "B"
    },
    {
        id: 53,
        pytanie: "Który z formatów zapewnia największa redukcję rozmiaru pliku dźwiękowego?",
        odpowiedzi: [
            "WAV",
            "PCM",
            "MP3",
            "CD-Audio"
        ],
        poprawna: "C"
    },
    {
        id: 54,
        pytanie: "Wskaż prawidłową kolejność tworzenia bazy danych",
        odpowiedzi: [
            "Określenie celu, utworzenie relacji, stworzenie tabel, normalizacja",
            "Określenie celu, normalizacja, utworzenie relacji, stworzenie tabel",
            "Określenie celu, stworzenie tabel, utworzenie relacji, normalizacja",
            "Określenie celu, normalizacja, stworzenie tabel, utworzenie relacji"
        ],
        poprawna: "C"
    },
    {
        id: 55,
        pytanie: "Wskaż typ relacji pomiędzy tabelami: Tabela1 i Tabela3",
        odpowiedzi: [
            "Jeden do jednego",
            "Wiele do jednego",
            "Jeden do wielu",
            "Wiele do wielu"
        ],
        poprawna: "D",
        obraz: "55.jpg"
    },
    {
        id: 56,
        pytanie: "Które z pól są umieszczone w formularzu?",
        odpowiedzi: [
            "Textarea, Option, Input(Chechbox), Input(Checkbox), Input(Submit) Input(Reset)",
            "Input(Text), Select, Input(Radio), Input(Radio), Input(Submit), Input(Reset)",
            "Textarea, Select, Input(Radio), Input(Radio), Input(Reset), Input(Submit)",
            "Input(Text), Input(Chechbox), Select, Select, Input(Submit), Input(Reset)"
        ],
        poprawna: "B",
        obraz: "56.jpg"
    },
    {
        id: 57,
        pytanie: "Którą z właściwości pola tabeli należy zdefiniować, aby pole przyjmowało dane składające się wyłącznie z cyfr?",
        odpowiedzi: [
            "Tagi inteligentne",
            "Wartość domyślną",
            "Maskę wprowadzania",
            "Regułę sprawdzania poprawności"
        ],
        poprawna: "C",
        obraz: "57.jpg"
    },
    {
        id: 58,
        pytanie: "Którego ze słów kluczowych języka SQL należy użyć, aby wyeliminować duplikaty?",
        odpowiedzi: [
            "LIKE",
            "DISTINCT",
            "ORDER BY",
            "GROUP BY"
        ],
        poprawna: "B"
    },
    {
        id: 59,
        pytanie: "Które ze stwierdzeń prawidłowo charakteryzuje zdefiniowaną tabelę: CREATE TABLE dane (kolumna INTEGER(3));",
        odpowiedzi: [
            "Tabela o nazwie posiada trzy kolumny liczb całkowitych",
            "Tabela o nazwie posiada jedną kolumnę liczb całkowitych",
            "Tabela posiada jedną kolumnę zawierającą trzy elementowe tablice",
            "Kolumny tabeli nazywają się: , ,"
        ],
        poprawna: "B"
    },
    {
        id: 60,
        pytanie: "Polecenie REVOKE SELECT ON nazwa1 FROM nazwa2 w języku SQL umożliwia",
        odpowiedzi: [
            "nadanie uprawnień z użyciem zdefiniowanego schematu",
            "odbieranie uprawnień użytkownikowi",
            "usuwanie użytkownika z bazy",
            "nadawanie praw do tabeli"
        ],
        poprawna: "B"
    },
    {
        id: 61,
        pytanie: "Które polecenie wydane z konsoli systemu operacyjnego, zawierające w swojej składni opcję --repair, umożliwia naprawę bazy danych?",
        odpowiedzi: [
            "mysqlcheck",
            "mysqldump",
            "truncate",
            "create"
        ],
        poprawna: "A"
    },
    {
        id: 62,
        pytanie: "Które polecenie wydane z konsoli systemowej dokona przywrócenia bazy danych?",
        odpowiedzi: [
            "mysqldump -u root -p baza > kopia.sql",
            "mysqldump -u root -p baza < kopia.sql",
            "mysql -u root -p baza < kopia.sql",
            "mysql -u root -p baza > kopia.sql"
        ],
        poprawna: "C"
    },
    {
        id: 63,
        pytanie: "Polecenie w języku SQL GRANT ALL PRIVILEGES ON klienci TO pracownik",
        odpowiedzi: [
            "nadaje uprawnienie grupie do tabeli",
            "odbiera wszystkie uprawnienia do tabeli",
            "skopiuje uprawnienia z grupy na użytkownika",
            "nadaje wszystkie uprawnienia do tabeli użytkownikowi"
        ],
        poprawna: "D"
    },
    {
        id: 64,
        pytanie: "Która z wymienionych funkcji sortowania wykorzystywana w języku PHP sortuje tablicę asocjacyjną według indeksów",
        odpowiedzi: [
            "sort()",
            "rsort()",
            "asort()",
            "ksort()"
        ],
        poprawna: "D"
    },
    {
        id: 65,
        pytanie: "W skrypcie PHP należy utworzyć cookie o nazwie owoce które przyjmie wartość jabłko. Cookie ma być dostępne przez jedną godzinę od jego utworzenia. W tym celu należy w skrypcie PHP użyć funkcji:",
        odpowiedzi: [
            "cookie(\"owoce\",\"jabłko\",3600);",
            "cookie(\"jabłko\",\"owoce\",3600);",
            "setcookie(\"owoce\",\"jabłko\",time()+3600);",
            "setcookie(\"jabłko\",\"owoce\",time()+3600);"
        ],
        poprawna: "C"
    },
    {
        id: 66,
        pytanie: "Wskaż słowo kluczowe w języku C++ dodawane przed wbudowanym typem danych, które przesuwa zakres liczby wyłącznie nieujemne",
        odpowiedzi: [
            "long",
            "const",
            "short",
            "unsigned"
        ],
        poprawna: "D"
    },
    {
        id: 67,
        pytanie: "W językach programowania tylko zmienna jednego typu wbudowanego może przyjmować wyłącznie dwie wartości. Jest to typ",
        odpowiedzi: [
            "logiczny",
            "znakowy",
            "tablicowy",
            "łańcuchowy"
        ],
        poprawna: "A"
    },
    {
        id: 68,
        pytanie: "Instrukcja języka PHP tworząca obiekt pkt dla zdefiniowanej w ramce klasy ma postać",
        odpowiedzi: [
            "pkt Punkt;",
            "pkt = new Punkt();",
            "pkt Punkt();",
            "Punkt() pkt;"
        ],
        poprawna: "B",
        obraz: "68.jpg"
    },
    {
        id: 69,
        pytanie: "Wskaż wynik wykonania skryptu napisanego w języku PHP",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "69.jpg"
    },
    {
        id: 70,
        pytanie: "Które ze stwierdzeń dotyczących języków programowania NIE jest prawdziwe",
        odpowiedzi: [
            "C++ jest językiem obiektowym",
            "JavaScript jest językiem skryptowym",
            "SQL jest językiem programowania strukturalnego",
            "PHP jest językiem do tworzenia stron w czasie rzeczywistym"
        ],
        poprawna: "C"
    },
    {
        id: 71,
        pytanie: "Jaka wartość zostanie wypisana na standardowym wyjściu dla zamieszczonego w ramce fragmentu programu napisanego w języku C++",
        odpowiedzi: [
            "0",
            "2",
            "3",
            "32"
        ],
        poprawna: "C",
        obraz: "71.jpg"
    },
    {
        id: 72,
        pytanie: "Wskaż stwierdzenie, które nie jest prawdziwe dla następującej definicji funkcji w języku C++?",
        odpowiedzi: [
            "Funkcja zwraca wartość",
            "Funkcja nie zwraca wartości",
            "Funkcja posiada dwa parametry",
            "Funkcja odwołuje się do parametrów przez referencję"
        ],
        poprawna: "A",
        obraz: "72.jpg"
    },
    {
        id: 73,
        pytanie: "Element zadeklarowany w języku C++ double *x; to",
        odpowiedzi: [
            "Parametr formalny typu rzeczywistego",
            "Zmienna rzeczywista",
            "Zmienna całkowita",
            "Wskaźnik"
        ],
        poprawna: "D"
    },
    {
        id: 74,
        pytanie: "Wskaż prawidłową kolejność tworzenia aplikacji",
        odpowiedzi: [
            "Specyfikacja wymagań, analiza wymagań klienta, tworzenie, wdrażanie,testy",
            "Analiza wymagań klienta, specyfikacja wymagań tworzenie, testy, wdrażanie",
            "Tworzenie, analiza wymagań klienta, specyfikacja wymagań, wdrażanie, testy",
            "Analiza wymagań klienta, specyfikacja wymagań, tworzenie, wdrażanie, testy"
        ],
        poprawna: "B"
    },
    {
        id: 75,
        pytanie: "Jaką wartość zwróci funkcja zao zdefiniowana w języku C++, wywołana z aktualnym parametrem 3.55",
        odpowiedzi: [
            "3",
            "4",
            "3.5",
            "4.05"
        ],
        poprawna: "B",
        obraz: "75.jpg"
    },
    {
        id: 76,
        pytanie: "Proces tłumaczenia kodu źródłowego pisanego przez programistę na zrozumiały dla komputera kod maszynowy to",
        odpowiedzi: [
            "debugowanie",
            "uruchamianie",
            "kompilowanie",
            "implementowanie"
        ],
        poprawna: "C"
    },
    {
        id: 77,
        pytanie: "Które ze stwierdzeń, w odniesieniu do zamieszczonej w ramce definicji funkcji, jest poprawne?",
        odpowiedzi: [
            "Pętla wykona się tylko raz",
            "Funkcja posiada pętlę powtarzającą się 3 razy",
            "Tekst będzie wczytywany do momentu podania liczby większej niż 3",
            "Wczytanie tekstu zakończy się, gdy tekst będzie się składał przynajmniej z 3 znaków"
        ],
        poprawna: "D",
        obraz: "77.jpg"
    },
    {
        id: 78,
        pytanie: "Po wykonaniu zamieszczonego w ramce skryptu napisanego w języku JavaScript w przeglądarce zostanie wypisana wartość",
        odpowiedzi: [
            "12,4",
            "12,5",
            "15,4",
            "15,5"
        ],
        poprawna: "B",
        obraz: "78.jpg"
    },
    {
        id: 79,
        pytanie: "Poprzez deklarację var x=\"true\"; w języku JavieScript tworzy się zmienną typu",
        odpowiedzi: [
            "Logicznego",
            "Liczbowego",
            "String (ciąg znaków)",
            "Nieokreślonego (undefined)"
        ],
        poprawna: "C"
    },
    {
        id: 80,
        pytanie: "Platforma wspierająca programowanie w technologii .NET to",
        odpowiedzi: [
            "db2",
            "eclipse",
            "framework",
            "middleware"
        ],
        poprawna: "C"
    },
    {
        id: 81,
        pytanie: "Proces, w którym wykrywa się i usuwa błędy w kodzie źródłowym programów, to",
        odpowiedzi: [
            "Kompilowanie",
            "Debugowanie",
            "standaryzacja",
            "Normalizacja"
        ],
        poprawna: "B"
    },
    {
        id: 82,
        pytanie: "Aby ustawić tło na stronie www należy użyć polecenia",
        odpowiedzi: [
            "<background=\"\"> </background>",
            "<body bgcolor=\"\"> </body>",
            "<bgcolor=\"\"> </bgcolor>",
            "<body background=\"\"> </body>"
        ],
        poprawna: "B"
    },
    {
        id: 83,
        pytanie: "Parametr face znacznika <font> służy do określenia",
        odpowiedzi: [
            "barwy czcionki",
            "nazwy czcionki",
            "efektów czcionki",
            "wielkości czcionki"
        ],
        poprawna: "B"
    },
    {
        id: 84,
        pytanie: "Kodowanie w standardzie ISO-8859-2 stosowane jest w celu poprawnego wyświetlenia",
        odpowiedzi: [
            "symboli matematycznych",
            "polskich liter, takich jak: ś, ć, ń, ó, ą",
            "znaków specjalnych dla języka kodu strony",
            "znaków zarezerwowanych dla języka opisu strony"
        ],
        poprawna: "B"
    },
    {
        id: 85,
        pytanie: "Zamieszczony w ramce kod wyświetla tabelę składajacą się z",
        odpowiedzi: [
            "dwóch wierszy i dwóch kolumn",
            "dwóch wierszy i jednej kolumny",
            "jednego wiersza i dwóch kolumn",
            "jednego wiersza i jednej kolumny"
        ],
        poprawna: "C",
        obraz: "85.jpg"
    },
    {
        id: 86,
        pytanie: "W języku JavaScript, aby wydzielić fragment napisu znajdujący się pomiędzy wskazanymi przez parametr indeksami należy użyć metody",
        odpowiedzi: [
            "slice()",
            "replace()",
            "trim()",
            "concat()"
        ],
        poprawna: "A"
    },
    {
        id: 87,
        pytanie: "Które polecenie w CSS służy do załączenia zewnętrznego arkusza stylów?",
        odpowiedzi: [
            "open",
            "import",
            "require",
            "include"
        ],
        poprawna: "B"
    },
    {
        id: 88,
        pytanie: "Selektor CSS a:link {color:red} zawarty w kaskadowych arkuszach stylów definiuje",
        odpowiedzi: [
            "klasę",
            "pseudoklasę",
            "identyfikator",
            "pseudoelement"
        ],
        poprawna: "B"
    },
    {
        id: 89,
        pytanie: "Jak nazywa się edytor wspomagający tworzenie stron internetowych, którego sposób działania można w polskim tłumaczeniu określić jako: otrzymujesz to, co widzisz?",
        odpowiedzi: [
            "IDE",
            "WYSIWYG",
            "WEB STUDIO",
            "VISUAL EDITOR"
        ],
        poprawna: "B"
    },
    {
        id: 90,
        pytanie: "Kolor 255 12 12 w modelu RGB na stronie www powinien być zapisany w postaci",
        odpowiedzi: [
            "#2551212",
            "#EE0C0C",
            "#AB1A1D",
            "#FF0C0C"
        ],
        poprawna: "D"
    },
    {
        id: 91,
        pytanie: "CMYK to zestaw czterech podstawowych kolorów farb drukarskich:",
        odpowiedzi: [
            "turkusowego, błękitnego, białego, różowego",
            "turkusowego, purpurowego, białego, czarnego",
            "czerwonego, purpurowego, żółtego, szarego",
            "turkusowego, purpurowego, żółtego, czarnego"
        ],
        poprawna: "D"
    },
    {
        id: 92,
        pytanie: "Cechą formatu PNG jest",
        odpowiedzi: [
            "obsługa animacji",
            "bezstratna kompresja",
            "brak obsługi kanału alfa",
            "reprezentacja grafiki wektorowej"
        ],
        poprawna: "B"
    },
    {
        id: 93,
        pytanie: "Saturacja koloru nazywana jest inaczej",
        odpowiedzi: [
            "jasnością koloru",
            "nasyceniem koloru",
            "dopełnieniem koloru",
            "przezroczystością koloru"
        ],
        poprawna: "B"
    },
    {
        id: 94,
        pytanie: "Kanał alfa służy do zdefiniowania",
        odpowiedzi: [
            "jasności i kontrastu kolorów",
            "przezroczystość obiektu graficznego",
            "zaznaczonego fragmentu obiektu graficznego",
            "podstawowych parametrów obiektu graficznego"
        ],
        poprawna: "B"
    },
    {
        id: 95,
        pytanie: "Częstotliwość próbkowania ma wpływ na",
        odpowiedzi: [
            "jakość cyfrowego dzwięku",
            "jakość analogowego dzwięku",
            "amplitudę fali dźwiękowej utworu",
            "skalę głośności zapisanego utworu"
        ],
        poprawna: "A"
    },
    {
        id: 96,
        pytanie: "Wysokość dźwięku zależy od",
        odpowiedzi: [
            "siły wzbudzenia drgania",
            "sposobu pobudzania drgania",
            "czasu drgania źródła dzwięku",
            "częstotliwości drgania fali akustycznej"
        ],
        poprawna: "D"
    },
    {
        id: 97,
        pytanie: "Typ stało-znakowy w języku SQL to",
        odpowiedzi: [
            "char",
            "text",
            "time",
            "bool"
        ],
        poprawna: "A"
    },
    {
        id: 98,
        pytanie: "Operator arytmetyczny modulo w języku SQL to",
        odpowiedzi: [
            "/",
            "||",
            "&",
            "%"
        ],
        poprawna: "D"
    },
    {
        id: 99,
        pytanie: "Polecenie w języku SQL ALTER TABLE USA... ma za zadanie",
        odpowiedzi: [
            "usunięcie tabeli USA",
            "modyfikację tabeli USA",
            "nadpisanie starej tabeli USA",
            "utworzenie nowej tabeli USA"
        ],
        poprawna: "B"
    },
    {
        id: 100,
        pytanie: "Kod: SELECT imie, pesel, wiek FROM dane WHERE wiek IN (18,30) spowoduje wybranie:",
        odpowiedzi: [
            "imion, nazwisk i numerów PESEL osób w wieku poniżej 18 lat",
            "imion, numerów PESEL i wieku osób z przedziału od 18 do 30 lat",
            "imion, numerów PESEL i wieku osób posiadających powyżej 30 lat",
            "imion, numerów PESEL i wieku osób w wieku równym 18 lub 30 lat"
        ],
        poprawna: "D"
    },
    {
        id: 101,
        pytanie: "Aby policzyć wszystkie wiersze tabeli Koty należy użyć polecenia:",
        odpowiedzi: [
            "SELECT COUNT(*) FROM Koty",
            "SELECT ROWNUM() FROM Koty",
            "SELECT COUNT(Koty) AS ROWNUM",
            "SELECT COUNT(ROWNUM) FROM Koty"
        ],
        poprawna: "A"
    },
    {
        id: 102,
        pytanie: "Aby podczas tworzenia tabeli utworzyć klucz obcy na wielu kolumnach, należy użyć polecenia",
        odpowiedzi: [
            "CONSTRAINT(nazwisko,imie) FOREIGN KEY REFERENCES osoby (nazwisko, imie)",
            "CONSTRAINT(nazwisko,imie) FOREIGN REFERENCES KEY osoby (nazwisko, imie)",
            "CONSTRAINT fk_osoba_uczen FOREIGN KEY (nazwisko, imie) REFERENCES osoby (nazwisko,imie)",
            "CONSTRAINT fk_osoba_uczen FOREIGN KEY ON (nazwisko, imie) REFERENCES osoby (nazwisko,imie)"
        ],
        poprawna: "C"
    },
    {
        id: 103,
        pytanie: "W algebrze relacji operacja selekcji polega na",
        odpowiedzi: [
            "wyelminowaniu pustych wierszy",
            "wybraniu krotek spełniających określone warunki",
            "wybraniu krotek niezawierających wartości NULL",
            "wyelminowaniu krotek z powtarzającymi się polami"
        ],
        poprawna: "B"
    },
    {
        id: 104,
        pytanie: "Relacja w bazach danych jest",
        odpowiedzi: [
            "logicznym połączeniem tabel",
            "kluczem głównym w relacji tabel",
            "algebraicznym połączeniem tabel",
            "połączeniem dwóch pól jednej tabeli"
        ],
        poprawna: "A"
    },
    {
        id: 105,
        pytanie: "Wskaż poprawną kolejność etapów projektowania relacyjnej bazy danych",
        odpowiedzi: [
            "Selekcja, Określenie relacji, Określenie kluczy podstawowych tabel, Określenie zbioru danych",
            "Określenie relacji, Określenie kluczy podstawowych tabel, Selekcja, Określenie zbioru danych",
            "Określenie kluczy podstawowych tabel, Określenie zbioru danych, Selekcja, Określenie relacji",
            "Określenie zbioru danych, Selekcja, Określenie kluczy podstawowych tabel, Określenie relacji"
        ],
        poprawna: "D"
    },
    {
        id: 106,
        pytanie: "Formularze do obsługi baz danych tworzy się w celu",
        odpowiedzi: [
            "raportowania danych",
            "wyszukiwania wierszy spełniających dane kryteria",
            "wprowadzenia powiązań w relacyjnych bazach danych",
            "wygodniejszego wprowadzania, edytowania i usuwania danych"
        ],
        poprawna: "D"
    },
    {
        id: 107,
        pytanie: "Integralność referencyjna w modelu relacyjnych baz danych oznacza, że",
        odpowiedzi: [
            "wartość klucza głównego oraz klucza obcego nie jest pusta",
            "klucz główny lub klucz obcy nie zawierają wartości NULL",
            "każdemu kluczowi głównemu odpowiada dokładnie jeden klucz obcy w tabeli lub tabelach powiązanych",
            "wartość klucza obcego w danej tabeli musi być albo równa wartości klucza głównego w tabeli z nia powiązanej albo równa wartości NULL"
        ],
        poprawna: "D"
    },
    {
        id: 108,
        pytanie: "Deklaracja w języku JavaScript: var x=true; powoduje, że zmienna x jest typu",
        odpowiedzi: [
            "logicznego",
            "liczbowego",
            "ciąg znaków",
            "wyliczeniowego"
        ],
        poprawna: "A"
    },
    {
        id: 109,
        pytanie: "Obiekt typu array w języku Javascript służy do przechowywania",
        odpowiedzi: [
            "wielu wartości lub funkcji",
            "wielu wartości dowolnego typu",
            "wielu wartości wyłącznie liczbowych",
            "wielu wartości wyłącznie tekstowych"
        ],
        poprawna: "B"
    },
    {
        id: 110,
        pytanie: "Ukrywanie pewnych pól lub metod obiektów danej klasy tak, aby były one dostępne tylko metodom wewnętrznym tej klasy lub funkcjom zaprzyjaźnionym, to",
        odpowiedzi: [
            "polimorfizm",
            "hermetyzacja",
            "konkatenacja",
            "dziedziczenie"
        ],
        poprawna: "B"
    },
    {
        id: 111,
        pytanie: "Odwoływanie funkcji do samej siebie to",
        odpowiedzi: [
            "iteracja",
            "rekurencja",
            "hermetyzacja",
            "dziedziczenie"
        ],
        poprawna: "B"
    },
    {
        id: 112,
        pytanie: "W języku PHP zmienna $_GET jest zmienną",
        odpowiedzi: [
            "predefiniowaną, używaną do przekazywania danych do skryptów PHP poprzez adres strony",
            "predefiniowaną, używaną do gromadzenia wartości formularza po nagłówkach zlecenia HTTP (danych z formularza nie można zobaczyć w adresie)",
            "zdefiniowaną przez twórcę strony, służącą do przekazywania danych z formularza przez adres strony",
            "zwykłą, zdefiniowaną przez twórcę strony"
        ],
        poprawna: "A"
    },
    {
        id: 113,
        pytanie: "W języku PHP w instrukcji switch musi występować",
        odpowiedzi: [
            "instrukcja default",
            "konstrukcja switch(wyrażenie)",
            "przynajmniej dwie instrukcje case",
            "instrukcja break po każdej instrukcji case"
        ],
        poprawna: "B"
    },
    {
        id: 114,
        pytanie: "Konstruktor w języku PHP jest metodą o nazwie",
        odpowiedzi: [
            "_new",
            "_open",
            "_create",
            "_construct"
        ],
        poprawna: "D"
    },
    {
        id: 115,
        pytanie: "Debugger to program służący do",
        odpowiedzi: [
            "badania właściwości programu",
            "sprawdzania szybkości programu",
            "wyszukiwania błędów w kodzie programu",
            "zoptymalizowanie pamięci używanej przez aplikację"
        ],
        poprawna: "C"
    },
    {
        id: 116,
        pytanie: "Kod zamieszczony w ramce spowoduje wypisanie liczb",
        odpowiedzi: [
            "2 4 6 8",
            "1 3 5 7 9",
            "2 4 6 8 10",
            "1 2 3 4 5 6 7 8 9 10"
        ],
        poprawna: "C",
        obraz: "116.jpg"
    },
    {
        id: 117,
        pytanie: "Który kod jest alternatywny do kodu zamieszczonego w ramce?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "117.jpg"
    },
    {
        id: 118,
        pytanie: "Zamieszczony w ramce fragment skryptu w języku JavaScript",
        odpowiedzi: [
            "przypisze zmienniej s zmienną t",
            "wyświetli długość napisu ze zmiennej t",
            "przypisze zmiennej s długość napisu ze zmiennej t",
            "przypisze zmiennej s fragment napisu ze zmiennej t, o określonej przez zmienną length długości"
        ],
        poprawna: "C",
        obraz: "118.jpg"
    },
    {
        id: 119,
        pytanie: "Zamieszczony w ramce fragment kodu w JavaScript wypisze",
        odpowiedzi: [
            "\"ze\"",
            "\"wo\"",
            "\"owodzeni\"",
            "\"wodzenia\""
        ],
        poprawna: "A",
        obraz: "119.jpg"
    },
    {
        id: 120,
        pytanie: "Który fragment kodu JavaScript zwróci wartość true?",
        odpowiedzi: [
            "\"a\" > \"b\"",
            "\"ab\" > \"c\"",
            "\"abc\" > \"def\"",
            "\"def\" > \"abc\""
        ],
        poprawna: "D"
    },
    {
        id: 121,
        pytanie: "W kodzie PHP znak \"//\" oznacza",
        odpowiedzi: [
            "początek skryptu",
            "operator alernatywy",
            "operator dzielenia całkowitego",
            "początek komentarza jednoliniowego"
        ],
        poprawna: "D"
    },
    {
        id: 122,
        pytanie: "Zapisując hasło użytkownika serwisu WWW (np. bankowości internetowej), w celu jego zabezpieczenia przed odtajnieniem, zwykle używa się funkcji",
        odpowiedzi: [
            "klucza",
            "cyklometrycznych",
            "abstrakcyjnych",
            "mieszających"
        ],
        poprawna: "A"
    },
    {
        id: 123,
        pytanie: "W celu określenia wysokości obrazka wyświetlonego na stronie WWW należy wykorzystać właściwość CSS o nazwie",
        odpowiedzi: [
            "width",
            "padding",
            "height",
            "margin"
        ],
        poprawna: "C"
    },
    {
        id: 124,
        pytanie: "Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość",
        odpowiedzi: [
            "font-family: Verdana;",
            "font-style: Verdana;",
            "font-name: Verdana;",
            "font-weight: Verdana;"
        ],
        poprawna: "A"
    },
    {
        id: 125,
        pytanie: "Funkcja zapisana językiem PHP służy do",
        odpowiedzi: [
            "połączenia z bazą danych",
            "ustawienia hasła do bazy danych",
            "zabezpieczenia bazy danych",
            "pobrania danych z bazy danych"
        ],
        poprawna: "D",
        obraz: "125.jpg"
    },
    {
        id: 126,
        pytanie: "Kwerenda pozwalająca na wprowadzenie zmian w wielu rekordach lub przeniesienie wielu rekordów przy użyciu pojedynczej operacji, nosi nazwę kwerendy",
        odpowiedzi: [
            "krzyżowej",
            "funkcjonalnej",
            "wybierającej",
            "parametrycznej"
        ],
        poprawna: "B"
    },
    {
        id: 127,
        pytanie: "Wskaż rezultat działania fragmentu kodu JavaScript",
        odpowiedzi: [
            "Usunięcie akapitu ze strony",
            "Dodanie akapitu na koniec strony",
            "Wyświetlenie okna dialogowego z napisem akapit",
            "Dodanie akapitu na początku strony"
        ],
        poprawna: "B",
        obraz: "127.jpg"
    },
    {
        id: 128,
        pytanie: "Fizyczny model replikacji bazy danych przedstawiony na rysunku jest modelem",
        odpowiedzi: [
            "rozproszonym",
            "centralnego subskrybenta",
            "równorzędnym",
            "centralnego wydawcy"
        ],
        poprawna: "D",
        obraz: "128.jpg"
    },
    {
        id: 129,
        pytanie: "Za pomocą którego protokołu należy wysłać pliki na serwer WWW?",
        odpowiedzi: [
            "DHCP",
            "FTP",
            "POP3",
            "DNS"
        ],
        poprawna: "B"
    },
    {
        id: 130,
        pytanie: "Wynikiem działania zamieszczonej pętli zapisanej językiem PHP jest wypisanie kolejnych liczb",
        odpowiedzi: [
            "od 10 do 1",
            "od 1 do 10",
            "od 10 do 2",
            "od 2 do 10"
        ],
        poprawna: "A",
        obraz: "130.jpg"
    },
    {
        id: 131,
        pytanie: "Które z poleceń naprawi uszkodzoną tabelę w języku SQL?",
        odpowiedzi: [
            "REGENERATE TABLE tbl_name",
            "REPAIR TABLE tblname",
            "OPTIMIZE TABLE tbl_name",
            "ANALYZE TABLE tbl_name"
        ],
        poprawna: "B"
    },
    {
        id: 132,
        pytanie: "Który z wymienionych formatów plików graficznych obsługuje przezroczystość?",
        odpowiedzi: [
            "JPG",
            "PNG",
            "NEF",
            "BMP"
        ],
        poprawna: "B"
    },
    {
        id: 133,
        pytanie: "Który zapis stylu CSS ustawi tło bloku na kolor niebieski?",
        odpowiedzi: [
            "div {shadow: blue;}",
            "div {border-color: blue;}",
            "div {color: blue;}",
            "div {background-color: blue;}"
        ],
        poprawna: "D"
    },
    {
        id: 134,
        pytanie: "Domyślna nazwa pliku konfiguracyjnego serwera Apache to",
        odpowiedzi: [
            ".configuration",
            "configuration.php",
            "htaccess.cnf",
            ".htaccess"
        ],
        poprawna: "D"
    },
    {
        id: 135,
        pytanie: "Organizacja zajmująca się ustalaniem standardu dla języka HTML nosi nazwę",
        odpowiedzi: [
            "W3C",
            "ISO",
            "NASK",
            "WYSIWYG"
        ],
        poprawna: "A"
    },
    {
        id: 136,
        pytanie: "Który z wymienionych systemów nie jest systemem CMS?",
        odpowiedzi: [
            "Joomla",
            "Adobe Flash",
            "WordPress",
            "Drupal"
        ],
        poprawna: "B"
    },
    {
        id: 137,
        pytanie: "Która ze zdefiniowanych funkcji w języku PHP jako wynik zwraca połowę kwadratu wartości przekazanej?",
        odpowiedzi: [
            "function licz($a) { echo $a*$a/2; }",
            "function licz($a) { return $a/2; }",
            "function licz($a) { return $a*$a/2; }",
            "function licz($a) { echo $a/2; }"
        ],
        poprawna: "C"
    },
    {
        id: 138,
        pytanie: "W strukturalnych językach programowania w celu przechowania informacji o 50 uczniach (ich imionach, nazwiskach, średniej ocen) należy użyć",
        odpowiedzi: [
            "tablicy 50 elementów o składowych strukturalnych",
            "struktury 50 elementów o składowych typu tablicowego",
            "tablicy 50 elementów o składowych łańcuchowych",
            "klasy 50 elementów typu tablicowego"
        ],
        poprawna: "A"
    },
    {
        id: 139,
        pytanie: "Aby zobaczyć wyniki działania skryptu napisanego w języku PHP, będącego elementem strony WWW, musi być on",
        odpowiedzi: [
            "zinterpretowany po stronie serwera",
            "skompilowany po stronie klienta",
            "skompilowany po stronie serwera",
            "zinterpretowany po stronie klienta"
        ],
        poprawna: "A"
    },
    {
        id: 140,
        pytanie: "Projektowanie logicznego układu witryny polega na",
        odpowiedzi: [
            "rozmieszczeniu elementów w konkretnych miejscach witryny",
            "opracowaniu zestawu grafik dla witryny",
            "zdefiniowaniu treści witryny",
            "ustaleniu adresów URL dla podstron witryny"
        ],
        poprawna: "A"
    },
    {
        id: 141,
        pytanie: "Prosta animacja może być zapisana w formacie",
        odpowiedzi: [
            "PSD",
            "BMP",
            "GIF",
            "TIFF"
        ],
        poprawna: "C"
    },
    {
        id: 142,
        pytanie: "Która z instrukcji umożliwia wysłanie tekstu do przeglądarki?",
        odpowiedzi: [
            "echo",
            "exit",
            "break",
            "type"
        ],
        poprawna: "A"
    },
    {
        id: 143,
        pytanie: "Aby stworzyć tabelę w bazie danych, należy zastosować polecenie SQL",
        odpowiedzi: [
            "ADD TABLE",
            "NEW TABLE",
            "PLUS TABLE",
            "CREATE TABLE"
        ],
        poprawna: "D"
    },
    {
        id: 144,
        pytanie: "Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę",
        odpowiedzi: [
            "onClick",
            "onDblClick",
            "onLoad",
            "onKeyDown"
        ],
        poprawna: "A"
    },
    {
        id: 145,
        pytanie: "W skład typowego frameworka wchodzą",
        odpowiedzi: [
            "zarządzanie komunikacją z bazą danych, mechanizm uruchamiania i przetwarzania akcji",
            "domena i obsługa błędów",
            "obsługa formularzy i wbudowany serwer",
            "mechanizm uruchamiania i przetwarzania akcji, oraz certyfikat http"
        ],
        poprawna: "A"
    },
    {
        id: 146,
        pytanie: "W celu stworzenia relacji wiele do wielu łączącej tabele A i B wystarczy, że",
        odpowiedzi: [
            "tabela A będzie zawierała te same pola co tabela B",
            "wiele rekordów z tabeli A zduplikuje się w tabeli B",
            "zdefiniuje się trzecią tabelę z kluczami obcymi do tabel A i B",
            "tabelę A połączy się z tabelą B poprzez zdefiniowanie kluczy obcych"
        ],
        poprawna: "C"
    },
    {
        id: 147,
        pytanie: "W celu zapewnienia spójności danych w bazie programu Microsoft Access należy skorzystać",
        odpowiedzi: [
            "z więzów integralności",
            "z kwerendy aktualizującej",
            "z defragmentacji bazy",
            "z archiwizacji bazy"
        ],
        poprawna: "A"
    },
    {
        id: 148,
        pytanie: "W załączonym fragmencie kodu CSS kolor jest zapisany w postaci",
        odpowiedzi: [
            "HSL",
            "dziesiętnej",
            "CMYK",
            "szesnastkowej"
        ],
        poprawna: "D",
        obraz: "148.jpg"
    },
    {
        id: 149,
        pytanie: "W języku skryptowym JavaScript zmienne mogą być deklarowane",
        odpowiedzi: [
            "w momencie pierwszego użycia zmiennej",
            "tylko na początku skryptu",
            "tylko jeśli podamy typ zmiennej i jej nazwę",
            "zawsze z poprzedzającym nazwę znakiem $"
        ],
        poprawna: "A"
    },
    {
        id: 150,
        pytanie: "W językach programowania zmienna typu integer służy do przechowywania",
        odpowiedzi: [
            "znaku",
            "liczby całkowitej",
            "liczby rzeczywistej",
            "wartości logicznej"
        ],
        poprawna: "B"
    },
    {
        id: 151,
        pytanie: "Jeśli rozmiar pliku graficznego jest zbyt duży do publikacji w Internecie, należy",
        odpowiedzi: [
            "dodać kanał alfa",
            "zmniejszyć jego rozdzielczość",
            "zwiększyć jego głębię kolorów",
            "zapisać w formacie BMP"
        ],
        poprawna: "B"
    },
    {
        id: 152,
        pytanie: "Które z poleceń umożliwia dodanie kolumny zadaniekompletne do tabeli zadania?",
        odpowiedzi: [
            "ALTER TABLE zadania ADD COLUMN zadaniekompletne int",
            "ADD COLUMN zadaniekompletne WITH zadania",
            "CREATEINDEX zadania ADD COLUMN zadaniekompletne int",
            "INSERT INTO zadania VALUES zadaniakompletne"
        ],
        poprawna: "A"
    },
    {
        id: 153,
        pytanie: "W bazie danych, w celu uporządkowania listy uczniów według roku urodzenia, należy użyć polecenia",
        odpowiedzi: [
            "SELECT imie,nazwisko,klasa from uczniowie group by rok_urodzenia",
            "SELECT imie,nazwisko,klasa from uczniowie order by rok_urodzenia",
            "SELECT imie,nazwisko,klasa from uczniowie order by nazwisko",
            "SELECT imie,nazwisko,klasa from uczniowie where rok_urodzenia = 1994"
        ],
        poprawna: "B"
    },
    {
        id: 154,
        pytanie: "Wskaż dwa sposoby zabezpieczenia bazy danych Microsoft Access",
        odpowiedzi: [
            "Ustalanie hasła do otwarcia bazy danych oraz zabezpieczeń na poziomie użytkownika",
            "Zaszyfrowanie pliku bazy danych oraz SMSy z kodem autoryzującym",
            "Funkcje anonimowe oraz ustalenie hasła otwarcia bazy danych",
            "Ustalenie zabezpieczeń na poziomie użytkownika oraz sesji"
        ],
        poprawna: "A"
    },
    {
        id: 155,
        pytanie: "W zamieszczonym przykładzie pseudoklasa hover sprawi, że styl pogrubiony będzie przypisany",
        odpowiedzi: [
            "odnośnikowi, w momencie kiedy najechał na niego kursor myszy",
            "wszystkim odnośnikom nieodwiedzonym",
            "każdemu odnośnikowi niezależnie od aktualnego stanu",
            "wszystkim odnośnikom odwiedzonym"
        ],
        poprawna: "A",
        obraz: "155.jpg"
    },
    {
        id: 156,
        pytanie: "Certyfikat SSL jest stosowany do",
        odpowiedzi: [
            "zapisania danych o sesjach tworzonych w witrynie",
            "zidentyfikowania właściciela domeny",
            "deszyfracji transmitowanych danych",
            "blokowania szkodliwego oprogramowania w witrynie"
        ],
        poprawna: "B"
    },
    {
        id: 157,
        pytanie: "W języku SQL przywilej SELECT polecenia GRANT pozwala użytkownikowi baz danych na",
        odpowiedzi: [
            "odczyt danych z tabeli",
            "tworzenie tabeli",
            "usunięcie danych z tabeli",
            "modyfikowanie danych w tabeli"
        ],
        poprawna: "A"
    },
    {
        id: 158,
        pytanie: "W języku HTML atrybut alt znacznika img jest wykorzystywany w celu zdefiniowania",
        odpowiedzi: [
            "ścieżki i nazwy pliku źródłowego grafiki",
            "tekstu, który będzie wyświetlony, jeśli nie może być wyświetlona grafika",
            "podpisu, który zostanie wyświetlony pod grafiką",
            "atrybutów grafiki, takich jak rozmiar, obramowanie, wyrównanie"
        ],
        poprawna: "B"
    },
    {
        id: 159,
        pytanie: "Warunek zapisany językiem PHP wypisze liczbę, gdy",
        odpowiedzi: [
            "jest ona parzysta",
            "jest ona liczbą pierwszą",
            "wynik dzielenia liczby przez 2 jest równy 0",
            "jest ona dodatnia"
        ],
        poprawna: "A",
        obraz: "159.jpg"
    },
    {
        id: 160,
        pytanie: "Analizując przedstawiony kod zapisany w języku HTML, można stwierdzić, że w przeglądarce",
        odpowiedzi: [
            "zostanie ustawiony dolny margines dla bloku B",
            "blok B będzie oddalony od bloku A o 20 px",
            "blok A będzie przesunięty w lewo o 20 px",
            "bloki A i B będą nachodzić na siebie."
        ],
        poprawna: "B",
        obraz: "160.jpg"
    },
    {
        id: 161,
        pytanie: "Baza danych zawiera tabelę o nazwie pracownicy o polach: nazwisko, imie, pensja, wiek. Jak wygląda składnia polecenia wyznaczającego średnią pensję pracowników?",
        odpowiedzi: [
            "select AVG (nazwisko) into pensja",
            "select VAR (pracownicy) into pensja",
            "select AVG (pensja) from pracownicy",
            "select VAR (pensja) from nazwisko"
        ],
        poprawna: "C"
    },
    {
        id: 162,
        pytanie: "Do reprezentacji liczb zmiennoprzecinkowych w języku C stosowany jest typ",
        odpowiedzi: [
            "int",
            "bool",
            "char",
            "double"
        ],
        poprawna: "D"
    },
    {
        id: 163,
        pytanie: "Polecenie SQL o treści: UPDATE artykuly SET cena = cena * 0.7 WHERE kod = 2; oznacza",
        odpowiedzi: [
            "w tabeli artykuly obniża wartość każdego pola cena o 30% dla wszystkich artykułów",
            "w tabeli artykuly obniża wartość każdego pola cena dla którego pole kod jest równe 2",
            "wprowadzenie w tabeli artykuly nowych pól cena i kod",
            "wprowadzenie w tabeli artykuly pola o nazwie cena ze znacznikiem kod"
        ],
        poprawna: "B"
    },
    {
        id: 164,
        pytanie: "Do edycji grafiki wektorowej stosuje się program",
        odpowiedzi: [
            "Paint",
            "Audacity",
            "Wordpad",
            "Corel Draw"
        ],
        poprawna: "D"
    },
    {
        id: 165,
        pytanie: "W programowaniu obiektowym mechanizm współdzielenia pól i metod klasy w taki sposób, że klasa pochodna zawiera metody zdefiniowane w klasie bazowej nazywa się",
        odpowiedzi: [
            "hermetyzacją",
            "wirtualizacją",
            "polimorfizmem",
            "dziedziczeniem"
        ],
        poprawna: "D"
    },
    {
        id: 166,
        pytanie: "Który z wymienionych znaczników języka HTML nie jest stosowany w celu formatowania tekstu?",
        odpowiedzi: [
            "<em>",
            "<sub>",
            "<div>",
            "<strong>"
        ],
        poprawna: "C"
    },
    {
        id: 167,
        pytanie: "Aby zdefiniować w języku HTML listę nienumerowaną, należy użyć znacznika",
        odpowiedzi: [
            "<dd>",
            "<dt>",
            "<ol>",
            "<ul>"
        ],
        poprawna: "D"
    },
    {
        id: 168,
        pytanie: "W języku CSS właściwość font-size przyjmuje, według słów kluczowych, wartości",
        odpowiedzi: [
            "tylko big i small",
            "wyłączenie small, medium, large",
            "jedynie small, smaller,large, larger",
            "ze zbioru xx-small, x-small, medium, large, x-large, xx-large"
        ],
        poprawna: "D"
    },
    {
        id: 169,
        pytanie: "W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstepu między elementem a otaczającym go obramowaniem, należy użyć polecenia",
        odpowiedzi: [
            "padding-top",
            "outline-top",
            "border-top",
            "local-top"
        ],
        poprawna: "A"
    },
    {
        id: 170,
        pytanie: "Funkcja edytor WYSIWYG Adobe Dreamweaver służy do",
        odpowiedzi: [
            "wyświetlania interaktywnego drzewa struktury HTML dla zawartości statycznej i dynamicznej",
            "definiowania kaskadowych arkuszy stylów dołączonych do witryny",
            "formatowanie tekstu przy pomocy dostępnych znaczników",
            "tworzenia szablonu strony internetowej"
        ],
        poprawna: "A"
    },
    {
        id: 171,
        pytanie: "Aby witryna internetowa prawidłowo skalowała się w urządzeniach mobilnych, należy wielkość czcionki zdefiniować",
        odpowiedzi: [
            "w pikselach",
            "w procentach",
            "w milimetrach",
            "tylko znacznikami big i small"
        ],
        poprawna: "B"
    },
    {
        id: 172,
        pytanie: "Znacznik meta języka HTML należy umieścić",
        odpowiedzi: [
            "pomiędzy znacznikami body",
            "w części nagłówkowej witryny internetowej",
            "pomiędzy znacznikami paragrafu",
            "w stopce witryny internetowej"
        ],
        poprawna: "B"
    },
    {
        id: 173,
        pytanie: "Prawidłowy, zgodny ze standardem języka XHTML, zapis samozamykającego się znacznika odpowiadającego za łamanie linii ma postać",
        odpowiedzi: [
            "</ br>",
            "<br />",
            "</br/>",
            "<br> </br>"
        ],
        poprawna: "B"
    },
    {
        id: 174,
        pytanie: "Najprostszą i najmniej pracochłonną metodą przetestowania działania witryny internetowej w wielu przeglądarkach i ich różnych wersjach jest",
        odpowiedzi: [
            "skorzystanie z walidatora języka HTML",
            "skorzystanie z emulatora przeglądarek internetowych np. Browser Sandbox",
            "zainstalowanie na kilku komputerach różnych przeglądarek i testowanie witryny",
            "testowanie witryny w programie Internet Explorer, zakładając kompatybilność innych przeglądarek"
        ],
        poprawna: "B"
    },
    {
        id: 175,
        pytanie: "Aby przenieść witrynę na serwer, można skorzystać z oprogramowania",
        odpowiedzi: [
            "Bugzilla",
            "Go!Zilla",
            "FileZilla",
            "CloneZilla"
        ],
        poprawna: "C"
    },
    {
        id: 176,
        pytanie: "Kolor zapisany kodem RGB, o wartości rgb(255, 128, 16) w kodzie szesnastkowym będzie miał wartość:",
        odpowiedzi: [
            "#008010",
            "#ff0f10",
            "#ff8010",
            "#ff8011"
        ],
        poprawna: "C"
    },
    {
        id: 177,
        pytanie: "Plik graficzny należy zapisać w formacie GIF, jeżeli",
        odpowiedzi: [
            "jest to grafika wektorowa",
            "jest to obraz stereoskopowy",
            "jest potrzeba zapisu obrazu bez kompresji",
            "jest potrzeba zapisu obrazu lub animacji"
        ],
        poprawna: "D"
    },
    {
        id: 178,
        pytanie: "Aby dopasować dźwięk do danego poziomu głośności, należy użyć efektu",
        odpowiedzi: [
            "wyciszenia",
            "normalizacji",
            "podbicia basów",
            "usuwania szumów"
        ],
        poprawna: "B"
    },
    {
        id: 179,
        pytanie: "Instrukcja DROP języka SQL ma za zadanie",
        odpowiedzi: [
            "usunąć istniejący obiekt",
            "zmienić parametry obiektu",
            "zaktualizować dane obiektu",
            "dodać nowy obiekt"
        ],
        poprawna: "A"
    },
    {
        id: 180,
        pytanie: "Baza danych zawiera tabelę uczniowie z polami: imie, nazwisko, klasa. Aby odnaleźć imiona i nazwiska tych uczniów, których nazwiska rozpoczynają się literą M, należy zastosować polecenie SQL",
        odpowiedzi: [
            "SELECT nazwisko, imie FROM uczniowie WHERE nazwisko IN \"M%\";",
            "SELECT nazwisko, imie FROM uczniowie WHERE nazwisko LIKE \"M%\";",
            "SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko = \"M%\";",
            "SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko IN \"M%\";"
        ],
        poprawna: "B"
    },
    {
        id: 181,
        pytanie: "Baza danych zawiera tabele z polami: . Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie",
        odpowiedzi: [
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena FROM 1000 TO 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 OR 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 AND 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena BETWEEN 1000 AND 1500;"
        ],
        poprawna: "D"
    },
    {
        id: 182,
        pytanie: "Wartość pola tabeli pełniącego rolę klucza podstawowego",
        odpowiedzi: [
            "musi być unikalna",
            "jest zawsze typu numerycznego",
            "służy do szyfrowania zawartości tabeli",
            "może przyjmować wartość pustą (NULL)"
        ],
        poprawna: "A"
    },
    {
        id: 183,
        pytanie: "Aby utworzyć relację jeden do wielu, w tabeli po stronie , należy zdefiniować",
        odpowiedzi: [
            "klucz obcy wskazujący na klucz obcy tabeli po stronie",
            "klucz sztuczny odnoszący się do kluczy podstawowych obu tabel",
            "klucz obcy wskazujący na klucz podstawowy tabeli po stronie",
            "klucz podstawowy wskazujący na klucz podstawowy tabeli po stronie"
        ],
        poprawna: "C"
    },
    {
        id: 184,
        pytanie: "Narzędziem służącym do grupowania i prezentowania informacji z wielu rekordów w celu ich drukowania lub rozpowszechniania jest",
        odpowiedzi: [
            "raport",
            "kwerenda",
            "formularz",
            "makropolecenie"
        ],
        poprawna: "A"
    },
    {
        id: 185,
        pytanie: "Aby uprościć wprowadzenie i edytowanie danych w tabeli, należy zdefiniować",
        odpowiedzi: [
            "kwerendę SELECT",
            "formularz",
            "raport",
            "filtr"
        ],
        poprawna: "B"
    },
    {
        id: 186,
        pytanie: "Baza danych 6-letniej szkoły podstawowej zawiera tabelę z polami: . Wszyscy uczniowie klas 1-5 zdali do następnej klasy. Aby zwiększyć wartość w polu klasa o 1 należy użyć polecenia",
        odpowiedzi: [
            "SELECT szkola FROM klasa=klasa+1 WHERE klasa >=1 AND klasa <=5;",
            "SELECT nazwisko, imie FROM klasa=klasa+1 WHERE klasa>1 OR klasa <5;",
            "UPDATE szkola SET klasa=klasa+1 WHERE klasa>=1 AND klasa <=5;",
            "UPDATE nazwisko, imie SET klasa=klasa+1 WHERE klasa>1 OR klasa<5;"
        ],
        poprawna: "C"
    },
    {
        id: 187,
        pytanie: "Uprawnienia obiektowe, nadawane użytkownikom serwera bazy danych, mogą pozwalać lub zabraniać",
        odpowiedzi: [
            "dziedziczyć uprawnienia",
            "modyfikować role i konta użytkowników",
            "wykonywać instrukcje, takie jak tworzenie kopii zapasowej",
            "wykonywać operacje na bazie, takie jak wstawanie lub modyfikowanie danych"
        ],
        poprawna: "D"
    },
    {
        id: 188,
        pytanie: "Przed wykonaniem kopii bezpieczeństwa bazy danych, tak aby kopia ta była poprawna i możliwa do późniejszego odtworzenia, należy sprawdzić",
        odpowiedzi: [
            "możliwość udostępnienia bazy danych",
            "prawa dostępu do serwera bazy danych",
            "poprawność składni zapytań",
            "spójność bazy danych"
        ],
        poprawna: "D"
    },
    {
        id: 189,
        pytanie: "W MS SQL Server polecenie RESTORE DATABASE służy do",
        odpowiedzi: [
            "odtworzenia bazy danych z kopii bezpieczeństwa",
            "odświeżenia bazy danych z kontrolą więzów integralności",
            "przebudowania bazy danych w oparciu o buforowane dane",
            "usunięcia bazy danych z serwera centralnego subskrybenta"
        ],
        poprawna: "A"
    },
    {
        id: 190,
        pytanie: "W języku PHP zmienna typu float przyjmuje wartości",
        odpowiedzi: [
            "logiczne",
            "nieliczbowe",
            "tylko całkowite",
            "zmiennoprzecinkowe"
        ],
        poprawna: "D"
    },
    {
        id: 191,
        pytanie: "Dany jest fragment kodu PHP z zdeklarowaną zmienną typu tablicowego. W wyniku wykonania kodu zostanie wpisane imię",
        odpowiedzi: [
            "Anna",
            "Tomasz",
            "Krzysztof",
            "Aleksandra"
        ],
        poprawna: "C",
        obraz: "191.jpg"
    },
    {
        id: 192,
        pytanie: "Przedstawiony kod języka PHP",
        odpowiedzi: [
            "jest błędny, nieznany operator =>",
            "definiuje tablicę z trzema wartościami",
            "definiuje tablicę z sześcioma wartościami",
            "jest błędny, indeksami tablicy mogą być tylko liczby całkowite"
        ],
        poprawna: "B",
        obraz: "192.jpg"
    },
    {
        id: 193,
        pytanie: "W języku JavaScript poprawnie nazwana zmienna to",
        odpowiedzi: [
            "#imie",
            "imie2",
            "imię2",
            "imię%"
        ],
        poprawna: "B"
    },
    {
        id: 194,
        pytanie: "Zakładając, że zmienne: a, b, c przechowują wartości numeryczne, wynikiem działania warunku będzie wypisanie liczby",
        odpowiedzi: [
            "najmniejszej",
            "największej",
            "nieparzystej",
            "parzystej"
        ],
        poprawna: "B",
        obraz: "194.jpg"
    },
    {
        id: 195,
        pytanie: "Fragment kodu języku PHP ma następującą postać. Wynikiem działania pętli będzie wypisanie liczb:",
        odpowiedzi: [
            "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20",
            "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19",
            "0,4,8,12,16,20",
            "0,4,8,12,16"
        ],
        poprawna: "C",
        obraz: "195.jpg"
    },
    {
        id: 196,
        pytanie: "Zadaniem funkcji zapisanej w języku PHP jest",
        odpowiedzi: [
            "Wypisanie liczby parzystej",
            "Wypisanie liczby nieparzystej",
            "Zwrócenie wartości 1, gdy liczba jest parzysta",
            "Zwrócenie wartości 0, gdy liczba jest parzysta"
        ],
        poprawna: "C",
        obraz: "196.jpg"
    },
    {
        id: 197,
        pytanie: "Wykonanie kodu JavaScript w przeglądarce wymaga",
        odpowiedzi: [
            "debugowania",
            "kompilowania",
            "interpretowania",
            "zamiany na kod maszynowy"
        ],
        poprawna: "C"
    },
    {
        id: 198,
        pytanie: "Kod strony WWW napisanej w języku PHP",
        odpowiedzi: [
            "jest wykonywany po stronie klienta",
            "jest wykonywany po stronie serwera",
            "może być uruchomiony bez obsługi serwera WWW",
            "jest przetwarzany na tych samych zasadach co JavaScript"
        ],
        poprawna: "B"
    },
    {
        id: 199,
        pytanie: "Zakładając, że zmienna tablicowa $tab jest wypełniona liczbami naturalnymi, wynikiem programu będzie wypisanie",
        odpowiedzi: [
            "największego elementu tablicy",
            "najmniejszego elementu tablicy",
            "elementu tablicy, który jest równy wartości $tab[0]",
            "tych elementów, które są większe od zmiennej $liczba"
        ],
        poprawna: "A",
        obraz: "199.jpg"
    },
    {
        id: 200,
        pytanie: "Fragment kodu w języku JavaScript realizujący dodawanie dwóch liczb ma następującą postać. Aby dodawanie wykonane było po kliknięciu przycisku o nazwie , należy w wykropkowane miejsce wstawić",
        odpowiedzi: [
            "<button onselect=\"return dodaj()\">dodaj</button>",
            "<button onselect=\"return dodaj()\">oblicz</button>",
            "<button onclick=\"return oblicz()\">dodaj</button>",
            "<button onclick=\"return dodaj()\">dodaj</button>"
        ],
        poprawna: "D",
        obraz: "200.jpg"
    },
    {
        id: 201,
        pytanie: "Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków",
        odpowiedzi: [
            "<!--",
            "<?",
            "//",
            "#"
        ],
        poprawna: "C"
    },
    {
        id: 202,
        pytanie: "Polecenie pg_connect języka PHP służy do połączenia z bazą",
        odpowiedzi: [
            "mySQL",
            "MS SQL",
            "PostgreSQL",
            "MS ACCESS"
        ],
        poprawna: "C"
    },
    {
        id: 203,
        pytanie: "Aby zamieścić aplikację PHP w internecie, należy jej pliki źródłowe skopiować na serwer za pomocą protokołu",
        odpowiedzi: [
            "FTP",
            "HTTP",
            "SMTP",
            "NNTP"
        ],
        poprawna: "A"
    },
    {
        id: 204,
        pytanie: "Personalizowanie wyglądu strony dla danego użytkownika i jego identyfikacja w serwisie są możliwe dzięki mechanizmowi",
        odpowiedzi: [
            "obiektów DOM",
            "łączenia z bazą",
            "formularzy",
            "cookie"
        ],
        poprawna: "D"
    },
    {
        id: 205,
        pytanie: "Automatyczna weryfikacja właściciela strony udostępnianej przez protokół HTTPS jest możliwa dzięki",
        odpowiedzi: [
            "danym kontaktowym na stronie",
            "kluczom prywatnym",
            "certyfikatowi SSL",
            "danym whois"
        ],
        poprawna: "C"
    },
    {
        id: 206,
        pytanie: "Do grupowania obszarów na poziomie bloków, które będą formatowane za pośrednictwem znaczników, należy użyć",
        odpowiedzi: [
            "<p>",
            "<div>",
            "<span>",
            "<param>"
        ],
        poprawna: "B"
    },
    {
        id: 207,
        pytanie: "Znacznik <i> języka HTML służy do",
        odpowiedzi: [
            "umieszczenia obrazka",
            "zdefiniowania formularza",
            "zmiany kroju pisma na pochylony",
            "zdefiniowania nagłówka w tekście"
        ],
        poprawna: "C"
    },
    {
        id: 208,
        pytanie: "Poniżej przedstawiono fragment kodu języka HTML. Jest on definicją listy:",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "208.jpg"
    },
    {
        id: 209,
        pytanie: "Kod języka CSS można umieścić wewnątrz kodu HTML, posługując się znacznikiem",
        odpowiedzi: [
            "<head>",
            "<style>",
            "<meta>",
            "<body>"
        ],
        poprawna: "B"
    },
    {
        id: 210,
        pytanie: "Chcąc zdefiniować formatowanie tabeli w języku CSS w taki sposób, aby wiersz, który jest aktualnie wskazywany kursorem myszy, został wyróżniony np. innym kolorem, należy zastosować",
        odpowiedzi: [
            "pseudoklasę :visited",
            "pseudoklasę :hover",
            "pseudoelement :first-line",
            "nowy selektor klasy dla wiersza tabeli"
        ],
        poprawna: "B"
    },
    {
        id: 211,
        pytanie: "Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości",
        odpowiedzi: [
            "letter-transform",
            "text-decoration",
            "letter-spacing",
            "text-space"
        ],
        poprawna: "C"
    },
    {
        id: 212,
        pytanie: "Blok deklaracji postaci background-attachment: scroll powoduje, że",
        odpowiedzi: [
            "grafika tła będzie powtarzana (kafelki)",
            "tło strony będzie przewijane razem z tekstem",
            "tło strony będzie stałe, a tekst będzie się przewijał",
            "grafika tła będzie wyświetlona w prawym górnym rogu strony"
        ],
        poprawna: "B"
    },
    {
        id: 213,
        pytanie: "Ikona, która wyświetlona jest przed adresem, w polu adresowym przeglądarki internetowej lub przy tytule otwartej karty przeglądarki nosi nazwę",
        odpowiedzi: [
            "iConji",
            "favicon",
            "webicon",
            "emoticon"
        ],
        poprawna: "B"
    },
    {
        id: 214,
        pytanie: "Aby poprawnie zdefiniować hierarchiczną strukturę tekstu witryny internetowej, należy zastosować",
        odpowiedzi: [
            "znacznik <div>",
            "znaczniki <frame> i <table>",
            "znacznik <p> z formatowaniem",
            "znaczniki <h1>, <h2> oraz <p>"
        ],
        poprawna: "D"
    },
    {
        id: 215,
        pytanie: "Która z reguł walidacji strony internetowej jest błędna?",
        odpowiedzi: [
            "Jeżeli w instrukcji używa się kilku atrybutów, ich kolejność powinna być zgodna z alfabetem, np. <img alt=\"....\" src=\"....\" />",
            "Wyłączanie znaczników musi następować w odwrotnej kolejności, niż były one włączane, np. <p>....<big>...</big></p>",
            "Znaczniki, oprócz samozamykających się, działają do momentu ich wyłączenia znakiem \"/\", np. <p>...</p>",
            "W znacznikach nie są rozróżniane wielkie i małe litery, np. <p> i <P> to ten sam znacznik"
        ],
        poprawna: "A"
    },
    {
        id: 216,
        pytanie: "Oznaczenie barwy w postaci #ff00e0 jest równoważne zapisowi",
        odpowiedzi: [
            "rgb(f,0,e0)",
            "rgb(ff,0,e0)",
            "rgb(255,0,128)",
            "rgb(255,0,224)"
        ],
        poprawna: "D"
    },
    {
        id: 217,
        pytanie: "Formatem zapisu rastrowych plików graficznych z kompresją bezstratną jest",
        odpowiedzi: [
            "JNG",
            "PNG",
            "CDR",
            "SVG"
        ],
        poprawna: "B"
    },
    {
        id: 218,
        pytanie: "Podczas obróbki grafiki rastrowej w programie z obsługą kanałów dodanie kanału alfa oznacza",
        odpowiedzi: [
            "dodanie warstwy z przezroczystością",
            "określenie poprawnego balansu bieli",
            "zwiększenie głębi ostrości obrazu",
            "wyostrzenie krawędzi obrazu"
        ],
        poprawna: "A"
    },
    {
        id: 219,
        pytanie: "Aby pozbyć się nienaturalnego odwzorowania ukośnych krawędzi linii w grafice rastrowej, czyli tak zwanego schodkowania, należy zastosować filtr",
        odpowiedzi: [
            "szumu",
            "gradientu",
            "pikselizacji",
            "antyaliasingu"
        ],
        poprawna: "D"
    },
    {
        id: 220,
        pytanie: "Formatem bezstratnej kompresji dźwięku jest",
        odpowiedzi: [
            "MP3",
            "AAC",
            "WWA",
            "FLAC"
        ],
        poprawna: "D"
    },
    {
        id: 221,
        pytanie: "W języku SQL polecenie INSERT INTO",
        odpowiedzi: [
            "dodaje tabelę",
            "dodaje pola do tabeli",
            "wprowadza dane do tabeli",
            "aktualizuje rekordy określoną wartością"
        ],
        poprawna: "C"
    },
    {
        id: 222,
        pytanie: "W języku SQL klauzula DISTINCT instrukcji SELECT sprawi, że zwrócone dane",
        odpowiedzi: [
            "zostaną posortowane",
            "nie będą zawierały powtórzeń",
            "będą spełniały określony warunek",
            "będą pogrupowane według określonego pola"
        ],
        poprawna: "B"
    },
    {
        id: 223,
        pytanie: "Zdefiniowano bazę danych z tabelą sklepy o polach: nazwa, ulica, miasto, branza. Aby wyszukać wszystkie nazwy sklepów spożywczych zlokalizowanych wyłącznie we Wrocławiu, należy posłużyć się kwerendą:",
        odpowiedzi: [
            "SELECT sklepy FROM nazwa WHERE branza=\"spożywczy\" BETWEEN miasto=\"Wrocław\";",
            "SELECT sklepy FROM branza=\"spożywczy\" WHERE miasto=\"Wrocław\";",
            "SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" OR miasto=\"Wrocław\";",
            "SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" AND miasto=\"Wrocław\";"
        ],
        poprawna: "D"
    },
    {
        id: 224,
        pytanie: "Zdefiniowano bazę danych z tabelą podzespoły o polach: model, producent, typ, cena. Aby wyświetlić wszystkie modele pamięci RAM firmy Kingston w kolejności od najtańszej do najdroższej, należy posłużyć się kwerendą:",
        odpowiedzi: [
            "SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena ASC;",
            "SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena DESC;",
            "SELECT model FROM podzespoly WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY cena DESC;",
            "SELECT model FROM producent WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY podzespoly ASC;"
        ],
        poprawna: "A"
    },
    {
        id: 225,
        pytanie: "W celu przyspieszenia operacji na bazie danych należy do pól często wyszukiwanych lub sortowanych",
        odpowiedzi: [
            "utworzyć indeks",
            "dodać klucz obcy",
            "dodać więzy integralności",
            "stworzyć osobną tabelę przechowującą tylko te pola"
        ],
        poprawna: "A"
    },
    {
        id: 226,
        pytanie: "Jednoznacznym identyfikatorem rekordu w bazie danych jest pole",
        odpowiedzi: [
            "klucza podstawowego",
            "klucza obcego",
            "numeryczne",
            "relacji"
        ],
        poprawna: "A"
    },
    {
        id: 227,
        pytanie: "Zdefiniowano bazę danych z tabelą mieszkancy o polach: nazwisko, imie, miasto. Następnie stworzono następujące zapytanie do bazy: SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" UNION ALL SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Kraków\"; Wskaż zapytanie, które zwróci identyczne dane:",
        odpowiedzi: [
            "SELECT nazwisko, imie FROM mieszkancy AS \"Poznań\" OR \"Kraków\";",
            "SELECT nazwisko, imie FROM mieszkancy WHERE miasto HAVING \"Poznań\" OR \"Kraków\";",
            "SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" OR miasto=\"Kraków\";",
            "SELECT nazwisko, imie FROM mieszkancy WHERE miasto BETWEEN \"Poznań\" OR \"Kraków\";"
        ],
        poprawna: "C"
    },
    {
        id: 228,
        pytanie: "W bazie danych sklepu istnieje tabela artykuly zawierająca pole o nazwie nowy. Aby to pole wypełnić wartościami TRUE dla każdego rekordu, należy zastosować kwerendę",
        odpowiedzi: [
            "UPDATE artykuly SET nowy=TRUE;",
            "INSERT INTO artykuly VALUE nowy=TRUE;",
            "UPDATE nowy FROM artykuly VALUE TRUE;",
            "INSERT INTO nowy FROM artykuly SET TRUE;"
        ],
        poprawna: "A"
    },
    {
        id: 229,
        pytanie: "W MS SQL Server predefiniowana rola o nazwie dbcreator pozwala użytkownikowi na",
        odpowiedzi: [
            "zarządzanie plikami na dysku",
            "zarządzanie bezpieczeństwem systemu",
            "tworzenie, modyfikowanie, usuwanie i odzyskiwanie bazy danych",
            "wykonywanie każdej operacji na serwerze i posiadanie prawa własności każdej bazy"
        ],
        poprawna: "C"
    },
    {
        id: 230,
        pytanie: "Aby odebrać prawa dostępu do serwera MySQL, należy posłużyć się instrukcją",
        odpowiedzi: [
            "USAGE",
            "GRANT",
            "DELETE",
            "REVOKE"
        ],
        poprawna: "D"
    },
    {
        id: 231,
        pytanie: "Za pomocą polecenia BACKUP LOG w MS SQL Server można",
        odpowiedzi: [
            "wykonać pełną kopię bezpieczeństwa",
            "zalogować sie do kopii bezpieczeństwa",
            "wykonać kopię bezpieczeństwa dziennika transakcyjnego",
            "przeczytać komunikaty wygenerowane podczas tworzenia kopii"
        ],
        poprawna: "C"
    },
    {
        id: 232,
        pytanie: "Polecenie DBCC CHECKDB(\"sklepAGD\", Repair_fast) w MS SQL Server",
        odpowiedzi: [
            "sprawdzi spójność określonej tabeli",
            "sprawdzi spójność bazy danych i naprawi uszkodzone indeksy",
            "sprawdzi spójność bazy danych i wykona kopię bezpieczeństwa",
            "sprawdzi spójność określonej tabeli i naprawi uszkodzone rekordy"
        ],
        poprawna: "B"
    },
    {
        id: 233,
        pytanie: "Aby naprawić bazę danych w MySQL, należy użyć polecenia",
        odpowiedzi: [
            "FIX",
            "REPAIR",
            "UPDATE",
            "CHANGE"
        ],
        poprawna: "B"
    },
    {
        id: 234,
        pytanie: "Aby zdefiniować łamanie linii tekstu, np. w zmiennej napisowej, należy posłużyć się znakiem",
        odpowiedzi: [
            "slash",
            "b",
            "n",
            "t"
        ],
        poprawna: "C"
    },
    {
        id: 235,
        pytanie: "Dana jest tablica n-elementowa o nazwie t[n]. Zadaniem algorytmu zapisanego w postaci listy kroków jest wypisania sumy",
        odpowiedzi: [
            "n-elementów tablicy",
            "co drugiego elementu tablicy",
            "sumy wszystkich elementów tablicy",
            "sumy tych elementów tablicy, których wartości są nieparzyste"
        ],
        poprawna: "B",
        obraz: "235.jpg"
    },
    {
        id: 236,
        pytanie: "Interpreter PHP wygeneruje błąd i nie wykona kodu, jeżeli programista:",
        odpowiedzi: [
            "będzie pisał kod bez wcięć",
            "nie postawi średnika po wyrażeniu w instrukcji if, jeśli po nim nastąpiła sekcja else",
            "będzie deklarował zmienne wewnątrz warunku",
            "pobierze wartość z formularza, w którym pole input nie było wypełnione"
        ],
        poprawna: "B"
    },
    {
        id: 237,
        pytanie: "Dana jest tablica o nazwie tab wypełniona liczbami całkowitymi różnymi od zera. Przedstawiony kod zapisany w języku PHP ma za zadanie:",
        odpowiedzi: [
            "obliczyć iloczyn wszystkich liczb w tablicy",
            "obliczyć wartość bezwzględną elementów tablicy",
            "zamienić wszystkie elementy tablicy na liczby z przeciwnym znakiem",
            "zamienić elementy tablicy na wartości przechowywane w zmiennej liczba"
        ],
        poprawna: "C",
        obraz: "237.jpg"
    },
    {
        id: 238,
        pytanie: "Warunek zapisany w JavaScript jest prawdziwy, gdy zmienna x przechowuje",
        odpowiedzi: [
            "pusty napis",
            "wartość nie liczbową",
            "dowolną całkowitą wartość liczbową",
            "dowolną dodatnią wartość liczbową"
        ],
        poprawna: "D",
        obraz: "238.jpg"
    },
    {
        id: 239,
        pytanie: "Przedstawiona funkcja zapisana kodem JavaScript ma za zadanie:",
        odpowiedzi: [
            "zwrócić wynik potęgowania a^n",
            "wpisać kolejne liczby od a do n",
            "wpisać wyniki mnożenia a przez n",
            "zwrócić iloczyn kolejnych liczb od 1 do a"
        ],
        poprawna: "A",
        obraz: "239.jpg"
    },
    {
        id: 240,
        pytanie: "Program debugger służy do:",
        odpowiedzi: [
            "interpretacji kodu w wirtualnej maszynie Java",
            "analizy wykonywanego programu w celu lokalizacji błędów",
            "analizy kodu źródłowego w celu odnalezienia błędów składniowych",
            "tłumaczenia kodu zapisanego językiem wyższego poziomu na język maszynowy"
        ],
        poprawna: "B"
    },
    {
        id: 241,
        pytanie: "Funkcja phpinfo() pozwala na:",
        odpowiedzi: [
            "debugowanie kodu PHP",
            "zainicjowanie kodu w języku PHP",
            "sprawdzanie wartości zmiennych użytych w kodzie PHP",
            "uzyskanie informacji o środowisku pracy serwera obsługującego PHP"
        ],
        poprawna: "D"
    },
    {
        id: 242,
        pytanie: "Którego języka należy użyć, aby zapisać skrypt wykonywany po stronie klienta w przegladarce internetowej?",
        odpowiedzi: [
            "Perl",
            "PHP",
            "Python",
            "JavaScript"
        ],
        poprawna: "D"
    },
    {
        id: 243,
        pytanie: "W języku PHP pobrano z bazy danych wyniki działania kwerendy za pomocą polecenia mysql_query(). Aby otrzymać ze zwróconej kwerendy wierszy danych, należy zastosować polecenie:",
        odpowiedzi: [
            "mysql_field_len()",
            "mysql_list_fields()",
            "mysql_fetch_row()",
            "mysql_fetch_lengths()"
        ],
        poprawna: "C"
    },
    {
        id: 244,
        pytanie: "Błędy interpretacji kodu PHP są zapisane:",
        odpowiedzi: [
            "w logu pod warunkiem ustawienia odpowiedniego parametru w pliku php.ini",
            "w podglądzie zdarzeń systemu Windows",
            "w oknie edytora, w którym powstaje kod PHP",
            "nigdzie, są ignorowanie przez przeglądarkę oraz interpreter kodu PHP"
        ],
        poprawna: "A"
    },
    {
        id: 245,
        pytanie: "Do uruchomienia systemu CMS Joomla! wymagane jest środowisko:",
        odpowiedzi: [
            "PHP i MySQL",
            "Apache i PHP",
            "Apache, PHP i MySQL",
            "IIS, PERL i MySQL"
        ],
        poprawna: "C"
    },
    {
        id: 246,
        pytanie: "W języku HTML, aby uzyskać następujący efekt pogrubienia, pochylenia lub zapisania w górnym indeksie należy zapisać kod:",
        odpowiedzi: [
            "<i>pogrubiony <b>pochylony lub w </i><sup>górnym indeksie</sup>",
            "<i>pogrubiony </i><b>pochylony</b> lub w <sub>górnym indeksie</sub>",
            "<b>pogrubiony </b><i>pochylony</i> lub w <sup>górnym indeksie</sup>",
            "<b>pogrubiony <i>pochylony</i></b> lub w <sub>górnym indeksie</sub>"
        ],
        poprawna: "C"
    },
    {
        id: 247,
        pytanie: "W kodzie HTML zapisano w bloku tekst formatowany pewnym stylem. Aby wtrącić wewnątrz tekstu kilka słów formatowanych innym stylem, należy zastosować znacznik",
        odpowiedzi: [
            "<hr>",
            "<span>",
            "<table>",
            "<section>"
        ],
        poprawna: "B"
    },
    {
        id: 248,
        pytanie: "Który z zapisów znacznika <meta> jest prawidłowy ze względu na wykorzystane atrybuty?",
        odpowiedzi: [
            "<meta background = blue>",
            "<meta name = \"!DOCTYPE\">",
            "<meta title = \"Strona dla hobbystów\">",
            "<meta name = \"description\" content = \"Masz jakieś hobby? To jest strona dla Ciebie!\">"
        ],
        poprawna: "D"
    },
    {
        id: 249,
        pytanie: "Który z wymienionych znaczników należy do części <head> dokumentu HTML?",
        odpowiedzi: [
            "<img>",
            "<title>",
            "<span>",
            "<section>"
        ],
        poprawna: "B"
    },
    {
        id: 250,
        pytanie: "W języku CSS poniższy zapis sprawi, że koloru zielonego będzie",
        odpowiedzi: [
            "tło całej strony",
            "czcionka nagłówka drugiego stopnia",
            "tło tekstu nagłówka drugiego stopnia",
            "czcionka każdego nagłówka na stronie"
        ],
        poprawna: "C",
        obraz: "250.jpg"
    },
    {
        id: 251,
        pytanie: "W języku CSS, aby formatować tekst poprzez przekreślenie, podkreślenie dolne lub górne, należy zastosować",
        odpowiedzi: [
            "text-align",
            "text-indent",
            "text-transform",
            "text-decoration"
        ],
        poprawna: "D"
    },
    {
        id: 252,
        pytanie: "W języku CSS poniższy zapis sprawi, że kolor żółty przyjmie czcionka",
        odpowiedzi: [
            "tekstu paragrafu",
            "każdego odnośnika",
            "odnośników, które otwierają sie w osobnej karcie",
            "odnośników, które otwierają sie w tej samej karcie"
        ],
        poprawna: "C",
        obraz: "252.jpg"
    },
    {
        id: 253,
        pytanie: "W języku CSS poniższy zapis użyty na stronie, na której jest kilka paragrafów, a każdy z nich ma po kilka linii sprawi, że",
        odpowiedzi: [
            "pierwsza linia każdego paragrafu będzie miała mniejszą czcionkę niż następne linie",
            "pierwsza linia każdego paragrafu będzie miała większą czcionkę niż następne linie",
            "pierwszy paragraf na stronie będzie w całości miał powiększoną czcionkę",
            "całość tekstu paragrafu będzie powiększona o 150%"
        ],
        poprawna: "B",
        obraz: "253.jpg"
    },
    {
        id: 254,
        pytanie: "Który znacznik lub grupa znaczników nie są stosowane do definiowania struktury strony HTML?",
        odpowiedzi: [
            "<header>, <footer>",
            "<i>, <b>, <u>",
            "<section>",
            "<div>"
        ],
        poprawna: "B"
    },
    {
        id: 255,
        pytanie: "Który z przedstawionych kodów HTML sformatuje tekst według wzoru? (uwaga: słowo \"stacji\" jest zapisane większą czcionką niż reszta słów w tej linii)",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "255.jpg"
    },
    {
        id: 256,
        pytanie: "Kolor zapisany w postaci szesnastkowej o wartości #11FE07 w kodzie RGB ma postać",
        odpowiedzi: [
            "rgb(17,FE,7)",
            "rgb(11,127,7)",
            "rgb(17,255,7)",
            "rgb(17,254,7)"
        ],
        poprawna: "D"
    },
    {
        id: 257,
        pytanie: "Które ze zdań jest prawdziwe w stosunku do grafiki rastrowej?",
        odpowiedzi: [
            "Podczas przekształcania polegającego na skalowaniu, skalowany obraz nie zmienia jakości",
            "Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych",
            "Grafika rastrowa nie jest zapisana w formacie WMF (ang. Windows Metafile Format - format metaplików w Windows)",
            "Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym"
        ],
        poprawna: "D"
    },
    {
        id: 258,
        pytanie: "Który z formatów grafiki jest najbardziej odpowiedni do zapisu obrazu z przezroczystością na potrzeby strony internetowej?",
        odpowiedzi: [
            "JPG",
            "PNG",
            "BMP",
            "SVG"
        ],
        poprawna: "B"
    },
    {
        id: 259,
        pytanie: "W czasie przetwarzania dźwięku, aby pozbyć się niechcianych odgłosów spowodowanych złą jakością mikrofonu, należy zastosować narzędzie",
        odpowiedzi: [
            "echa",
            "obwiedni",
            "wyciszenia",
            "usuwania szumów"
        ],
        poprawna: "D"
    },
    {
        id: 260,
        pytanie: "Aby obraz zmieniał się płynnie w filmie, liczba klatek (nieprzenikających się wzajemnie) na sekundę musi znajdować się przynajmniej w zakresie",
        odpowiedzi: [
            "16-19 fps",
            "20-23 fps",
            "24-30 fps",
            "31-36 fps"
        ],
        poprawna: "C"
    },
    {
        id: 261,
        pytanie: "W poleceniu CREATE TABLE języku SQL atrybut określający, która kolumna tabeli jest kluczem podstawowym, to",
        odpowiedzi: [
            "UNIQUE",
            "MAIN KEY",
            "PRIMARY KEY",
            "IDENTITY FIELD"
        ],
        poprawna: "C"
    },
    {
        id: 262,
        pytanie: "Dana jest tabela psy o polach: imie, rasa, telefon_wlasciciela, rok_szczepienia. Aby wyszukać telefony właścicieli, których psy były szczepione przed 2015 rokiem, należy użyć polecenia SQL",
        odpowiedzi: [
            "SELECT psy FROM rok_szczepienia < 2015",
            "SELECT imie, rasa FROM psy WHERE rok_szczepienia > 2015",
            "SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia < 2015",
            "SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia > 2015"
        ],
        poprawna: "C"
    },
    {
        id: 263,
        pytanie: "Na rysunku została przedstawiona relacja jeden do wielu. Łączy ona",
        odpowiedzi: [
            "klucz obcy rezyserzy_id tabeli filmy z kluczem obcym id tabeli rezyserzy",
            "klucz podstawowy id tabeli filmy z kluczem podstawowym id tabeli rezyserzy",
            "klucz obcy rezyserzy_id tabeli filmy z kluczem podstawowym id tabeli rezyserzy",
            "klucz podstawowy id tabeli z kluczem obcym rezyserzy_id tabeli rezyserzy"
        ],
        poprawna: "C",
        obraz: "263.jpg"
    },
    {
        id: 264,
        pytanie: "W bazie danych sklepu spożywczego pod koniec dnia jest tworzony raport wyświetlający te produkty wraz z ich dostawcami, dla których stan magazynowy jest mniejszy niż 10 sztuk. Do zdefiniowania tego raportu posłużono się kwerendą",
        odpowiedzi: [
            "SELECT",
            "UPDATE",
            "INSERT INTO",
            "CHECK TABLE"
        ],
        poprawna: "A"
    },
    {
        id: 265,
        pytanie: "Wskaż polecenie SQL dodające pole miesiacSiewu do istniejącej tabeli rosliny",
        odpowiedzi: [
            "UPDATE rosliny ADD miesiacSiewu int",
            "CREATE TABLE rosliny {miesiacSiewu int}",
            "ALTER TABLE rosliny ADD miesiacSiewu int",
            "INSERT INTO rosliny VALUES (miesiacSiewu int)"
        ],
        poprawna: "C"
    },
    {
        id: 266,
        pytanie: "Polecenie serwera MySQL przedstawione poniżej sprawi, że użytkownikowi tkowal zostaną",
        odpowiedzi: [
            "przydzielone prawa do usuwania i aktualizowania danych w tabeli pracownicy",
            "odebrane prawa usuwania i modyfikowania danych w tabeli pracownicy",
            "odebrane prawa usuwanie i dodawania rekordów w tabeli pracownicy",
            "przydzielone prawa wszelkiej zmiany struktury tabeli pracownicy"
        ],
        poprawna: "B",
        obraz: "266.jpg"
    },
    {
        id: 267,
        pytanie: "W serwerze MySQL nadanie roli o nazwie DBManager przyznaje użytkownikowi prawa umożliwiające",
        odpowiedzi: [
            "monitorowanie serwera",
            "wszelkie operacje na bazach danych serwera",
            "tworzenie użytkowników serwera i ustawianie im haseł",
            "wszystkie operacje na bazach danych i użytkownikach serwera"
        ],
        poprawna: "B"
    },
    {
        id: 268,
        pytanie: "W bazie danych wykonano następujące polecenie dotyczące praw użytkownika adam. Po wykonaniu poleceń użytkownik adam będzie miał prawa do",
        odpowiedzi: [
            "usunięcia tabeli lub jej rekordów",
            "aktualizowania danych i przeglądania tabeli klienci",
            "tworzenia tabeli klienci i aktualizowania w niej danych",
            "przeglądania tabeli klienci i wstawiania do niej sektorów"
        ],
        poprawna: "A",
        obraz: "268.jpg"
    },
    {
        id: 269,
        pytanie: "Wskaż poprawną zasadę dotyczącą spójności danych w bazie danych",
        odpowiedzi: [
            "pole klucza obcego nie może być puste",
            "pole klucza podstawowego nie może być puste",
            "pole klucza podstawowego musi posiadać utworzony indeks",
            "w relacji 1..n pole klucza obcego jest połączone z polem klucza obcego innej tabeli"
        ],
        poprawna: "B"
    },
    {
        id: 270,
        pytanie: "Aby naprawić uszkodzoną tabelę w MySQL, należy wydać polecenie",
        odpowiedzi: [
            "FIX TABLE",
            "CHECK TABLE",
            "REPAIR TABLE",
            "RESOLVE TABLE"
        ],
        poprawna: "C"
    },
    {
        id: 271,
        pytanie: "W formularzu dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna z będzie typu",
        odpowiedzi: [
            "NaN",
            "napisowego",
            "zmiennoprzecinkowego",
            "liczbowego, całkowitego"
        ],
        poprawna: "C",
        obraz: "271.jpg"
    },
    {
        id: 272,
        pytanie: "Aby w pliku z rozszerzeniem php umieścić kod w języku PHP należy użyć znaczników",
        odpowiedzi: [
            "<php .......... />",
            "<?php .......... ?>",
            "<php> ......... </php>",
            "<?php> ........ <php?>"
        ],
        poprawna: "B"
    },
    {
        id: 273,
        pytanie: "Ile iteracji będzie miała pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?",
        odpowiedzi: [
            "0",
            "5",
            "6",
            "10"
        ],
        poprawna: "C",
        obraz: "273.jpg"
    },
    {
        id: 274,
        pytanie: "W JavaScript wynik operacji jest równy wartości NaN, jeśli skrypt próbował wykonać",
        odpowiedzi: [
            "funkcję parseFloat zamiast parseInt na zmiennej liczbowej",
            "działanie arytmetyczne, a zawartość zmiennej była napisem",
            "działanie arytmetyczne na dwóch zmiennych liczbowych dodatnich",
            "funkcję sprawdzającą długość napisu, a zawartość zmiennej była liczbą"
        ],
        poprawna: "B"
    },
    {
        id: 275,
        pytanie: "W instrukcji warunkowej języka JavaScript należy sprawdzić przypadek, gdy wartość zmiennej a jest z przedziału (0, 100), natomiast wartość zmiennej b jest większa od zera. Warunek taki jest prawidłowo zapisany w nastepujący sposób",
        odpowiedzi: [
            "if (a>0 || a<100 || b<0)",
            "if (a>0 && a<100 && b>0)",
            "if ((a>0 || a<100) && b>0)",
            "if ((a>0 && a<100) || b<0)"
        ],
        poprawna: "B"
    },
    {
        id: 276,
        pytanie: "Dla dowolnego a z przedziału (0,99) zadaniem funkcji zapisanej w języku Java Script jest:",
        odpowiedzi: [
            "zwrócenie liczb z przedziału a..99",
            "wypisanie liczb z przedziału a..99 i zwrócenie wartości 100",
            "wypisanie wartości zmiennej a oraz zwrócenie wartości zmiennej n",
            "wypisanie liczb z przedziału a...100 i zwrócenie wartości zmiennej n"
        ],
        poprawna: "D",
        obraz: "276.jpg"
    },
    {
        id: 277,
        pytanie: "Zapis w języku JavaScript ma za zadanie",
        odpowiedzi: [
            "utworzenie nowej klasy napis1.",
            "wywołanie metody obiektu napisy",
            "utworzenie obiektu napis1 klasy napisy",
            "zadeklarowanie zmiennej napis1 i wywołanie funkcji, której argumentem jest napis1"
        ],
        poprawna: "C",
        obraz: "277.jpg"
    },
    {
        id: 278,
        pytanie: "Aby wykonać kod zapisany językiem PHP wystarczy, że w systemie zainstalowano",
        odpowiedzi: [
            "przeglądarkę internetową",
            "serwer WWW z interpreterem PHP",
            "serwer WWW z serwerem MySQL",
            "serwer WWW, parser PHP oraz serwer MySQL"
        ],
        poprawna: "B"
    },
    {
        id: 279,
        pytanie: "Pętla zapisana w języku PHP wstawi do tablicy liczby",
        odpowiedzi: [
            "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
            "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
            "0, 10, 20, 30, 40, 50, 60, 70, 80, 90",
            "10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
        ],
        poprawna: "C",
        obraz: "279.jpg"
    },
    {
        id: 280,
        pytanie: "Wymaganiem aplikacji internetowej jest, aby ta była wykonywana po stronie klienta. W którym języku należy zaimplementować tę aplikację?",
        odpowiedzi: [
            "Perl",
            "PHP",
            "Python",
            "JavaScript"
        ],
        poprawna: "D"
    },
    {
        id: 281,
        pytanie: "Zadaniem funkcji PHP o nazwie mysql_num_rows() jest",
        odpowiedzi: [
            "ponumerować rekordy w bazie danych",
            "zwrócić kolejny rekord z wynikami zapytania",
            "zwrócić liczbę wierszy znajdujących się w wyniku zapytania",
            "zwrócić rekord, którego numer podany został w parametrze funkcji"
        ],
        poprawna: "C"
    },
    {
        id: 282,
        pytanie: "Jaka treść komunikatu powinna być wstawiona w przedstawionym kodzie PHP zamiast znaków zapytania?",
        odpowiedzi: [
            "Wybrana baza nie istnieje",
            "Błąd połączenia z serwerem SQL",
            "Pomyślnie dodano rekord do bazy",
            "Błąd przetwarzania zapytania SQL"
        ],
        poprawna: "B",
        obraz: "282.jpg"
    },
    {
        id: 283,
        pytanie: "Testy aplikacji internetowej mające za zadanie sprawdzenie skalowalności aplikacji i bazy danych oraz architektury serwera i konfiguracji noszą nazwę testów",
        odpowiedzi: [
            "kompatybilności",
            "bezpieczeństwa",
            "funkcjonalnych",
            "użyteczności"
        ],
        poprawna: "A"
    },
    {
        id: 284,
        pytanie: "Aby prawidłowo udokumentować linię kodu języka Java Script, należy po znakach // wpisać komentarz",
        odpowiedzi: [
            "nieprawidłowe dane",
            "wybór losowej wartości ze zmiennych a, b i c",
            "w zmiennej x minimalna wartość ze zmiennych a, b, c",
            "w zmiennej x maksymalna wartość ze zmiennych a, b, c"
        ],
        poprawna: "D",
        obraz: "284.jpg"
    },
    {
        id: 285,
        pytanie: "Aby stronę WWW można było przesłać do przeglądarki internetowej w postaci zaszyfrowanej, należy użyć protokołu",
        odpowiedzi: [
            "HTTPS",
            "HTTP",
            "SFTP",
            "SSH"
        ],
        poprawna: "A"
    },
    {
        id: 286,
        pytanie: "W języku HTML, aby uzyskać efekt jak na przykładzie, należy zastosować konstrukcję",
        odpowiedzi: [
            "<p><big>Duży tekst</p> zwykły tekst",
            "<p><strike>Duży tekst zwykły tekst</p>",
            "<p><big>Duży tekst</big> zwykły tekst</p>",
            "<p><strike>Duży tekst</strike> zwykły tekst</p>"
        ],
        poprawna: "C",
        obraz: "286.jpg"
    },
    {
        id: 287,
        pytanie: "Zapis znacznika HTML w postaci",
        odpowiedzi: [
            "jest niepoprawny, w atrybucie href należy podać adres URL",
            "jest niepoprawny, zastosowano błędnie znak # w atrybucie href",
            "jest poprawny, po wybraniu odnośnika otworzy się strona internetowa o adresie \"hobby\"",
            "jest poprawny, po wybraniu odnośnika aktualna strona zostanie przewinięta do elementu o nazwie \"hobby\""
        ],
        poprawna: "D",
        obraz: "287.jpg"
    },
    {
        id: 288,
        pytanie: "W części nagłówkowej kodu HTML zapisano tekst przedstawiony na obrazku. Zapisany tekst zostanie wyświetlony",
        odpowiedzi: [
            "na pasku tytułu przeglądarki",
            "w treści strony, na banerze",
            "w polu adresu, za wpisanym adresem URL",
            "w treści strony, w pierwszym wyświetlonym nagłówku"
        ],
        poprawna: "A",
        obraz: "288.jpg"
    },
    {
        id: 289,
        pytanie: "Przeglądarka internetowa wyświetliła stronę w następujący sposób. Wskaż kod HTML, który poprawnie definiuje przedstawioną hierarchiczną strukturę tekstu:",
        odpowiedzi: [
            "<h1>Rozdział 1<p>tekst <h2>Podrozdział 1.1<p>tekst <h2>Podrozdział 1.2",
            "<ul><li>Rozdział 1<li>tekst<li>Podrozdział 1.1<li>tekst<li>Podrozdział 1.2</ul>",
            "<big>Rozdział 1</big>tekst<big>Podrozdział 1.1</big>tekst<big>Podrozdział 1.2</big>",
            "<h1>Rozdział 1</h1> <p>tekst</p> <h2>Podrozdział 1.1</h2> <p>tekst</p> <h2>Podrozdział 1.2</h2>"
        ],
        poprawna: "D",
        obraz: "289.jpg"
    },
    {
        id: 290,
        pytanie: "W języku CSS, przedstawiony zapis sprawi, że plik rysunek.png będzie",
        odpowiedzi: [
            "tłem całej strony",
            "tłem każdego paragrafu",
            "wyświetlony obok każdego paragrafu",
            "wyświetlony, jeśli w kodzie zostanie zastosowany znacznik img"
        ],
        poprawna: "B",
        obraz: "290.jpg"
    },
    {
        id: 291,
        pytanie: "W języku CSS, aby zdefiniować niestandardowe odstępy między wyrazami, stosuje się właściwość",
        odpowiedzi: [
            "line-spacing",
            "white-space",
            "word-spacing",
            "letter-space"
        ],
        poprawna: "C"
    },
    {
        id: 292,
        pytanie: "W języku CSS zdefiniowano następujące formatowanie. Oznacza to, że kolorem niebieskim zostanie zapisany",
        odpowiedzi: [
            "cały tekst paragrafu niezależnie od jego formatowania",
            "pochylony tekst paragrafu",
            "cały tekst nagłówków niezależnie od ich formatowania",
            "pogrubiony tekst paragrafu"
        ],
        poprawna: "B",
        obraz: "292.jpg"
    },
    {
        id: 293,
        pytanie: "W języku CSS, zapis w następującej postaci sprawi, iż koloru czerwonego będzie",
        odpowiedzi: [
            "pierwsza linia paragrafu",
            "tekst nagłówka pierwszego stopnia",
            "pierwsza litera nagłówka drugiego stopnia",
            "pierwsza litera nagłówka pierwszego stopnia"
        ],
        poprawna: "D",
        obraz: "293.jpg"
    },
    {
        id: 294,
        pytanie: "W języku HTML informacje dotyczące autora, streszczenia i słów kluczowych strony należy umieścić",
        odpowiedzi: [
            "pomiędzy znacznikami <head> i </head>, w znaczniku <meta>",
            "pomiędzy znacznikami <head> i </head>, w znaczniku <style>",
            "pomiędzy znacznikami <body> i </body>, w znaczniku <meta>",
            "pomiędzy znacznikami <body> i </body>, w znaczniku <html>"
        ],
        poprawna: "A"
    },
    {
        id: 295,
        pytanie: "Który z przedstawionych kodów XHTML sformatuje tekst według podanego wzoru?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "295.jpg"
    },
    {
        id: 296,
        pytanie: "Kolor zapisany kodem RGB o wartości rgb(128, 16, 8) w postaci szesnastkowej ma wartość",
        odpowiedzi: [
            "#FF0F80",
            "#FF1008",
            "#801008",
            "#800F80"
        ],
        poprawna: "C"
    },
    {
        id: 297,
        pytanie: "Które ze zdań opisuje grafikę wektorową?",
        odpowiedzi: [
            "Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym",
            "Może być przechowywana w formacie JPG lub PNG",
            "Jest wykorzystywana do zapisu fotografii cyfrowej",
            "Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych"
        ],
        poprawna: "D"
    },
    {
        id: 298,
        pytanie: "Aby zbadać rozkład ilościowy poszczególnych kolorów zdjęcia, należy użyć",
        odpowiedzi: [
            "desaturacji",
            "histogramu",
            "balansu kolorów",
            "rozmycia Gaussa"
        ],
        poprawna: "B"
    },
    {
        id: 299,
        pytanie: "W standardzie HDTV jest stosowana rozdzielczość",
        odpowiedzi: [
            "704 x 576 px",
            "720 x 480 px",
            "1280 x 1024 px",
            "1920 x 1080 px"
        ],
        poprawna: "D"
    },
    {
        id: 300,
        pytanie: "Którą klauzulę powinno się zastosować w poleceniu CREATE TABLE języka SQL, aby dane pole rekordu nie było puste?",
        odpowiedzi: [
            "NULL",
            "CHECK",
            "DEFAULT",
            "NOT NULL"
        ],
        poprawna: "D"
    },
    {
        id: 301,
        pytanie: "Polecenie języka SQL w postaci",
        odpowiedzi: [
            "zamienia nazwę tabeli miasta na nazwę kod",
            "dodaje do tabeli kolumnę o nazwie kod typu text",
            "dodaje do tabeli dwie kolumny o nazwach: kod i text",
            "w tabeli miasta zamienia nazwę kolumny kod na nazwę text"
        ],
        poprawna: "B",
        obraz: "301.jpg"
    },
    {
        id: 302,
        pytanie: "W bazie danych hurtowni zdefiniowano tabelę sprzedaz o polach: id, kontrahent, grupa_cenowa, obrot. Aby wyszukać wyłącznie kontrahentów z drugiej grupy cenowej, których obrót jest większy niż 4000zł, należy zastosować polecenie",
        odpowiedzi: [
            "SELECT sprzedaz FROM kontrahent WHERE obrot > 4000;",
            "SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 OR obrot > 4000;",
            "SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 AND obrot > 4000;",
            "SELECT sprzedaz FROM kontrahent WHERE grupa_cenowa = 2 AND obrot > 4000;"
        ],
        poprawna: "C"
    },
    {
        id: 303,
        pytanie: "Dana jest tabela programiści o polach: id, nick, ilosc_kodu, ocena. Pole ilosc_kodu zawiera liczbę linii kodu napisanych przez programistę w danym miesiącu. Aby policzyć sumę linii kodu, który napisali wszyscy programiści, należy użyć polecenia",
        odpowiedzi: [
            "SELECT SUM(ocena) FROM ilosc_kodu;",
            "SELECT SUM(ilosc_kodu) FROM programisci;",
            "SELECT COUNT(programisci) FROM ilosc_kodu;",
            "SELECT MAX(ilosc_kodu) FROM programisci"
        ],
        poprawna: "B"
    },
    {
        id: 304,
        pytanie: "W instrukcji CREATE TABLE użycie klauzuli PRIMARY KEY przy deklaracji pola tabeli spowoduje, że pole to stanie się",
        odpowiedzi: [
            "kluczem obcym",
            "indeksem klucza",
            "indeksem unikalnym",
            "kluczem podstawowym"
        ],
        poprawna: "D"
    },
    {
        id: 305,
        pytanie: "Baza danych księgarni zawiera tabelę ksiazki z polami: id, idAutor, tytul, ileSprzedanych oraz tabelę autorzy z polami: id, imie, nazwisko. Aby stworzyć raport sprzedanych książek z tytułami i nazwiskami autorów, należy",
        odpowiedzi: [
            "stworzyć kwerendę wyszukującą tytuły książek",
            "Zdefiniować relację 1..n dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele",
            "Zdefiniować relację 1..1 dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele",
            "stworzyć dwie osobne kwerendy: pierwszą wyszukującą tytuły książek, drugą wyszukującą nazwiska autorów"
        ],
        poprawna: "B"
    },
    {
        id: 306,
        pytanie: "Istnieje tabela pracownicy z polami: id, imie, nazwisko, pensja. W nowym roku postawiono podnieść pensję wszystkim pracownikom o 100 zł. Aktualizacja ta w bazie danych będzie miała postać",
        odpowiedzi: [
            "UPDATE pracownicy SET pensja = pensja + 100;",
            "UPDATE pracownicy SET pensja = 100;",
            "UPDATE pensja SET +100;",
            "UPDATE pensja SET 100;"
        ],
        poprawna: "A"
    },
    {
        id: 307,
        pytanie: "W tabeli artykuly wykonano następujące polecenia dotyczące praw użytkowania jan. Po wykonaniu poleceń użytkownik jan będzie miał prawa do",
        odpowiedzi: [
            "tworzenia tabeli i aktualizowania w niej danych",
            "aktualizowania danych i przeglądania tabeli",
            "tworzenia tabeli i wypełniania jej danymi",
            "przeglądania tabeli"
        ],
        poprawna: "C",
        obraz: "307.jpg"
    },
    {
        id: 308,
        pytanie: "Aby przywrócić bazę danych MS SQL z kopii bezpieczeństwa, należy zastosować polecenie",
        odpowiedzi: [
            "DBCC CHECKDB",
            "SAVE DATABASE",
            "RESTORE DATABASE",
            "REBACKUP DATABASE"
        ],
        poprawna: "C"
    },
    {
        id: 309,
        pytanie: "Baza danych MySQL uległa uszkodzeniu. Które z działań NIE pomoże przy jej naprawie?",
        odpowiedzi: [
            "Wykonanie replikacji bazy danych",
            "Próba naprawy poleceniem REPAIR",
            "Odtworzenie bazy z kopii bezpieczeństwa",
            "Stworzenie nowej bazy i przeniesienie do niej tabel"
        ],
        poprawna: "A"
    },
    {
        id: 310,
        pytanie: "W formularzu, dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna x będzie typu",
        odpowiedzi: [
            "NaN",
            "napisowego",
            "zmiennoprzecinkowego",
            "liczbowego, całkowitego"
        ],
        poprawna: "D",
        obraz: "310.jpg"
    },
    {
        id: 311,
        pytanie: "Wstawki kodu JavaScript w dokumencie HTML mogą się znaleźć",
        odpowiedzi: [
            "tylko w cześci <head>, w znaczniku <script>",
            "tylko w cześci <body>, w znaczniku <java>",
            "zarówno w cześci <head>, jak i <body>, w znaczniku <java>",
            "zarówno w cześci <head>, jak i <body>, w znaczniku <script>"
        ],
        poprawna: "D"
    },
    {
        id: 312,
        pytanie: "W przedstawonym kodzie JavaScript dla ułatwienia ponumerowano linie. W kodzie znajduje się błąd, gdyż po uruchomieniu żaden komunikat nie zostaje wyświetlony. Aby wyeliminować błąd, należy",
        odpowiedzi: [
            "wstawić znaki $ przed nazwami zmiennych.",
            "wstawić nawiasy klamrowe do sekcji if oraz else",
            "w liniach 2 i 5 zmienne a i b wstawić w cudzysłów",
            "w liniach 3 i 6 zamienić znaki cudzysłowu na apostrof, np. ’jest mniejsze’"
        ],
        poprawna: "B",
        obraz: "312.jpg"
    },
    {
        id: 313,
        pytanie: "Ile iteracji będzie miała przedstawiona pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?",
        odpowiedzi: [
            "0",
            "10",
            "11",
            "Nieskończenie wiele"
        ],
        poprawna: "C",
        obraz: "313.jpg"
    },
    {
        id: 314,
        pytanie: "W języku JavaScript metoda document.getElementById(id) ma za zadanie",
        odpowiedzi: [
            "wstawić tekst o treści ’id’ na stronie WWW",
            "sprawdzić poprawność formularza o identyfikatorze id",
            "pobrać dane z pola formularza i wstawić je do zmiennej id",
            "zwrócić odniesienie do pierwszego elementu HTML o podanym id"
        ],
        poprawna: "D"
    },
    {
        id: 315,
        pytanie: "W instrukcji warunkowej JavaScript należy sprawdzić przypadek, gdy zmienne a oraz b są dodatnie, z czego zmienna b jest mniejsza od 100. Warunek taki powinien być zapisany w następujący sposób:",
        odpowiedzi: [
            "if ( a > 0 || b > 0 || b > 100)",
            "if ( a > 0 && b > 0 || b > 100)",
            "if ( a > 0 || (b > 0 && b < 100))",
            "if ( a > 0 && b > 0 && b < 100)"
        ],
        poprawna: "D"
    },
    {
        id: 316,
        pytanie: "Zadaniem przedstawionej funkcji zapisanej w języku JavaScript jest",
        odpowiedzi: [
            "zwrócenie wartości parzystych liczb od a do b",
            "wypisanie liczb parzystych z przedziału od a do b",
            "wypisanie wszystkich liczb z przedziału od a do b",
            "sprawdzenie, czy liczba a jest nieparzysta; jeśli tak, wypisanie jej"
        ],
        poprawna: "B",
        obraz: "316.jpg"
    },
    {
        id: 317,
        pytanie: "Przedstawiony kod został zapisany w języku JavaScript. W podanej definicji obiektu metodą jest element o nazwie",
        odpowiedzi: [
            "obj1",
            "oblicz",
            "czescCalkowita",
            "czescUlamkowa"
        ],
        poprawna: "B",
        obraz: "317.jpg"
    },
    {
        id: 318,
        pytanie: "Aby uzyskać informacje o środowisku pracy serwera obsługującego PHP, należy skorzystać z funkcji",
        odpowiedzi: [
            "php()",
            "phpinfo()",
            "phpgetinfo()",
            "phpinformation()"
        ],
        poprawna: "B"
    },
    {
        id: 319,
        pytanie: "Fragment kodu w języku PHP wypisze",
        odpowiedzi: [
            "nazwę konta ze znakiem @, czyli \"adres@\"",
            "cały adres e-mail, czyli \"adres@host.pl\"",
            "samą nazwę domeny, czyli \"host.pl\"",
            "samą nazwę konta, czyli \"adres\""
        ],
        poprawna: "D",
        obraz: "319.jpg"
    },
    {
        id: 320,
        pytanie: "Do uruchomienia skryptu JavaScript wymagane jest oprogramowanie",
        odpowiedzi: [
            "serwera WWW",
            "serwera MySQL",
            "debugera JavaScript",
            "przeglądarki internetowej"
        ],
        poprawna: "D"
    },
    {
        id: 321,
        pytanie: "Zadaniem funkcji PHP o nazwie mysql_select_db() jest",
        odpowiedzi: [
            "połączyć bazę danych z serwerem SQL",
            "określić bazę, z której będą pobierane dane",
            "określić tabelę, z której będą pobierane dane",
            "pobrać dane z bazy danych na podstawie kwerendy"
        ],
        poprawna: "B"
    },
    {
        id: 322,
        pytanie: "W przedstawionym kodzie PHP, zamiast znaków zapytania powinien pojawić się komunikat:",
        odpowiedzi: [
            "Błąd przetwarzania zapytania",
            "Zapytanie przetworzono pomyślnie",
            "Nieprawidłowa nazwa bazy danych",
            "Nieprawidłowe hasło do bazy danych"
        ],
        poprawna: "A",
        obraz: "322.jpg"
    },
    {
        id: 323,
        pytanie: "Testy wydajnościowe mają na celu sprawdzenie",
        odpowiedzi: [
            "zdolności oprogramowania do działania w warunkach wadliwej pracy sprzętu",
            "zdolności oprogramowania do działania w warunkach wadliwej pracy systemu",
            "stopnia spełnienia wymagań wydajnościowych przez system lub moduł",
            "ciągu zdarzeń, w którym prawdopodobieństwo każdego zdarzenia zależy jedynie od wyniku poprzedniego"
        ],
        poprawna: "C"
    },
    {
        id: 324,
        pytanie: "Aby prawidłowo udokumentować przedstawioną linię kodu języka JavaScript, należy po znakach // wpisać komentarz",
        odpowiedzi: [
            "nieprawidłowe dane",
            "zmiana stylu atrybutu innerHTML",
            "wyświetlenie tekstu \"Date()\" w znaczniku o id = napis",
            "wyświetlenie daty i czasu w znaczniku o id = napis"
        ],
        poprawna: "D",
        obraz: "324.jpg"
    },
    {
        id: 325,
        pytanie: "Przekierowanie 301 służące przekierowaniu użytkownika z jednego adresu URL na inny można ustawić w pliku konfiguracji serwera Apache o nazwie",
        odpowiedzi: [
            "conf.php",
            ".htaccess",
            ".apacheConf",
            "configuration.php"
        ],
        poprawna: "B"
    },
    {
        id: 326,
        pytanie: "W języku HTML aby zdefiniować słowa kluczowe strony, należy użyć zapisu",
        odpowiedzi: [
            "<meta keywords=\"psy, koty, gryzonie\">",
            "<meta name=\"keywords\" =\"psy, koty, gryzonie\">",
            "<meta name=\"keywords\" content=\"psy, koty, gryzonie\">",
            "<meta name=\"description\" content=\"psy, koty, gryzonie\">"
        ],
        poprawna: "C"
    },
    {
        id: 327,
        pytanie: "W języku HTML zdefiniowano znacznik a. Wartość nofollow atrybutu rel",
        odpowiedzi: [
            "oznacza, że kliknięcie na link nie przeniesie do strony website.com",
            "oznacza, że kliknięcie na link otworzy go w osobnej karcie przeglądarki",
            "jest informacją dla robota wyszukiwarki Google, aby nie podążał za tym linkiem",
            "jest informacją dla przeglądarki internetowej, aby nie formatowała słowa \"link\" jako odnośnika"
        ],
        poprawna: "C",
        obraz: "327.jpg"
    },
    {
        id: 328,
        pytanie: "W języku HTML aby zdefiniować poziomą linię, należy użyć znacznika",
        odpowiedzi: [
            "<line>",
            "<br>",
            "<hl>",
            "<hr>"
        ],
        poprawna: "D"
    },
    {
        id: 329,
        pytanie: "Zapisano kod HTML wstawiający grafikę na stronę internetową. Jeżeli rysunek.png nie zostanie odnaleziony, przeglądarka",
        odpowiedzi: [
            "nie wyświetli strony internetowej",
            "w miejscu grafiki wypisze tekst \"pejzaż\"",
            "w miejscu grafiki wypisze tekst \"rysunek.png\"",
            "w miejscu grafiki wypisze błąd wyświetlania strony"
        ],
        poprawna: "B",
        obraz: "329.jpg"
    },
    {
        id: 330,
        pytanie: "Aby w języku HTML uzyskać takie formatowanie paragrafu dla tekstu należy zastosować kod",
        odpowiedzi: [
            "<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny dla autora</p>",
            "<p>Tekst może być <mark>zaznaczony albo <i>istotny</i> dla autora</mark></p>",
            "<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny</em> dla autora</p>",
            "<p>Tekst może być <mark>zaznaczony albo <em>istotny</em> dla autora</mark></p>"
        ],
        poprawna: "C",
        obraz: "330.jpg"
    },
    {
        id: 331,
        pytanie: "Zamieszczony kod HTML formularza zostanie wyświetlony przez przeglądarkę w sposób:",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "331.jpg"
    },
    {
        id: 332,
        pytanie: "W języku CSS wcięcie pierwszej linii akapitu na 30 pikseli uzyska się za pomocą zapisu",
        odpowiedzi: [
            "p { text-indent: 30px; }",
            "p { text-spacing: 30px; }",
            "p { line-height: 30px; }",
            "p { line-indent: 30px; }"
        ],
        poprawna: "A"
    },
    {
        id: 333,
        pytanie: "W języku CSS zdefiniowano następujące formatowanie. Kolorem czerwonym zostanie zapisany",
        odpowiedzi: [
            "tylko tekst pochylony nagłówka pierwszego stopnia",
            "tylko tekst pochylony we wszystkich poziomach nagłówków",
            "cały tekst nagłówka pierwszego stopnia oraz pochylony tekst akapitu",
            "cały tekst nagłówka pierwszego stopnia oraz cały tekst pochylony, niezależnie od tego, w którym miejscu strony się znajduje"
        ],
        poprawna: "A",
        obraz: "333.jpg"
    },
    {
        id: 334,
        pytanie: "W języku CSS, aby sformatować dowolny element języka HTML w ten sposób, że po najechaniu na niego kursorem zmienia on kolor czcionki, należy zastosować pseudoklasę",
        odpowiedzi: [
            ":active",
            ":hover",
            ":visited",
            ":coursor"
        ],
        poprawna: "B"
    },
    {
        id: 335,
        pytanie: "Zapis CSS w takiej postaci sprawi, że na stronie internetowej",
        odpowiedzi: [
            "punktorem listy nienumerowanej będzie rys.gif",
            "rys.gif będzie stanowił ramkę dla listy nienumerowanej",
            "wyświetli się rys.gif jako tło listy nienumerowanej",
            "każdy z punktów listy będzie miał osobne tło pobrane z grafiki rys.gif"
        ],
        poprawna: "A",
        obraz: "335.jpg"
    },
    {
        id: 336,
        pytanie: "W języku CSS aby zdefiniować odmienne formatowanie dla pierwszej litery akapitu, należy zastosować selektor",
        odpowiedzi: [
            "klasy p.first-letter",
            "dziecka p + first-letter",
            "atrybutu p [first-letter]",
            "pseudoelementu p::first-letter"
        ],
        poprawna: "D"
    },
    {
        id: 337,
        pytanie: "W kodzie źródłowym zapisanym w języku HTML wskaż błąd walidacji dotyczący tego fragmentu",
        odpowiedzi: [
            "Nieznany znacznik h6",
            "Znacznik br nie został poprawnie zamknięty",
            "Znacznik br nie może występować wewnątrz znacznika p",
            "Znacznik zamykający /b niezgodny z zasadą zagnieżdżania"
        ],
        poprawna: "D",
        obraz: "337.jpg"
    },
    {
        id: 338,
        pytanie: "W ramce przedstawiono właściwości pliku graficznego. W celu optymalizacji czasu ładowania rysunku na stronę WWW należy",
        odpowiedzi: [
            "zmniejszyć wymiary rysunku",
            "zwiększyć rozdzielczość",
            "zmienić format grafiki na CDR",
            "zmienić proporcje szerokości do wysokości"
        ],
        poprawna: "A",
        obraz: "338.jpg"
    },
    {
        id: 339,
        pytanie: "W programie INKSCAPE / COREL aby uzyskać przedstawiony efekt napisu, należy",
        odpowiedzi: [
            "skorzystać z funkcji gradientu",
            "zastosować funkcję sumy z kołem",
            "zastosować funkcję wykluczenia z kołem",
            "skorzystać z funkcji wstaw / dopasuj tekst do ścieżki"
        ],
        poprawna: "D",
        obraz: "339.jpg"
    },
    {
        id: 340,
        pytanie: "Programem do edycji dźwięku jest",
        odpowiedzi: [
            "Brasero",
            "Winamp",
            "Audacity",
            "RealPlayer"
        ],
        poprawna: "C"
    },
    {
        id: 341,
        pytanie: "Dana jest tabela pracownicy. Polecenie MySQL usuwające wszystkie rekordy z tabeli, dla których nie wypełniono pola rodzaj_umowy, ma postać",
        odpowiedzi: [
            "DROP pracownicy FROM rodzaj_umowy = 0;",
            "DROP pracownicy WHERE rodzaj_umowy IS NULL;",
            "DELETE pracownicy WHERE rodzaj_umowy = 'brak';",
            "DELETE FROM pracownicy WHERE rodzaj_umowy IS NULL;"
        ],
        poprawna: "D"
    },
    {
        id: 342,
        pytanie: "W języku SQL, aby stworzyć tabelę, należy zastosować polecenie",
        odpowiedzi: [
            "ADD TABLE",
            "ALTER TABLE",
            "INSERT TABLE",
            "CREATE TABLE"
        ],
        poprawna: "D"
    },
    {
        id: 343,
        pytanie: "W przedstawionym fragmencie kwerendy języka SQL, komenda SELECT ma za zadanie zwrócić",
        odpowiedzi: [
            "średnią tabeli",
            "liczbę wierszy",
            "sumę w kolumnie wartosc",
            "średnią w kolumnie wartosc"
        ],
        poprawna: "B",
        obraz: "343.jpg"
    },
    {
        id: 344,
        pytanie: "Dana jest tabela ksiazki z polami: tytul, autor (typu tekstowego), cena (typu liczbowego). Aby kwerenda SELECT zwróciła tylko tytuły, dla których cena jest mniejsza od 50zł, należy zapisać:",
        odpowiedzi: [
            "SELECT * FROM ksiazki WHERE cena < 50;",
            "SELECT tytul FROM ksiazki WHERE cena < 50;",
            "SELECT tytul FROM ksiazki WHERE cena > '50 zł';",
            "SELECT ksiazki FROM tytul WHERE cena < '50 zł';"
        ],
        poprawna: "B"
    },
    {
        id: 345,
        pytanie: "W bazie danych MYSQL dana jest tabela programów komputerowych o polach: nazwa, producent, rokWydania. Aby kwerenda SELECT zwróciła wszystkie nazwy producentów tak, by nazwy te nie powtarzały się, należy zapisać:",
        odpowiedzi: [
            "SELECT UNIQUE producent FROM programy;",
            "SELECT DISTINCT producent FROM programy;",
            "SELECT producent FROM programy WHERE UNIQUE;",
            "SELECT producent FROM programy WHERE producent NOT DUPLICATE;"
        ],
        poprawna: "B"
    },
    {
        id: 346,
        pytanie: "Tabela filmy zawiera klucz główny id oraz klucz obcy rezyserID. Tabela rezyserzy zawiera klucz główny id. Obydwie tabele połączone są relacją jeden po stronie rezyserzy do wielu po stronie filmy. Aby w kwerendzie SELECT połączyć tabele filmy i rezyserzy, należy zapisać",
        odpowiedzi: [
            "... filmy JOIN rezyserzy ON filmy.id = rezyserzy.id ...",
            "... filmy JOIN rezyserzy ON filmy.id = rezyserzy.filmyID ...",
            "... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.id ...",
            "... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.filmyID ..."
        ],
        poprawna: "C"
    },
    {
        id: 347,
        pytanie: "Na rysunku przedstawiono dwie tabele. Aby połączyć je relacją jeden do wielu, jeden po stronie Klienci wiele po stronie Zamowienia, należy",
        odpowiedzi: [
            "Połączyć relacją pola ID z obu tabel",
            "Dodać pole klucza obcego do tabeli Zamowienia i połączyć je z ID tabeli Klienci",
            "Dodać pole klucza obcego do tabeli Klienci i połączyć je z ID tabeli Zamowienia",
            "Zdefiniować trzecią tabelę z dwoma kluczami obcymi. Jeden klucz połączyć z ID tabeli Klienci, drugi klucz połączyć z ID tabeli Zamowienia"
        ],
        poprawna: "B",
        obraz: "347.jpg"
    },
    {
        id: 348,
        pytanie: "Źródłem rekordów dla raportu może być",
        odpowiedzi: [
            "Tabela",
            "Inny raport",
            "Makropolecenie",
            "Zapytanie INSERT INTO"
        ],
        poprawna: "A"
    },
    {
        id: 349,
        pytanie: "Przedstawione polecenie MySQL ma za zadanie",
        odpowiedzi: [
            "Usunąć kolumnę tytul z tabeli ksiazki",
            "Dodać do tabeli ksiazki kolumnę tytul",
            "Zmienić nazwę kolumny w tabeli ksiazki",
            "Zmienić typ kolumny w tabeli ksiazki"
        ],
        poprawna: "D",
        obraz: "349.jpg"
    },
    {
        id: 350,
        pytanie: "W tabeli podzespoly należy zmienić wartość pola URL na 'toshiba.pl' dla wszystkich rekordów, gdzie pole producent to TOSHIBA. W języku SQL modyfikacja będzie miała postać",
        odpowiedzi: [
            "UPDATE podzespoly SET URL='toshiba.pl';",
            "UPDATE producent='TOSHIBA' SET URL='toshiba.pl';",
            "UPDATE podzespoly.producent='TOSHIBA' SET URL='toshiba.pl';",
            "UPDATE podzespoly SET URL='toshiba.pl' WHERE producent='TOSHIBA';"
        ],
        poprawna: "D"
    },
    {
        id: 351,
        pytanie: "Do zabezpieczeń serwera bazy danych przed atakami hakerów nie należy",
        odpowiedzi: [
            "Włączenie zapory",
            "Defragmentacja dysków",
            "Stosowanie złożonych haseł do bazy",
            "Blokowanie portów związanych z bazą danych"
        ],
        poprawna: "B"
    },
    {
        id: 352,
        pytanie: "W języku MySQL należy zastosować polecenie REVOKE, aby użytkownikowi anna odebrać prawo do dokonywania zmian jedynie w definicji struktury bazy danych. Polecenie odpowiadające odebraniu tych praw ma postać",
        odpowiedzi: [
            "REVOKE ALL ON tabela1 FROM 'anna'@'localhost'",
            "REVOKE CREATE ALTER DROP ON tabela1 FROM 'anna'@'localhost'",
            "REVOKE CREATE UPDATE DROP ON tabela1 FROM 'anna'@'localhost'",
            "REVOKE CREATE INSERT DELETE ON tabela1 FROM 'anna'@'localhost'"
        ],
        poprawna: "B"
    },
    {
        id: 353,
        pytanie: "W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:",
        odpowiedzi: [
            "if (liczba > 100 || liczba <= 200)",
            "if (liczba < 100 || liczba >= 200)",
            "if (liczba > 100 && liczba <= 200)",
            "if (liczba < 100 && liczba <= 200)"
        ],
        poprawna: "C"
    },
    {
        id: 354,
        pytanie: "W wyniku działania pętli zapisanej w języku PHP zostanie wypisany ciąg liczb",
        odpowiedzi: [
            "10 15 20 25 30 35 40 45",
            "10 15 20 25 30 35 40 45 50",
            "0 5 10 15 20 25 30 35 40 45",
            "0 5 10 15 20 25 30 35 40 45 50"
        ],
        poprawna: "A",
        obraz: "354.jpg"
    },
    {
        id: 355,
        pytanie: "Które z poniższych zdań dotyczących zasad programowania w języku PHP jest prawdziwe?",
        odpowiedzi: [
            "Jest to język o słabej kontroli typów",
            "Nazwy zmiennych są poprzedzone znakiem !",
            "Deklaracja zmiennych następuje po słowie var",
            "W nazwach zmiennych nie jest rozróżniana wielkość liter"
        ],
        poprawna: "A"
    },
    {
        id: 356,
        pytanie: "W języku PHP instrukcja foreach jest instrukcją",
        odpowiedzi: [
            "Wyboru, dla elementów tablicy",
            "Pętli, niezależnie od typu zmiennej",
            "Pętli, wyłącznie dla elementów tablicy",
            "Warunkową, niezależnie od typu zmiennej"
        ],
        poprawna: "C"
    },
    {
        id: 357,
        pytanie: "Funkcją języka PHP tworzącą ciasteczko jest",
        odpowiedzi: [
            "createcookie()",
            "echocookie()",
            "addcookie()",
            "setcookie()"
        ],
        poprawna: "D"
    },
    {
        id: 358,
        pytanie: "W języku PHP funkcja trim ma za zadanie",
        odpowiedzi: [
            "Podawać długość napisu",
            "Porównywać dwa napisy i wypisać część wspólną",
            "Zmniejszać napis o wskazaną w parametrze liczbę znaków",
            "Usuwać białe znaki lub inne znaki podane w parametrze, z obu końców napisu"
        ],
        poprawna: "D"
    },
    {
        id: 359,
        pytanie: "W języku JavaScript zapis w ramce oznacza, że",
        odpowiedzi: [
            "nazwa jest polem klasy przedmiot",
            "nazwa jest właściwością obiektu przedmiot",
            "zmienna x będzie przechowywać wynik działania metody nazwa",
            "zmienna x będzie przechowywać wynik działania funkcji przedmiot"
        ],
        poprawna: "C",
        obraz: "359.jpg"
    },
    {
        id: 360,
        pytanie: "W języku JavaScript zapisano następującą funkcję. Ma ona za zadanie",
        odpowiedzi: [
            "Wypisać wartość odwrotną do f",
            "Zwrócić wartość odwrotną do f",
            "Wypisać wartość bezwzględną z f",
            "Zwrócić wartość bezwzględną z f"
        ],
        poprawna: "D",
        obraz: "360.jpg"
    },
    {
        id: 361,
        pytanie: "Za pomocą języka PHP nie jest możliwe",
        odpowiedzi: [
            "Przetwarzanie danych formularzy",
            "Generowanie dynamicznej zawartości strony",
            "Przetwarzanie danych zgromadzonych w bazie danych",
            "Zmienianie dynamiczne zawartości strony HTML w przeglądarce"
        ],
        poprawna: "D"
    },
    {
        id: 362,
        pytanie: "Działaniem przedstawionego kodu PHP będzie wypełnienie tablicy",
        odpowiedzi: [
            "Kolejnymi liczbami od 0 do 9 i wypisanie ich",
            "Kolejnymi liczbami od -100 do 100 i wypisanie wartości ujemnych",
            "10 losowymi wartościami, a następnie wypisanie wartości ujemnych",
            "100 losowymi wartościami, a następnie wypisanie wartości dodatnich"
        ],
        poprawna: "C",
        obraz: "362.jpg"
    },
    {
        id: 363,
        pytanie: "W języku JavaScript zapisano fragment kodu. Po wykonaniu skryptu zmienna x",
        odpowiedzi: [
            "Będzie równa 11 i zostanie wypisana w oknie popup",
            "Będzie równa 10 i zostanie wypisana w dokumencie HTML",
            "Będzie równa 11 i zostanie wypisana w konsoli przeglądarki internetowej",
            "Będzie równa 10 i zostanie wypisana w głównym oknie przeglądarki internetowej"
        ],
        poprawna: "C",
        obraz: "363.jpg"
    },
    {
        id: 364,
        pytanie: "W języku PHP, wykonując operacje na bazie danych MySQL, aby zakończyć pracę z bazą, należy wywołać",
        odpowiedzi: [
            "mysqli_exit();",
            "mysqli_close();",
            "mysqli_commit();",
            "mysqli_rollback();"
        ],
        poprawna: "B"
    },
    {
        id: 365,
        pytanie: "W ramce przedstawiono kod JavaScript z błędem logicznym. Program powinien wypisywać informację, czy liczby są sobie równe czy nie, lecz nie wykonuje tego. Wskaż odpowiedź, która dotyczy błędu",
        odpowiedzi: [
            "Nieprawidłowo zadeklarowano zmienne",
            "Przed klauzulą else nie powinno być średnika",
            "W klauzuli if występuje przypisanie zamiast porównania",
            "Instrukcje wewnątrz sekcji if oraz else powinny być zamienione miejscami"
        ],
        poprawna: "C",
        obraz: "365.jpg"
    },
    {
        id: 366,
        pytanie: "Która z zasad tworzenia części <head> języka HTML jest poprawna?",
        odpowiedzi: [
            "W części <head> zawiera się część <body>",
            "W części <head> mogą wystąpić znaczniki <meta>, <title>, <link>",
            "W części <head> można definiować szablon strony znacznikami <div>",
            "W części <head> nie można umieszczać kodu CSS, a jedynie odwołanie do pliku CSS"
        ],
        poprawna: "B"
    },
    {
        id: 367,
        pytanie: "W języku HTML znacznik <strong>tekst</strong> będzie wyświetlany w ten sam sposób przez przeglądarkę co znacznik",
        odpowiedzi: [
            "<b>tekst</b>",
            "<h1>tekst</h1>",
            "<big>tekst</big>",
            "<sub>tekst</sub>"
        ],
        poprawna: "A"
    },
    {
        id: 368,
        pytanie: "Aby strona WWW była responsywna, należy między innymi definiować",
        odpowiedzi: [
            "jedynie znane czcionki, np. Arial",
            "rozmiary obrazów w procentach",
            "rozmiary obrazów wyłącznie w pikselach",
            "rozkład strony wyłącznie za pomocą tabel"
        ],
        poprawna: "B"
    },
    {
        id: 369,
        pytanie: "W języku HTML, aby zapisać sekcję cytatu, która może zawierać kilka paragrafów tak, by przeglądarka dodała wspólne wcięcie, należy zastosować znacznik",
        odpowiedzi: [
            "<q>",
            "<indent>",
            "<blockq>",
            "<blockquote>"
        ],
        poprawna: "D"
    },
    {
        id: 370,
        pytanie: "W języku CSS wartości underline, overline, blink przyjmują atrybut",
        odpowiedzi: [
            "text-style",
            "font-style",
            "font-weight",
            "text-decoration"
        ],
        poprawna: "D"
    },
    {
        id: 371,
        pytanie: "W przedstawionej definicji stylu CSS, powtarzanie dotyczy",
        odpowiedzi: [
            "tła każdego ze znaczników akapitu",
            "rysunku umieszczonego znacznikiem img",
            "rysunku umieszczonego w tle strony w pionie",
            "rysunku umieszczonego w tle strony w poziomie"
        ],
        poprawna: "C",
        obraz: "371.jpg"
    },
    {
        id: 372,
        pytanie: "W języku CSS zdefiniowano styl. Sformatowana stylem sekcja będzie zawierała obramowanie o szerokości",
        odpowiedzi: [
            "2 px oraz marginesy wewnątrz tego obramowania",
            "20 px oraz marginesy wewnątrz tego obramowania",
            "2 px oraz marginesy na zewnątrz tego obramowania",
            "20 px oraz marginesy na zewnątrz tego obramowania"
        ],
        poprawna: "C",
        obraz: "372.jpg"
    },
    {
        id: 373,
        pytanie: "Strona HTML definiuje akapit oraz rysunek. Aby rysunek został umieszczony przez przeglądarkę w tej samej linii co akapit po jego lewej stronie, należy w stylu CSS rysunku zawrzeć własność",
        odpowiedzi: [
            "float:left;",
            "align:left;",
            "style:left;",
            "alt:left;"
        ],
        poprawna: "A"
    },
    {
        id: 374,
        pytanie: "W języku CSS określono formatowanie znacznika h1 według wzoru. Zakładając, że żadne inne formatowanie nie jest dodane do znacznika h1, wskaż sposób formatowania tego znacznika",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "374.jpg"
    },
    {
        id: 375,
        pytanie: "Aby przygotować szablon strony z trzema kolumnami ustawionymi obok siebie, można posłużyć się stylem CSS",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "375.jpg"
    },
    {
        id: 376,
        pytanie: "Przedstawiono fragment kodu HTML, który nie waliduje się poprawnie. Błąd walidacji tego fragmentu kodu będzie dotyczył",
        odpowiedzi: [
            "Braku cudzysłowu",
            "Niedomknięcia znacznika br",
            "Niedomknięcia znacznika img",
            "Powtórzenia nazwy pliku graficznego"
        ],
        poprawna: "A",
        obraz: "376.jpg"
    },
    {
        id: 377,
        pytanie: "Modelem barw opisującym kolor z użyciem stożka przestrzeni barw jest",
        odpowiedzi: [
            "CIE",
            "HSV",
            "CMY",
            "CMYK"
        ],
        poprawna: "B"
    },
    {
        id: 378,
        pytanie: "Rozmycie Gaussa, wygładzanie, szum RGB są funkcjami programu do obróbki",
        odpowiedzi: [
            "Grafiki rastrowej",
            "Grafiki wektorowej",
            "Ścieżki dźwiękowej",
            "Dźwięku w formacie MIDI"
        ],
        poprawna: "A"
    },
    {
        id: 379,
        pytanie: "Aby edytować nakładające się na siebie pojedyncze fragmenty obrazu, pozostawiając pozostałe elementy niezmienione, należy zastosować",
        odpowiedzi: [
            "Warstwy",
            "Histogram",
            "Kanał alfa",
            "Kadrowanie"
        ],
        poprawna: "A"
    },
    {
        id: 380,
        pytanie: "W języku SQL wykorzystywanym przez bazę danych MySQL atrybut UNIQUE polecenia CREATE TABLE",
        odpowiedzi: [
            "Wymusza unikatowe nazwy pól tabeli",
            "Blokuje możliwość wpisania wartości NULL",
            "Jest stosowany tylko w przypadku pól liczbowych",
            "Jest stosowany, jeśli wartość w kolumnie nie mogą się powtarzać"
        ],
        poprawna: "D"
    },
    {
        id: 381,
        pytanie: "Funkcja agregująca MIN języka SQL ma za zadanie policzyć",
        odpowiedzi: [
            "Liczbę wierszy zwróconych kwerendą",
            "Wartość minimalną kolumny zwróconej kwerendą",
            "długość znaków w zwróconych kwerendą rekordach",
            "Średnią wartości różnych pól rekordu zwróconego zapytaniem"
        ],
        poprawna: "B"
    },
    {
        id: 382,
        pytanie: "Dana jest tabela o nazwie wycieczki z polami: nazwa, cena, miejsca (jako liczba wolnych miejsc). Aby dla dowolnego zbioru danych tabeli wyświetlić jedynie nazwy tych wycieczek, dla których cena jest niższa niż 2000 zł i mają przynajmniej cztery wolne miejsca, należy posłużyć się zapytaniem",
        odpowiedzi: [
            "SELECT nazwa FROM wycieczki WHERE cena < 2000 AND miejsca > 3;",
            "SELECT nazwa FROM wycieczki WHERE cena < 2000 OR miejsca > 4;",
            "SELECT * FROM wycieczki WHERE cena < 2000 AND miejsca > 4;",
            "SELECT * FROM wycieczki WHERE cena < 2000 OR miejsca > 3;"
        ],
        poprawna: "A"
    },
    {
        id: 383,
        pytanie: "Dana jest tabela o nazwie przedmioty z polami: ocena i uczenID. Aby policzyć średnią ocen ucznia o ID równym 7, należy posłużyć się zapytaniem",
        odpowiedzi: [
            "AVG SELECT ocena FROM przedmioty WHERE uczenID = 7;",
            "SELECT AVG(ocena) FROM przedmioty WHERE uczenID = 7;",
            "COUNT SELECT ocena FROM przedmioty WHERE uczenID = 7;",
            "SELECT COUNT(ocena) FROM przedmioty WHERE uczenID = 7;"
        ],
        poprawna: "B"
    },
    {
        id: 384,
        pytanie: "Tabela o nazwie naprawy zawiera pola: klient, czyNaprawione. Aby usunąć te rekordy, w których pole czyNaprawione jest prawdą, należy posłużyć się poleceniem",
        odpowiedzi: [
            "DELETE FROM naprawy;",
            "DELETE naprawy WHERE czyNaprawione = TRUE;",
            "DELETE FROM naprawy WHERE czyNaprawione = TRUE;",
            "DELETE klient FROM naprawy WHERE czyNaprawione = TRUE;"
        ],
        poprawna: "C"
    },
    {
        id: 385,
        pytanie: "Formularz nadrzędny wykorzystywany do nawigacji w bazie danych pomiędzy dostępnymi w systemie formularzami, kwerendami jest nazywany formularzem",
        odpowiedzi: [
            "głównym",
            "sterującym",
            "pierwotnym",
            "zagnieżdżonym"
        ],
        poprawna: "B"
    },
    {
        id: 386,
        pytanie: "W bazie danych sklepu komputerowego istnieje tabela komputery. Aby zdefiniować raport wyświetlający dla dowolnego zbioru danych tabeli, jedynie pola tabeli dla komputerów, w których jest nie mniej niż 8 GB pamięci, a procesor to Intel, można posłużyć sie kwerendą",
        odpowiedzi: [
            "SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec < 8;",
            "SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec >= 8;",
            "SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec < 8;",
            "SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec >= 8;"
        ],
        poprawna: "D"
    },
    {
        id: 387,
        pytanie: "Za pomocą polecenia ALTER TABLE można",
        odpowiedzi: [
            "zmienić wartości rekordów",
            "zmienić strukturę tabeli",
            "usunąć rekord",
            "usunąć tabelę"
        ],
        poprawna: "B"
    },
    {
        id: 388,
        pytanie: "W języku SQL, wykorzystywanym przez bazę danych MySQL w tabeli samochody, aby nadać wartość równą 0 dla kolumny przebieg, należy posłużyć się kwerendą",
        odpowiedzi: [
            "UPDATE samochody SET przebieg = 0;",
            "UPDATE przebieg SET 0 FROM samochody;",
            "UPDATE przebieg SET 0 TABLE samochody;",
            "UPDATE samochody SET przebieg VALUE 0;"
        ],
        poprawna: "A"
    },
    {
        id: 389,
        pytanie: "Przedstawione polecenie SQL, użytkownikowi adam@localhost nadaje prawa",
        odpowiedzi: [
            "zarządzania strukturą tabeli klienci",
            "manipulowania danymi w tabeli klienci",
            "zarządzania strukturą bazy danych klienci",
            "manipulowania danymi bazy danych klienci"
        ],
        poprawna: "B",
        obraz: "389.jpg"
    },
    {
        id: 390,
        pytanie: "W języku JavaScript przedstawiona definicja jest definicją",
        odpowiedzi: [
            "klasy",
            "tablicy",
            "obiektu",
            "kolekcji"
        ],
        poprawna: "B",
        obraz: "390.jpg"
    },
    {
        id: 391,
        pytanie: "Dla każdej iteracji pętli wartość bieżącego elementu tablicy jest przypisywana do zmiennej, a wskaźnik tablicy jest przesuwany o jeden, aż do ostatniego elementu tablicy. Zdanie to jest prawdziwe dla instrukcji",
        odpowiedzi: [
            "for",
            "next",
            "while",
            "foreach"
        ],
        poprawna: "D"
    },
    {
        id: 392,
        pytanie: "Wskaż zapisany w języku JavaScript warunek, który ma sprawdzić spełnienie z przypadków: 1) dowolna naturalna liczba a jest trzycyfrowa, 2) dowolna całkowita liczba b jest ujemna",
        odpowiedzi: [
            "((a>99) || (a<1000)) || (b<0)",
            "((a>99) && (a<1000)) || (b<0)",
            "((a>99) || (a<1000)) && (b<0)",
            "((a>99) && (a<1000)) && (b<0)"
        ],
        poprawna: "B"
    },
    {
        id: 393,
        pytanie: "Którą czynność gwarantującą poprawne wykonanie przedstawionego kodu JavaScript, należy wykonać przed pętlą?",
        odpowiedzi: [
            "Zadeklarować zmienną i",
            "Zainicjować zmienną text",
            "Sprawdzić rozmiar tabeli tab",
            "Sprawdzić czy text jest typu znakowego"
        ],
        poprawna: "B",
        obraz: "393.jpg"
    },
    {
        id: 394,
        pytanie: "Hermetyzacja to zasada programowania obiektowego mówiąca o tym, że",
        odpowiedzi: [
            "klasy/obiekty mogą współdzielić ze sobą funkcjonalność",
            "pola i metody wykorzystywane tylko przez daną klasę/obiekt są ograniczone zasięgiem private lub protected",
            "klasy/obiekty mogą mieć zdefiniowane metody wirtualne, które są implementowane w pochodnych klasach/obiektach",
            "typy pól w klasach/obiektach mogą być dynamicznie zmieniane w zależności od danych im przypisywanych"
        ],
        poprawna: "B"
    },
    {
        id: 395,
        pytanie: "Przedstawiono fragment JavaScript. Po jego wykonaniu zmienna str2 będzie przechowywać",
        odpowiedzi: [
            "vaSc",
            "avaS",
            "vaScri",
            "nvaScr"
        ],
        poprawna: "A",
        obraz: "395.jpg"
    },
    {
        id: 396,
        pytanie: "Który ze sposobów wypisania tekstu nie jest zdefiniowany w języku JavaScript?",
        odpowiedzi: [
            "Własność innerHTML",
            "Metoda window.alert()",
            "Funkcja MessageBox()",
            "Metoda document.write()"
        ],
        poprawna: "C"
    },
    {
        id: 397,
        pytanie: "Funkcja JavaScript powinna być wywołana za każdym razem, gdy użytkownik wpisze dowolny znak do pola edycji. Którego zdarzenia należy użyć?",
        odpowiedzi: [
            "onload",
            "onclick",
            "onkeydown",
            "onmouseout"
        ],
        poprawna: "C"
    },
    {
        id: 398,
        pytanie: "Która z wymienionych funkcji zapisanych językiem PHP zwraca sumę połowy a i połowy b",
        odpowiedzi: [
            "function licz($a, $b) {return $a/2 + $b;}",
            "function licz($a, $b) {return 2/$a + 2/$b;}",
            "function licz($a, $b) {return $a/2 + $b/2;}",
            "function licz($a, $b) {return ($a/2 + $b)/2;}"
        ],
        poprawna: "C"
    },
    {
        id: 399,
        pytanie: "W języku JavaScript zapisano definicję obiektu. Aby odwołać się do własności nazwisko należy zapisać",
        odpowiedzi: [
            "osoba[1]",
            "osoba[2]",
            "osoba.nazwisko",
            "osoba::nazwisko"
        ],
        poprawna: "C",
        obraz: "399.jpg"
    },
    {
        id: 400,
        pytanie: "W języku PHP zapisano fragment kodu. Plik cookie stworzony tym poleceniem",
        odpowiedzi: [
            "zostanie usunięty po jednym dniu od jego utworzenia",
            "będzie przechowywany na serwerze przez jeden dzień",
            "zostanie usunięty po jednej godzinie od jego utworzenia",
            "będzie przechowywany na serwerze przez jedną godzinę"
        ],
        poprawna: "A",
        obraz: "400.jpg"
    },
    {
        id: 401,
        pytanie: "W języku PHP zapisano fragment kodu. Po zakończeniu pętli zmienna a przyjmie wartość",
        odpowiedzi: [
            "0",
            "2",
            "10",
            "20"
        ],
        poprawna: "D",
        obraz: "401.jpg"
    },
    {
        id: 402,
        pytanie: "W języku JavaScript, aby zmienić wartość atrybutu znacznika HTML, po uzyskaniu obiektu za pomocą metody getElementById należy skorzystać z",
        odpowiedzi: [
            "pola innerHTML",
            "metody getAttribute",
            "metody setAttribute",
            "pola attribute i podać nazwę atrybutu"
        ],
        poprawna: "C"
    },
    {
        id: 403,
        pytanie: "W języku JavaScript zapisano kod, którego wynikiem działania jest",
        odpowiedzi: [
            "wyświetlenie okna z pustym polem edycyjnym",
            "bezpośrednie wpisanie do zmiennej osoba wartości \"Adam\"",
            "pobranie z formularza wyświetlonego na stronie HTML imienia \"Adam\"",
            "wyświetlenie okna z polem edycyjnym, w którym jest wpisany domyślny tekst \"Adam\""
        ],
        poprawna: "D",
        obraz: "403.jpg"
    },
    {
        id: 404,
        pytanie: "W języku PHP zapisano fragment kodu działającego na bazie MySQL. Jego zadaniem jest wypisanie",
        odpowiedzi: [
            "ulicy i miasta z pierwszego zwróconego rekordu",
            "ulicy i miasta ze wszystkich zwróconych rekordów",
            "miasta i kodu pocztowego z pierwszego zwróconego rekordu",
            "miasta i kodu pocztowego ze wszystkich zwróconych rekordów"
        ],
        poprawna: "C",
        obraz: "404.jpg"
    },
    {
        id: 405,
        pytanie: "Który sposób komentowania jednoliniowego jest dozwolony w języku JavaScript?",
        odpowiedzi: [
            "!",
            "#",
            "//",
            "<!"
        ],
        poprawna: "C"
    },
    {
        id: 406,
        pytanie: "Znaczniki <header>, <article>, <section>, <footer> są charakterystyczne dla języka",
        odpowiedzi: [
            "HTML 5",
            "XHTML 1.1",
            "HTML 4.01 Strict",
            "HTML 4.01 Transitional"
        ],
        poprawna: "A"
    },
    {
        id: 407,
        pytanie: "Przy użyciu którego znacznika w języku HTML nie można umieścić na stronie grafiki dynamicznej?",
        odpowiedzi: [
            "<img>",
            "<strike>",
            "<embed>",
            "<object>"
        ],
        poprawna: "B"
    },
    {
        id: 408,
        pytanie: "Które ze znaczników HTML umożliwią wyświetlenie na stronie tekstu w jednym wierszu, jeżeli żadne formatowanie CSS nie zostało zdefiniowane?",
        odpowiedzi: [
            "<p>Dobre strony </p><p style=\"letter-spacing:3px\">mojej strony</p>",
            "<h3>Dobre strony </h3><h3 style=\"letter-spacing:3px\">mojej strony</h3>",
            "<div>Dobre strony </div><div style=\"letter-spacing:3px\">mojej strony</div>",
            "<span>Dobre strony </span><span style=\"letter-spacing:3px\">mojej strony</span>"
        ],
        poprawna: "D",
        obraz: "408.jpg"
    },
    {
        id: 409,
        pytanie: "W języku HTML atrybut shape znacznika area, określający typ obszaru, może przyjąć wartość",
        odpowiedzi: [
            "rect, triangle, circle",
            "poly, square, circle",
            "rect, square, circle",
            "rect, poly, circle"
        ],
        poprawna: "D"
    },
    {
        id: 410,
        pytanie: "Wskaż prawidłową kolejność stylów CSS mając na uwadze ich pierwszeństwo w formatowaniu elementów strony WWW.",
        odpowiedzi: [
            "Lokalny, Wewnętrzny, Zewnętrzny",
            "Zewnętrzny, Wydzielone bloki, Lokalny",
            "Rozciąganie stylu, Zewnętrzny, Lokalny",
            "Wewnętrzny, Zewnętrzny, Rozciąganie stylu"
        ],
        poprawna: "A"
    },
    {
        id: 411,
        pytanie: "W folderze www znajdują się podfoldery html i style, w których zapisane są odpowiednio pliki z rozszerzeniem html i pliki z rozszerzeniem css. Chcąc dołączyć styl.css do pliku HTML należy użyć",
        odpowiedzi: [
            "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/styl.css\" />",
            "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/style/styl.css\" />",
            "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/www/style/styl.css\" />",
            "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/../style/styl.css\" />"
        ],
        poprawna: "D"
    },
    {
        id: 412,
        pytanie: "Chcąc zdefiniować marginesy wewnętrzne dla danych: margines górny 50px, dolny 40px, prawy 20px i lewy 30px należy użyć składni CSS",
        odpowiedzi: [
            "padding: 50px, 40px, 20px, 30px;",
            "padding: 50px, 20px, 40px, 30px;",
            "padding: 20px, 40px, 30px, 50px;",
            "padding: 40px, 30px, 50px, 20px;"
        ],
        poprawna: "B"
    },
    {
        id: 413,
        pytanie: "Chcąc sformatować w stylach CSS wszystkie obrazy zawarte w akapicie, powinno się użyć selektora",
        odpowiedzi: [
            "p img",
            "p#img",
            "p+img",
            "p.img"
        ],
        poprawna: "A"
    },
    {
        id: 414,
        pytanie: "Który z atrybutów background-attachment w języku CSS należy wybrać, aby tło strony było nieruchome względem okna przeglądarki?",
        odpowiedzi: [
            "Scroll",
            "Fixed",
            "Local",
            "Inherit"
        ],
        poprawna: "B"
    },
    {
        id: 415,
        pytanie: "Barwa zapisana w modelu RGB(255, 0, 0) jest",
        odpowiedzi: [
            "żółta",
            "zielona",
            "niebieska",
            "czerwona"
        ],
        poprawna: "D"
    },
    {
        id: 416,
        pytanie: "Połączenie dwóch barw leżących po przeciwnych stronach w kole barw jest połączeniem",
        odpowiedzi: [
            "trójkątnym",
            "sąsiadującym",
            "dopełniającym",
            "monochromatycznym"
        ],
        poprawna: "C"
    },
    {
        id: 417,
        pytanie: "Model barw oparty na 3 parametrach: odcień, nasycenie i jasność to",
        odpowiedzi: [
            "RGB",
            "HSV",
            "CMY",
            "CMYK"
        ],
        poprawna: "B"
    },
    {
        id: 418,
        pytanie: "Który z wymienionych formatów plików NIE JEST wykorzystywany do publikacji grafiki lub animacji na stronach internetowych?",
        odpowiedzi: [
            "PNG",
            "SWF",
            "SVG",
            "AIFF"
        ],
        poprawna: "D"
    },
    {
        id: 419,
        pytanie: "Aby stworzyć przycisk na stronę internetową według wzoru, należy w programie do grafiki rastrowej użyć opcji",
        odpowiedzi: [
            "propagacja wartości",
            "zaznaczenie eliptyczne",
            "zniekształcenia i deformowanie",
            "zaokrąglenie lub wybranie opcji prostokąt z zaokrąglonymi rogami"
        ],
        poprawna: "D",
        obraz: "419.jpg"
    },
    {
        id: 420,
        pytanie: "Pierwszym krokiem podczas przetwarzania sygnału analogowego na cyfrowy jest",
        odpowiedzi: [
            "próbkowanie",
            "kwantyzacja",
            "filtrowanie",
            "kodowanie"
        ],
        poprawna: "A"
    },
    {
        id: 421,
        pytanie: "Wskaż FAŁSZYWE stwierdzenie dotyczące normalizacji sygnału dźwiękowego",
        odpowiedzi: [
            "Polecenie normalizacja dostępne jest w menu programu do obróbki dźwięku",
            "W wyniku normalizacji wyrównywany jest poziom głośności całego nagrania",
            "Jeśli najgłośniejszy fragment dźwięku osiąga połowę skali, wszystko zostanie pogłośnione razy dwa - czyli tak, aby najgłośniejszy fragment osiągnął maksimum na skali",
            "Normalizacja polega na zmniejszeniu poziomu najgłośniejszej próbki w sygnale do zadanej wartości i następnie w odniesieniu do niej proporcjonalnym zwiększeniu głośności reszty sygnału"
        ],
        poprawna: "C"
    },
    {
        id: 422,
        pytanie: "Wskaż PRAWDZIWE stwierdzenie dla polecenia: CREATE TABLE IF NOT EXISTS ADRES(ulica VARCHAR(70) CHARACTER SET utf8);",
        odpowiedzi: [
            "Rekordem tabeli nie może być 3 MAJA",
            "Klauzula CHARACTER SET utf8 jest obowiązkowa",
            "Do tabeli nie można wprowadzać ulic zawierających w nazwie polskie znaki",
            "IF NOT EXISTS stosuje się opcjonalnie, aby upewnić się, że brak w bazie danych takiej tabeli"
        ],
        poprawna: "D"
    },
    {
        id: 423,
        pytanie: "Jak działa instrukcja łącząca wyniki zapytań INTERSECT w języku SQL?",
        odpowiedzi: [
            "Zwraca listę wyników z pierwszego zapytania oraz listę wyników z drugiego zapytania, powodując domyślne usuwanie powtarzających się wierszy.",
            "Zwraca te wiersze, które wystąpiły w wyniku pierwszego zapytania, ale nie było ich w wyniku drugiego zapytania.",
            "Zwraca te wiersze, które wystąpiły w wyniku drugiego zapytania, ale nie było ich w wyniku pierwszego zapytania.",
            "Zwraca część wspólną wyników dwóch zapytań."
        ],
        poprawna: "D"
    },
    {
        id: 424,
        pytanie: "W języku SQL dla dowolnych zestawów danych w tabeli Uczniowie, aby wybrać rekordy, które zawierają wyłącznie uczennice o imieniu \"Aleksandra\", urodzone po roku \"1998\", należy zapisać zapytanie",
        odpowiedzi: [
            "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia > \"1998\";",
            "SELECT * FROM Uczniowie WHERE imie =\"Aleksandra\" OR rok_urodzenia < \"1998\";",
            "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" OR rok_urodzenia > \"1998\";",
            "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia < \"1998\";"
        ],
        poprawna: "A"
    },
    {
        id: 425,
        pytanie: "Którą relację w projekcie bazy danych należy ustalić między tabelami widocznymi na rysunku zakładając, że każdy klient sklepu internetowego dokona przynajmniej dwóch zamówień?",
        odpowiedzi: [
            "1:1",
            "1:n, gdzie 1 jest po stronie Klienta, a wiele po stronie Zamówienia",
            "1:n, gdzie 1 jest po stronie Zamówienia, a wiele po stronie Klienta",
            "n:n"
        ],
        poprawna: "B",
        obraz: "425.jpg"
    },
    {
        id: 426,
        pytanie: "Wyszukując z tabeli Pracownicy wyłącznie nazwiska, w których ostatnią literą jest \"i\", można użyć kwerendy SQL",
        odpowiedzi: [
            "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i\";",
            "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i%\";",
            "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i\";",
            "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i%\";"
        ],
        poprawna: "C"
    },
    {
        id: 427,
        pytanie: "W celu dodania rekordu do tabeli Pracownicy należy użyć polecenia SQL",
        odpowiedzi: [
            "INSERT INTO Pracownicy VALUES (\"Jan\", \"Kowalski\");",
            "INSERT VALUES (Jan; Kowalski) INTO Pracownicy;",
            "INSERT VALUES Pracownicy INTO (Jan, Kowalski);",
            "INSERT (Jan), (Kowalski) INTO TABLE Pracownicy;"
        ],
        poprawna: "A"
    },
    {
        id: 428,
        pytanie: "W języku SQL w wyniku wykonania zapytania ALTER TABLE osoba DROP COLUMN grupa; zostanie",
        odpowiedzi: [
            "dodana kolumna grupa",
            "usunięta kolumna grupa",
            "zmieniona nazwa tabeli na grupa",
            "zmieniona nazwa kolumny na grupa"
        ],
        poprawna: "B"
    },
    {
        id: 429,
        pytanie: "Właściwym zestawem kroków według kolejności, które należy wykonać w celu nawiązania współpracy między aplikacją internetową po stronie serwera a bazą SQL, jest",
        odpowiedzi: [
            "zapytanie do bazy, wybór bazy, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "wybór bazy danych, nawiązanie połączenia z serwerem baz danych, zapytanie do bazy, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "wybór bazy, zapytanie do bazy, nawiązanie połączenia z serwerem baz danych, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "nawiązanie połączenia z serwerem baz danych, wybór bazy, zapytanie do bazy - wyświetlane na stronie WWW, zamknięcie połączenia"
        ],
        poprawna: "D"
    },
    {
        id: 430,
        pytanie: "Do poprawnego i spójnego działania bazy danych niezbędne jest umieszczenie w każdej tabeli",
        odpowiedzi: [
            "kluczy PRIMARY KEY i FOREIGN KEY",
            "klucza FOREIGN KEY z wartością NOT NULL",
            "klucza obcego z wartością NOT NULL i UNIQUE",
            "klucza PRIMARY KEY z wartością NOT NULL i UNIQUE"
        ],
        poprawna: "D"
    },
    {
        id: 431,
        pytanie: "W języku PHP, dla zmiennych a = 5 i b = 3 wartość typu zmiennoprzecinkowego zwróci wyrażenie",
        odpowiedzi: [
            "a + b",
            "a * b",
            "a / b",
            "a && b"
        ],
        poprawna: "C"
    },
    {
        id: 432,
        pytanie: "Wartość i typ zmiennej w języku PHP można sprawdzić za pomocą funkcji",
        odpowiedzi: [
            "readfile()",
            "var_dump()",
            "implode()",
            "strlen()"
        ],
        poprawna: "B"
    },
    {
        id: 433,
        pytanie: "W języku JavaScript zdefiniowana zmienna i, która ma przechowywać wynik dzielenia wynoszący 1, to",
        odpowiedzi: [
            "var i=3/2;",
            "var i=Number(3/2);",
            "var i=parseInt(3/2);",
            "var i=parseFloat(3/2);"
        ],
        poprawna: "C"
    },
    {
        id: 434,
        pytanie: "Wskaż BŁĘDNY opis optymalizacji kodu wynikowego programu",
        odpowiedzi: [
            "Jej celem jest poprawienie wydajności programu",
            "W celu zwiększenia szybkości wykonywania kodu przez procesor może być prowadzona na różnych etapach pracy",
            "Jej celem jest sprawdzenie zgodności z wymogami formalnymi",
            "Powinna prowadzić do modyfikacji kodu źródłowego do postaci, w której będzie on działał szybciej"
        ],
        poprawna: "C"
    },
    {
        id: 435,
        pytanie: "Podaj wynik działania programu zapisanego w języku JavaScript, znajdującego się w ramce, po podaniu na wejściu wartości 5",
        odpowiedzi: [
            "60",
            "120",
            "125",
            "625"
        ],
        poprawna: "B",
        obraz: "435.jpg"
    },
    {
        id: 436,
        pytanie: "W języku PHP chcąc wyświetlić ciąg n znaków @, należy użyć funkcji",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "436.jpg"
    },
    {
        id: 437,
        pytanie: "Językami programowania działającymi po stronie serwera są:",
        odpowiedzi: [
            "Java, C#, AJAX, Ruby, PHP",
            "Java, C#, Python, Ruby, PHP",
            "C#, Python, Ruby, PHP, JavaScript",
            "Java, C#, Python, ActionScript, PHP"
        ],
        poprawna: "B"
    },
    {
        id: 438,
        pytanie: "Instrukcja przypisania elementu do tablicy w języku JavaScript dotyczy tablicy",
        odpowiedzi: [
            "statycznej",
            "asocjacyjnej",
            "numerycznej",
            "wielowymiarowej"
        ],
        poprawna: "B",
        obraz: "438.jpg"
    },
    {
        id: 439,
        pytanie: "Jakie elementy wypisze funkcja wypisz(2) stworzona w języku JavaScript?",
        odpowiedzi: [
            "6",
            "2 3 4 6",
            "3 4 6 8",
            "3 4 6"
        ],
        poprawna: "D",
        obraz: "439.jpg"
    },
    {
        id: 440,
        pytanie: "W formularzu dokumentu PHP istnieje pole <input name=\"im\" />. Po wprowadzeniu przez użytkownika ciągu znaków \"Janek\", w celu dodania zawartości pola do bazy danych, w tablicy $_POST zawarty jest element",
        odpowiedzi: [
            "im o indeksie Janek",
            "Janek o indeksie im",
            "im z kolejnym numerem indeksu",
            "Janek z kolejnym numerem indeksu"
        ],
        poprawna: "B"
    },
    {
        id: 441,
        pytanie: "W celu zmodyfikowania tekstu \"ala ma psa\" na \"ALA MA PSA\" należy użyć funkcji PHP",
        odpowiedzi: [
            "strtoupper(\"ala ma psa\");",
            "strtolower(\"ala ma psa\");",
            "ucfirst(\"ala ma psa\");",
            "strstr(\"ala ma psa\");"
        ],
        poprawna: "A"
    },
    {
        id: 442,
        pytanie: "W kodzie JavaScript pętla zostanie wykonana",
        odpowiedzi: [
            "2 razy",
            "3 razy",
            "26 razy",
            "27 razy"
        ],
        poprawna: "B",
        obraz: "442.jpg"
    },
    {
        id: 443,
        pytanie: "Poprawne udokumentowanie wzorca weryfikacji pola nazwa w części kodu aplikacji JavaScript to",
        odpowiedzi: [
            "/* Pole nazwa może składać się z dowolnego ciągu cyfr (z wyłączeniem 0), małych i dużych liter. */",
            "/* Pole nazwa powinno składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i ciągu małych liter. */",
            "/* Pole nazwa musi składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i dwóch małych liter. */",
            "/* Pole nazwa może zawierać dowolny ciąg cyfr (z wyłączeniem 0), następnie musi zawierać dużą literę i ciąg minimum dwóch małych liter. */"
        ],
        poprawna: "D",
        obraz: "443.jpg"
    },
    {
        id: 444,
        pytanie: "Włączenie do kodu skryptu zawartości pliku egzamin.php, zawierającego kod PHP, wymaga dodania instrukcji",
        odpowiedzi: [
            "fgets(\"egzamin.php\");",
            "fopen(\"egzamin.php\");",
            "getfile(\"egzamin.php\");",
            "include(\"egzamin.php\");"
        ],
        poprawna: "D"
    },
    {
        id: 445,
        pytanie: "Do utworzenia kopii zapasowej bazy danych w MySQL należy użyć polecenia",
        odpowiedzi: [
            "mysqlslap",
            "mysqlreplicate",
            "mysqldump",
            "mysqlcheck"
        ],
        poprawna: "C"
    },
    {
        id: 446,
        pytanie: "Deklaracja typu dokumentu HTML: <!DOCTYPE HTML> oznacza, że kod jest napisany w wersji",
        odpowiedzi: [
            "4",
            "5",
            "6",
            "7"
        ],
        poprawna: "B"
    },
    {
        id: 447,
        pytanie: "Dołączenie zewnętrznego arkusza stylów do kodu HTML jest realizowane przy użyciu znacznika",
        odpowiedzi: [
            "<css>",
            "<link>",
            "<style>",
            "<meta>"
        ],
        poprawna: "B"
    },
    {
        id: 448,
        pytanie: "Który z rysunków obrazuje efekt działania przedstawionego fragmentu kodu HTML?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "448.jpg"
    },
    {
        id: 449,
        pytanie: "Przedstawione pole input umożliwi",
        odpowiedzi: [
            "wpisanie hasła",
            "zaznaczenie opcji",
            "wpisanie dowolnego tekstu",
            "wybranie opcji z listy o wartościach text1 i text2"
        ],
        poprawna: "B",
        obraz: "449.jpg"
    },
    {
        id: 450,
        pytanie: "W języku HTML zdefiniowano hiperłącze ze znakiem #. Co stanie się po wybraniu przedstawionego odsyłacza?",
        odpowiedzi: [
            "Zostanie wywołany skrypt o nazwie dane",
            "Otworzy się osobna karta przeglądarki o nazwie dane",
            "Zostanie wybrany adres względny URL o nazwie dane",
            "Strona przewinie się do elementu o wartości id równej dane"
        ],
        poprawna: "D",
        obraz: "450.jpg"
    },
    {
        id: 451,
        pytanie: "Podana definicja stylu CSS sprawi, że nagłówki pierwszego stopnia będą",
        odpowiedzi: [
            "wyjustowane, pisane wielkimi literami, a odstępy między liniami będą ustawione na 10 px",
            "wyjustowane, pisane małymi literami, a odstępy między literami będą ustawione na 10 px",
            "wyśrodkowane, pisane małymi literami, a odstępy między liniami będą ustawione na 10 px",
            "wyśrodkowane, pisane wielkimi literami, a odstępy między literami będą ustawione na 10 px"
        ],
        poprawna: "D",
        obraz: "451.jpg"
    },
    {
        id: 452,
        pytanie: "Jak zdefiniować w języku CSS formatowanie hiperłącza, żeby nieodwiedzony link był w kolorze żółtym, a odwiedzony w kolorze zielonym?",
        odpowiedzi: [
            "a:visited {color: yellow;} a:link{color: green;}",
            "a:hover {color: green;} a:link{color: yellow;}",
            "a:hover {color: yellow;} a:visited{color: green;}",
            "a:link {color: yellow;} a:visited{color: green;}"
        ],
        poprawna: "D"
    },
    {
        id: 453,
        pytanie: "W języku CSS zdefiniowano formatowanie dla stopki. Aby użyć tego formatowania dla bloku opisanego znacznikiem div #stopka{...}, należy zapisać",
        odpowiedzi: [
            "<div \"stopka\">",
            "<div id=\"stopka\">",
            "<div title=\"stopka\">",
            "<div class=\"stopka\">"
        ],
        poprawna: "B"
    },
    {
        id: 454,
        pytanie: "Przedstawiono efekt formatowania CSS oraz kod HTML. Jak należy zdefiniować styl, aby osiągnąć takie formatowanie?",
        odpowiedzi: [
            ".first-line {font-size: 200%; color:brown;}",
            "#first-line {font-size: 200%; color:brown;}",
            "p::first-line {font-size: 200%; color:brown;}",
            "p.first-line {font-size: 200%; color:brown;}"
        ],
        poprawna: "C",
        obraz: "454.jpg"
    },
    {
        id: 455,
        pytanie: "Przedstawione formatowanie CSS sprawi, że dla prezentowanego nagłówka trzeciego stopnia",
        odpowiedzi: [
            "tło będzie szare",
            "tło będzie pomarańczowe",
            "kolor czcionki będzie szary",
            "kolor czcionki będzie pomarańczowy"
        ],
        poprawna: "B",
        obraz: "455.jpg"
    },
    {
        id: 456,
        pytanie: "W języku XHTML zapisano fragment kodu, który zawiera błąd walidacji. Na czym polega ten błąd?",
        odpowiedzi: [
            "Znacznik <br> powinien być zamknięty",
            "Nie istnieje nagłówek szóstego stopnia",
            "Znaczniki należy pisać wielkimi literami",
            "Znacznik <b> nie może być zagnieżdżany w znaczniku"
        ],
        poprawna: "A",
        obraz: "456.jpg"
    },
    {
        id: 457,
        pytanie: "Kolor zapisany kodem heksadecymalnym: #1510FE w kodzie RGB będzie miał wartość",
        odpowiedzi: [
            "rgb(15,10,FE)",
            "rgb(21,16,FE)",
            "rgb(21,16,254)",
            "rgb(21,16,255)"
        ],
        poprawna: "C"
    },
    {
        id: 458,
        pytanie: "Edytując grafikę w edytorze grafiki rastrowej należy pozbyć się kolorów z rysunku tak, aby obraz był w odcieniach szarości. Można do tego efektu wykorzystać funkcję",
        odpowiedzi: [
            "desaturacji",
            "kadrowania",
            "szumu RGB",
            "filtru rozmycia"
        ],
        poprawna: "A"
    },
    {
        id: 459,
        pytanie: "W edytorze grafiki wektorowej stworzono przedstawiony kształt, który powstał z dwóch figur: trójkąta i koła. W celu stworzenia tego kształtu, po narysowaniu figur i odpowiednim ich ustawieniu, należy skorzystać z funkcji",
        odpowiedzi: [
            "sumy",
            "różnicy",
            "rozdzielenia",
            "wykluczenia"
        ],
        poprawna: "A",
        obraz: "459.jpg"
    },
    {
        id: 460,
        pytanie: "Aby zapisać prostą animację na potrzeby strony internetowej, można skorzystać z formatu",
        odpowiedzi: [
            "GIF",
            "JPG",
            "PNG",
            "CDR"
        ],
        poprawna: "A"
    },
    {
        id: 461,
        pytanie: "Tworząc tabelę w języku SQL, zdefiniowano dla kolumny klucz główny. Aby zabezpieczyć ją przed wstawieniem wartości pustej, należy zastosować atrybut",
        odpowiedzi: [
            "NULL",
            "UNIQUE",
            "DEFAULT",
            "NOT NULL"
        ],
        poprawna: "D"
    },
    {
        id: 462,
        pytanie: "Dana jest tabela mieszkania zawierająca kolumny o nazwach: adres, metraz, ile_pokoi, standard, status, cena. Wykonanie przedstawionej kwerendy SQL SELECT sprawi, że zostaną wyświetlone",
        odpowiedzi: [
            "Wszystkie dane tych mieszkań, które mają co najmniej 3 pokoje",
            "Metraż oraz cena tych mieszkań, które mają więcej niż 3 pokoje",
            "Metraż oraz cena tych mieszkań, które mają co najmniej niż 3 pokoje",
            "Wszystkie dane oprócz adresu tych mieszkań, które mają więcej niż 3 pokoje"
        ],
        poprawna: "B",
        obraz: "462.jpg"
    },
    {
        id: 463,
        pytanie: "Do tabeli pracownicy wpisano rekordy. Co zostanie wyświetlone po uruchomieniu kwerendy SQL SELECT podanej w ramce?",
        odpowiedzi: [
            "Wartość 5400, czyli najwyższa pensja pracownika.",
            "Wartość 19500, czyli suma wszystkich pensji pracowników.",
            "Wartość 10000, czyli suma pensji pracownika o id=4 oraz o id=6",
            "Dwie wartości: 4600 i 5400, jako pensje pracowników wyższe niż 4000"
        ],
        poprawna: "C",
        obraz: "463.jpg"
    },
    {
        id: 464,
        pytanie: "Na przedstawionej tabeli samochody wykonano zapytanie SQL: SELECT model FROM samochody WHERE rocznik=2016; W wyniku podanego zapytania zostaną zwrócone następujące wartości:",
        odpowiedzi: [
            "Fiat, Opel, Toyota",
            "Czerwony, grafitowy",
            "Punto, Corsa, Corolla",
            "Punto, Corsa, Astra, Corolla, Yaris"
        ],
        poprawna: "C",
        obraz: "464.jpg"
    },
    {
        id: 465,
        pytanie: "Baza danych ma dwie tabele połączone relacją 1..n. Którą klauzulą SQL należy połączyć tabele, aby wybrać korespondujące ze sobą wartości z pól obu tabel?",
        odpowiedzi: [
            "OUTER LINK",
            "INNER LINK",
            "JOIN",
            "AND"
        ],
        poprawna: "C"
    },
    {
        id: 466,
        pytanie: "Zdefiniowanie klucza obcego jest niezbędne do utworzenia",
        odpowiedzi: [
            "transakcji",
            "relacji 1..n",
            "relacji 1..1",
            "klucza podstawowego"
        ],
        poprawna: "B"
    },
    {
        id: 467,
        pytanie: "Zgodnie z właściwościami ACID, dotyczącym wykonania transakcji, wymaganie trwałości (ang. durability) oznacza, że",
        odpowiedzi: [
            "transakcja może być w pewnych warunkach podzielona na dwa niezależne etapy",
            "w czasie wykonania transakcji dane mogą być modyfikowane przez inne transakcje",
            "w przypadku naruszenia spójności bazy danych transakcja usuwa tabele z kluczami obcymi",
            "dane zatwierdzone przez transakcję powinny być dostępne niezależnie od tego, co się będzie działo po jej zakończeniu"
        ],
        poprawna: "D"
    },
    {
        id: 468,
        pytanie: "Baza danych zawiera tabelę faktury o polach: numer, data, id_klienta, wartość, status. Każdego dnia generowany jest raport faktur z bieżącego dnia. Wyświetlane są jedynie numery i wartości faktur. Która z kwerend SQL służy do stworzenia tego raportu?",
        odpowiedzi: [
            "SELECT * FROM faktury;",
            "SELECT numer,wartość FROM faktury;",
            "SELECT * FROM faktury WHERE data=CURRENT_DATE();",
            "SELECT numer, wartosc FROM faktury WHERE data=CURRENT_DATE();"
        ],
        poprawna: "D"
    },
    {
        id: 469,
        pytanie: "Polecenie SQL, które usuwa bazę danych o nazwie firma, ma postać",
        odpowiedzi: [
            "DROP firma;",
            "ALTER firma DROP;",
            "DROP DATABASE firma;",
            "ALTER firma DROP DATABASE;"
        ],
        poprawna: "C"
    },
    {
        id: 470,
        pytanie: "Zastosowanie kwerendy SQL: DELETE FROM mieszkania WHERE status=1; spowoduje usunięcie",
        odpowiedzi: [
            "tabeli mieszkania z bazy danych",
            "pola o nazwie status z tabeli mieszkania",
            "rekordów, w których pole status jest równe 1, z tabeli mieszkania",
            "tabel, w których pole status jest równe 1, z bazy danych mieszkania"
        ],
        poprawna: "C"
    },
    {
        id: 471,
        pytanie: "Aby przywrócić bazę danych z kopii bezpieczeństwa na serwerze MSSQL, należy posłużyć się poleceniem",
        odpowiedzi: [
            "EXPORT DATABASE",
            "BACKUP DATABASE",
            "RESTORE DATABASE",
            "UNBACKUP DATABASE"
        ],
        poprawna: "C"
    },
    {
        id: 472,
        pytanie: "W języku SQL wykonano przedstawione w ramce polecenia GRANT. Kto będzie miał prawo do przeglądania danych oraz ich zmiany?",
        odpowiedzi: [
            "Adam i Anna",
            "Tylko Tomasz",
            "Tomasz i Anna",
            "Tomasz i Adam"
        ],
        poprawna: "B",
        obraz: "472.jpg"
    },
    {
        id: 473,
        pytanie: "W języku PHP zastosowano funkcję is_int(). Które z podanych wywołań tej funkcji zwróci wartość TRUE?",
        odpowiedzi: [
            "is_int(\"135\")",
            "is_int(NULL)",
            "is_int(13.5)",
            "is_int(135)"
        ],
        poprawna: "D"
    },
    {
        id: 474,
        pytanie: "W języku JavaScript należy zapisać warunek, który będzie spełniony, gdy zmienna a będzie dowolną liczbą naturalną dodatnią (bez 0) lub gdy zmienna b będzie dowolną liczbą z przedziału domkniętego od 10 do 100. Użyte w tym warunku wyrażenie logiczne będzie miało postać",
        odpowiedzi: [
            "(a>0) || ((b>=10) || (b<=100))",
            "(a>0) && ((b>=10) || (b<=100))",
            "(a>0) || ((b>=10) && (b<=100))",
            "(a>0) && ((b>=10) && (b<=100))"
        ],
        poprawna: "C"
    },
    {
        id: 475,
        pytanie: "Dana jest tabela firmy zawierająca następujące kolumny: nazwa, adres, NIP, obrot (obrót w ostatnim miesiącu), rozliczenie, status. Wykonanie kwerendy SQL SELECT sprawi, że zostaną wyświetlone",
        odpowiedzi: [
            "wszystkie dane firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł",
            "wszystkie dane firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł",
            "jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł",
            "jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł"
        ],
        poprawna: "D",
        obraz: "475.jpg"
    },
    {
        id: 476,
        pytanie: "W języku JavaScript wynik działania instrukcji zmienna++; będzie taki sam jak instrukcji",
        odpowiedzi: [
            "zmienna--;",
            "zmienna+=1;",
            "zmienna=zmienna+10;",
            "zmienna===zmienna+1;"
        ],
        poprawna: "B"
    },
    {
        id: 477,
        pytanie: "W języku PHP zmienna predefiniowana $_SESSION zawiera",
        odpowiedzi: [
            "zmienne zarejestrowane w bieżącej sesji",
            "spis zarejestrowanych sesji na serwerze WWW",
            "zmienne przesyłane do skryptu za pomocą formularza",
            "zmienne przesyłane do skryptu za pomocą ciastek (cookie)"
        ],
        poprawna: "A"
    },
    {
        id: 478,
        pytanie: "Przedstawiony kod źródłowy ma za zadanie wyświetlić",
        odpowiedzi: [
            "wylosowane liczby od 1 do 99",
            "kolejne liczby od 1 do 100",
            "wczytane z klawiatury liczby tak długo, aż nie zostanie wczytana wartość 0",
            "losowe liczby od 0 do 100 tak długo, aż nie zostanie wylosowana wartość 0"
        ],
        poprawna: "D",
        obraz: "478.jpg"
    },
    {
        id: 479,
        pytanie: "W języku JavaScript należy odwołać się do elementu zawartego w pierwszym paragrafie przedstawionego fragmentu strony HTML. Można to wykonać za pomocą funkcji",
        odpowiedzi: [
            "getElement(\"p\");",
            "getElementById(\"p1\");",
            "getElementByTagName(\"p\")[0];",
            "getElementByClassName(\"p.1\")[0];"
        ],
        poprawna: "C",
        obraz: "479.jpg"
    },
    {
        id: 480,
        pytanie: "O przedstawionym obiekcie języka JavaScript można powiedzieć, że ma",
        odpowiedzi: [
            "trzy metody",
            "trzy właściwości",
            "dwie metody i jedną właściwość",
            "dwie właściwości i jedną metodę"
        ],
        poprawna: "D",
        obraz: "480.jpg"
    },
    {
        id: 481,
        pytanie: "W języku JavaScript stworzono funkcję o nazwie liczba_max porównującą trzy liczby naturalne pobrane z parametrów funkcji i zwracającą maksymalną z nich. Prawidłowe wywołanie takiej funkcji wraz z pobraniem jej wyniku będzie miało postać",
        odpowiedzi: [
            "liczba_max(a,b,c);",
            "liczba_max(a,b,c,wynik);",
            "liczba_max(a,b,c)=wynik;",
            "var wynik=liczba_max(a,b,c);"
        ],
        poprawna: "D"
    },
    {
        id: 482,
        pytanie: "Które z zadań programistycznych powinno być wykonane po stronie serwera?",
        odpowiedzi: [
            "Zmiana stylu HTML na stronie wywołana przesunięciem kursora",
            "Zapisanie danych pobranych z aplikacji internetowej w bazie danych",
            "Sprawdzenie danych wpisanych do pola tekstowego w czasie rzeczywistym",
            "Ukrywanie i pokazywanie elementów strony w zależności od aktualnego stanu kursora"
        ],
        poprawna: "B"
    },
    {
        id: 483,
        pytanie: "Język JavaScrypt ma obsługę",
        odpowiedzi: [
            "obiektów DOM",
            "funkcji wirtualnych",
            "klas abstrakcyjnych",
            "wysyłania ciastek z tą samą informacją do wielu klientów strony"
        ],
        poprawna: "A"
    },
    {
        id: 484,
        pytanie: "W prezentowanym kodzie PHP w miejscu kropek powinno znaleźć się polecenie",
        odpowiedzi: [
            "mysqli_fetch_row($zapytanie);",
            "mysqli_free_result($zapytanie);",
            "mysqli_num_fields($zapytanie);",
            "mysqli_query($zapytanie);"
        ],
        poprawna: "A",
        obraz: "484.jpg"
    },
    {
        id: 485,
        pytanie: "Który z elementów dokumentacji aplikacji powinien znaleźć się w dokumentacji użytkownika?",
        odpowiedzi: [
            "Opis kodu źródłowego",
            "Opis obsługi funkcji systemu",
            "Opis wykorzystanej technologii i bibliotek",
            "Opis algorytmów zastosowanych w kodzie"
        ],
        poprawna: "B"
    },
    {
        id: 486,
        pytanie: "Znacznik <s> w języku HTML powoduje",
        odpowiedzi: [
            "migotanie tekstu",
            "pochylenie tekstu",
            "podkreślenie tekstu",
            "przekreślenie tekstu"
        ],
        poprawna: "D"
    },
    {
        id: 487,
        pytanie: "Metainformacja \"Description\" zawarta w pliku źródłowym HTML powinna zawierać",
        odpowiedzi: [
            "opis, co znajduje się na stronie",
            "informację, kto jest autorem strony",
            "wykazy kluczowe, z których korzystają wyszukiwarki sieciowe",
            "nazwę programu, przy użyciu którego została stworzona strona"
        ],
        poprawna: "A",
        obraz: "487.jpg"
    },
    {
        id: 488,
        pytanie: "Który opis odnosi się do metody POST wysyłania formularza?",
        odpowiedzi: [
            "Może być zapisana jako zakładka w przeglądarce internetowej",
            "Dane przesyłane są za pomocą adresu URL, czyli w sposób widoczny dla użytkownika",
            "Posiada dodatkowe ograniczenia jakim jest długość adresu - maksymalnie 255 znaków",
            "Jest wskazana, gdy przesyłane są informacje poufne, np. hasło, numer telefonu czy numer karty kredytowej"
        ],
        poprawna: "D"
    },
    {
        id: 489,
        pytanie: "Atrybut value w polu formularza XHTML",
        odpowiedzi: [
            "ogranicza długość pola",
            "wskazuje na nazwę pola",
            "ustawia pole tylko do odczytu",
            "wskazuje odpowiedź domyślną"
        ],
        poprawna: "D",
        obraz: "489.jpg"
    },
    {
        id: 490,
        pytanie: "W języku HTML zapis &lt; spowoduje wyświetlenie w przeglądarce znaku",
        odpowiedzi: [
            ">",
            "&",
            "\"",
            "<"
        ],
        poprawna: "D"
    },
    {
        id: 491,
        pytanie: "Przy użyciu jakiego znacznika HTML otrzymamy tekst napisany czcionką o stałej szerokości znaku, który uwzględnia dodatkowe spacje, tabulacje i znaki końca linii?",
        odpowiedzi: [
            "<ins> ... </ins>",
            "<pre> ... </pre>",
            "<code> ... </code>",
            "<blockquote> ... </blockquote>"
        ],
        poprawna: "B"
    },
    {
        id: 492,
        pytanie: "W celu uzyskania efektu widocznego na rysunku, w kodzie HTML, należy umieścić znacznik skrótu <abbr> z atrybutem",
        odpowiedzi: [
            "alt",
            "dfn",
            "title",
            "name"
        ],
        poprawna: "C",
        obraz: "492.jpg"
    },
    {
        id: 493,
        pytanie: "W HTML, aby wstawić obrazek z tekstem przyległym, znajdującym się pośrodku obrazka, należy zapisać znacznik",
        odpowiedzi: [
            "<img src=\"/obrazek.png\" alt=\"obraz1\" hspace=\"30px\"> tekst",
            "<img src=\"/obrazek.png\" alt=\"obraz2\" align=\"middle\"> tekst",
            "<img src=\"/obrazek.png\" alt=\"obraz3\" height=\"50%\"> tekst",
            "<img src=\"/obrazek.png\" alt=\"obraz4\"> tekst"
        ],
        poprawna: "B"
    },
    {
        id: 494,
        pytanie: "Który styl CSS pozwoli zdefiniować wyrównanie tekstu do prawej strony?",
        odpowiedzi: [
            "<p style=\"font: right\">tekst</p>",
            "<p style=\"align: right\">tekst</p>",
            "<p style=\"position: right\">tekst</p>",
            "<p style=\"text-align: right\">tekst</p>"
        ],
        poprawna: "D"
    },
    {
        id: 495,
        pytanie: "Przedstawiono kod tabeli 3x2. Której z modyfikacji w jej drugim wierszu należy dokonać, aby tabela wyglądała jak na obrazku z niewidocznym wierszem?",
        odpowiedzi: [
            "<tr style=\"clear: none\">",
            "<tr style=\"display: none\">",
            "<tr style=\"visibility: hidden\">",
            "<tr style=\"display: table-cell\">"
        ],
        poprawna: "C",
        obraz: "495.jpg"
    },
    {
        id: 496,
        pytanie: "Który zapis znacznika <div> może wystąpić w dokumencie HTML tylko jeden raz, a ponowne użycie tego zapisu spowoduje wygenerowanie błędów podczas walidacji dokumentu?",
        odpowiedzi: [
            "<div class=\"klasa1 klasa2\">",
            "<div id=\"identyfikator\">",
            "<div class=\"klasa\">",
            "<div>"
        ],
        poprawna: "B"
    },
    {
        id: 497,
        pytanie: "Przedstawiona linia kreskowana w stylu obramowania CSS jest określona właściwością",
        odpowiedzi: [
            "solid",
            "double",
            "dotted",
            "dashed"
        ],
        poprawna: "D",
        obraz: "497.jpg"
    },
    {
        id: 498,
        pytanie: "Systemem zarządzania treścią pozwalającym na łatwe utworzenie i aktualizację serwisu WWW jest",
        odpowiedzi: [
            "CMS",
            "SQL",
            "PHP",
            "CSS"
        ],
        poprawna: "A"
    },
    {
        id: 499,
        pytanie: "W podanym kodzie HTML przedstawiony styl CSS jest stylem",
        odpowiedzi: [
            "nagłówkowym",
            "dynamicznym",
            "zewnętrznym",
            "lokalnym"
        ],
        poprawna: "D",
        obraz: "499.jpg"
    },
    {
        id: 500,
        pytanie: "Kolor zapisany w notacji heksadecymalnej #0000FF to",
        odpowiedzi: [
            "czarny",
            "zielony",
            "niebieski",
            "czerwony"
        ],
        poprawna: "C"
    },
    {
        id: 501,
        pytanie: "Które stwierdzenie odnosi się do skalowania obrazu?",
        odpowiedzi: [
            "Łączy lub odejmuje kształty",
            "Polega na zmianie sposobu zapisu obrazu tak, aby zmienić sposób kompresji",
            "Powoduje zmianę rozmiaru obrazu bez zmieniania ważnej zawartości wizualnej",
            "Powoduje wycięcie z oryginalnego obrazu określonego jego fragmentu z celu uzyskania optymalnego widoku"
        ],
        poprawna: "C"
    },
    {
        id: 502,
        pytanie: "W języku HTML atrybutem znacznika video, który włącza tryb odtwarzania w kółko, jest",
        odpowiedzi: [
            "loop",
            "muted",
            "poster",
            "controls"
        ],
        poprawna: "A"
    },
    {
        id: 503,
        pytanie: "W języku HTML, aby dodać animację FLASH (z rozszerzeniem .swf) na stronę internetową, należy użyć znacznika",
        odpowiedzi: [
            "<img>",
            "<audio>",
            "<video>",
            "<object>"
        ],
        poprawna: "D"
    },
    {
        id: 504,
        pytanie: "Formatem plików dźwiękowych z kompresją bezstratną jest",
        odpowiedzi: [
            "MP3",
            "WAW",
            "FLAC",
            "MPEG"
        ],
        poprawna: "C"
    },
    {
        id: 505,
        pytanie: "Na tabeli muzyka, przedstawionej na rysunku, zostało wykonane następujące zapytanie SQL. Jaki wynik zwróci ta kwerenda?",
        odpowiedzi: [
            "Czesław",
            "pusty wynik",
            "Czesław, Niemen",
            "Czesław, Czechowski"
        ],
        poprawna: "B",
        obraz: "505.jpg"
    },
    {
        id: 506,
        pytanie: "Jaki wynik zwróci zapytanie z ramki wykonane na przedstawionej tabeli?",
        odpowiedzi: [
            "0",
            "1",
            "3",
            "4"
        ],
        poprawna: "C",
        obraz: "506.jpg"
    },
    {
        id: 507,
        pytanie: "W relacyjnym modelu baz danych krotkami nazywa się",
        odpowiedzi: [
            "liczbę rekordów tabeli",
            "wszystkie wiersze tabeli wraz z wierszem nagłówkowym",
            "wszystkie kolumny tabeli, które zawierają atrybuty obiektu",
            "wiersze tabeli z wyjątkiem wiersza nagłówkowego, w którym umieszcza się nazwy kolumn"
        ],
        poprawna: "D"
    },
    {
        id: 508,
        pytanie: "Co można powiedzieć o normalizacji przedstawionej tabeli?",
        odpowiedzi: [
            "Tabela nie jest znormalizowana",
            "Tabela jest w trzeciej postaci normalnej",
            "Tabela jest w drugiej postaci normalnej",
            "Tabela jest w pierwszej postaci normalnej"
        ],
        poprawna: "A",
        obraz: "508.jpg"
    },
    {
        id: 509,
        pytanie: "Które zapytanie SQL dla tabeli pracownicy utworzonej według schematu: id, imie, nazwisko, plec, zarobek, obliczy osobno średni zarobek kobiet i średni zarobek mężczyzn?",
        odpowiedzi: [
            "SELECT AVG(zarobek) FROM pracownicy GROUP BY plec;",
            "SELECT AVG(zarobek) FROM pracownicy AS sredni_zarobek;",
            "SELECT AVG(zarobek) FROM pracownicy WHERE plec='k' AND plec='m';",
            "SELECT AVG(zarobek) FROM pracownicy GROUP BY plec HAVING plec='k' AND plec='m';"
        ],
        poprawna: "A"
    },
    {
        id: 510,
        pytanie: "Które polecenie SQL zamieni w tabeli tab w kolumnie kol wartość Ania na Zosia?",
        odpowiedzi: [
            "UPDATE tab SET kol='Zosia' WHERE kol='Ania';",
            "UPDATE tab SET kol='Ania' WHERE kol='Zosia';",
            "ALTER TABLE tab CHANGE kol='Zosia' kol='Ania';",
            "ALTER TABLE tab CHANGE kol='Ania' kol='Zosia';"
        ],
        poprawna: "A"
    },
    {
        id: 511,
        pytanie: "Aby w tworzonej w języku SQL tabeli praca dodać w kolumnie stawka warunek, że musi przyjmować rzeczywiste wartości dodatnie mniejsze od 50, należy użyć zapisu",
        odpowiedzi: [
            "... stawka float CHECK(stawka IN (0, 50.00))",
            "... stawka float CHECK(stawka>0 OR stawka<50.00)",
            "... stawka float CHECK(stawka>0 AND stawka<50.00)",
            "... stawka float CHECK(stawka BETWEEN 0 AND 50.00)"
        ],
        poprawna: "C"
    },
    {
        id: 512,
        pytanie: "W jaki sposób wykonanie podanej w ramce kwerendy SQL wpłynie na tabelę pracownicy?",
        odpowiedzi: [
            "Zmieni typ danych kolumny plec na znakowy o stałej długości 9",
            "Doda kolumnę plec ze znakowym typem danych o stałej długości 9",
            "Zmieni typ danych kolumny plec na znakowy o zmiennej długości 9",
            "Doda kolumnę plec ze znakowym typem danych o zmiennej długości 9"
        ],
        poprawna: "A",
        obraz: "512.jpg"
    },
    {
        id: 513,
        pytanie: "Wykonując raport w systemie obsługi relacyjnych baz danych, umożliwia się",
        odpowiedzi: [
            "analizę wybranych danych",
            "usuwanie danych w tabelach",
            "dodawanie danych w tabelach",
            "aktualizowanie danych w tabelach"
        ],
        poprawna: "A"
    },
    {
        id: 514,
        pytanie: "Przedstawiona instrukcja JavaScript wyświetli",
        odpowiedzi: [
            "1",
            "0",
            "true",
            "false"
        ],
        poprawna: "D",
        obraz: "514.jpg"
    },
    {
        id: 515,
        pytanie: "Która wartość tekstowa nie pasuje do podanego w ramce wzorca wyrażenia regularnego?",
        odpowiedzi: [
            "Kowalski",
            "Kasprowicza",
            "Jelenia Góra",
            "Nowakowska-Kowalska"
        ],
        poprawna: "C",
        obraz: "515.jpg"
    },
    {
        id: 516,
        pytanie: "Który modyfikator wskazuje podany opis?",
        odpowiedzi: [
            "static",
            "public",
            "private",
            "protected"
        ],
        poprawna: "C",
        obraz: "516.jpg"
    },
    {
        id: 517,
        pytanie: "Tworzenie i przypisanie do zmiennej tablicy asocjacyjnej zrealizuje się w PHP zapisem",
        odpowiedzi: [
            "$tab = array (1, 2, 3, 4);",
            "$tab = array (array (1, 2), array (3, 4));",
            "$tab = array (); $tab[] = array (1, 2, 3, 4);",
            "$tab = array (\"a\" => 1, \"b\" => 2, \"c\" => 3);"
        ],
        poprawna: "D"
    },
    {
        id: 518,
        pytanie: "W której technologii nie jest możliwe przetwarzanie danych użytkownika wprowadzanych na stronie WWW?",
        odpowiedzi: [
            "CSS",
            "PHP",
            "AJAX",
            "JavaScript"
        ],
        poprawna: "A"
    },
    {
        id: 519,
        pytanie: "W programowaniu obiektowym w języku JavaScript użyty w przedstawionym kodzie zapis: this.zawod oznacza",
        odpowiedzi: [
            "klasę",
            "metodę",
            "konstruktor",
            "właściwość"
        ],
        poprawna: "B",
        obraz: "519.jpg"
    },
    {
        id: 520,
        pytanie: "W języku PHP sumę logiczną oznacza operator",
        odpowiedzi: [
            "!",
            "||",
            "+",
            "&&"
        ],
        poprawna: "B"
    },
    {
        id: 521,
        pytanie: "W jakim formacie będzie wyświetlana data po uruchomieniu przedstawionego kodu?",
        odpowiedzi: [
            "Monday, 10 July 2017",
            "10, Monday July 2017",
            "Monday, 10th July 17",
            "Monday, 10th July 2017"
        ],
        poprawna: "D",
        obraz: "521.jpg"
    },
    {
        id: 522,
        pytanie: "Wynikiem działania pętli for w przedstawionym kodzie PHP jest wyświetlenie liczb",
        odpowiedzi: [
            "1 0",
            "1 1",
            "1 0 1",
            "1 0 1 0"
        ],
        poprawna: "B",
        obraz: "522.jpg"
    },
    {
        id: 523,
        pytanie: "W JavaScript wywołanie zdarzenia onKeydown nastąpi wtedy, gdy klawisz",
        odpowiedzi: [
            "myszki został naciśnięty",
            "myszki został zwolniony",
            "klawiatury został naciśnięty",
            "klawiatury został zwolniony"
        ],
        poprawna: "C"
    },
    {
        id: 524,
        pytanie: "Po wykonaniu przedstawionego kodu JavaScript wyświetli się wartość",
        odpowiedzi: [
            "11",
            "12",
            "13",
            "14"
        ],
        poprawna: "C",
        obraz: "524.jpg"
    },
    {
        id: 525,
        pytanie: "Wciśnięcie przycisku o treści \"niebieski\" spowoduje wykonanie przedstawionego kodu JavaScript. Jaki będzie efekt jego działania?",
        odpowiedzi: [
            "Zmiana koloru przycisku na niebieski",
            "Zmiana koloru tekstu \"i skrypt\" na niebieski",
            "Zmiana koloru tekstu \"Przykładowy tekst\" na niebieski",
            "Zmiana koloru tekstu \"Przykładowy tekst i skrypt\" na niebieski"
        ],
        poprawna: "C",
        obraz: "525.jpg"
    },
    {
        id: 526,
        pytanie: "Którego znacznika nie należy umieszczać w nagłówku dokumentu HTML?",
        odpowiedzi: [
            "<h2>",
            "<link>",
            "<title>",
            "<meta>"
        ],
        poprawna: "A"
    },
    {
        id: 527,
        pytanie: "Znacznik języka HTML, który służy do oznaczenia fragmentu tekstu jako kodu komputerowego, to",
        odpowiedzi: [
            "<em> </em>",
            "<span> </span>",
            "<code> </code>",
            "<blockquote> </blockquote>"
        ],
        poprawna: "C"
    },
    {
        id: 528,
        pytanie: "W języku HTML dla hiperłącza wartość atrybutu target, która odpowiada za załadowanie strony do nowego okna lub karty, to",
        odpowiedzi: [
            "_parent",
            "_blank",
            "_self",
            "_top"
        ],
        poprawna: "B"
    },
    {
        id: 529,
        pytanie: "Znacznik <ins> w języku HTML służy do oznaczenia",
        odpowiedzi: [
            "cytowanego bloku tekstu.",
            "tekstu przeformatowanego.",
            "tekstu, który został dodany.",
            "tekstu, który został usunięty."
        ],
        poprawna: "C"
    },
    {
        id: 530,
        pytanie: "Do określenia listy definicji w kodzie HTML używa się znacznika",
        odpowiedzi: [
            "<dl>",
            "<td>",
            "<abbr>",
            "<label>"
        ],
        poprawna: "A"
    },
    {
        id: 531,
        pytanie: "Jaki rezultat zostanie wyświetlony po wykonaniu przedstawionego kodu HTML?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "531.jpg"
    },
    {
        id: 532,
        pytanie: "W języku HTML, aby scalić w pionie dwie sąsiednie komórki w kolumnie tabeli, należy zastosować atrybut",
        odpowiedzi: [
            "colspan",
            "rowspan",
            "cellpadding",
            "cellspacing"
        ],
        poprawna: "B"
    },
    {
        id: 533,
        pytanie: "Chcąc dodać do listy rozwijalnej przedstawionego formularza HTML możliwość zaznaczenia kilku opcji jednocześnie, należy w znaczniku select dodać atrybut",
        odpowiedzi: [
            "size",
            "value",
            "multiple",
            "disabled"
        ],
        poprawna: "C",
        obraz: "533.jpg"
    },
    {
        id: 534,
        pytanie: "Jak nazywa się metoda dołączania arkusza stylów do dokumentu HTML użyta w przedstawionym kodzie?",
        odpowiedzi: [
            "Styl zewnętrzny.",
            "Styl wewnętrzny.",
            "Styl wpisany, lokalny.",
            "Styl alternatywny, zewnętrzny."
        ],
        poprawna: "C",
        obraz: "534.jpg"
    },
    {
        id: 535,
        pytanie: "Tekst paragrafu, wyśrodkowany w pionie, opisuje w CSS reguła",
        odpowiedzi: [
            "vertical-align: middle",
            "vertical-align: center",
            "text-align: center",
            "align: middle"
        ],
        poprawna: "A"
    },
    {
        id: 536,
        pytanie: "Dla akapitu zdefiniowano styl CSS. Które właściwości stylu CSS poprawnie opisują dla akapitu krój czcionki: Arial; rozmiar czcionki: 16 pt; styl czcionki: pochylenie?",
        odpowiedzi: [
            "p{font-style: Arial; size: 16px; font-weight: normal;}",
            "p{font-family: Arial; font-size: 16pt; font-style: italic;}",
            "p{font-style: Arial; font-size: 16pt; font-variant: normal;}",
            "p{font-family: Arial; font-size: 16px; font-variant: normal;}"
        ],
        poprawna: "B"
    },
    {
        id: 537,
        pytanie: "W stylach CSS, aby ustalić styl linii obramowania jako linię kreskową, należy zastosować wartość",
        odpowiedzi: [
            "solid",
            "dotted",
            "dashed",
            "groove"
        ],
        poprawna: "C"
    },
    {
        id: 538,
        pytanie: "W CSS symbolem jednostki miary, wyrażonej w punktach edytorskich, jest",
        odpowiedzi: [
            "em",
            "px",
            "pt",
            "in"
        ],
        poprawna: "C"
    },
    {
        id: 539,
        pytanie: "Transformację w stylach CSS, polegającą na zamianie tylko pierwszych liter wszystkich wyrazów na wielkie, otrzymamy stosując polecenie",
        odpowiedzi: [
            "underline",
            "capitalize",
            "uppercase",
            "lowercase"
        ],
        poprawna: "B"
    },
    {
        id: 540,
        pytanie: "Podany styl tworzy obramowanie pojedyncze, o następujących cechach:",
        odpowiedzi: [
            "krawędź górna jest koloru czerwonego, krawędź prawa koloru niebieskiego, krawędź dolna koloru zielonego, krawędź lewa koloru żółtego.",
            "krawędź prawa jest koloru czerwonego, krawędź dolna koloru niebieskiego, krawędź lewa koloru zielonego, krawędź górna koloru żółtego.",
            "krawędź górna jest koloru czerwonego, krawędź lewa koloru niebieskiego, krawędź dolna koloru zielonego, krawędź prawa koloru żółtego.",
            "krawędź lewa jest koloru czerwonego, krawędź dolna koloru niebieskiego, krawędź prawa koloru zielonego, krawędź górna koloru żółtego."
        ],
        poprawna: "A",
        obraz: "540.jpg"
    },
    {
        id: 541,
        pytanie: "Która z operacji nie wpłynie na rozmiar / wielkość zajmowanej pamięci pliku graficznego?",
        odpowiedzi: [
            "Skalowanie obrazu za pomocą atrybutów HTML.",
            "Zmiana rozdzielczości obrazu.",
            "Interpolacja.",
            "Kompresja."
        ],
        poprawna: "A"
    },
    {
        id: 542,
        pytanie: "Bitmapa jest obrazem",
        odpowiedzi: [
            "rastrowym.",
            "analogowym.",
            "wektorowym.",
            "interakcyjnym."
        ],
        poprawna: "A"
    },
    {
        id: 543,
        pytanie: "Jednostka ppi (pixels per inch)",
        odpowiedzi: [
            "określa rozdzielczość obrazów rastrowych.",
            "określa rozdzielczości obrazów generowanych przez drukarki i plotery.",
            "jest parametrem określającym rozdzielczość cyfrowych urządzeń wykonujących pomiary.",
            "jest jednostką rozdzielczości skanerów określająca częstość wykonywanych próbkowań obrazu."
        ],
        poprawna: "A"
    },
    {
        id: 544,
        pytanie: "Jaką funkcję pełni kwerenda krzyżowa w bazie MS Access?",
        odpowiedzi: [
            "Modyfikuje istniejące dane w tabeli",
            "Usuwa rekordy tabel według podanych kryteriów.",
            "Dołącza do wybranej tabeli rekordy z innej tabeli.",
            "Prezentuje zliczone wartości z pola i przyporządkowuje je w wiersze i kolumny."
        ],
        poprawna: "D"
    },
    {
        id: 545,
        pytanie: "Funkcja CONCAT() w języku SQL odpowiada za",
        odpowiedzi: [
            "usunięcie wskazanego tekstu.",
            "łączenie wyświetlanego tekstu.",
            "przycięcie wyświetlanego tekstu.",
            "wyznaczenie z wejściowego tekstu podłańcucha znaków."
        ],
        poprawna: "B"
    },
    {
        id: 546,
        pytanie: "Na podstawie tabeli Towar wykonano następujące zapytanie SQL: Jaki będzie wynik tej operacji?",
        odpowiedzi: [
            "Zeszyt A5 w linie, Zeszyt A5, Kredki 24 kolory, Papier ksero A4",
            "Zeszyt A5, Zeszyt A5 w linie, Kredki 24 kolory, Papier ksero A4",
            "Papier ksero A4, Kredki 24 kolory, Zeszyt A5, Zeszyt A5 w linie",
            "Papier ksero A4, Kredki 24 kolory, Zeszyt A5, Zeszyt A5 w linie\nPapier ksero A4, Kredki 24 kolory, Zeszyt A5 w linie, Zeszyt A5"
        ],
        poprawna: "C",
        obraz: "546.jpg"
    },
    {
        id: 547,
        pytanie: "W tabeli produkt znajdują się przedmioty wyprodukowane po 2000 roku, z polami nazwa i rok_produkcji. Klauzula SQL wyświetli listę przedmiotów wyprodukowanych",
        odpowiedzi: [
            "w roku 2017.",
            "po roku 2017.",
            "przed rokiem 2017.",
            "w latach innych niż 2017."
        ],
        poprawna: "A",
        obraz: "547.jpg"
    },
    {
        id: 548,
        pytanie: "Struktura prostych baz danych, w których wszystkie dane są przechowywane w jednej tabeli, nazywana jest modelem",
        odpowiedzi: [
            "sieciowym",
            "relacyjnym.",
            "jednorodnym.",
            "hierarchicznym."
        ],
        poprawna: "C"
    },
    {
        id: 549,
        pytanie: "W przedstawionym diagramie bazy danych biblioteka, elementy: czytelnik, wypozyczenie i ksiazka są",
        odpowiedzi: [
            "atrybutami.",
            "krotkami.",
            "encjami.",
            "polami."
        ],
        poprawna: "C",
        obraz: "549.jpg"
    },
    {
        id: 550,
        pytanie: "W języku zapytań SQL, aby dodać do tabeli Towar kolumnę rozmiar typu znakowego o maksymalnej długości 20 znaków, należy wykonać polecenie",
        odpowiedzi: [
            "ALTER TABLE Towar ADD rozmiar varchar(20);",
            "ALTER TABLE Towar DROP COLUMN rozmiar varchar(20);",
            "ALTER TABLE Towar ALTER COLUMN rozmiar varchar(20);",
            "ALTER TABLE Towar CREATE COLUMN rozmiar varchar(20);"
        ],
        poprawna: "A"
    },
    {
        id: 551,
        pytanie: "Liczba 0x142, zapisana w kodzie skryptu JavaScript, ma postać",
        odpowiedzi: [
            "dziesiętną.",
            "dwójkową.",
            "ósemkową.",
            "szesnastkową."
        ],
        poprawna: "D"
    },
    {
        id: 552,
        pytanie: "W aplikacjach internetowych tablice asocjacyjne to tablice, w których",
        odpowiedzi: [
            "indeks jest łańcuchem tekstowym.",
            "istnieją przynajmniej dwa wymiary.",
            "elementy tablicy są zawsze indeksowane od 0.",
            "w każdej komórce tablicy przechowywana jest inna tablica."
        ],
        poprawna: "A"
    },
    {
        id: 553,
        pytanie: "Odwołaniem do imienia Agata, zawartym w przedstawionej tablicy JavaScript, jest element",
        odpowiedzi: [
            "Imiona[4];",
            "Imiona[3];",
            "Imiona[Agata];",
            "Imiona['Agata'];"
        ],
        poprawna: "B",
        obraz: "553.jpg"
    },
    {
        id: 554,
        pytanie: "Specjalna metoda danej klasy stosowana w programowaniu obiektowym, wywoływana automatycznie podczas tworzenia obiektu,której podstawowym zadaniem jest zwykle zainicjowanie pól, to",
        odpowiedzi: [
            "obiekt.",
            "destruktor.",
            "konstruktor.",
            "specyfikator dostępu."
        ],
        poprawna: "C"
    },
    {
        id: 555,
        pytanie: "Wskaż poprawny zapis instrukcji zapisanej w języku JavaScript.",
        odpowiedzi: [
            "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" + 3.14 );",
            "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" ; 3.14 );",
            "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" . 3.14 );",
            "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" 3.14 );"
        ],
        poprawna: "A"
    },
    {
        id: 556,
        pytanie: "W języku skryptowym JavaScript operatory: ||, && należą do grupy operatorów",
        odpowiedzi: [
            "bitowych.",
            "logicznych.",
            "przypisania.",
            "arytmetycznych."
        ],
        poprawna: "B"
    },
    {
        id: 557,
        pytanie: "Wskaż pętlę, która w języku JavaScript wyświetli sześć kolejnych liczb parzystych.",
        odpowiedzi: [
            "for(i=2;i<12;i+=2) {document.write(i);}",
            "for(i=2;i<=12;i+=2) {document.write(i);}",
            "for(i=2;i<12;i++) {i++; document.write(i);}",
            "for(i=2;i<=12;i++) {i=i+2; document.write(i);}"
        ],
        poprawna: "B"
    },
    {
        id: 558,
        pytanie: "Wybierz poprawną definicję funkcji w języku JavaScript.",
        odpowiedzi: [
            "nazwa_funkcji(argumenty) {instrukcje;}",
            "new nazwa_funkcji(argumenty) {instrukcje;}",
            "function nazwa_funkcji(argumenty) {instrukcje;}",
            "typ_funkcji nazwa_funkcji(argumenty) {instrukcje;}"
        ],
        poprawna: "C"
    },
    {
        id: 559,
        pytanie: "W języku PHP zapisywanie danych do pliku realizuje funkcja?",
        odpowiedzi: [
            "fgets()",
            "fputs()",
            "fopen()",
            "freadfile()"
        ],
        poprawna: "B"
    },
    {
        id: 560,
        pytanie: "Plikiem konfiguracyjnym, który pozwala na zdefiniowanie ustawień PHP dla całego serwera, jest",
        odpowiedzi: [
            "my.ini",
            "php.ini",
            "httpd.conf",
            "config.inc.php"
        ],
        poprawna: "B"
    },
    {
        id: 561,
        pytanie: "Efektem wykonania przedstawionego kodu PHP jest wyświetlenie komunikatu",
        odpowiedzi: [
            "warunek1",
            "warunek2",
            "warunek3",
            "warunek4"
        ],
        poprawna: "B",
        obraz: "561.jpg"
    },
    {
        id: 562,
        pytanie: "Ile razy zostanie wykonana pętla zapisana w przedstawionym skrypcie PHP?",
        odpowiedzi: [
            "0",
            "5",
            "6",
            "7"
        ],
        poprawna: "C",
        obraz: "562.jpg"
    },
    {
        id: 563,
        pytanie: "Jaką wartość zwróci funkcja empty($a); zapisana w języku PHP, gdy zmienna $a przyjmie wartość liczbową równą 0?",
        odpowiedzi: [
            "0",
            "TRUE",
            "NULL",
            "FALSE"
        ],
        poprawna: "B"
    },
    {
        id: 564,
        pytanie: "W języku JavaScript, funkcja matematyczna Math.pow() służy do wyznaczenia",
        odpowiedzi: [
            "potęgi liczby.",
            "wartości przybliżonej liczby.",
            "wartości bezwzględnej liczby.",
            "pierwiastka kwadratowego liczby."
        ],
        poprawna: "A"
    },
    {
        id: 565,
        pytanie: "Jakie wartości muszą przyjmować zmienne w funkcji biblioteki mysqli, aby połączyć się z serwerem i bazą danych?",
        odpowiedzi: [
            "adres serwera - $a, nazwa bazy danych - $b, login - $c, hasło - $d",
            "adres serwera - $c, nazwa bazy danych - $d, login - $a, hasło - $b",
            "adres serwera - $c, nazwa bazy danych - $d, login - $b, hasło - $a",
            "adres serwera - $a, nazwa bazy danych - $d, login - $b, hasło - $c"
        ],
        poprawna: "D",
        obraz: "565.jpg"
    },
    {
        id: 566,
        pytanie: "W którym z bloków należy umieścić warunek pętli?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "566.jpg"
    },
    {
        id: 567,
        pytanie: "Ile razy należy zapisać instrukcję warunkową, aby zaimplementować w języku programowania przedstawiony algorytm?",
        odpowiedzi: [
            "Jeden raz.",
            "Dwa razy.",
            "Trzy razy.",
            "Cztery razy."
        ],
        poprawna: "B",
        obraz: "567.jpg"
    },
    {
        id: 568,
        pytanie: "W języku C, aby zadeklarować stałą, należy użyć",
        odpowiedzi: [
            "const",
            "static",
            "#CONST",
            "#INCLUDE"
        ],
        poprawna: "A"
    },
    {
        id: 569,
        pytanie: "Które z wyrażeń logicznych zapisanych w języku C sprawdza, czy zmienna o nazwie zm1 należy do przedziału (6, 203> ?",
        odpowiedzi: [
            "(zm1 > 6) || (zm1 <= 203)",
            "(zm1 > 6) || (zm1 != 203)",
            "(zm1 > 6) && (zm1 <= 203)",
            "(zm1 > 6) && (zm1 != 203)"
        ],
        poprawna: "C"
    },
    {
        id: 570,
        pytanie: "Kwalifikatory dostępu: private, protected i public definiują mechanizm",
        odpowiedzi: [
            "przeładowania.",
            "polimorfizmu.",
            "hermetyzacji.",
            "rekurencji."
        ],
        poprawna: "C"
    },
    {
        id: 571,
        pytanie: "bool gotowe=true;\ncout << gotowe;\nCo zostanie wypisane w wyniku wykonania przedstawionych instrukcji?",
        odpowiedzi: [
            "0",
            "1",
            "tak",
            "nie"
        ],
        poprawna: "B"
    },
    {
        id: 572,
        pytanie: "Za pomocą którego słowa kluczowego deklaruje się zmienną w języku JavaScript?",
        odpowiedzi: [
            "var",
            "new",
            "variable",
            "instanceof"
        ],
        poprawna: "A"
    },
    {
        id: 573,
        pytanie: "Zadaniem przedstawionej pętli jest",
        odpowiedzi: [
            "wypełnienie tabeli Ksiazka danymi.",
            "wypisanie na ekranie danych tabeli Ksiazka.",
            "utworzenie dziesięciu obiektów typu Ksiazka.",
            "utworzenie jednego obiektu typu mojeKsiazki."
        ],
        poprawna: "C",
        obraz: "573.jpg"
    },
    {
        id: 574,
        pytanie: "Która z deklaracji funkcji w języku C++ ma parametr wejściowy typu rzeczywistego, a zwraca wartość całkowitą?",
        odpowiedzi: [
            "void fun1(int a);",
            "int fun1(float a);",
            "float fun1(int a);",
            "float fun1(void a);"
        ],
        poprawna: "B"
    },
    {
        id: 575,
        pytanie: "Jednym z wariantów testów jednostkowych jest analiza ścieżek, która polega na",
        odpowiedzi: [
            "testowaniu wartości brzegowych zbioru danych.",
            "testowaniu obiektów pod względem inicjacji i zwolnienia zarezerwowanej pamięci.",
            "określeniu punktu początkowego i końcowego oraz badaniu możliwych dróg pomiędzy tymi\npunktami.",
            "utworzeniu kilku zbiorów danych o podobnym sposobie przetwarzania i użyciu ich do\nprzeprowadzenia testu."
        ],
        poprawna: "C"
    },
    {
        id: 576,
        pytanie: "Który sposób komentowania w języku PHP pozwala na zapis bloku komentarza w kilku liniach?",
        odpowiedzi: [
            "#",
            "/ /",
            "/*   */",
            "<!--  -->"
        ],
        poprawna: "C"
    },
    {
        id: 577,
        pytanie: "Pole lub zbiór pól jednoznacznie identyfikujący każdy pojedynczy wiersz w tabeli w bazie danych to klucz",
        odpowiedzi: [
            "inkrementacyjny.",
            "podstawowy.",
            "przestawny.",
            "obcy."
        ],
        poprawna: "B"
    },
    {
        id: 578,
        pytanie: "W języku SQL, aby zmienić strukturę tabeli, np. poprzez dodanie lub usunięcie kolumny, należy zastosować polecenie",
        odpowiedzi: [
            "UPDATE",
            "TRUNCATE",
            "DROP TABLE",
            "ALTER TABLE"
        ],
        poprawna: "D"
    },
    {
        id: 579,
        pytanie: "Atrybut kolumny NOT NULL jest wymagany w przypadku",
        odpowiedzi: [
            "klucza podstawowego.",
            "użycia atrybutu DEFAULT.",
            "definicji wszystkich pól tabeli.",
            "definicji wszystkich pól typu numerycznego."
        ],
        poprawna: "A"
    },
    {
        id: 580,
        pytanie: "Aby za pomocą polecenia SELECT wyświetlić nazwiska osób mieszkających na osiedlu tak, aby te nazwiska nie powtarzały się, należy zapisać zapytanie w postaci",
        odpowiedzi: [
            "SELECT nazwisko FROM mieszkancy ORDER BY nazwisko;",
            "SELECT DISTINCT nazwisko FROM mieszkancy;",
            "SELECT TOP 10 nazwisko FROM mieszkancy;",
            "SELECT AVG(nazwisko) FROM mieszkancy;"
        ],
        poprawna: "B"
    },
    {
        id: 581,
        pytanie: "Baza danych zawiera dane multimedialne, co wiąże się z przechowywaniem dużych ilości danych binarnych. Do takich danych należy zastosować typ",
        odpowiedzi: [
            "BLOB",
            "ENUM",
            "DOUBLE",
            "LONGTEXT"
        ],
        poprawna: "A"
    },
    {
        id: 582,
        pytanie: "W tabeli Recepta pola Imie i Nazwisko dotyczą pacjenta, na którego recepta jest wydana. Którą kwerendę należy zastosować, aby dla wszystkich recept uzyskać datę wystawienia recepty oraz imię i nazwisko lekarza wystawiającego?",
        odpowiedzi: [
            "SELECT Imie, Nazwisko, DataWystawienia FROM Recepta;",
            "SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta;",
            "SELECT Imie, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;",
            "SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;"
        ],
        poprawna: "D",
        obraz: "582.jpg"
    },
    {
        id: 583,
        pytanie: "W bazach danych do prezentacji danych spełniających określone warunki należy utworzyć",
        odpowiedzi: [
            "raport.",
            "relację.",
            "formularz.",
            "makropolecenie."
        ],
        poprawna: "A"
    },
    {
        id: 584,
        pytanie: "Które polecenie służy do zmiany wartości o jeden w polu RokStudiów w tabeli Studenci dla studentów, którzy studiują na roku 1÷4?",
        odpowiedzi: [
            "UPDATE Studenci, RokStudiow+1 WHERE RokStudiow < 5;",
            "UPDATE Studenci SET RokStudiow WHERE RokStudiow < 5;",
            "UPDATE RokStudiow SET RokStudiow++ WHERE RokStudiow < 5;",
            "UPDATE Studenci SET RokStudiow = RokStudiow+1 WHERE RokStudiow\n< 5;"
        ],
        poprawna: "D"
    },
    {
        id: 585,
        pytanie: "Wskaż różnicę pomiędzy poleceniami DROP TABLE i TRUNCATE TABLE.",
        odpowiedzi: [
            "DROP TABLE usuwa tabelę, a TRUNCATE TABLE modyfikuje w niej dane spełniające\nwarunek.",
            "DROP TABLE usuwa tabelę, a TRUNCATE TABLE usuwa wszystkie dane, pozostawiając\npustą tabelę.",
            "Obydwa polecenia usuwają jedynie zawartość tabeli, ale tylko polecenie DROP TABLE może\nbyć cofnięte.",
            "Obydwa polecenia usuwają tabelę wraz zawartością, ale tylko polecenie TRUNCATE TABLE może być cofnięte."
        ],
        poprawna: "B"
    },
    {
        id: 586,
        pytanie: "Aby nadać użytkownikowi uprawnienia do tabel w bazie danych, należy zastosować polecenie",
        odpowiedzi: [
            "GRANT",
            "SELECT",
            "CREATE",
            "REVOKE"
        ],
        poprawna: "A"
    },
    {
        id: 587,
        pytanie: "Aby przesłać dane za pomocą funkcji mysqli_query() w skrypcie PHP, który wstawia do bazy danych dane pobrane z formularza ze strony internetowej, jako jednego z parametrów należy użyć kwerendy",
        odpowiedzi: [
            "INSERT INTO",
            "UPDATE",
            "SELECT",
            "ALTER"
        ],
        poprawna: "A"
    },
    {
        id: 588,
        pytanie: "Przedstawiony fragment kodu PHP działa poprawnie i ma za zadanie wyświetlić na stronie internetowej dane pobrane kwerendą z bazy danych. Z ilu pól zostaną wyświetlone dane?",
        odpowiedzi: [
            "Z jednego pola.",
            "Z dwóch pól.",
            "Z trzech pól.",
            "Z czterech pól."
        ],
        poprawna: "C",
        obraz: "588.jpg"
    },
    {
        id: 589,
        pytanie: "Na rysunku przedstawiono strukturę bloków strony internetowej. Który z fragmentów formatowania strony pasuje do takiego układu? (Dla uproszczenia pominięto właściwości koloru tła, wysokości i czcionki)",
        odpowiedzi: [
            "#pierwszy {float:left; width:30%; } \n#drugi {clear:both; width:70%; } \n#trzeci {float:left; width:70%; } \n#czwarty {clear:both; }",
            "#pierwszy {float:left; width:30%;} \n#drugi {float:left; width:70%;} \n#trzeci {float:left; width:70%;} \n#czwarty {clear:both; }",
            "#pierwszy { width: 30%; } \n#drugi { width: 70%; } \n#trzeci { width: 70%; } \n#czwarty { width: 100%; }",
            "#pierwszy{float:left; width:30%;} \n#drugi {clear:both; width:70%;} \n#trzeci {clear:both; width:70%;} \n#czwarty {float:left; width:100%;}"
        ],
        poprawna: "B",
        obraz: "589.jpg"
    },
    {
        id: 590,
        pytanie: "Wskaż nazwę Systemu Zarządzania Treścią, którego logo zostało przedstawione na rysunku.",
        odpowiedzi: [
            "Drupal",
            "Joomla!",
            "WordPress",
            "MediaWiki"
        ],
        poprawna: "B",
        obraz: "590.jpg"
    },
    {
        id: 591,
        pytanie: "Który kod języka HTML da efekt formatowania jak na przedstawionym rysunku?",
        odpowiedzi: [
            "<p> W tym <i> paragrafie zobaczysz sposoby formatowania </i> tekstu w HTML </p>",
            "<p> W tym <b> paragrafie <i> zobaczysz </i> sposoby formatowania </b> tekstu w HTML </p>",
            "<p> W tym <i> paragrafie <b> zobaczysz </b> sposoby formatowania </i> tekstu w HTML </p>",
            "<p> W tym <i> paragrafie </i> <b> zobaczysz </b> <i> sposoby formatowania </i> tekstu w HTML </p>"
        ],
        poprawna: "C",
        obraz: "591.jpg"
    },
    {
        id: 592,
        pytanie: "Który znacznik należy do znaczników definiujących listy w języku HTML?",
        odpowiedzi: [
            "<tr>",
            "<th>",
            "<td>",
            "<ul>"
        ],
        poprawna: "D"
    },
    {
        id: 593,
        pytanie: "Który z kodów HTML opisuje przedstawioną tabelę? (Dla uproszczenia pominięto zapis stylu obramowania tabeli i komórek)",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "593.jpg"
    },
    {
        id: 594,
        pytanie: "Przedstawione w języku CSS formatowanie czcionki będzie obowiązywać dla",
        odpowiedzi: [
            "znaczników o id równym *.",
            "znaczników z przypisaną klasą równą *.",
            "całego kodu HTML, niezależnie od późniejszych ustawień CSS.",
            "całego kodu HTML, jako formatowanie domyślne dla wszystkich elementów strony."
        ],
        poprawna: "D",
        obraz: "594.jpg"
    },
    {
        id: 595,
        pytanie: "Której właściwości CSS należy użyć, aby zdefiniować marginesy wewnętrzne dla elementu?",
        odpowiedzi: [
            "hight",
            "width",
            "margin",
            "padding"
        ],
        poprawna: "D"
    },
    {
        id: 596,
        pytanie: "W kodzie CSS zastosowano formatowanie elementu listy, przy czym żadne inne formatowanie CSS nie zostało zdefiniowane. Zastosowane formatowanie sprawi, że",
        odpowiedzi: [
            "tekst wszystkich elementów, którym przypisano id „hover” będzie w kolorze Maroon.",
            "po najechaniu kursorem na element listy, zmieni się kolor tekstu na Maroon.",
            "tekst wszystkich elementów listy będzie w kolorze Maroon.",
            "kolor Maroon będzie obejmował co drugi element listy."
        ],
        poprawna: "B",
        obraz: "596.jpg"
    },
    {
        id: 597,
        pytanie: "Wartości: static, relative, fixed, absolute oraz sticky można przypisać do właściwości",
        odpowiedzi: [
            "display",
            "position",
            "list-style-type",
            "text-transform"
        ],
        poprawna: "B"
    },
    {
        id: 598,
        pytanie: "Aby dostosować stronę internetową dla niewidomych, należy nadać wyświetlanym za pomocą znacznika img obrazom atrybut",
        odpowiedzi: [
            "alt",
            "src",
            "text",
            "style"
        ],
        poprawna: "A"
    },
    {
        id: 599,
        pytanie: "Którą czynność należy wykonać podczas obróbki zdjęcia w edytorze grafiki, aby białe tło zamienić na przezroczystość?",
        odpowiedzi: [
            "Dodać kanał alfa.",
            "Skadrować obraz.",
            "Zmienić saturację obrazu.",
            "Maksymalnie zmniejszyć jasność."
        ],
        poprawna: "A"
    },
    {
        id: 600,
        pytanie: "Aby zwiększyć szybkość działania strony zawierającej grafikę o wymiarach 2000 px na 760 px, należy zmniejszyć rozmiary grafiki",
        odpowiedzi: [
            "w programie graficznym.",
            "za pomocą atrybutów HTML.",
            "za pomocą właściwości CSS, podając rozmiar w pikselach.",
            "za pomocą właściwości CSS, podając rozmiar w procentach."
        ],
        poprawna: "A"
    },
    {
        id: 601,
        pytanie: "Przedstawiona linia kodu została zapisana w języku",
        odpowiedzi: [
            "C#",
            "PHP",
            "Python",
            "JavaScript"
        ],
        poprawna: "D",
        obraz: "601.jpg"
    },
    {
        id: 602,
        pytanie: "Na stronie internetowej znajduje się formularz, do którego należy zaprogramować następujące funkcje: \n- walidacja: w trakcie wypełniania formularza w czasie rzeczywistym jest sprawdzana poprawność danych \n- przesyłanie danych: po wypełnieniu formularza i jego zatwierdzeniu dane są przesyłane do bazy danych\nna serwerze \nAby zaimplementować tę funkcjonalność w możliwie najprostszy sposób, należy zapisać",
        odpowiedzi: [
            "walidację i przesyłanie danych w języku PHP.",
            "walidację i przesyłanie danych w języku JavaScript.",
            "walidację w skrypcie PHP, a przesyłanie danych w JavaScript.",
            "walidację w języku JavaScript, a przesyłanie danych w skrypcie PHP."
        ],
        poprawna: "D"
    },
    {
        id: 603,
        pytanie: "Globalne tablice do przechowywania danych o ciastkach i sesjach: $ _ COOKIE oraz $ _ SESSION są częścią\njęzyka",
        odpowiedzi: [
            "C#",
            "Perl",
            "PHP",
            "JavaScript"
        ],
        poprawna: "C"
    },
    {
        id: 604,
        pytanie: "Podczas walidacji dokumentu HTML5 pojawił się komunikat o treści: „Error: Element head is missing a required instance of child element title”. Oznacza to, że w dokumencie",
        odpowiedzi: [
            "element <title> nie jest wymagany.",
            "element <title> nie został zamknięty przez </title>.",
            "nie zdefiniowano elementu <title> w części <head> dokumentu.",
            "nie zdefiniowano obowiązkowego atrybutu title w znaczniku <img>."
        ],
        poprawna: "C"
    },
    {
        id: 605,
        pytanie: "Którego protokołu należy użyć, aby przesłać pliki strony internetowej na serwer hostingowy?",
        odpowiedzi: [
            "FTP",
            "IRC",
            "HTTP",
            "SMTP"
        ],
        poprawna: "A"
    },
    {
        id: 606,
        pytanie: "Przedstawiony blok reprezentuje czynność",
        odpowiedzi: [
            "zastosowania gotowej procedury lub funkcji.",
            "wczytania lub wyświetlenia danych.",
            "wykonania zadania w pętli.",
            "podjęcia decyzji."
        ],
        poprawna: "D",
        obraz: "606.jpg"
    },
    {
        id: 607,
        pytanie: "Aby zadeklarować pole klasy, do którego mają dostęp jedynie metody tej klasy i pole to nie jest dostępne dla klas pochodnych, należy użyć kwalifikatora dostępu",
        odpowiedzi: [
            "public.",
            "private.",
            "protected.",
            "published."
        ],
        poprawna: "B"
    },
    {
        id: 608,
        pytanie: "Pętla while powinna być wykonywana tak długo, jak długo zmienna x będzie przyjmowała wartości z przedziału obustronnie otwartego (-2, 5). Zapis tego warunku w nagłówku pętli za pomocą języka PHP ma postać",
        odpowiedzi: [
            "($x > -2) && ($x < 5)",
            "($x == -2) && ($x < 5)",
            "($x < -2) || ($x > 5)",
            "($x > -2) || ($x > 5)"
        ],
        poprawna: "A"
    },
    {
        id: 609,
        pytanie: "Po wykonaniu się przedstawionego fragmentu kodu języka C/C++ zmiennej o nazwie zmienna2 zostanie",
        odpowiedzi: [
            "przypisany adres zmiennej o nazwie zmienna1.",
            "przypisana ta sama wartość, co przechowywana w zmienna1.",
            "przypisana zamieniona na łańcuch wartość przechowywana w zmienna1.",
            "przypisana liczba w kodzie binarnym odpowiadająca wartości przechowywanej w zmienna1."
        ],
        poprawna: "A",
        obraz: "609.jpg"
    },
    {
        id: 610,
        pytanie: "W języku PHP float reprezentuje typ",
        odpowiedzi: [
            "logiczny.",
            "całkowity.",
            "łańcuchowy.",
            "zmiennoprzecinkowy."
        ],
        poprawna: "D"
    },
    {
        id: 611,
        pytanie: "Którym słowem kluczowym, w języku z rodziny C należy posłużyć się, aby przypisać alternatywną nazwę dla istniejącego typu danych?",
        odpowiedzi: [
            "enum",
            "union",
            "switch",
            "typedef"
        ],
        poprawna: "D"
    },
    {
        id: 612,
        pytanie: "Instrukcja for może być zastąpiona instrukcją",
        odpowiedzi: [
            "case",
            "while",
            "switch",
            "continue"
        ],
        poprawna: "B"
    },
    {
        id: 613,
        pytanie: "Przedstawiony kod źródłowy, zapisany w języku C++, ma za zadanie dla wprowadzanych dowolnych całkowitych liczb różnych od zera wypisać",
        odpowiedzi: [
            "liczby pierwsze",
            "wszystkie liczby",
            "tylko liczby parzyste",
            "tylko liczby nieparzyste"
        ],
        poprawna: "C",
        obraz: "613.jpg"
    },
    {
        id: 614,
        pytanie: "DOM dostarcza metod i własności, które w języku JavaScript pozwalają na",
        odpowiedzi: [
            "manipulowanie zadeklarowanymi w kodzie łańcuchami",
            "wysyłanie danych formularza bezpośrednio do bazy danych",
            "wykonywanie operacji na zmiennych przechowujących liczby",
            "pobieranie i modyfikowanie elementów strony wyświetlonej przez przeglądarkę"
        ],
        poprawna: "D"
    },
    {
        id: 615,
        pytanie: "Testy dotyczące skalowalności oprogramowania mają za zadanie sprawdzić, czy aplikacja",
        odpowiedzi: [
            "ma odpowiednią funkcjonalność.",
            "jest odpowiednio udokumentowana.",
            "potrafi działać przy zakładanym i większym obciążeniu.",
            "jest zabezpieczona przed niedozwolonymi operacjami, np. dzielenie przez zero."
        ],
        poprawna: "C"
    },
    {
        id: 616,
        pytanie: "Który z komentarzy opisuje zadanie zdefiniowanej w języku PHP funkcji?",
        odpowiedzi: [
            "/*Funkcja zwraca wartość wyższą z dwóch podanych, gdy są równe zwraca wartość -1 */",
            "/* Funkcja zwraca wartość niższą z dwóch podanych, gdy są równe zwraca wartość -1 */",
            "/* Funkcja zwraca wartość wyższą z dwóch podanych, gdy są równe zwraca wartość $a */",
            "/*Funkcja zwraca wartość niższą z dwóch podanych, gdy są równe zwraca wartość $a */"
        ],
        poprawna: "A",
        obraz: "616.jpg"
    },
    {
        id: 617,
        pytanie: "W relacyjnych bazach danych, jeżeli dwie tabele są połączone za pomocą ich kluczy głównych, mamy do czynienia z relacją",
        odpowiedzi: [
            "1..1",
            "1..n",
            "n..1",
            "n..n"
        ],
        poprawna: "A"
    },
    {
        id: 618,
        pytanie: "Normalizacja tabel jest procesem, który ma na celu",
        odpowiedzi: [
            "dodanie rekordów do bazy.",
            "przedstawienie graficzne bazy.",
            "jedynie utworzenie tabel i relacji w bazie.",
            "sprawdzenie i optymalizację bazy danych."
        ],
        poprawna: "D"
    },
    {
        id: 619,
        pytanie: "Wbudowanym w pakiet XAMPP narzędziem służącym do zarządzania bazą danych jest",
        odpowiedzi: [
            "MySQL Workbench",
            "phpMyAdmin",
            "pgAdmin",
            "SQLite"
        ],
        poprawna: "B"
    },
    {
        id: 620,
        pytanie: "Wskaż zapytanie, w którym dane zostały posortowane.",
        odpowiedzi: [
            "SELECT DISTINCT produkt, cena FROM artykuly;",
            "SELECT AVG(ocena) FROM uczniowie WHERE klasa = 2;",
            "SELECT nazwisko FROM firma WHERE pensja > 2000 LIMIT 10;",
            "SELECT imie, nazwisko FROM mieszkancy WHERE wiek > 18 ORDER BY wiek;"
        ],
        poprawna: "D"
    },
    {
        id: 621,
        pytanie: "Funkcją agregującą zwracającą liczbę rekordów jest",
        odpowiedzi: [
            "SUM",
            "AVG",
            "COUNT",
            "NUMBER"
        ],
        poprawna: "C"
    },
    {
        id: 622,
        pytanie: "Dana jest tabela zwierzeta z polami nazwa, gatunek, gromada, cechy, dlugosc_zycia. Dla dowolnego zestawu danych, aby wyświetlić nazwy tych zwierząt, które żyją przynajmniej 20 lat oraz są ssakami, należy wydać zapytanie:",
        odpowiedzi: [
            "SELECT nazwa FROM zwierzeta WHERE gromada = ‘ssak‘;",
            "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20;",
            "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20 AND gromada = ‘ssak‘;",
            "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20 OR gromada = ‘ssak‘;"
        ],
        poprawna: "C"
    },
    {
        id: 623,
        pytanie: "W tabeli personel znajdują się pola: imie, nazwisko, pensja, staz. Aby otrzymać średnią pensję pracowników, dla których staż wynosi od 10 do 20 lat pracy włącznie, należy wykonać kwerendę:",
        odpowiedzi: [
            "SELECT COUNT (pensja) FROM personel WHERE staz >= 10 AND staz <= 20;",
            "SELECT AVG(pensja) FROM personel WHERE staz >= 10 AND staz <= 20;",
            "SELECT COUNT(*) FROM personel WHERE staz >= 10 AND staz <= 20;",
            "SELECT AVG (*) FROM personel WHERE staz >= 10 AND staz <= 20;"
        ],
        poprawna: "B"
    },
    {
        id: 624,
        pytanie: "Zapytanie z klauzulą JOIN stosuje się, aby",
        odpowiedzi: [
            "wywołać funkcję agregującą.",
            "zdefiniować klucz obcy dla tabeli.",
            "otrzymać wynik jedynie z jednej tabeli.",
            "uzyskać wyniki z dwóch tabel pozostających ze sobą w relacji."
        ],
        poprawna: "D"
    },
    {
        id: 625,
        pytanie: "Aby usunąć tabelę należy zastosować kwerendę",
        odpowiedzi: [
            "DELETE",
            "UNIQUE",
            "DROP TABLE",
            "TRUNCATE TABLE"
        ],
        poprawna: "C"
    },
    {
        id: 626,
        pytanie: "Za pomocą przedstawionego zapytania w tabeli zostanie",
        odpowiedzi: [
            "zmieniona nazwa kolumny z nazwa1 na nazwa2.",
            "zmieniona wartość kolumny nazwa2 na DOUBLE.",
            "dodana kolumna nazwa2 typu zmiennoprzecinkowego.",
            "dodana kolumna nazwa2 przyjmująca wartość domyślną DOUBLE."
        ],
        poprawna: "C",
        obraz: "626.jpg"
    },
    {
        id: 627,
        pytanie: "Które tabele zostaną sprawdzone za pomocą przedstawionego polecenia?",
        odpowiedzi: [
            "Tabele, które zmieniły się od ostatniej kontroli lub nie zostały poprawnie zamknięte.",
            "Jedynie tabele, które nie zostały poprawnie zamknięte.",
            "Tabele, które zmieniły się w aktualnej sesji.",
            "Jedynie tabele referujące do innych."
        ],
        poprawna: "A",
        obraz: "627.jpg"
    },
    {
        id: 628,
        pytanie: "Jakie uprawnienia będzie miał użytkownik jan po wykonaniu na bazie danych przedstawionych poleceń?",
        odpowiedzi: [
            "Będzie mógł zmienić strukturę tabeli klienci.",
            "Będzie mógł usuwać rekordy z tabeli klienci.",
            "Będzie mógł wyszukiwać dane w tabeli klienci.",
            "Będzie mógł wstawiać rekordy do tabeli klienci."
        ],
        poprawna: "A",
        obraz: "628.jpg"
    },
    {
        id: 629,
        pytanie: "Witryna internetowa wysyła dane poufne za pomocą formularza do kodu PHP. Która metoda wysłania jest najbardziej bezpieczna?",
        odpowiedzi: [
            "Metoda GET, za pomocą protokołu HTTP",
            "Metoda POST, za pomocą protokołu HTTP",
            "Metoda GET, za pomocą protokołu HTTPS",
            "Metoda POST, za pomocą protokołu HTTPS"
        ],
        poprawna: "D"
    },
    {
        id: 630,
        pytanie: "Przedstawiony fragment kodu PHP ma za zadanie umieścić dane znajdujące się w zmiennych $a, $b, $c w bazie danych, w tabeli dane. Tabela dane zawiera cztery pola, z czego pierwsze to autoinkrementowany klucz główny. Które z poleceń powinno być przypisane do zmiennej $zapytanie?",
        odpowiedzi: [
            "SELECT '$a', '$b', '$c' FROM dane;",
            "SELECT NULL, '$a', '$b', '$c' FROM dane;",
            "INSERT INTO dane VALUES ('$a', '$b', '$c');",
            "INSERT INTO dane VALUES (NULL, '$a', '$b', '$c');"
        ],
        poprawna: "D",
        obraz: "630.jpg"
    },
    {
        id: 631,
        pytanie: "Witryna internetowa ma mieć przedstawioną strukturę bloków. Aby uzyskać ten układ, należy znacznikom sekcji przypisać właściwości w następujący sposób:",
        odpowiedzi: [
            "float tylko dla bloku 5; clear dla bloku 2",
            "float tylko dla bloków: 3, 4; clear dla bloku 5",
            "float tylko dla bloku 2; clear dla bloków: 3, 4",
            "float tylko dla bloków: 2, 3, 4; clear dla bloku 5"
        ],
        poprawna: "D",
        obraz: "631.jpg"
    },
    {
        id: 632,
        pytanie: "Podstawowym zadaniem systemu CMS jest oddzielenie treści serwisu informacyjnego od jego wyglądu. Efekt ten jest uzyskany poprzez generowanie zawartości",
        odpowiedzi: [
            "z bazy danych oraz wyglądu ze zdefiniowanego szablonu.",
            "z bazy danych oraz wyglądu za pomocą atrybutów HTML.",
            "ze statycznych plików HTML oraz wyglądu ze zdefiniowanego szablonu.",
            "ze statycznych plików HTML oraz wyglądu za pomocą technologii FLASH."
        ],
        poprawna: "A"
    },
    {
        id: 633,
        pytanie: "W języku HTML znacznik < i > nadaje znakom taki sam wizualny efekt jak znacznik",
        odpowiedzi: [
            "<u>",
            "<em>",
            "<pre>",
            "<strong>"
        ],
        poprawna: "B"
    },
    {
        id: 634,
        pytanie: "Przedstawiono tabelę zdefiniowaną kodem HTML, bez formatowania CSS. Który z fragmentów kodu HTML odpowiada pierwszemu wierszowi tabeli?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "634.jpg"
    },
    {
        id: 635,
        pytanie: "Aby obraz wstawiony kodem HTML mógł być interpretowany przez programy wspomagające osoby niewidzące, należy zdefiniować atrybut",
        odpowiedzi: [
            "alt",
            "src",
            "sizes",
            "border"
        ],
        poprawna: "A"
    },
    {
        id: 636,
        pytanie: "Na obrazie przedstawiono efekt formatowania stylami CSS oraz kod HTML generujący ten przykład. Zakładając, że marginesy wewnętrzne wynoszą 50 px, a zewnętrzne wynoszą 20 px, styl CSS dla obrazu ma postać",
        odpowiedzi: [
            "img { \n    background-color: Teal;  \n    border: 4px dotted Teal; \n    padding: 50px; \n    margin: 20px; \n}",
            "img { \n    background-color: Teal; \n    border: 4px solid black; \n    margin: 50px; \n    padding: 20px; \n}",
            "img { \n    background-color: Teal; \n    border: 4px solid black; \n    padding: 50px; \n    margin: 20px; \n}",
            "img { \n    background-color: Teal; \n    border: 4px dotted Teal; \n    margin: 50px; \n    padding: 20px; \n}"
        ],
        poprawna: "C",
        obraz: "636.jpg"
    },
    {
        id: 637,
        pytanie: "W kodzie CSS zdefiniowano cztery klasy formatowania, których następnie użyto do formatowania paragrafów. Efekt widoczny na rysunku powstał po zastosowaniu klasy o nazwie",
        odpowiedzi: [
            "format1",
            "format2",
            "format3",
            "format4"
        ],
        poprawna: "B",
        obraz: "637.jpg"
    },
    {
        id: 638,
        pytanie: "W jakim formacie należy zapisać obraz, aby mógł być wyświetlony na stronie internetowej z zachowaniem przezroczystości?",
        odpowiedzi: [
            "JPG",
            "BMP",
            "PNG",
            "CDR"
        ],
        poprawna: "C"
    },
    {
        id: 639,
        pytanie: "Na potrzeby strony internetowej przygotowano grafikę rysunek.jpg o rozmiarze: szerokość 200 px, wysokość 100 px. Aby wyświetlić tę grafikę jako miniaturę – pomniejszoną z zachowaniem proporcji, można zastosować znacznik",
        odpowiedzi: [
            "<img src = \"rysunek.png\">",
            "<img src = \"rysunek.png\" style = \"width: 50px\">",
            "<img src = \"rysunek.png\" style = \"width: 25px; height: 50px\">",
            "<img src = \"rysunek.png\" style = \"width: 25px; height: 25px\">"
        ],
        poprawna: "B"
    },
    {
        id: 640,
        pytanie: "Której funkcji edytora grafiki rastrowej należy użyć, aby przygotować rysunek do wyświetlenia na stronie w ten sposób, żeby było widoczne tylko to, co znajduje się w ramce?",
        odpowiedzi: [
            "Odbicie",
            "Skalowanie",
            "Kadrowanie",
            "Perspektywa"
        ],
        poprawna: "C",
        obraz: "640.jpg"
    },
    {
        id: 641,
        pytanie: "Przedstawiony fragment dokumentu HTML z kodem JavaScript spowoduje, że po wciśnięciu przycisku",
        odpowiedzi: [
            "obraz1.png zostanie ukryty.",
            "obraz2.png zostanie ukryty.",
            "obraz2.png zostanie zastąpiony przez obraz1.png",
            "obraz1.png zostanie zastąpiony przez obraz2.png"
        ],
        poprawna: "B",
        obraz: "641.jpg"
    },
    {
        id: 642,
        pytanie: "Co spowoduje fragment skryptu w języku JavaScript?",
        odpowiedzi: [
            "Przypisze zmienną n do zmiennej s.",
            "Wyświetli długość napisu ze zmiennej n.",
            "Przypisze zmiennej s wartość odpowiadającą długości napisu ze zmiennej n.",
            "Przypisze zmiennej s fragment napisu ze zmiennej n, o określonej przez zmienną length długości."
        ],
        poprawna: "C",
        obraz: "642.jpg"
    },
    {
        id: 643,
        pytanie: "Przedstawiony kod PHP nawiązuje połączenie z serwerem bazy danych. Jakiego typu operacje powinny się znaleźć w instrukcji warunkowej w miejscu trzech kropek?",
        odpowiedzi: [
            "Zamknięcie bazy danych.",
            "Obsługa błędu połączenia.",
            "Obsługa danych pobranych z bazy.",
            "Komunikat o pomyślnym połączeniu z bazą."
        ],
        poprawna: "B",
        obraz: "643.jpg"
    },
    {
        id: 644,
        pytanie: "Który znacznik należący do sekcji head dokumentu HTML w wersji 5 jest wymagany przez walidator języka HTML, a jego brak jest zgłaszany jako błąd (error)?",
        odpowiedzi: [
            "title",
            "link",
            "metą",
            "style"
        ],
        poprawna: "A"
    },
    {
        id: 645,
        pytanie: "Za pomocą którego protokołu można opublikować stronę internetową na serwerze?",
        odpowiedzi: [
            "FTP",
            "ICMP",
            "SMTP",
            "NNTP"
        ],
        poprawna: "A"
    },
    {
        id: 646,
        pytanie: "W przedstawionym fragmencie algorytmu zastosowano",
        odpowiedzi: [
            "dwie pętle",
            "jedną pętlę.",
            "jeden blok decyzyjny.",
            "trzy bloki operacyjne (procesy)."
        ],
        poprawna: "B",
        obraz: "646.jpg"
    },
    {
        id: 647,
        pytanie: "Do optymalnej realizacji algorytmu szukającego największej z trzech podanych liczb a, b i c, wystarczy\nzastosować",
        odpowiedzi: [
            "jedną pętlę.",
            "dwie tablice.",
            "dwa warunki.",
            "pięć zmiennych."
        ],
        poprawna: "C"
    },
    {
        id: 648,
        pytanie: "Które wyrażenie logiczne w języku PHP sprawdza, czy zmienna1 należy do przedziału jednostronnie\ndomkniętego <-5, 10)?",
        odpowiedzi: [
            "$zmienna1 >= -5 || $zmienna1 < 10",
            "$zmienna1 <= -5 || $zmienna1 < 10",
            "$zmienna1 >= -5 && $zmienna1 < 10",
            "$zmienna1 <= -5 && $zmienna1 < 10"
        ],
        poprawna: "C"
    },
    {
        id: 649,
        pytanie: "Przedstawiona w języku C++ definicja typu wyliczeniowego sprawi, że enumerator CZWARTEK będzie\nrówny",
        odpowiedzi: [
            "napisowi \"CZWARTEK\"",
            "napisowi 'CZWARTEK'",
            "liczbie 1",
            "liczbie 4"
        ],
        poprawna: "D",
        obraz: "649.jpg"
    },
    {
        id: 650,
        pytanie: "Tablica tab[] jest wypełniona dowolnymi liczbami całkowitymi. Jaka wartość znajdzie się w zmiennej zm2\npo wykonaniu prezentowanego fragmentu kodu?",
        odpowiedzi: [
            "Suma liczb z tablicy.",
            "Suma liczb od 1 do 10.",
            "Średnia arytmetyczna liczb z tablicy.",
            "Średnia geometryczna liczb od 0 do 9."
        ],
        poprawna: "C",
        obraz: "650.jpg"
    },
    {
        id: 651,
        pytanie: "W języku JavaScript metoda getElementById odwołuje się do",
        odpowiedzi: [
            "zmiennej liczbowej.",
            "klasy zdefiniowanej w CSS.",
            "znacznika HTML o podanym id.",
            "znacznika HTML o podanej nazwie klasy."
        ],
        poprawna: "C"
    },
    {
        id: 652,
        pytanie: "W języku C++ funkcja zwracająca wynik potęgowania, działająca na dwóch parametrach wejściowych:\nliczbie x i wykładniku w, ma deklarację",
        odpowiedzi: [
            "int potega(int x);",
            "int potega(int x, int w);",
            "void potega(int x, int w);",
            "void potega(int x, int w, int wynik);"
        ],
        poprawna: "B"
    },
    {
        id: 653,
        pytanie: "Aby skorzystać ze skryptu zapisanego w pliku przyklad.js, należy połączyć go ze stroną za pomocą kodu",
        odpowiedzi: [
            "<script> przyklad.js </script>",
            "<script src=\"przyklad.js\"> </script>",
            "<script link=\"przyklad.js\"> </script>",
            "<link rel=\"script\" href=\"przyklad.js\">"
        ],
        poprawna: "B"
    },
    {
        id: 654,
        pytanie: "Programista napisał w języku C++ pętlę, która miała obliczyć wynik działania 5! (5! = 1 * 2 * 3 * 4 * 5).\nPopełnił jednak błąd logiczny polegający na tym, że",
        odpowiedzi: [
            "zmienna a powinna być inicjowana wartością 0 zamiast 1.",
            "parametr i pętli powinien być inicjowany wartością 0 zamiast 1.",
            "parametr i pętli powinien być dekrementowany zamiast inkrementowany.",
            "w drugim parametrze pętli powinno być porównanie i < 6 zamiast i < 5."
        ],
        poprawna: "D",
        obraz: "654.jpg"
    },
    {
        id: 655,
        pytanie: "Który ze sposobów komentowania kodu nie jest stosowany w kodzie PHP?",
        odpowiedzi: [
            "# komentarz",
            "// komentarz",
            "/* komentarz */",
            "< !-- komentarz -- >"
        ],
        poprawna: "D"
    },
    {
        id: 656,
        pytanie: "Klucz obcy w tabeli jest tworzony po to, aby",
        odpowiedzi: [
            "łączyć go z innymi kluczami obcymi tabeli.",
            "stworzyć formularz wpisujący dane do tabeli.",
            "umożliwić jednoznaczną identyfikację rekordu w tabeli.",
            "zdefiniować relację 1..n wiążącą go z kluczem głównym innej tabeli."
        ],
        poprawna: "D"
    },
    {
        id: 657,
        pytanie: "Które ze stwierdzeń dotyczących klucza podstawowego jest prawdziwe?",
        odpowiedzi: [
            "Jest unikalny w obrębie tabeli.",
            "Składa się tylko z jednego pola.",
            "Może przyjmować tylko wartości liczbowe.",
            "Dla tabeli z danymi osobowymi może być to pole nazwisko."
        ],
        poprawna: "A"
    },
    {
        id: 658,
        pytanie: "W języku SQL aby zmodyfikować dane w tabeli, należy posłużyć się poleceniem",
        odpowiedzi: [
            "CREATE",
            "UPDATE",
            "SELECT",
            "JOIN"
        ],
        poprawna: "B"
    },
    {
        id: 659,
        pytanie: "Które zapytanie SQL posłuży do wyszukania z przedstawionej tabeli wyłącznie wszystkich imion i nazwisk\npacjentów urodzonych przed rokiem 2002?",
        odpowiedzi: [
            "SELECT * FROM Pacjenci WHERE rok_urodzenia <= 2002;",
            "SELECT * FROM Pacjenci WHERE rok_urodzenia LIKE 2002;",
            "SELECT imie, nazwisko FROM Pacjenci WHERE rok_urodzenia < 2002;",
            "SELECT imie, nazwisko FROM Pacjenci WHERE data_ostatniej_wizyty < 2002;"
        ],
        poprawna: "C",
        obraz: "659.jpg"
    },
    {
        id: 660,
        pytanie: "Aby utworzyć tabelę, należy się posłużyć poleceniem",
        odpowiedzi: [
            "INSERT INTO",
            "ALTER TABLE",
            "CREATE TABLE",
            "CREATE DATABASE"
        ],
        poprawna: "C"
    },
    {
        id: 661,
        pytanie: "Wynikiem uruchomienia zapytania SQL jest",
        odpowiedzi: [
            "liczba wszystkich uczniów.",
            "średnia ocen wszystkich uczniów.",
            "liczba uczniów, których średnia ocen wynosi 5.",
            "suma ocen uczniów, których średnia ocen wynosi 5."
        ],
        poprawna: "C",
        obraz: "661.jpg"
    },
    {
        id: 662,
        pytanie: "Aby wyświetlić jedynie imię, nazwisko i ulicę wszystkich mieszkańców, należy zastosować zapytanie",
        odpowiedzi: [
            "SELECT * FROM Mieszkancy, Adresy ON Mieszkancy.id = Adresy.id;",
            "SELECT * FROM Mieszkancy JOIN Adresy ON Adresy.id = Mieszkancy.Adresy.id;",
            "SELECT imie, nazwisko, ulica FROM Mieszkancy, Adresy ON Mieszkancy.Adresy_id\n= Adresy.id;",
            "SELECT imie, nazwisko, ulica FROM Mieszkancy JOIN Adresy ON\nMieszkancy.Adresy_id = Adresy.id;"
        ],
        poprawna: "D",
        obraz: "662.jpg"
    },
    {
        id: 663,
        pytanie: "Przedstawiona baza danych zawiera trzy tabele i dwie relacje. Aby wyświetlić dane wszystkich lekarzy\nprzypisanych do konkretnego pacjenta, należy przyrównać klucze",
        odpowiedzi: [
            "Lekarze.id = Recepty.id",
            "Lekarze.id = Pacjenci.id",
            "Lekarze.id = Pacjenci.Lekarze_id",
            "Lekarze.id = Pacjenci.Recepty_id"
        ],
        poprawna: "C",
        obraz: "663.jpg"
    },
    {
        id: 664,
        pytanie: "W wyniku połączenia relacją kluczy głównych dwóch tabel otrzymuje się relację typu",
        odpowiedzi: [
            "wiele do wielu.",
            "jeden do wielu.",
            "jeden do jednego.",
            "wiele do jednego."
        ],
        poprawna: "C"
    },
    {
        id: 665,
        pytanie: "Obiektem służącym w bazie danych do podsumowywania, wyświetlania i wydruków danych jest",
        odpowiedzi: [
            "raport.",
            "zapytanie.",
            "formularz.",
            "zestawienie."
        ],
        poprawna: "A"
    },
    {
        id: 666,
        pytanie: "Za pomocą polecenia ALTER TABLE można",
        odpowiedzi: [
            "usuwać tabelę.",
            "tworzyć tabelę.",
            "modyfikować strukturę tabeli.",
            "modyfikować wartości zapisane w rekordach tabeli."
        ],
        poprawna: "C"
    },
    {
        id: 667,
        pytanie: "W bazie danych zdefiniowano tabelę Mieszkancy wypełnioną danymi. Aby usunąć tę tabelę wraz\nz zawartością, należy posłużyć się poleceniem",
        odpowiedzi: [
            "DROP TABLE Mieszkancy;",
            "DELETE FROM Mieszkancy;",
            "ALTER TABLE Mieszkancy;",
            "TRUNCATE TABLE Mieszkancy;"
        ],
        poprawna: "A"
    },
    {
        id: 668,
        pytanie: "Aby odebrać uprawnienia użytkownikowi, należy zastosować polecenie",
        odpowiedzi: [
            "DELETE",
            "REVOKE",
            "DELETE PRIVILEGES",
            "GRANT NO PRIVILEGES"
        ],
        poprawna: "B"
    },
    {
        id: 669,
        pytanie: "Aby aplikacja PHP mogła komunikować się z bazą danych, niezbędne jest w pierwszej kolejności wywołanie\nfunkcji o nazwie",
        odpowiedzi: [
            "mysqli_close",
            "mysqli_connect",
            "mysql_select_db",
            "mysql_create_db"
        ],
        poprawna: "B"
    },
    {
        id: 670,
        pytanie: "Który z wymienionych znaczników języka HTML może posłużyć do budowy struktury strony internetowej?",
        odpowiedzi: [
            "<em>",
            "<aside>",
            "<input>",
            "<mark>"
        ],
        poprawna: "B"
    },
    {
        id: 671,
        pytanie: "Logo systemu CMS o nazwie Joomla! to",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "671.jpg"
    },
    {
        id: 672,
        pytanie: "Język HTML dysponuje nagłówkami do budowania hierarchii treści. Nagłówki te występują jedynie\nw zakresie",
        odpowiedzi: [
            "h1 – h4",
            "h1 – h6",
            "h1 – h8",
            "h1 – h10"
        ],
        poprawna: "B"
    },
    {
        id: 673,
        pytanie: "W języku HTML zdefiniowano odnośnik do strony internetowej. Aby strona otwierała się w nowym oknie\nlub zakładce przeglądarki, należy dopisać do definicji odnośnika atrybut",
        odpowiedzi: [
            "rel = \"next\"",
            "rel = \"external\"",
            "target = \"_blank\"",
            "target = \"_parent\""
        ],
        poprawna: "C",
        obraz: "673.jpg"
    },
    {
        id: 674,
        pytanie: "Która lista jest interpretacją przedstawionego kodu?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "674.jpg"
    },
    {
        id: 675,
        pytanie: "Na potrzeby strony internetowej zdefiniowano styl. Styl będzie przypisany tylko do niektórych znaczników\n(np. niektórych nagłówków, kilku akapitów). W takim wypadku, aby przypisać styl do kilku konkretnych\nznaczników, najlepiej jest zastosować",
        odpowiedzi: [
            "klasę.",
            "pseudoklasę.",
            "identyfikator.",
            "selektor akapitu."
        ],
        poprawna: "A",
        obraz: "675.jpg"
    },
    {
        id: 676,
        pytanie: "Aby zdefiniować krój czcionki w stylu CSS, należy użyć właściwości",
        odpowiedzi: [
            "text-style",
            "font-style",
            "text-family",
            "font-family"
        ],
        poprawna: "D"
    },
    {
        id: 677,
        pytanie: "Który z obrazów został sformatowany za pomocą przedstawionego stylu CSS?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "677.jpg"
    },
    {
        id: 678,
        pytanie: "Aby na stronie internetowej wyświetlić logo, którego tło jest przezroczyste, należy zastosować format",
        odpowiedzi: [
            "JPG",
            "CDR",
            "PNG",
            "BMP"
        ],
        poprawna: "C"
    },
    {
        id: 679,
        pytanie: "Aby obraz umieszczony na stronie internetowej automatycznie skalował się do rozmiaru ekranu, na którym\njest wyświetlana strona, należy",
        odpowiedzi: [
            "oba jego wymiary ustawić w pikselach.",
            "jeden z jego wymiarów ustawić w pikselach.",
            "nie modyfikować obu jego wymiarów stylami CSS.",
            "jego szerokość ustawić w wartościach procentowych."
        ],
        poprawna: "D"
    },
    {
        id: 680,
        pytanie: "W procesie przygotowywania grafiki na stronę internetową należy wyciąć jedynie jej fragment. Taka\noperacja to",
        odpowiedzi: [
            "skalowanie.",
            "kadrowanie.",
            "odbicie obrazu",
            "łączenie warstw."
        ],
        poprawna: "B"
    },
    {
        id: 681,
        pytanie: "W aplikacji internetowej komunikat powinien pojawiać się tylko wtedy, gdy dany użytkownik jest na stronie\npo raz pierwszy. Którą funkcję PHP należy w tym celu zastosować?",
        odpowiedzi: [
            "define",
            "setcookie",
            "session_destroy",
            "mysqli_change_user"
        ],
        poprawna: "B"
    },
    {
        id: 682,
        pytanie: "Przedstawiona definicja formularza została zastosowana na stronie internetowej, która wysyła dane do pliku\nzapisanego w języku PHP. W której tablicy będą dostępne dane z formularza?",
        odpowiedzi: [
            "$ _ GET",
            "$ _ POST",
            "$ _ COOKIE",
            "$ _ ACTION"
        ],
        poprawna: "B",
        obraz: "682.jpg"
    },
    {
        id: 683,
        pytanie: "W skrypcie JavaScript zastosowano metodę DOM getElementsByClassName('akapit'). Metoda ta\nodwoła się do akapitu",
        odpowiedzi: [
            "<p> akapit </p>",
            "<p id=\"akapit\"> akapit2 </p>",
            "<p href=\"akapit\"> akapit3 </p>",
            "<p class=\"akapit\"> akapit4 </p>"
        ],
        poprawna: "D"
    },
    {
        id: 684,
        pytanie: "Dla przedstawionego fragmentu kodu walidator HTML zwróci błąd, ponieważ",
        odpowiedzi: [
            "zastosowano błędny znacznik do wyświetlenia obrazu.",
            "zastosowano nieznany atrybut alt.",
            "nie znaleziono obrazu kwiat.jpg.",
            "nie domknięto cudzysłowu."
        ],
        poprawna: "D",
        obraz: "684.jpg"
    },
    {
        id: 685,
        pytanie: "Program FileZilla może posłużyć do",
        odpowiedzi: [
            "kompilacji skryptu na stronie.",
            "walidacji strony internetowej.",
            "publikacji strony internetowej.",
            "debugowania skryptu na stronie."
        ],
        poprawna: "C"
    },
    {
        id: 686,
        pytanie: "Która wartość zostanie wypisana przez algorytm?",
        odpowiedzi: [
            "3",
            "5",
            "7",
            "15"
        ],
        poprawna: "D",
        obraz: "686.jpg"
    },
    {
        id: 687,
        pytanie: "Wskaż złożoność obliczeniową algorytmu naiwnego (zwykłego) wyszukiwania minimum w zbiorze liczb?",
        odpowiedzi: [
            "O(n)",
            "O(n2)",
            "O(n3)",
            "O(n!)"
        ],
        poprawna: "A"
    },
    {
        id: 688,
        pytanie: "Do którego pola klasy Dane możliwy będzie dostęp z zewnątrz poprzez nazwę obiektu utworzonego jako instancja tej klasy?",
        odpowiedzi: [
            "Do wszystkich pól.",
            "Do pola $a.",
            "Do pola $b.",
            "Do pola $c."
        ],
        poprawna: "B",
        obraz: "688.jpg"
    },
    {
        id: 689,
        pytanie: "W języku JavaScript utworzono obiekt. Aby pobrać wartość własności w można zapisać",
        odpowiedzi: [
            "obiekt:w",
            "obiekt.w",
            "obiekt::w",
            "obiekt->w"
        ],
        poprawna: "B",
        obraz: "689.jpg"
    },
    {
        id: 690,
        pytanie: "W języku PHP zainicjowano zmienną $a wartością 1. Porównanie $a === $b przyjmuje wartość true, w przypadku, gdy zmienna $b jest zainicjowana wartością",
        odpowiedzi: [
            "*1",
            "'1'",
            "1",
            "\"1\" lub '1'"
        ],
        poprawna: "C"
    },
    {
        id: 691,
        pytanie: "Która pętla w języku PHP pozwala wykonać operacje na wszystkich elementach tablicy z automatycznym indeksowaniem jej elementów?",
        odpowiedzi: [
            "for",
            "while",
            "foreach",
            "do...while"
        ],
        poprawna: "C"
    },
    {
        id: 692,
        pytanie: "Wskaż wynik wykonania przedstawionego kodu PHP, jeżeli zmienna tab jest tablicą.",
        odpowiedzi: [
            "jelenie sarny",
            "lisy borsuki",
            "sarny dziki",
            "dziki lisy"
        ],
        poprawna: "C",
        obraz: "692.jpg"
    },
    {
        id: 693,
        pytanie: "Zapisaną językiem PHP funkcję o nazwie policz wywołano z argumentem $Z = 1. Jaki wynik zostanie zwrócony?",
        odpowiedzi: [
            "13",
            "7",
            "4",
            "1"
        ],
        poprawna: "A",
        obraz: "693.jpg"
    },
    {
        id: 694,
        pytanie: "Wskaż funkcję JavaScript, za pomocą której można obliczyć połowę kwadratu liczby przekazanej jako argument.",
        odpowiedzi: [
            "function wynik(a) { return a/2+a/2; }",
            "function wynik(a) { return a*2/2; }",
            "function wynik(a) { return a*a/2; }",
            "function wynik(a) { return 2*a/a; }"
        ],
        poprawna: "C"
    },
    {
        id: 695,
        pytanie: "Która z przedstawionych funkcji języka PHP zamieni słowo \"kota\" na słowo \"mysz\" w napisie \"ala ma kota\"?",
        odpowiedzi: [
            "replace (\"ala ma kota\", \"kota\", \"mysz\");",
            "replace (\"kota\", \"mysz\", \"ala ma kota\");",
            "str_replace(\"ala ma kota\", \"kota\", \"mysz\");",
            "str_replace(\"kota\", \"mysz\", \"ala ma kota\");"
        ],
        poprawna: "D"
    },
    {
        id: 696,
        pytanie: "Która z przedstawionych metod pozwoli wypisać w języku JavaScript komunikat w konsoli przeglądarki internetowej?",
        odpowiedzi: [
            "console.write(\"test\");",
            "console.print(\"test\");",
            "console.echo(\"test\");",
            "console.log(\"test\");"
        ],
        poprawna: "D"
    },
    {
        id: 697,
        pytanie: "Polecenie wysyłane do serwera bazy danych, polegające na zbieraniu, poszukiwaniu lub modyfikowaniu danych w bazie jest nazywane",
        odpowiedzi: [
            "formularzem.",
            "kwerendą.",
            "kolumną.",
            "kopią."
        ],
        poprawna: "B"
    },
    {
        id: 698,
        pytanie: "Kolumna pełniąca rolę klucza głównego w tabeli musi",
        odpowiedzi: [
            "zawierać ciągłą numerację.",
            "zawierać unikalne wartości.",
            "zawierać wartości liczbowe.",
            "być innego typu niż pozostałe kolumny."
        ],
        poprawna: "B"
    },
    {
        id: 699,
        pytanie: "Która z wbudowanych funkcji agregujących języka SQL oblicza średnią wartości we wskazanej kolumnie?",
        odpowiedzi: [
            "MIN",
            "AVG",
            "SUM",
            "COUNT"
        ],
        poprawna: "B"
    },
    {
        id: 700,
        pytanie: "Aby w wyniku zapytania wyeliminować powtarzające się wiersze, należy użyć klauzuli",
        odpowiedzi: [
            "LIMIT",
            "UNIQUE",
            "DISTINCT",
            "ORDER BY"
        ],
        poprawna: "C"
    },
    {
        id: 701,
        pytanie: "Za pomocą, którego polecenia SQL można usunąć z tabeli artykuły wiersze zawierające słowo \"sto\" znajdujące się w dowolnym miejscu pola tresc?",
        odpowiedzi: [
            "DELETE FROM artykuly WHERE tresc = \"%sto%\";",
            "DELETE * FROM artykuly WHERE tresc = \"%sto%\";",
            "DELETE FROM artykuly WHERE tresc LIKE \"%sto%\";",
            "DELETE * FROM artykuly WHERE tresc LIKE \"%sto%\";"
        ],
        poprawna: "C"
    },
    {
        id: 702,
        pytanie: "W bazie danych sklepu istnieją dwie tabele powiązane relacją: produkty oraz ceny. Tabela oceny zawiera dowolną liczbę ocen klientów dla danego produktu opisaną polami: id, ocena (pole numeryczne), produktID (klucz obcy). Aby wskazać maksymalną ocenę dla produktu o ID równym 10, należy posłużyć się zapytaniem",
        odpowiedzi: [
            "MAX SELECT ocena FROM oceny WHERE produktID = 10;",
            "SELECT MAX(ocena) FROM oceny WHERE produktID = 10;",
            "COUNT MAX SELECT ocena FROM oceny WHERE produktID = 10;",
            "SELECT MAX COUNT(ocena) FROM oceny WHERE produktID = 10;"
        ],
        poprawna: "B"
    },
    {
        id: 703,
        pytanie: "Aby zmodyfikować strukturę tabeli w bazie MySQL należy wykonać polecenie",
        odpowiedzi: [
            "ALTER TABLE",
            "INSERT INTO",
            "UPDATE",
            "GRANT"
        ],
        poprawna: "A"
    },
    {
        id: 704,
        pytanie: "Za pomocą, którego zapytania Administrator odbierze prawo przeglądania oraz aktualizacji danych w bazie gazeta, dla użytkownika redaktor?",
        odpowiedzi: [
            "REVOKE SELECT, UPDATE ON gazeta.* FROM 'redaktor'@'localhost';",
            "REVOKE SELECT, ALTER ON gazeta.* FROM 'redaktor'@'localhost';",
            "GRANT SELECT, UPDATE ON gazeta.* TO 'redaktor'@'localhost';",
            "GRANT SELECT, ALTER ON gazeta.* TO 'redaktor'@'localhost';"
        ],
        poprawna: "A"
    },
    {
        id: 705,
        pytanie: "Za pomocą, której funkcji języka PHP można ustanowaić połączenie z bazą danych o nazwie zwierzaki?",
        odpowiedzi: [
            "$polacz = db_connect('localhost', 'root', '', 'zwierzaki');",
            "$polacz = sql_connect('localhost', 'root', '', 'zwierzaki');",
            "$polacz = server_connect('localhost', 'root', '', 'zwierzaki');",
            "$polacz = mysqli_connect('localhost', 'root', '', 'zwierzaki');"
        ],
        poprawna: "D"
    },
    {
        id: 706,
        pytanie: "Po uszkodzeniu serwera bazy danych, aby możliwe najsprawniej przywrócić działanie kompletnej bazy należy użyć",
        odpowiedzi: [
            "najnowszej wersji instalacyjnej serwera.",
            "pełnej listy użytkowników serwera.",
            "aktualnej wersji kopii zapasowej.",
            "opisu struktur danych w tabelach."
        ],
        poprawna: "C"
    },
    {
        id: 707,
        pytanie: "Która z przedstawionych grup znaczników HTML zawiera znaczniki służące do grupowania elementów i tworzenia struktur dokumentu?",
        odpowiedzi: [
            "br, img, hr",
            "table, tr, td",
            "span, strong, em",
            "div, article, header"
        ],
        poprawna: "D"
    },
    {
        id: 708,
        pytanie: "Który zapis w języku HTML jest deklaracją kodowania znaków w dokumencie?",
        odpowiedzi: [
            "<charset=\"UTF-8\">",
            "<encoding=\"UTF-8\">",
            "<meta charset=\"UTF-8\">",
            "<meta encoding=\"UTF-8\">"
        ],
        poprawna: "C"
    },
    {
        id: 709,
        pytanie: "Który zapis w dokumencie HTML pozwala na połączenie z zewnętrznym arkuszem stylów o nazwie style.css?",
        odpowiedzi: [
            "<link rel=\"stylesheet\" href=\"style.css\">",
            "<link rel=\"stylesheet' src=\"style.css\">",
            "<a href=\"style.css\">",
            "<a src=\"style.css\">"
        ],
        poprawna: "A"
    },
    {
        id: 710,
        pytanie: "Który znacznik HTML jest elementem blokowym?",
        odpowiedzi: [
            "p",
            "img",
            "span",
            "strong"
        ],
        poprawna: "A"
    },
    {
        id: 711,
        pytanie: "Ile maksymalnie należy użyć znaczników < td > w tabeli o trzech kolumnach i trzech wierszach niezawierającej złączeń komórek i wiersza nagłówkowego?",
        odpowiedzi: [
            "3",
            "6",
            "9",
            "12"
        ],
        poprawna: "C"
    },
    {
        id: 712,
        pytanie: "Atrybutem określającym lokalizację pliku graficznego dla znacznika < img > jest",
        odpowiedzi: [
            "alt",
            "src",
            "href",
            "link"
        ],
        poprawna: "B"
    },
    {
        id: 713,
        pytanie: "Formatowanie CSS akapitu określa styl szarej ramki o cechach:",
        odpowiedzi: [
            "linia kropkowa; grubość 2 px; marginesy pomiędzy tekstem a ramką 15 px.",
            "linia ciągła; grubość 2 px; marginesy pomiędzy tekstem a ramką 15 px.",
            "linia kreskowa; grubość 2 px; marginesy poza ramką 15 px.",
            "linia ciągła; grubość 2 px; marginesy poza ramką 15 px."
        ],
        poprawna: "A",
        obraz: "713.jpg"
    },
    {
        id: 714,
        pytanie: "Który selektor formatuje akapity tekstu o klasie tekst oraz element blokowy o ID obrazki?",
        odpowiedzi: [
            "p.tekst, div#obrazki",
            "p#tekst, div.obrazki",
            "p.tekst + div#obrazki",
            "p#tekst + div.obrazki"
        ],
        poprawna: "A"
    },
    {
        id: 715,
        pytanie: "Pogrubienie tekstu za pomocą znacznika < b > można uzyskać także przy wykorzystaniu właściwości CSS",
        odpowiedzi: [
            "text-weight",
            "font-weight",
            "font-size",
            "text-size"
        ],
        poprawna: "B"
    },
    {
        id: 716,
        pytanie: "Aby w języku CSS ustawić czerwony kolor dla tekstu można użyć stylu",
        odpowiedzi: [
            "color: rgb(255,0,0);",
            "color: rgb(#FF0000);",
            "text-color: rgb(255,0,0);",
            "text-color: rgb(#FF0000);"
        ],
        poprawna: "A"
    },
    {
        id: 717,
        pytanie: "Za pomocą, którego zapisu zostanie utworzony w dokumencie HTML element wyświetlający obraz kotek.jpg z tekstem alternatywnym \"obrazek kotka\"?",
        odpowiedzi: [
            "<img href=\"kotek.jpg\" title=\"obrazek kotka\">",
            "<img src=\"kotek.jpg\" title=\"obrazek kotka\">",
            "<img href=\"kotek.jpg\" alt=\"obrazek kotka\">",
            "<img src=\"kotek.jpg\" alt=\"obrazek kotka\">"
        ],
        poprawna: "D"
    },
    {
        id: 718,
        pytanie: "Wskaż poprawne stwierdzenie dotyczące przedstawionego kodu HTML.",
        odpowiedzi: [
            "Plik animacja.mp4 musi mieć rozdzielczość 640x480 pikseli, aby mógł być uruchomiony.",
            "Użytkownik nie będzie miał możliwości sterowania odtwarzaniem animacji.",
            "Kod może nie działać w przeglądarce, jeśli nie obsługuje ona HTML5.",
            "Lokalizacja pliku jest niepoprawna, nie zawiera ścieżki bezwzględnej."
        ],
        poprawna: "C",
        obraz: "718.jpg"
    },
    {
        id: 719,
        pytanie: "Które zdarzenie pozwala wykonać kod w języku JavaScript w chwili wysyłania formularza HTML i zablokować lub pozwolić na jego wysłanie?",
        odpowiedzi: [
            "onClick",
            "onEnter",
            "onSubmit",
            "onChange"
        ],
        poprawna: "C"
    },
    {
        id: 720,
        pytanie: "W kodzie JavaScript pobrano element za pomocą metody getElementById. Aby zmodyfikować zawartość (treść) elementu można użyć właściwości",
        odpowiedzi: [
            "Body",
            "HTML",
            "innerBody",
            "innerHTML"
        ],
        poprawna: "D"
    },
    {
        id: 721,
        pytanie: "Przedstawiona linia kodu zapisana językiem PHP ma za zadanie",
        odpowiedzi: [
            "porównać dwa napisy.",
            "przypisać dwie wartości do tablicy.",
            "zdefiniować stałą o nazwie OSOBA.",
            "zdefiniować wartość dla zmiennej $OSOBA."
        ],
        poprawna: "C",
        obraz: "721.jpg"
    },
    {
        id: 722,
        pytanie: "Walidacja pól formularzy polega na sprawdzeniu",
        odpowiedzi: [
            "czy użytkownik jest zalogowany.",
            "który użytkownik wprowadził dane.",
            "czy istnieje plik PHP, który odbierze dane.",
            "czy wprowadzone dane spełniają określone reguły."
        ],
        poprawna: "D"
    },
    {
        id: 723,
        pytanie: "Zgodnie z regułami walidacji HTML5, poprawnym zapisem znacznika hr jest",
        odpowiedzi: [
            "<hr>",
            "</hr>",
            "</hr?>",
            "</hr/>"
        ],
        poprawna: "A"
    },
    {
        id: 724,
        pytanie: "Użytkownik wprowadził adres nieistniejącego zasobu na serwerze. Próba połączenia wygeneruje błąd",
        odpowiedzi: [
            "400",
            "404",
            "500",
            "503"
        ],
        poprawna: "B"
    },
    {
        id: 725,
        pytanie: "Program o nazwie FileZilla pozwala na",
        odpowiedzi: [
            "uruchomienie testów aplikacji.",
            "walidację plików HTML i CSS.",
            "załadowanie baz danych do strony CMS Jommla!",
            "publikację strony internetowej na odległym serwerze."
        ],
        poprawna: "D"
    },
    {
        id: 726,
        pytanie: "Który odnośnik jest prawidłowo zdefiniowany?",
        odpowiedzi: [
            "<a src=\"www.strona.pl\">strona</a>",
            "<a href=http://strona.pl>strona</a>",
            "<a href=\"http::/strona.pl>strona</a>",
            "<a href=\"http://strona.pl\">strona</a>"
        ],
        poprawna: "D"
    },
    {
        id: 727,
        pytanie: "W którym standardzie języka hipertekstowego zostały wprowadzone do składni znaczniki sekcji <footer>, <header>, <nav>?",
        odpowiedzi: [
            "HTML4",
            "HTML5",
            "XHTML1.0",
            "XHTML2.0"
        ],
        poprawna: "B"
    },
    {
        id: 728,
        pytanie: "Selektor klasy w kaskadowych arkuszach stylów należy zdefiniować za pomocą symbolu",
        odpowiedzi: [
            ". (kropka)",
            ": (dwukropek)",
            "#",
            "*"
        ],
        poprawna: "A"
    },
    {
        id: 729,
        pytanie: "W języku CSS, aby uzyskać efekt pochylenia tekstu, należy użyć właściwości",
        odpowiedzi: [
            "font-size",
            "font-style",
            "font-family",
            "font-variant"
        ],
        poprawna: "B"
    },
    {
        id: 730,
        pytanie: "Dla którego akapitu zastosowano przedstawioną właściwość stylu CSS?\nborder-radius: 20%;",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "730.jpg"
    },
    {
        id: 731,
        pytanie: "Aby za pomocą CSS zdefiniować przedstawione opływanie obrazu tekstem należy w stylu obrazu wprowadzić zapis",
        odpowiedzi: [
            "float: left;",
            "table: left;",
            "clear: both;",
            "float: right;"
        ],
        poprawna: "D",
        obraz: "731.jpg"
    },
    {
        id: 732,
        pytanie: "Pojęcie \"front-end\" stosowane w kontekście tworzenia stron WWW odnosi się do",
        odpowiedzi: [
            "organizowania informacji na serwerze WWW.",
            "bazy danych z informacjami publikowanymi na stronie.",
            "działania skryptów i programów wykonywanych po stronie serwera WWW.",
            "interfejsu strony internetowej związanego z technologiami działającymi po stronie przeglądarki internetowej."
        ],
        poprawna: "D"
    },
    {
        id: 733,
        pytanie: "Który zestaw pojęć definiuje interfejs użytkownika strony internetowej?",
        odpowiedzi: [
            "Wysyłanie kwerend do bazy, skrypty PHP.",
            "Przyciski, menu, interakcja użytkownika z aplikacją.",
            "Szkic strony, diagram witryny, diagram przepływu informacji.",
            "Przetwarzanie informacji, system zarządzania treścią, projektowanie informacji."
        ],
        poprawna: "B"
    },
    {
        id: 734,
        pytanie: "Na rysunku pokazano schemat rozmieszczenia bloków na stronie WWW, w której jego części umieszcza się zwykle stopkę strony?",
        odpowiedzi: [
            "1",
            "2",
            "4",
            "5"
        ],
        poprawna: "D",
        obraz: "734.jpg"
    },
    {
        id: 735,
        pytanie: "Aby zweryfikować poprawność składni kodu CSS można użyć",
        odpowiedzi: [
            "debbugera",
            "walidatora",
            "konsolidatora",
            "optymalizatora"
        ],
        poprawna: "B"
    },
    {
        id: 736,
        pytanie: "Który z poniższych przykładów kodu HTML5 zostanie zakwalifikowany przez walidator HTML jako błędny?",
        odpowiedzi: [
            "<p class= \"stl\">tekst</p>",
            "<p class= \"stl\" id= \"a\">tekst</p>",
            "<p class= \"stl\" style = \"color: #F00 \">tekst</p>",
            "<p class= \"stl\"><style>.a{color:#F00}</style>tekst</p>"
        ],
        poprawna: "D"
    },
    {
        id: 737,
        pytanie: "Aby bezpiecznie przesłać pliki strony internetowej na serwer WWW można użyć protokołu",
        odpowiedzi: [
            "POP3",
            "SFTP",
            "TELNET",
            "IMAP"
        ],
        poprawna: "B"
    },
    {
        id: 738,
        pytanie: "Kolor zielony, w notacji szesnastkowej skróconej, można zapisać w CSS sekwencją",
        odpowiedzi: [
            "#F00",
            "#0F0",
            "#00F",
            "#FFF"
        ],
        poprawna: "B"
    },
    {
        id: 739,
        pytanie: "Składowymi modelu barw CMYK są kolory:",
        odpowiedzi: [
            "czerwony, zielony i niebieski.",
            "cyjan, magenta, żółty i czarny.",
            "cyjan, magenta, żółty i karmazyn.",
            "czerwony, zielony, niebieski i kanał alfa."
        ],
        poprawna: "B"
    },
    {
        id: 740,
        pytanie: "Powstające podczas zapisu pliku graficznego prostokątne zniekształcenia obrazu są charakterystyczne dla formatu",
        odpowiedzi: [
            "BMP bez kompresji",
            "GIF z kompresją bezstratną LZW.",
            "PNG z kompresją bezstratną LZ77.",
            "JPEG z dużym stopniem kompresji stratnej."
        ],
        poprawna: "D",
        obraz: "740.jpg"
    },
    {
        id: 741,
        pytanie: "Który rastrowy format graficzny jest obsługiwany przez przeglądarki internetowe?",
        odpowiedzi: [
            "PCX",
            "TGA",
            "PNG",
            "FLIF"
        ],
        poprawna: "C"
    },
    {
        id: 742,
        pytanie: "Proporcje obrazu 16:9 (przy założeniu, że piksel ma kształt kwadratu) można uzyskać przy rozdzielczości",
        odpowiedzi: [
            "320 na 240 pikseli.",
            "800 na 480 pikseli.",
            "1366 na 768 pikseli.",
            "2560 na 2048 pikseli."
        ],
        poprawna: "C"
    },
    {
        id: 743,
        pytanie: "Który z wymienionych formatów umożliwia zapis dźwięku i obrazu?",
        odpowiedzi: [
            "MP3",
            "MP4",
            "PNG",
            "WAV"
        ],
        poprawna: "B"
    },
    {
        id: 744,
        pytanie: "Podczas strumieniowego przesyłania cyfrowego materiału wideo parametrem wpływającym na jakość obrazu i dźwięku jest przepływność. Wielkość ta opisuje liczbę",
        odpowiedzi: [
            "próbek dźwięku w jednostce czasu.",
            "pikseli obrazu wyświetlanych na ekranie.",
            "bitów transmitowanych w jednostce czasu.",
            "pikseli wyświetlanego obrazu wyrażoną ilorazem jego długości do wysokości."
        ],
        poprawna: "C"
    },
    {
        id: 745,
        pytanie: "Funkcja COUNT języka SQL realizuje",
        odpowiedzi: [
            "zliczanie znaków w polu tekstowym.",
            "zliczanie rekordów wybranych kwerendą.",
            "obliczenie średniej wartości w wybranej kolumnie.",
            "obliczenie wartości bezwzględnej w polu liczbowym."
        ],
        poprawna: "B"
    },
    {
        id: 746,
        pytanie: "Ustalenie relacji pomiędzy tabelami w systemie bazodanowym MySQL umożliwia klauzula",
        odpowiedzi: [
            "INDEX",
            "ORDER BY",
            "REFERENCES",
            "PRIMARY KEY"
        ],
        poprawna: "C"
    },
    {
        id: 747,
        pytanie: "Aby wyświetlić rekordy z tabeli pracownicy tylko dla pracowników, którzy skończyli 26 lat należy użyć zapytania",
        odpowiedzi: [
            "SELECT * FROM pracownicy OR wiek > 25;",
            "SELECT * FROM pracownicy AND wiek > 25;",
            "SELECT * FROM wiek WHERE pracownicy > 25;",
            "SELECT * FROM pracownicy WHERE wiek > 25;"
        ],
        poprawna: "D"
    },
    {
        id: 748,
        pytanie: "W bazach danych relacja wiele-do-wielu pomiędzy tabelami występuje, gdy",
        odpowiedzi: [
            "wielu wierszom tabeli A przypada wiele wierszy tabeli B.",
            "wielu wierszom z tabeli A przypada tylko jeden wiersz tabeli B.",
            "jednemu wierszowi z tabeli A może odpowiadać wiele wierszy w tabeli B.",
            "jednemu wierszowi z tabeli A może odpowiadać wyłącznie jeden wiersz wtabeli B."
        ],
        poprawna: "A"
    },
    {
        id: 749,
        pytanie: "Aby zaimportować plik z danymi SQL do bazy danych MySQL można użyć narzędzia",
        odpowiedzi: [
            "FileZilla",
            "Symfony 3.",
            "phpMyAdmin.",
            "TotalCommander."
        ],
        poprawna: "C"
    },
    {
        id: 750,
        pytanie: "Aby w systemie MySQL nadać użytkownikowi prawo do nadawania i zmiany uprawnień innym użytkownikom należy zastosować klauzulę",
        odpowiedzi: [
            "TRGGER",
            "GRANT OPTION",
            "ALL PRIVILEGES",
            "FLUSH PRIVILEGES"
        ],
        poprawna: "B"
    },
    {
        id: 751,
        pytanie: "Aby wykonać kopię zapasową bazy danych MySQL można posłużyć się",
        odpowiedzi: [
            "importem bazy.",
            "eksportem bazy.",
            "agregacją danych.",
            "modyfikacją danych."
        ],
        poprawna: "B"
    },
    {
        id: 752,
        pytanie: "Którą integralność opisuje cytowana definicja?  \"... polega na wprowadzeniu i utrzymaniu powiązań pomiędzy tabelami. Związki te tworzy się przez umieszczenie kolumny pełniącej rolę klucza głównego tabeli w innej tabeli, co nadaje kolumnie funkcję klucza obcego.\"",
        odpowiedzi: [
            "Encji.",
            "Statyczną.",
            "Referencyjną.",
            "Semantyczną."
        ],
        poprawna: "C"
    },
    {
        id: 753,
        pytanie: "Czynnością zalecaną przed wykonaniem kopii bezpieczeństwa danych w bazie MySQL jest",
        odpowiedzi: [
            "sprawdzenie czy baza jest dostatecznie wydajna.",
            "zdefiniowanie systemu kodowania znaków w bazie.",
            "nadanie uprawnień do przeglądania bazy dla Administratora.",
            "sprawdzenie integralności bazy i ewentualnie jej naprawa."
        ],
        poprawna: "D"
    },
    {
        id: 754,
        pytanie: "Zmienna typu integer lub int może przechowywać",
        odpowiedzi: [
            "znak.",
            "ciąg znaków.",
            "liczbę całkowitą.",
            "liczbę rzeczywistą."
        ],
        poprawna: "C"
    },
    {
        id: 755,
        pytanie: "Wskaż typ złożony",
        odpowiedzi: [
            "char",
            "bool",
            "float",
            "class"
        ],
        poprawna: "D"
    },
    {
        id: 756,
        pytanie: "Wskaż instrukcję iteracyjną",
        odpowiedzi: [
            "for",
            "else",
            "throw",
            "switch"
        ],
        poprawna: "A"
    },
    {
        id: 757,
        pytanie: "Debugger to oprogramowanie, którego zadaniem jest",
        odpowiedzi: [
            "instalowanie środowiska programistycznego.",
            "wykrywanie błędów składniowych języka programowania w kodzie źródłowym.",
            "łączenie plików bibliotek i wstępnie przetworzonego kodu źródłowego w plik wykonywalny.",
            "dynamiczna analiza uruchomionego programu w celu wykrycia przyczyn nieprawidłowego działania."
        ],
        poprawna: "D"
    },
    {
        id: 758,
        pytanie: "Którą wartość będzie przechowywała zmienna a po wykonaniu przedstawionej sekwencji instrukcji języka PHP?",
        odpowiedzi: [
            "1",
            "10",
            "11",
            "12"
        ],
        poprawna: "C",
        obraz: "758.jpg"
    },
    {
        id: 759,
        pytanie: "Który framework został opracowany dla skryptowego języka PHP?",
        odpowiedzi: [
            "Spring.",
            "Angular.",
            "Symfony.",
            "ASP.NET"
        ],
        poprawna: "C"
    },
    {
        id: 760,
        pytanie: "Formularz, którego fragment przedstawiono, został obsłużony w skrypcie PHP. Wskaż prawidłowo zapisane pobranie wartości wprowadzonej do pola edycyjnego",
        odpowiedzi: [
            "name = GET['imie'];",
            "name = $ _ GET[imie];",
            "$name = $POST['Imię'];",
            "$name = $ _ POST['imie'];"
        ],
        poprawna: "D",
        obraz: "760.jpg"
    },
    {
        id: 761,
        pytanie: "Aby przetestować poprawność działania kodu JavaScript należy użyć",
        odpowiedzi: [
            "interpretera PHP.",
            "kompilatora C++.",
            "interpretera PERL.",
            "konsoli w przeglądarce internetowej."
        ],
        poprawna: "D"
    },
    {
        id: 762,
        pytanie: "Wskaż komentarz wieloliniowy w języku PHP",
        odpowiedzi: [
            "#",
            "/ /",
            "/* */",
            "<!-- -->"
        ],
        poprawna: "C"
    },
    {
        id: 763,
        pytanie: "CAPTCHA to technika zabezpieczeń na stronach WWW pozwalająca",
        odpowiedzi: [
            "przyspieszyć proces logowania do aplikacji internetowej.",
            "pominąć proces uwierzytelniania do aplikacji internetowej.",
            "potwierdzić, że dane z formularza są wysyłane przez człowieka.",
            "automatycznie wypełnić formularz logowania danymi użytkownika."
        ],
        poprawna: "C"
    },
    {
        id: 764,
        pytanie: "Wskaż znacznik HTML pozwalający na zapisanie tekstu nieprawidłowego lub nieodpowiedniego w sposób \nprzekreślony.",
        odpowiedzi: [
            "< s > < /s >",
            "< b > < /b >",
            "< em > < /em >",
            "< sub > < /sub >"
        ],
        poprawna: "A"
    },
    {
        id: 765,
        pytanie: "Element < meta charset=\"utf-8\" > jest stosowany do określenia metadanych strony internetowej dotyczących",
        odpowiedzi: [
            "opisu strony",
            "języka strony",
            "słów kluczowych",
            "kodowania znaków"
        ],
        poprawna: "D"
    },
    {
        id: 766,
        pytanie: "W języku HTML zdefiniowano listę, która",
        odpowiedzi: [
            "jest punktowana z zagłębioną listą numerowaną",
            "jest numerowana z zagłębioną listą punktową",
            "nie ma zagłębień i jest punktowana, wyświetla 5 punktów",
            "nie ma zagłębień i jest numerowana, słowo \"niebieski\" ma przyporządkowany numer 5"
        ],
        poprawna: "B",
        obraz: "766.jpg"
    },
    {
        id: 767,
        pytanie: "Jaką szerokość strony pozostawiono na jej treść, na podstawie przedstawionej definicji CSS?",
        odpowiedzi: [
            "2 px",
            "560 px",
            "600 px",
            "640 px"
        ],
        poprawna: "B",
        obraz: "767.jpg"
    },
    {
        id: 768,
        pytanie: "Algorytm sortowania tablicy polegający na n-krotnym porównywaniu ze sobą dwóch sąsiadujących \nelementów tablicy i zamianie miejscami w przypadku spełnienia warunku jest nazywany sortowaniem",
        odpowiedzi: [
            "szybkim",
            "przez wybór",
            "bąbelkowym",
            "przez scalanie"
        ],
        poprawna: "C"
    },
    {
        id: 769,
        pytanie: "W sklepie z farbami jest ustalony schemat wyliczania ceny farby: za kolor niebieski i zielony przy pojemności\n2 litry cena farby jest równa cenie bazowej + 20%. Wyrażenie logiczne zapisane w języku JavaScript \nsprawdzające tę regułę ma postać",
        odpowiedzi: [
            "kolor = 'niebieski' || kolor = 'zielony' && pojemnosc = 2",
            "(kolor = 'niebieski' || kolor = 'zielony') || pojemnosc = 2",
            "kolor == 'niebieski' && kolor == 'zielony' && pojemnosc == 2",
            "(kolor == 'niebieski' || kolor == 'zielony') && pojemnosc == 2"
        ],
        poprawna: "D"
    },
    {
        id: 770,
        pytanie: "Instrukcją równoważną funkcjonalnie do przedstawionej instrukcji JavaScript jest",
        odpowiedzi: [
            "kod 1",
            "kod 2",
            "kod 3",
            "kod 4"
        ],
        poprawna: "B",
        obraz: "770.jpg"
    },
    {
        id: 771,
        pytanie: "Zmienna typu double może przyjąć wartości",
        odpowiedzi: [
            "\"Ala\"; 'd'",
            "1,44; 2,55",
            "2.4; 4; 3.2",
            "1979-12-05; 12:33"
        ],
        poprawna: "C"
    },
    {
        id: 772,
        pytanie: "W języku JavaScript metoda Math.random() ma za zadanie",
        odpowiedzi: [
            "porównać dwa napisy",
            "zwrócić zaokrągloną liczbę",
            "zwrócić liczbę pseudolosową",
            "zaokrąglić liczbę do najbliższej większej całkowitej"
        ],
        poprawna: "C"
    },
    {
        id: 773,
        pytanie: "Jaki będzie efekt wykonania przedstawionych instrukcji JavaScript?",
        odpowiedzi: [
            "Tylko dla elementu o id równym styl1 zostanie przypisany styl pogrubienia tekstu na bolder",
            "Dla wszystkich elementów na stronie zostanie przypisany styl pogrubienia tekstu na bolder",
            "Dla wszystkich elementów przypisanych do klasy styl1 zostanie nadany styl pogrubienia tekstu bolder",
            "Tylko dla pierwszego elementu przypisanego do klasy styl1 zostanie nadany styl pogrubienia tekstu\nbolder"
        ],
        poprawna: "C",
        obraz: "773.jpg"
    },
    {
        id: 774,
        pytanie: "Po wykonaniu przedstawionego kodu JavaScript działającego na wcześniej zainicjalizowanej tablicy liczby\nw zmiennej wynik jest przechowywana suma",
        odpowiedzi: [
            "dodatnich elementów tablicy",
            "wszystkich elementów tablicy",
            "parzystych elementów tablicy",
            "nieparzystych elementów tablicy"
        ],
        poprawna: "C",
        obraz: "774.jpg"
    },
    {
        id: 775,
        pytanie: "Ile iteracji zrealizuje przedstawiona pętla zapisana w języku PHP?",
        odpowiedzi: [
            "0",
            "5",
            "25",
            "26"
        ],
        poprawna: "B",
        obraz: "775.jpg"
    },
    {
        id: 776,
        pytanie: "Przedstawiona funkcja zapisana w języku PHP",
        odpowiedzi: [
            "zwraca wartość",
            "nie zwraca wartości",
            "pobiera dwa parametry z domyślną wartością",
            "jest zdefiniowana z dwoma parametrami rzeczywistymi"
        ],
        poprawna: "A",
        obraz: "776.jpg"
    },
    {
        id: 777,
        pytanie: "Po wykonaniu przedstawionego kodu PHP w zmiennej $napis jest przechowywany ciąg znaków",
        odpowiedzi: [
            "gr",
            "og",
            "gramo",
            "ogram"
        ],
        poprawna: "C",
        obraz: "777.jpg"
    },
    {
        id: 778,
        pytanie: "Przedstawiony błąd, wygenerowany podczas interpretacji kodu PHP, może być spowodowany",
        odpowiedzi: [
            "odwołaniem się do niezadeklarowanej zmiennej",
            "niepowodzeniem wydania kwerendy na bazie danych",
            "próbą odwołania się do nieistniejącego elementu tablicy",
            "brakiem bazy danych o nazwie wskazanej w funkcji mysqli_connect"
        ],
        poprawna: "C",
        obraz: "778.jpg"
    },
    {
        id: 779,
        pytanie: "Wskaż wszystkie znaki umożliwiające komentowanie kodu języku PHP",
        odpowiedzi: [
            "jedynie /* */",
            "< ?php ? > oraz / /",
            "/* */ oraz < !-- -- >",
            "/* */ oraz / / oraz #"
        ],
        poprawna: "D"
    },
    {
        id: 780,
        pytanie: "W relacyjnych bazach danych encja jest reprezentowana przez",
        odpowiedzi: [
            "tabelę",
            "rekord",
            "relację",
            "kwerendę"
        ],
        poprawna: "A"
    },
    {
        id: 781,
        pytanie: "Wybrany minimalny zestaw atrybutów relacji, jednoznacznie identyfikujący każdy rekord tej relacji, \nprzyjmujący wartości niepowtarzalne i niepuste, nazywamy kluczem",
        odpowiedzi: [
            "obcym",
            "głównym",
            "złożonym",
            "kandydującym"
        ],
        poprawna: "B"
    },
    {
        id: 782,
        pytanie: "W tabeli mieszkancy z polami id, imie, nazwisko, ulica, numer, czynsz (wartość całkowita) należy wybrać \ndane osób mieszkających na ulicy Mickiewicza pod numerami 71, 72, 80, których czynsz jest niższy niż \n1000 zł. Klauzula WHERE do zapytania będzie miała postać",
        odpowiedzi: [
            "WHERE ulica = 'Mickiewicza' OR numer IN (71, 72, 80) OR czynsz < 1000",
            "WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) OR czynsz < 1000",
            "WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) AND czynsz < 1000",
            "WHERE ulica = 'Mickiewicza' AND numer > 70 AND numer < 81 OR czynsz < 1000"
        ],
        poprawna: "C"
    },
    {
        id: 783,
        pytanie: "Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, \nktórzy na swoim koncie mają najwięcej punktów (pole całkowite punkty)",
        odpowiedzi: [
            "SELECT nazwisko FROM klienci LIMIT 3;",
            "SELECT nazwisko FROM klienci ORDER BY punkty DESC LIMIT 3;",
            "SELECT nazwisko FROM klienci ORDER BY nazwisko DESC LIMIT 3;",
            "SELECT LIMIT 3 nazwisko FROM klienci ORDER BY nazwisko DESC;"
        ],
        poprawna: "B"
    },
    {
        id: 784,
        pytanie: "Z tabeli mieszkancy należy wybrać niepowtarzające się nazwy miast, w tym celu należy skorzystać \nz wyrażenia SQL zawierającego klauzulę",
        odpowiedzi: [
            "CHECK",
            "HAVING",
            "UNIQUE",
            "DISTINCT"
        ],
        poprawna: "D"
    },
    {
        id: 785,
        pytanie: "Tabela gory, której fragment przedstawiono, zawiera polskie pasma górskie wraz z ich szczytami. Wskaż kwerendę licząca dla każdego pasma górskiego średnią wysokość jego szczytów.",
        odpowiedzi: [
            "SELECT pasmo, AVG(wysokosc) FROM gory LIMIT pasmo;",
            "SELECT pasmo, AVG(wysokosc) FROM gory GROUP BY pasmo;",
            "SELECT pasmo, SUM(wysokosc) FROM gory GROUP BY pasmo;",
            "SELECT pasmo, COUNT(wysokosc) FROM gory ORDER BY pasmo;"
        ],
        poprawna: "B",
        obraz: "785.jpg"
    },
    {
        id: 786,
        pytanie: "Które dane zostaną wybrane w wyniku działania kwerendy na przedstawionych rekordach? \nSELECT id FROM samochody WHERE rocznik LIKE \"2%4\";",
        odpowiedzi: [
            "puste dane",
            "wszystkie id",
            "jedynie id równe 8",
            "pole id równe 7 oraz 8"
        ],
        poprawna: "D",
        obraz: "786.jpg"
    },
    {
        id: 787,
        pytanie: "Z przedstawionych tabel Artykuly i Autorzy należy wybrać jedynie nazwiska autorów i tytuły ich artykułów, \nktóre zostały ocenione na 5. Kwerenda wybierająca te dane ma postać",
        odpowiedzi: [
            "SELECT nazwisko, tytul FROM autorzy, artykuly WHERE ocena == 5;",
            "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id;",
            "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = \nartykuly.id;",
            "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id \nWHERE ocena = 5;"
        ],
        poprawna: "D",
        obraz: "787.jpg"
    },
    {
        id: 788,
        pytanie: "Podczas tworzenia tabeli produkty należy utworzyć pole cena będące reprezentacją ceny produktu. \nOdpowiedni typ dla tego pola, to",
        odpowiedzi: [
            "DECIMAL(10,2)",
            "INTEGER(11)",
            "TINYTEXT",
            "ENUM"
        ],
        poprawna: "A"
    },
    {
        id: 789,
        pytanie: "Tworząc tabelę, do pola które będzie przyjmowało kolejne liczby całkowite nadawane automatycznie, należy \ndodać własność",
        odpowiedzi: [
            "NULL",
            "NOT NULL",
            "PRIMARY KEY",
            "AUTO_INCREMENT"
        ],
        poprawna: "D"
    },
    {
        id: 790,
        pytanie: "Aby użyć zewnętrznego skryptu JavaScript o nazwie skrypt.js, należy zapisać w kodzie HTML",
        odpowiedzi: [
            "<link rel=\"script\" href=\"skrypt.js\" />",
            "<script src=\"skrypt.js\"></script>",
            "<link rel=\"JavaScript\" type=\"js\" href=\"skrypt.js\" />",
            "<script> skrypt.js </script>"
        ],
        poprawna: "B"
    },
    {
        id: 791,
        pytanie: "Sklep internetowy korzysta z tabeli faktury. Podczas tworzenia faktury nie zawsze pole dataPlatnosci jest \nwypełniane. Aby to naprawić, na koniec dnia należy wpisać aktualną datę do wierszy, w których to pole jest \npuste (niewypełnione). Można w tym celu posłużyć się kwerendą",
        odpowiedzi: [
            "UPDATE faktury SET dataPlatnosci=CURTIME() WHERE id = 3;",
            "UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataPlatnosci IS NULL;",
            "UPDATE faktury SET dataPlatnosci=CURTIME() WHERE dataPlatnosci IS NOT NULL;",
            "UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataplatnosci = '0000-00-\n00 ';"
        ],
        poprawna: "B"
    },
    {
        id: 792,
        pytanie: "Po wydaniu polecenia SQL prezentowanego w ramce użytkownik Ela będzie mógł",
        odpowiedzi: [
            "jedynie dodawać i modyfikować dane",
            "wykonywać wszystkie akcje na danych",
            "jedynie tworzyć i modyfikować strukturę tabel",
            "wykonywać wszystkie operacje na strukturze danych"
        ],
        poprawna: "B",
        obraz: "792.jpg"
    },
    {
        id: 793,
        pytanie: "Polecenie służące do sprawdzenia i optymalizacji bazy danych to",
        odpowiedzi: [
            "mysqlshow",
            "mysqldump",
            "mysqlcheck",
            "mysqlimport"
        ],
        poprawna: "C"
    },
    {
        id: 794,
        pytanie: "W języku HTML 5 atrybut action stosowany jest w znaczniku",
        odpowiedzi: [
            "< head >",
            "< body >",
            "< code >",
            "< form >"
        ],
        poprawna: "D"
    },
    {
        id: 795,
        pytanie: "Który wykaz znaczników definiujących przedstawiony projekt witryny w sposób semantyczny (znaczeniowy)\njest zgodny ze standardem HTML 5?",
        odpowiedzi: [
            "wykaz 1",
            "wykaz 2",
            "wykaz 3",
            "wykaz 4"
        ],
        poprawna: "D",
        obraz: "795.jpg"
    },
    {
        id: 796,
        pytanie: "O czym informuje przeglądarkę internetową zapis < !DOCTYPE html >?",
        odpowiedzi: [
            "Dokument został zapisany w języku HTML 4",
            "Dokument został zapisany w języku HTML 5",
            "W dokumencie wszystkie znaczniki są zapisywane wielkimi literami",
            "W dokumencie jest wymagane zamknięcie dla każdego znacznika, również samozamykającego"
        ],
        poprawna: "B"
    },
    {
        id: 797,
        pytanie: "W stylu CSS przedstawionym w ramce zdefiniowano klasę uzytkownik. Czcionką koloru niebieskiego na \nstronie będą zapisane",
        odpowiedzi: [
            "wszystkie paragrafy",
            "tylko znaczniki tekstowe typu < p >, < h1 >",
            "paragrafy, do których została przypisana klasa uzytkownik",
            "dowolne znaczniki w sekcji < body > z przypisaną klasą uzytkownik"
        ],
        poprawna: "C",
        obraz: "797.jpg"
    },
    {
        id: 798,
        pytanie: "Wskaż paragraf sformatowany przedstawionym stylem CSS.",
        odpowiedzi: [
            "paragraf 1",
            "paragraf 2",
            "paragraf 3",
            "paragraf 4"
        ],
        poprawna: "D",
        obraz: "798.jpg"
    },
    {
        id: 799,
        pytanie: "W arkuszu CSS zapisano przedstawione style. Jeżeli hiperłącze zostanie wybrane, to po powrocie na stronę \nto hiperłącze będzie w kolorze",
        odpowiedzi: [
            "żółtym",
            "zielonym",
            "brązowym",
            "czerwonym"
        ],
        poprawna: "D",
        obraz: "799.jpg"
    },
    {
        id: 800,
        pytanie: "Kolor zielony ma w notacji szesnastkowej wartość #008000. Wartość ta zapisana w notacji RGB to",
        odpowiedzi: [
            "rgb(0, 80, 0)",
            "rgb(0, 100, 0)",
            "rgb(0, 128, 0)",
            "rgb(0, 160, 0)"
        ],
        poprawna: "C"
    },
    {
        id: 801,
        pytanie: "Dla uzyskania przedstawionego efektu w edytorze grafiki rastrowej zastosowano",
        odpowiedzi: [
            "kanał alpha",
            "gradient liniowy",
            "gradient kołowy",
            "zmianę nasycenia"
        ],
        poprawna: "B",
        obraz: "801.jpg"
    },
    {
        id: 802,
        pytanie: "Przedstawiona ikona funkcji edytora grafiki rastrowej o nazwie „różdżka” umożliwia",
        odpowiedzi: [
            "zaznaczenie obszaru na podstawie koloru",
            "wybiórcze rozsmarowywanie koloru za pomocą pędzla",
            "pobranie wskazanego koloru i ustawienie go jako aktywny",
            "odręczne zaznaczanie obszarów przez przeciąganie po nich kursora"
        ],
        poprawna: "A",
        obraz: "802.jpg"
    },
    {
        id: 803,
        pytanie: "Testując skrypt JavaScript można wyświetlać w konsoli aktualnie przechowywane wartości zmiennych \nza pomocą funkcji",
        odpowiedzi: [
            "console.log()",
            "console.warn()",
            "console.error()",
            "console.count()"
        ],
        poprawna: "A"
    },
    {
        id: 804,
        pytanie: "Aby za pomocą skryptu JavaScript zmienić wartość cechy elementu opisanej językiem CSS, należy posłużyć \nsię szablonem zapisu",
        odpowiedzi: [
            "document.getElementById(id).innerHTML = < nowa wartość >;",
            "document.getElementById(id).< nazwa-atrybutu > = < nowa wartość >;",
            "document.getElementById(id).< nazwa właściwości > = < nowa wartość >;",
            "document.getElementById(id).style.< nazwa właściwości > = < nowa wartość >;"
        ],
        poprawna: "D"
    },
    {
        id: 805,
        pytanie: "W której tablicy superglobalnej w środowisku PHP powinno się przechowywać dane związane z logowaniem \nużytkownika w sposób zapewniający ich bezpieczeństwo?",
        odpowiedzi: [
            "$ _ SESSION",
            "$ _ SERVER",
            "$ _ COOKIE",
            "$ _ FILES"
        ],
        poprawna: "A"
    },
    {
        id: 806,
        pytanie: "W wyniku walidacji dokumentu HTML został wygenerowany błąd przedstawiony na zrzucie. Aby go \nwyeliminować należy",
        odpowiedzi: [
            "dodać atrybut alt do obrazu",
            "zamienić zapis < /h1 > na < h1 >",
            "w znaczniku img zamienić nazwę atrybutu src na alt",
            "w znaczniku img zamienić nazwę atrybutu src na href"
        ],
        poprawna: "A",
        obraz: "806.jpg"
    },
    {
        id: 807,
        pytanie: "Program FileZilla może zostać wykorzystany do",
        odpowiedzi: [
            "walidacji strony internetowej",
            "publikacji strony internetowej na serwerze",
            "zarządzania bazami danych strony internetowej",
            "zmiany domyślnych ustawień hostingu dla strony internetowej"
        ],
        poprawna: "B"
    },
    {
        id: 808,
        pytanie: "Które z poleceń algorytmu odpowiada graficznej reprezentacji bloku przedstawionego na obrazie?",
        odpowiedzi: [
            "n > 70",
            "n ← n - 3",
            "wypisz w konsoli zmienną n",
            "wykonaj podprogram sortowania tablicy t"
        ],
        poprawna: "B",
        obraz: "808.jpg"
    },
    {
        id: 809,
        pytanie: "Metoda projektowania algorytmów, polegająca na podziale problemu na dwa lub więcej mniejszych \npodproblemów, tak długo aż fragmenty staną się wystarczająco proste do bezpośredniego rozwiązania, to",
        odpowiedzi: [
            "dziel i zwyciężaj",
            "sito Eratostenesa",
            "słowa Fibonacciego",
            "sortowanie przez wybór"
        ],
        poprawna: "A"
    },
    {
        id: 810,
        pytanie: "Program zapisany w języku C++ ma za zadanie wczytać zmienną całkowitą liczba i wyświetlić ją wtedy, gdy \nprzyjmuje trzycyfrowe wartości parzyste. Instrukcja warunkowa sprawdzająca ten warunek powinna zawierać \nwyrażenie logiczne",
        odpowiedzi: [
            "liczba % 2 == 0 || liczba > 99 || liczba < 999",
            "liczba % 2 == 0 && liczba > 99 && liczba < 999",
            "liczba % 2 == 0 || (liczba > 99 && liczba < 999)",
            "liczba % 2 == 0 && (liczba > 99 || liczba < 999)"
        ],
        poprawna: "B"
    },
    {
        id: 811,
        pytanie: "Wskaż instrukcję równoważną funkcjonalnie do instrukcji while zapisanej w języku PHP.",
        odpowiedzi: [
            "Instrukcja 1",
            "Instrukcja 2",
            "Instrukcja 3",
            "Instrukcja 4"
        ],
        poprawna: "C",
        obraz: "811.jpg"
    },
    {
        id: 812,
        pytanie: "Co będzie wynikiem po wywołaniu przedstawionego skryptu?",
        odpowiedzi: [
            "Nie wyświetli się żaden napis",
            "Wyświetli się tylko napis „test1”",
            "Wyświetli się tylko napis „test2”",
            "Wyświetlą się oba napisy: „test1” i „test2”"
        ],
        poprawna: "D",
        obraz: "812.jpg"
    },
    {
        id: 813,
        pytanie: "W języku C++ zdefiniowano zmienną char zm1[10];\nZmienna ta jest",
        odpowiedzi: [
            "liczbą",
            "znakiem",
            "tablicą znaków",
            "tablicą łańcuchów"
        ],
        poprawna: "C"
    },
    {
        id: 814,
        pytanie: "Która definicja tablicy asocjacyjnej w języku PHP jest poprawna składniowo?",
        odpowiedzi: [
            "$wiek = array(\"Anna\"=35, \"Ewa\"=37, \"Oliwia\"=43);",
            "$wiek = array([Anna, 35], [Ewa, 37], [Oliwia, 43]);",
            "$wiek = array(\"Anna\"=>\"35\", \"Ewa\"=>\"37\", \"Oliwia\"=>\"43\");",
            "$wiek = array({\"Anna\", \"35\"}, {\"Ewa\", \"37\"}, {\"Oliwia\", \"43\"});"
        ],
        poprawna: "C"
    },
    {
        id: 815,
        pytanie: "W języku JavaScript, aby sprawdzić jednym poleceniem czy dany napis zawiera w sobie inny napis, można \nskorzystać z metody",
        odpowiedzi: [
            "repeat()",
            "substr()",
            "valueOf()",
            "includes()"
        ],
        poprawna: "D"
    },
    {
        id: 816,
        pytanie: "W jaki sposób w języku PHP należy ustawić zmienną sesji o nazwie wyborID na wartość 4?",
        odpowiedzi: [
            "session.wyborID = 4;",
            "session.wyborID = {4};",
            "$ _SESSION[4] = wyborID;",
            "$ _SESSION[\"wyborID\"] = 4;"
        ],
        poprawna: "D"
    },
    {
        id: 817,
        pytanie: "W języku PHP zmienna $ _SERVER przechowuje między innymi informacje o",
        odpowiedzi: [
            "danych dotyczących sesji",
            "adresie IP serwera, nazwie protokołu",
            "danych formularza przetwarzanego na serwerze.",
            "nazwie ciasteczek zapisanych na serwerze i danych z nimi związanych"
        ],
        poprawna: "B"
    },
    {
        id: 818,
        pytanie: "Którą wartość zwróci funkcja zapisana w języku C++, jeżeli jej parametrami są a = 4 oraz b = 3?",
        odpowiedzi: [
            "1",
            "12",
            "16",
            "64"
        ],
        poprawna: "D",
        obraz: "818.jpg"
    },
    {
        id: 819,
        pytanie: "Program PHP wyświetla aktualny czas w postaci godzina:minuta:sekunda, np. 15:38:20. Czas sformatowany \nw ten sposób zostanie zwrócony przez funkcję",
        odpowiedzi: [
            "date(\"H:i:s\");",
            "date(\"G:m:s\");",
            "time(\"H:i:s\");",
            "time(\"G:m:s\");"
        ],
        poprawna: "A"
    },
    {
        id: 820,
        pytanie: "Które wyrażenie należy wstawić w miejsce ??? w pętli zapisanej w języku C++, aby zostały wyświetlone \njedynie elementy tablicy tab",
        odpowiedzi: [
            "i > = 6",
            "i < - 6",
            "i < 6",
            "i > 6"
        ],
        poprawna: "C",
        obraz: "820.jpg"
    },
    {
        id: 821,
        pytanie: "Który zapis definiuje w języku JavaScript komentarz jednoliniowy?",
        odpowiedzi: [
            "#",
            "?",
            "/ /",
            "/*"
        ],
        poprawna: "C"
    },
    {
        id: 822,
        pytanie: "Z relacji przedstawionej na obrazie można wyczytać, że jest ona relacją",
        odpowiedzi: [
            "wiele do wielu pomiędzy kluczami głównymi obu tabel",
            "jeden do wielu, gdzie kluczem obcym jest pole w tabeli uslugi",
            "jeden do wielu, gdzie kluczem obcym jest pole w tabeli kadra",
            "Jeden do jednego, gdzie obie tabele mają zdefiniowane klucze obce"
        ],
        poprawna: "B",
        obraz: "822.jpg"
    },
    {
        id: 823,
        pytanie: "Które z mechanizmów są niezbędne dla Systemu Zarządzania Bazą Danych?",
        odpowiedzi: [
            "Wielodostępność danych",
            "Pakiety do tworzenia statystyk",
            "System zarządzania wersjami bazy",
            "Przystawka do wizualizacji diagramów encji"
        ],
        poprawna: "A"
    },
    {
        id: 824,
        pytanie: "Za pomocą której kwerendy w bazie MariaDB można wybrać artykuły, których ceny zawierają się \nw przedziale obustronnie domkniętym < 10, 20 >?",
        odpowiedzi: [
            "SELECT * FROM Artykuly WHERE Cena IN (10, 20);",
            "SELECT * FROM Artykuly WHERE Cena LIKE 1%, 2%;",
            "SELECT * FROM Artykuly WHERE Cena BETWEEN 10 AND 20;",
            "SELECT * FROM Artykuly WHERE Cena > 10 AND Cena < 20;"
        ],
        poprawna: "C"
    },
    {
        id: 825,
        pytanie: "Z bazy danych należy zwrócić zapytaniem SQL nazwiska pracowników, którzy są kierownikami, a ich pensja \nznajduje się w przedziale jednostronnie domkniętym (3000, 4000 >. Która z klauzul bada ten warunek?",
        odpowiedzi: [
            "WHERE kierownik = true OR pensja > 3000 OR pensja <= 4000;",
            "WHERE kierownik = true AND pensja => 3000 OR pensja < 4000;",
            "WHERE kierownik = true AND pensja > 3000 AND pensja <= 4000;",
            "WHERE kierownik = true AND pensja => 3000 AND pensja <= 4000;"
        ],
        poprawna: "C"
    },
    {
        id: 826,
        pytanie: "Tabela odloty zawiera rekordy przedstawione na obrazie. Zastosowanie zapytania SQL spowoduje \nzwrócenie danych:",
        odpowiedzi: [
            "5; 8",
            "3; 5; 8",
            "4; 5; 6; 7; 8",
            "zbiór pusty"
        ],
        poprawna: "A",
        obraz: "826.jpg"
    },
    {
        id: 827,
        pytanie: "W bazie MySQL zdefiniowano podczas tworzenia tabeli pole id. Wpis AUTO_INCREMENT oznacza, że",
        odpowiedzi: [
            "dozwolone jest dodawanie rekordu z dowolną wartością pola id",
            "pole id będzie mogło przyjmować wartości: NULL, 1, 2, 3, 4 i tak dalej",
            "wartości pola będą automatycznie generowane podczas dodawania nowego rekordu do bazy",
            "wartość pola id zostanie automatycznie nadana przez bazę i będzie to wygenerowana losowo liczba \ncałkowita"
        ],
        poprawna: "C",
        obraz: "827.jpg"
    },
    {
        id: 828,
        pytanie: "Tabele: Firmy i Zamowienia są powiązane relacją jeden do wielu. Aby wybrać jedynie id zamówienia wraz \nz odpowiadającą mu nazwą firmy dla firm, których poziom jest równy 4, należy zastosować polecenie",
        odpowiedzi: [
            "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy WHERE poziom = 4;",
            "SELECT id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.Firmy_id = \nFirmy.id WHERE poziom = 4;",
            "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.id = \nFirmy.id WHERE poziom = 4;",
            "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON \nZamowienia.Firmy_id = Firmy.id WHERE poziom = 4;"
        ],
        poprawna: "D",
        obraz: "828.jpg"
    },
    {
        id: 829,
        pytanie: "Typowym narzędziem SZBD służącym do generowania zestawień danych w celu ich wydrukowania jest",
        odpowiedzi: [
            "raport",
            "makro",
            "formularz",
            "kwerenda UPDATE"
        ],
        poprawna: "A"
    },
    {
        id: 830,
        pytanie: "W języku SQL usunięcie wszystkich danych z tabeli bez usuwania samej tabeli możliwe jest za pomocą \npolecenia",
        odpowiedzi: [
            "DROP",
            "ALTER",
            "UPDATE",
            "TRUNCATE"
        ],
        poprawna: "D"
    },
    {
        id: 831,
        pytanie: "Pole autor w tabeli ksiazka jest",
        odpowiedzi: [
            "kluczem głównym tabeli ksiazka",
            "kluczem obcym związanym z tabelą autorzy",
            "polem wykorzystanym przy relacji z tabelą dane",
            "polem typu napisowego zawierającym dane o autorze"
        ],
        poprawna: "B",
        obraz: "831.jpg"
    },
    {
        id: 832,
        pytanie: "W bazie danych MySQL, aby wyświetlić wszystkie prawa nadane użytkownikowi anna, można posłużyć się \npoleceniem",
        odpowiedzi: [
            "GRANT * TO anna;",
            "SHOW GRANTS FOR anna;",
            "SELECT GRANTS FOR anna;",
            "REVOKE GRANTS FROM anna;"
        ],
        poprawna: "B"
    },
    {
        id: 833,
        pytanie: "Aby wstawić dane do bazy za pomocą polecenia PHP w jego parametrach należy przekazać",
        odpowiedzi: [
            "id wiersza w $zm1 i zapytanie INSERT INTO w $zm2",
            "identyfikator połączenia z bazą danych w $zm1 i zapytanie SELECT w $zm2",
            "NULL w $zm1, aby baza zapisała tam kod błędu i zapytanie SELECT w $zm2",
            "identyfikator połączenia z bazą danych w $zm1 i zapytanie INSERT INTO w $zm2"
        ],
        poprawna: "D",
        obraz: "833.jpg"
    },
    {
        id: 834,
        pytanie: "W aplikacji PHP obsługującej bazę danych, aby po wykonaniu dowolnej operacji otrzymać numer błędu oraz \njego opis, należy zastosować",
        odpowiedzi: [
            "tylko funkcję mysqli_error",
            "funkcje mysqli_error i mysqli_errno",
            "funkcje mysqli_error i mysqli_error_number",
            "funkcje mysqli_error i mysqli_connect_errno"
        ],
        poprawna: "B"
    },
    {
        id: 835,
        pytanie: "Na obrazie przedstawiono projekt układu bloków witryny internetowej. Zakładając, że bloki są realizowane \nza pomocą znaczników sekcji, a szerokość została zdefiniowana jedynie dla bloków 2, 3 i 4, ich formatowanie, \npowinno zawierać właściwość",
        odpowiedzi: [
            "float: left dla wszystkich bloków.",
            "clear: both dla wszystkich bloków.",
            "float: left jedynie dla bloków 3 i 4 i clear: both dla bloku 2",
            "clear: both dla bloku 5 i float: left jedynie dla bloków 2, 3 i 4"
        ],
        poprawna: "D",
        obraz: "835.jpg"
    },
    {
        id: 836,
        pytanie: "Na obrazie przedstawiono tabelę ze scalonymi komórkami. Które atrybuty scalania zastosowano, aby \nuzyskać ten efekt?",
        odpowiedzi: [
            "rowspan w drugim wierszu i pierwszej komórce oraz colspan w trzecim \nwierszu, trzeciej komórce",
            "colspan w drugim wierszu i pierwszej komórce oraz rowspan w trzecim \nwierszu, trzeciej komórce",
            "colspan w drugim wierszu we wszystkich trzech komórkach oraz \nrowspan w trzecim wierszu ostatniej komórce",
            "colspan w drugim wierszu i pierwszej komórce oraz rowspan w trzecim \nwierszu i czwartym wierszu"
        ],
        poprawna: "B",
        obraz: "836.jpg"
    },
    {
        id: 837,
        pytanie: "Formularz wysyła dane do skryptu skrypt.php po wciśnięciu przycisku o treści „WYŚLIJ”. Wskaż poprawną \ndefinicję formularza.",
        odpowiedzi: [
            "skrypt 1",
            "skrypt 2",
            "skrypt 3",
            "skrypt 4"
        ],
        poprawna: "D",
        obraz: "837.jpg"
    },
    {
        id: 838,
        pytanie: "Które formatowanie obramowania odpowiada stylowi border-style: dotted solid;?",
        odpowiedzi: [
            "formatowanie 1",
            "formatowanie 2",
            "formatowanie 3",
            "formatowanie 4"
        ],
        poprawna: "B",
        obraz: "838.jpg"
    },
    {
        id: 839,
        pytanie: "Które pole edycyjne zostało sformatowane przedstawionym stylem zakładając, że pozostałe własności pola \nprzyjmują wartości domyślne, a użytkownik wpisał imię Krzysztof w przeglądarce?",
        odpowiedzi: [
            "pole 1",
            "pole 2",
            "pole 3",
            "pole 4"
        ],
        poprawna: "B",
        obraz: "839.jpg"
    },
    {
        id: 840,
        pytanie: "Które zdanie dotyczące antyaliasingu jest prawdziwe?",
        odpowiedzi: [
            "Antyaliasing to jeden z filtrów wyostrzających obraz",
            "Antyaliasing stosuje się na obrazach, w celu dodania przezroczystości",
            "Za pomocą antyaliasingu można pozbyć się tak zwanego schodkowania obrazu",
            "Zastosowanie antyaliasingu odnosi się do krzywych Beziera w grafice wektorowej"
        ],
        poprawna: "C"
    },
    {
        id: 841,
        pytanie: "Przedstawiona transformacja obrazu rastrowego jest możliwa dzięki funkcji",
        odpowiedzi: [
            "barwienie",
            "desaturacja",
            "jasność i kontrast",
            "redukcja kolorów"
        ],
        poprawna: "A",
        obraz: "841.jpg"
    },
    {
        id: 842,
        pytanie: "Który ze skryptów wyświetla aktualną datę oraz czas, w formacie przedstawionym na obrazie?",
        odpowiedzi: [
            "< ?php date(\"Y-m-d”) + time(\"G:i:s\"); ? >",
            "< ?php echo date(\"Y-m-d G:i:s\"); ? >",
            "< ?php echo date(\"Ymd Gis\"); ? >",
            "< ?php date(\"Y-m-d G:i:s\"); ? >"
        ],
        poprawna: "B",
        obraz: "842.jpg"
    },
    {
        id: 843,
        pytanie: "Efektem wielokrotnego wykonania kodu PHP jest",
        odpowiedzi: [
            "zliczanie liczby odwiedzin strony",
            "wyświetlenie ciasteczka z zapisaną zmienną",
            "zapisanie do ciasteczka wartości 1 za każdym odświeżeniem witryny",
            "zapisanie danych do ciasteczka jedynie przy pierwszym uruchomieniu strony"
        ],
        poprawna: "A",
        obraz: "843.jpg"
    },
    {
        id: 844,
        pytanie: "Aby za pomocą JavaScript w witrynie internetowej wyświetlić aktualną datę i czas można posłużyć się \ninstrukcją",
        odpowiedzi: [
            "echo Date();",
            "innerHTML = Date();",
            "echo Date() + Time();",
            "document.write(Date());"
        ],
        poprawna: "D"
    },
    {
        id: 845,
        pytanie: "Brak którego elementu języka HTML wygeneruje błąd walidatora HTML5?",
        odpowiedzi: [
            "< body >",
            "przynajmniej jednego < h1 >",
            "prologu < !DOCTYPE html >",
            "< meta name=\"author\" content=\"....\" >"
        ],
        poprawna: "C"
    },
    {
        id: 846,
        pytanie: "Program FileZilla może posłużyć do",
        odpowiedzi: [
            "interpretacji kodu PHP",
            "walidacji strony internetowej",
            "publikowania strony internetowej",
            "testowania prędkości wczytywania strony"
        ],
        poprawna: "C"
    },
    {
        id: 847,
        pytanie: "Która lista zostanie wyświetlona w przeglądarce po wykonaniu kodu HTML>",
        odpowiedzi: [
            "Lista 4",
            "Lista 1",
            "Lista 2",
            "Lista 3"
        ],
        poprawna: "D",
        obraz: "847.jpg"
    },
    {
        id: 848,
        pytanie: "Który rodzaj komunikatu jest zawsze przekazywany tylko pionowo w dół, czyli od przełożonego do podwładnego?",
        odpowiedzi: [
            "Powierzenie zadania",
            "Poszukiwanie rozwiązań",
            "Uwagi o polityce organizacji",
            "Raportowanie"
        ],
        poprawna: "A"
    },
    {
        id: 849,
        pytanie: "Tabela programy zawiera pola: nazwa_programu, nazwa_producenta, rok_wydania. Aby kwerenda SELECT wybrała wszystkie nazwy producentó tak, by nazwy te nie powtarzały się, należy zapisać:",
        odpowiedzi: [
            "SELECT nazwa_producenta FROM programy WHERE nazwa_producenta NOT DUPLICATE;",
            "SELECT DISTINCT nazwa_producenta FROM programy;",
            "SELECT UNIQUE nazwa_producenta FROM programy;",
            "SELECT nazwa_producenta FROM programy WHERE UNIQUE;"
        ],
        poprawna: "B"
    },
    {
        id: 850,
        pytanie: "Za pomocą przedstawionego polecenia można",
        odpowiedzi: [
            "utworzyć kopię zapasową tabeli sklep",
            "sprawdzić spójność bazy danych sklep",
            "naprawić błędy w tabeli sklep",
            "utworzyć kopię zapasową bazy danych sklep"
        ],
        poprawna: "D",
        obraz: "850.jpg"
    },
    {
        id: 851,
        pytanie: "Prześladowanie, uporczywe nękanie i zastraszanie, stosowanie przemocy psychicznej wobec podwładnego lub współpracownika w miejscu pracy, to",
        odpowiedzi: [
            "dyskryminacja",
            "manipulacja",
            "mobbing",
            "perswazja"
        ],
        poprawna: "C"
    },
    {
        id: 852,
        pytanie: "Który znak ostrzegawczy określa strefę ochronną w otoczeniu źródła pola elektromagnetycznego?",
        odpowiedzi: [
            "Znak 1",
            "Znak 2",
            "Znak 3",
            "Znak 4"
        ],
        poprawna: "C",
        obraz: "852.jpg"
    },
    {
        id: 853,
        pytanie: "Na stronie WWW zdefiniowano rysunek, następnie akapit. Aby rysunek został umieszczony przez przeglądarkę w tej samej linii co akapit, po lewej stronie akapitu, należy w stylu CSS dla rysunku zapisać własność:",
        odpowiedzi: [
            "float: left;",
            "style: left;",
            "align: left;",
            "alt: left;"
        ],
        poprawna: "A"
    },
    {
        id: 854,
        pytanie: "W ramce przedstawiono zapisane w języku CSS formatowanie selektora. Zakładając, że żadne inne formatowanie nie jest dodane, wskaż sposób formatowania znaczniki h1",
        odpowiedzi: [
            "Efekt 1",
            "Efekt 2",
            "Efekt 3",
            "Efekt 4"
        ],
        poprawna: "B",
        obraz: "854.jpg"
    },
    {
        id: 855,
        pytanie: "Który z podanych formatów można zapisać materiał wideo wraz ze ścieżką dźwiękową?",
        odpowiedzi: [
            "MP4",
            "AAC",
            "WMA",
            "WAV"
        ],
        poprawna: "A"
    },
    {
        id: 856,
        pytanie: "Wskaż wynik wykonania skryptu PHP",
        odpowiedzi: [
            "czarny, zielony, niebieski, biały,",
            "zielony, niebieski, czarny, biały,",
            "biały, niebieski, zielony, czarny,",
            "biały, czarny, niebieski, zielony,"
        ],
        poprawna: "B",
        obraz: "856.jpg"
    },
    {
        id: 857,
        pytanie: "Który z wymienionych poniżej języków jest typowo front-endowy (wykonywany po stronie klienta)?",
        odpowiedzi: [
            "Perl",
            "PHP",
            "CSS",
            "Node.js"
        ],
        poprawna: "C"
    },
    {
        id: 858,
        pytanie: "O zmiennej predefiniowanej $ _POST z języka PHP można powiedzieć, że",
        odpowiedzi: [
            "zawiera dane przesłane do skryptu z formularza",
            "jest kopią tablicy $ _COOKIE",
            "jest rozszerzoną wersją tablicy $ _SESSION",
            "zawiera dane bezpośrednio przesłane do skryptu z ciasteczka"
        ],
        poprawna: "A"
    },
    {
        id: 859,
        pytanie: "Dana jest tabela uczniowie, do której wpisano rekordy jak na rysunku. Co będzie wynikiem działania przedstawionego zapytania SQL?",
        odpowiedzi: [
            "Suma ocen równa 14",
            "Wartość 3.5",
            "Liczba wierszy równa 4",
            "Dane 4, 3, 4, 3"
        ],
        poprawna: "B",
        obraz: "859.jpg"
    },
    {
        id: 860,
        pytanie: "Wynikiem wykonania przedstawionego kodu PHP jest wypisanie wartości",
        odpowiedzi: [
            "147",
            "47",
            "136",
            "14"
        ],
        poprawna: "A",
        obraz: "860.jpg"
    },
    {
        id: 861,
        pytanie: "W języku CSS przypisano regułę: float:left; dla bloku. Reguła ta zostanie wykorzystana do",
        odpowiedzi: [
            "wyrównania tekstu do lewej strony",
            "ustawienia bloków jeden pod drugim",
            "ustawienia bloku na lewo względem innych",
            "wyrównanie elementów tabeli do lewej strony"
        ],
        poprawna: "C"
    },
    {
        id: 862,
        pytanie: "Dokonując konwersji obrazu z 8 bitową głębią kolorów na obraz z 4 bitową głębią, liczba kolorów zmniejszy się o",
        odpowiedzi: [
            "256",
            "24",
            "240",
            "16"
        ],
        poprawna: "C"
    },
    {
        id: 863,
        pytanie: "Jaką wartość przyjmie zmienna x po wykonaniu kodu PHP przedstawionego w ramce?",
        odpowiedzi: [
            "Liczby wierszy dodanych do tabeli produkty",
            "Liczby wierszy przetworzonych zapytaniem DELETE FROM",
            "Liczby wierszy tabeli produkty, dla których pole status jest większe od zera",
            "Liczby wierszy znajdujących się w bazie danych"
        ],
        poprawna: "B",
        obraz: "863.jpg"
    },
    {
        id: 864,
        pytanie: "W języku PHP przekierowanie użytkownika na inną stronę WWW jest możliwe za pomocą funkcji",
        odpowiedzi: [
            "require();",
            "include();",
            "upload();",
            "header();"
        ],
        poprawna: "D"
    },
    {
        id: 865,
        pytanie: "W języku HTML, aby scalić w poziomie dwie sąsiednie komórki w wierszu tabeli należy zastosować atrybut",
        odpowiedzi: [
            "cellpadding",
            "cellspacing",
            "colspan",
            "rowspan"
        ],
        poprawna: "C"
    },
    {
        id: 866,
        pytanie: "Które z formatowań NIE JEST wyrażone w języku CSS?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "866.jpg"
    },
    {
        id: 867,
        pytanie: "Kod JavaScript wywołany zdarzeniem kliknięcia przycisku ma za zadanie",
        odpowiedzi: [
            "zamienić obraz1.gif na obraz2.gif",
            "wyświetlić obraz2.gif obok obraz1.gif",
            "zmienić styl obrazu o id równym i1",
            "ukryć obraz2.gif"
        ],
        poprawna: "A",
        obraz: "867.jpg"
    },
    {
        id: 868,
        pytanie: "Podane polecenie SQL ma za zadanie",
        odpowiedzi: [
            "Ustawić na 1 wartość pola Uczen",
            "zwiększyć o jeden wartość kolumny id_klasy dla wszystkich rekordów tabeli Uczen",
            "ustawić wartość kolumny id_klasy na 1 dla wszystkich rekordów w tabeli Uczen",
            "zwiększyć o jeden wartość pola Uczen"
        ],
        poprawna: "B",
        obraz: "868.jpg"
    },
    {
        id: 869,
        pytanie: "Która z wymienionych zasad NIE WPŁYNIE korzystnie na zwiększenie czytelności kodu?",
        odpowiedzi: [
            "W każdej linii kodu powinna występować tylko jedna instrukcja",
            "Kod powinien być napisany bez wcięć i zbędnych enterów",
            "Należy wprowadzać komentarze w trudniejszych częściach kodu",
            "Nazwy zmiennych powinny odzwierciedlać ich zadanie"
        ],
        poprawna: "B"
    },
    {
        id: 870,
        pytanie: "W języku PHP należy zapisać warunek, który będzie spełniony, gdy zmienna $a będzie dowolną liczbą całkowitą mniejszą od -10 lub gdy zmienna $b będzie dowolną liczbą z przedziału (25, 75). Wyrażenie logiczne użyte w tym warunku ma postać",
        odpowiedzi: [
            "($a < -10) and (($b > 25) or ($b < 75))",
            "($a < -10) or (($b > 25) or ($b < 75))",
            "($a < -10) or (($b > 25) and ($b < 75))",
            "($a < -10) and (($b > 25) and ($b < 75))"
        ],
        poprawna: "C"
    },
    {
        id: 871,
        pytanie: "Baza danych zawiera tabele artykuły z polami: nazwa, typ, producent, cena. Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie",
        odpowiedzi: [
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 AND 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena FROM 1000 TO 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena BETWEEN 1000 AND 1500;",
            "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 OR 1500;"
        ],
        poprawna: "C"
    },
    {
        id: 872,
        pytanie: "W języku SQL, aby zaktualizować dane w wierszach tabeli, należy zastosować polecenie",
        odpowiedzi: [
            "UPDATE",
            "SELECT",
            "ALTER TABLE",
            "INSERT INTO"
        ],
        poprawna: "A"
    },
    {
        id: 873,
        pytanie: "Kodowanie polskich znaków można zdefiniować w języku HTML za pomocą",
        odpowiedzi: [
            "atrybutu znacznika <p>",
            "znacznika <charset>",
            "atrybutu znacznika <meta>",
            "znacznika <title>"
        ],
        poprawna: "C"
    },
    {
        id: 874,
        pytanie: "Poprawny zapis znacznika <img>, za pomocą którego można umieścić na stronie internetowej obraz rys.jpg przeskalowany do szerokości 120 px i wysokości 80 px z tekstem alternatywnym \"krajobraz\" to",
        odpowiedzi: [
            "<img href=\"rys.jpg\" height=\"120px\" width=\"80px\" info=\"krajobraz\"/>",
            "<img src=\"rys.jpg\" height=\"120px\" width=\"80px\" info=\"krajobraz\"/>",
            "<img src=\"rys.jpg\" width=\"120px\" height=\"80px\" alt=\"krajobraz\"/>",
            "<img image=\"rys.jpg\" width=\"120px\" height=\"80px\" alt=\"krajobraz\"/>"
        ],
        poprawna: "C"
    },
    {
        id: 875,
        pytanie: "Które z podanych par znaczników HTML mają wizualnie to samo działanie na stronie internetowej, jeżeli żadne style CSS NIE ZOSTAŁY zdefiniowane",
        odpowiedzi: [
            "<p> i <h2>",
            "<meta> i <title>",
            "<b> i <big>",
            "<b> i <strong>"
        ],
        poprawna: "D"
    },
    {
        id: 876,
        pytanie: "Aby edytować dane w bazie danych można posłużyć się",
        odpowiedzi: [
            "filtrowaniem",
            "kwerendą SELECT",
            "formularzem",
            "raportem"
        ],
        poprawna: "C"
    },
    {
        id: 877,
        pytanie: "Kwerenda ma za zadanie w tabeli artykuly",
        odpowiedzi: [
            "usunąć kolumnę cena typu float",
            "dodać kolumnę cena o typie float, jeśli nie istnieje",
            "zmienić typ na float dla kolumny cena",
            "zmienić nazwę kolumny z cena na float"
        ],
        poprawna: "C",
        obraz: "877.jpg"
    },
    {
        id: 878,
        pytanie: "W tabeli pracownicy zdefiniowano klucz główny typu INTEGER z atrybutami NOT NULL oraz AUTO_INCREMENT. Ponadto zdefiniowano pola imie oraz nazwisko. W przypadku zastosowania przedstawionej kwerendy SQL wprowadzającej dane, w której zostało pominięte pole klucza, w bazie danych MySQL nastąpi",
        odpowiedzi: [
            "zignorowanie polecenia, tabela pozostanie bez zmian",
            "wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona wartość NULL",
            "błąd nieprawidłowej liczby pól",
            "wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona kolejna wartość naturalna"
        ],
        poprawna: "D",
        obraz: "878.jpg"
    },
    {
        id: 879,
        pytanie: "Aby obsłużyć połączenie z bazą MySQL podczas tworzenia aplikacji internetowej, można wykorzystać język",
        odpowiedzi: [
            "HTML",
            "PHP",
            "XHTML",
            "CSS"
        ],
        poprawna: "B"
    },
    {
        id: 880,
        pytanie: "Tabele Osoby i Adresy są połączone relacją jeden do wielu. Jakie zapytanie SQL należy zapisać, aby korzystając z tej relacji, prawidłowo wyświetlić nazwiska oraz przyporządkowane im miasta?",
        odpowiedzi: [
            "SELECT nazwisko, Miasto FROM Osoby JOIN Adresy ON Osoby.Adresy_id=Adresy.id;",
            "SELECT nazwisko, Miasto FROM Osoby.Adresy_id=Adresy.id FROM Osoby, Adresy;",
            "SELECT nazwisko, Miasto FROM Osoby, Adresy;",
            "SELECT nazwisko, Miasto FROM Osoby, Adresy WHERE Osoby.id=Adresy.id;"
        ],
        poprawna: "A",
        obraz: "880.jpg"
    },
    {
        id: 881,
        pytanie: "W stylu CSS aby zadeklarować krój czcionki, należy użyć właściwości",
        odpowiedzi: [
            "font-face",
            "font-style",
            "font-size",
            "font-family"
        ],
        poprawna: "D"
    },
    {
        id: 882,
        pytanie: "Która informacja dotycząca przedstawionego kodu jest prawdziwa?",
        odpowiedzi: [
            "Zostanie wypisany komunikat \"OlaAla\"",
            "W zmiennej $a wartość \"Ala\" zostanie zamieniona na wartość \"Ola\"",
            "Znak \"=\" jest operatorem porównania dwóch zmiennych",
            "Znak kropki \".\" jest operatorem konkatenacji"
        ],
        poprawna: "D",
        obraz: "882.jpg"
    },
    {
        id: 883,
        pytanie: "Dana jest tabela uczniowie o polach id, imie, nazwisko, data_ur (format rrrr-mm-dd). Które zapytanie w języku SQL wyświetli tylko imiona i nazwiska uczniów urodzonych w 2001 roku?",
        odpowiedzi: [
            "SELECT imie, nazwisko FROM uczniowie WHERE data_ur like \"2001-%-%\"",
            "SELECT * FROM uczniowie WHERE data_ur like \"2001\"",
            "SELECT id, imie, nazwisko, data_ur FROM uczniowie WHERE data_ur like \"2001-*-*\"",
            "SELECT * FROM uczniowie WHERE data_ur == 2001-%-%"
        ],
        poprawna: "A"
    },
    {
        id: 884,
        pytanie: "Fragment kodu SQL oznacza, że klucz obcy",
        odpowiedzi: [
            "jest referencją do samego siebie",
            "ustawiony jest na kolumnie obiekty",
            "znajduje się w tabeli obiekty",
            "łączy się z kolumną imiona"
        ],
        poprawna: "D",
        obraz: "884.jpg"
    },
    {
        id: 885,
        pytanie: "Który znacznik służy budowaniu hierarchii tekstu w języku HTML?",
        odpowiedzi: [
            "<u>",
            "<style>",
            "<head>",
            "<h6>"
        ],
        poprawna: "D"
    },
    {
        id: 886,
        pytanie: "Która z definicji CSS określa formatowanie nagłówka h1: tekst nadkreślony, z odstępami między wyrazami 10 px i czerwonym kolorem tekstu?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "886.jpg"
    },
    {
        id: 887,
        pytanie: "W języku CSS, należy zdefiniować tło dokumentu jako obraz rys.png. Obraz ma powtarzać się jedynie w poziomie. Którą definicję należy przypisać selektorowi body?",
        odpowiedzi: [
            "{background-image: url(\"rys.png\"); background-repeat: repeat-x;}",
            "{background-image: url(\"rys.png\"); background-repeat: round;}",
            "{background-image: url(\"rys.png\"); background-repeat: repeat-y;}",
            "{background-image: url(\"rys.png\"); background-repeat: repeat;}"
        ],
        poprawna: "A"
    },
    {
        id: 888,
        pytanie: "Za pomocą którego zapisu zostanie utworzony w dokumencie HTML element wyświetlający obraz kotek.jpg z tekstem alternatywnym \"obrazek kotka\"",
        odpowiedzi: [
            "<img src=\"kotek.jpg\" alt=\"obrazek kotka\">",
            "<img href=\"kotek.jpg\" title=\"obrazek kotka\">",
            "<img src=\"kotek.jpg\" title=\"obrazek kotka\">",
            "<img href=\"kotek.jpg\" alt=\"obrazek kotka\">"
        ],
        poprawna: "A"
    },
    {
        id: 889,
        pytanie: "Przedstawione formatowanie CSS, przy założeniu, że żadne inne formatowanie nie jest zdefiniowane, sprawi, że",
        odpowiedzi: [
            "marginesy wewnętrzne wszystkich komórek będą wynosiły 10 px",
            "margines wewnętrzny komórki z napisem Anna będzie miał 30 px, a z napisem Ewa – 10 px",
            "marginesy wewnętrzne wszystkich komórek będą wynosiły 30 px",
            "margines wewnętrzny komórki z napisem Anna będzie miał 10 px, a z napisem Ewa – 30 px"
        ],
        poprawna: "D",
        obraz: "889.jpg"
    },
    {
        id: 890,
        pytanie: "W języku JavaScript podany w ramce fragment funkcji ma za zadanie",
        odpowiedzi: [
            "wyświetlić wszystkie elementy tablicy",
            "wprowadzić do każdego elementu tablicy aktualną wartość zmiennej i",
            "policzyć sumę wszystkich elementów tablicy",
            "dodać do każdego elementu tablicy stałą wartość"
        ],
        poprawna: "C",
        obraz: "890.jpg"
    },
    {
        id: 891,
        pytanie: "W języku SQL, aby wstawić wiersz danych do bazy, należy zastosować polecenie",
        odpowiedzi: [
            "CREATE INTO",
            "CREATE ROW",
            "INSERT INTO",
            "SELECT ROW"
        ],
        poprawna: "C"
    },
    {
        id: 892,
        pytanie: "Wskaż kod CSS odpowiadający układowi bloków 2 - 5, zakładając, że są one zbudowane w oparciu o przedstawiony kod HTML",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "892.jpg"
    },
    {
        id: 893,
        pytanie: "Rozproszonym systemem kontroli wersji projektu programistycznego jest",
        odpowiedzi: [
            "GIT",
            "FileZilla",
            "TotalCommander",
            "Eclipse"
        ],
        poprawna: "A"
    },
    {
        id: 894,
        pytanie: "Jak zdefiniować w języku CSS takie formatowanie tabeli, żeby wiersz, na którym aktualnie znajduje się kursor myszy, zmieniał kolor tła na szary",
        odpowiedzi: [
            "tr:active { color: gray; }",
            "tr:active { background-color: gray; }",
            "tr:hover { background-color: gray; }",
            "tr:hover { color: gray; }"
        ],
        poprawna: "C"
    },
    {
        id: 895,
        pytanie: "Formatami Video obsługiwanymi w standardzie HTML5 są",
        odpowiedzi: [
            "Ogg, QuickTime",
            "Ogg, AVI, MPEG",
            "MP4, Ogg, WebM",
            "MP4, AVI"
        ],
        poprawna: "C"
    },
    {
        id: 896,
        pytanie: "Który z typów relacji wymaga utworzenia tabeli pośredniej łączącej klucze główne obu tabel?",
        odpowiedzi: [
            "1..n",
            "n..m",
            "n..1",
            "1..1"
        ],
        poprawna: "B"
    },
    {
        id: 897,
        pytanie: "W kodzie HTML przypisano pewne znaczniki do klasy o nazwie „nomargin”. Aby wykonać za pomocą języka JavaScript operacje na tych znacznikach, można posłużyć się funkcją",
        odpowiedzi: [
            "getElement(\"nomargin\")",
            "getElementById(\"nomargin\")",
            "getElementsByTagName(\"nomargin\")",
            "getElementsByClassName(\"nomargin\")"
        ],
        poprawna: "D"
    },
    {
        id: 898,
        pytanie: "Kompresja bezstratna pliku graficznego gwarantuje",
        odpowiedzi: [
            "lepszą jakość",
            "mniejszą liczbę warstw",
            "rozmiar większy niż grafika oryginalna",
            "pierwotną jakość grafiki"
        ],
        poprawna: "D"
    },
    {
        id: 899,
        pytanie: "Wskaż poprawny składniowo warunek zapisany w języku PHP i sprawdzający brak połączenia z bazą MySQL",
        odpowiedzi: [
            "if {mysql_connect_errno()}{}",
            "if {mysqli_connect_error()}{}",
            "if (mysqli_connect_errno()){}",
            "if (mysql_connect_error())()"
        ],
        poprawna: "C"
    },
    {
        id: 900,
        pytanie: "Tabele Osoby i Zainteresowania są połączone relacją jeden do wielu. Które zapytanie SQL należy zapisać, aby korzystając z tej relacji, prawidłowo wyświetlić imiona oraz odpowiadające im hobby?",
        odpowiedzi: [
            "SELECT imie, hobby FROM Osoby.Zainteresowania_id = Zainteresowania.id FROM Osoby, Zainteresowania;",
            "SELECT imie, hobby FROM Osoby, Zainteresowania;",
            "SELECT imie, hobby FROM Osoby JOIN Zainteresowania ON Osoby.Zainteresowania_id = Zainteresowania.id;",
            "SELECT imie, hobby FROM Osoby, Zainteresowania WHERE Osoby.id = Zainteresowania.id;"
        ],
        poprawna: "C",
        obraz: "900.jpg"
    },
    {
        id: 901,
        pytanie: "W języku HTML, aby wstawić na stronę obraz zapisany w formacie JPG, należy zastosować znacznik",
        odpowiedzi: [
            "<src>",
            "<img>",
            "<jpg>",
            "<table>"
        ],
        poprawna: "B"
    },
    {
        id: 902,
        pytanie: "Za pomocą, którego znacznika można wstawić listę numerowaną (uporządkowaną) w dokumencie HTML?",
        odpowiedzi: [
            "<li>",
            "<ul>",
            "<ol>",
            "<dl>"
        ],
        poprawna: "C"
    },
    {
        id: 903,
        pytanie: "W języku CSS zapis selektora p > i { color: red; } oznacza, że kolorem czerwonym zostanie sformatowany",
        odpowiedzi: [
            "jedynie ten tekst w znaczniku <i>, który jest umieszczony bezpośrednio wewnątrz znacznika <p>",
            "jedynie ten tekst znacznika <p>, do którego jest przypisana klasa o nazwie i",
            "każdy tekst w znaczniku <p> lub każdy tekst w znaczniku <i>",
            "każdy tekst w znaczniku <p> za wyjątkiem tych w znaczniku <i>"
        ],
        poprawna: "A"
    },
    {
        id: 904,
        pytanie: "Język PHP posiada obsługę",
        odpowiedzi: [
            "sesji i ciastek",
            "zdarzeń myszy",
            "zdarzeń klawiatury",
            "obiektów przeglądarki"
        ],
        poprawna: "A"
    },
    {
        id: 905,
        pytanie: "Tworząc tabelę w języku SQL zdefiniowano pole, którego wartości nie mogą się powtarzać. Do jego definicji należy zastosować atrybut",
        odpowiedzi: [
            "IDENTITY",
            "UNIQUE",
            "DEFAULT",
            "NOT NULL"
        ],
        poprawna: "B"
    },
    {
        id: 906,
        pytanie: "Aby wskazać błędy składniowe w kodzie HTML, należy zastosować",
        odpowiedzi: [
            "kompilator",
            "debugger",
            "interpreter",
            "walidator"
        ],
        poprawna: "D"
    },
    {
        id: 907,
        pytanie: "Projektując stronę internetową, umieszczono kod definiujący jej styl. Jaką szerokość pozostawiono na treść strony?",
        odpowiedzi: [
            "600 px",
            "640 px",
            "560 px",
            "2 px"
        ],
        poprawna: "C",
        obraz: "907.jpg"
    },
    {
        id: 908,
        pytanie: "Instrukcją pętli, która jest przeznaczona do wykonania określonej liczby operacji na pewnym obiekcie lub zmiennej niebędącej tablicą, jest",
        odpowiedzi: [
            "foreach",
            "if",
            "switch",
            "for"
        ],
        poprawna: "D"
    },
    {
        id: 909,
        pytanie: "Przedstawiona funkcja, zapisana językiem JavaScript, ma za zadanie",
        odpowiedzi: [
            "umożliwić przejście do wskazanej lokalizacji hosta",
            "wyświetlić w elemencie o id = \"info\" adres hosta wskazany pierwszym odnośnikiem",
            "wyświetlić na przycisku lokalizację hosta, a po jego wciśnięciu umożliwić przejście do wskazanej lokalizacji",
            "wyświetlić w elemencie o id = \"info\" nazwę hosta, z którego pochodzi wyświetlona strona"
        ],
        poprawna: "D",
        obraz: "909.jpg"
    },
    {
        id: 910,
        pytanie: "Która cecha grafiki wektorowej jest prawdziwa?",
        odpowiedzi: [
            "Raz utworzoną nie można edytować",
            "Grafika wektorowa jest niezależna od rozdzielczości",
            "Grafika wektorowa jest nieskalowalna",
            "Nie można przetworzyć ją na grafikę rastrową"
        ],
        poprawna: "B"
    },
    {
        id: 911,
        pytanie: "W języku PHP operatorem reszty z dzielenia jest:",
        odpowiedzi: [
            "&",
            "@",
            "%",
            "#"
        ],
        poprawna: "C"
    },
    {
        id: 912,
        pytanie: "W formularzu HTML zastosowano znacznik <input>. Wyświetlone pole będzie służyło do wprowadzania maksymalnie",
        odpowiedzi: [
            "20 znaków, które są widoczne podczas wprowadzania",
            "20 znaków, które nie są widoczne w polu tekstowym",
            "30 znaków, które nie są widoczne w polu tekstowym",
            "30 znaków, które są widoczne podczas wprowadzania"
        ],
        poprawna: "B",
        obraz: "912.jpg"
    },
    {
        id: 913,
        pytanie: "Wśród czterech podstawowych kolorów modelu barw CMYK jest",
        odpowiedzi: [
            "brązowy",
            "pomarańczowy",
            "zielony",
            "czarny"
        ],
        poprawna: "D"
    },
    {
        id: 914,
        pytanie: "Które z poleceń nadaje najniższy poziom uprawnień użytkownikowi uczen pod względem modyfikacji danych i struktury tabel?",
        odpowiedzi: [
            "GRANT ALTER, SELECT ON szkola.przedmioty TO uczen;",
            "GRANT SELECT ON szkola.przedmioty TO uczen;",
            "GRANT INSERT, DROP ON szkola.przedmioty TO uczen;",
            "GRANT DROP ON szkola.przedmioty TO uczen;"
        ],
        poprawna: "B"
    },
    {
        id: 915,
        pytanie: "W języku PHP, aby połączyć się z bazą danych MySQL przy pomocy biblioteki mysqli, stosując zamieszczony zapis, w miejscu litery 'c' należy zapisać",
        odpowiedzi: [
            "nazwę bazy danych",
            "nazwę użytkownika",
            "lokalizację serwera bazy danych",
            "hasło użytkownika"
        ],
        poprawna: "B",
        obraz: "915.jpg"
    },
    {
        id: 916,
        pytanie: "Aby w JavaScript wykonać wymienione kroki, należy w znaczniku <script> umieścić kod",
        odpowiedzi: [
            "A = prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \".A);",
            "A << prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);",
            "A = prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);",
            "A = alert(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);"
        ],
        poprawna: "C",
        obraz: "916.jpg"
    },
    {
        id: 917,
        pytanie: "Funkcja agregująca AVG użyta w zapytaniu ma za zadanie",
        odpowiedzi: [
            "zsumować koszt wszystkich usług",
            "obliczyć średnią arytmetyczną cen wszystkich usług",
            "wskazać najwyższą cenę za usługi",
            "policzyć ile jest usług dostępnych w tabeli"
        ],
        poprawna: "B",
        obraz: "917.jpg"
    },
    {
        id: 918,
        pytanie: "Kolorem o barwie niebieskiej jest kolor",
        odpowiedzi: [
            "#00EE00",
            "#EE0000",
            "#EE00EE",
            "#0000EE"
        ],
        poprawna: "D"
    },
    {
        id: 919,
        pytanie: "Zestaw komponentów i podprogramów służący pisaniu aplikacji, który ponadto narzuca szkielet wyglądu aplikacji, jej strukturę, a czasem nawet wzorzec według którego ma powstać aplikacja, to",
        odpowiedzi: [
            "komponent",
            "middleware",
            "biblioteka",
            "framework"
        ],
        poprawna: "D"
    },
    {
        id: 920,
        pytanie: "Rozwinięcie słowne akronimu ACID w SQL to",
        odpowiedzi: [
            "atomic, constaint, isolated, dependable",
            "atomic, consistent, isolated, durable",
            "atomic, consistent, iss, dependable",
            "atomic, comming, is, do"
        ],
        poprawna: "B"
    },
    {
        id: 921,
        pytanie: "Które dane z 8 rekordów wpisanych do tabeli zwierzeta zostaną wyświetlone w wyniku podanego zapytania SQL?",
        odpowiedzi: [
            "Anna Kowalska, Jan Nowak",
            "Dika, Fuks",
            "Figaro, Dika, Fuks",
            "Fafik, Brutus, Dika, Fuks"
        ],
        poprawna: "B",
        obraz: "921.jpg"
    },
    {
        id: 922,
        pytanie: "W języku JavaScript instrukcję a++; można inaczej zapisać jako",
        odpowiedzi: [
            "a&1",
            "1+=a",
            "a<<1",
            "a=a+1"
        ],
        poprawna: "D"
    },
    {
        id: 923,
        pytanie: "Z którym ze słów kluczowych programowania obiektowego w języku JavaScript wiąże się dostęp do pól i metod tylko z poziomu klasy, w której są zdefiniowane",
        odpowiedzi: [
            "static",
            "public",
            "private",
            "Żadne z powyższych, w JavaScript należy użyć #"
        ],
        poprawna: "D"
    },
    {
        id: 924,
        pytanie: "Przedstawiony na rysunku kolor zapisany w modelu RGB, w systemie szesnastkowym będzie zdefiniowany następująco",
        odpowiedzi: [
            "77A0C1",
            "76A3C1",
            "71A0B2",
            "77A1C1"
        ],
        poprawna: "A",
        obraz: "924.jpg"
    },
    {
        id: 925,
        pytanie: "Za pomocą której funkcji języka PHP można ustanowić połączenie z bazą danych o nazwie zwierzaki?",
        odpowiedzi: [
            "$polacz = server_connect('localhost', 'root','','zwierzaki');",
            "$polacz = mysqli_connect('localhost', 'root','','zwierzaki');",
            "$polacz = sql_connect('localhost', 'root','','zwierzaki');",
            "$polacz = db_connect('localhost', 'root','','zwierzaki');"
        ],
        poprawna: "B"
    },
    {
        id: 926,
        pytanie: "Aby zmienić maksymalną długość pola imie w tabeli klienci na 30 znaków, należy użyć w języku SQL następującego kodu",
        odpowiedzi: [
            "CHANGE TABLE klienci MODIFY imie CHAR(30);",
            "CHANGE TABLE klienci TO COLUMN imie SET CHAR(30);",
            "ALTER TABLE klienci MODIFY COLUMN imie VARCHAR(30);",
            "ALTER TABLE klienci CHANGE imie TEXT;"
        ],
        poprawna: "C"
    },
    {
        id: 927,
        pytanie: "Jeśli zmienna $x przechowuje dowolną liczbę naturalną dodatnią, przedstawiony kod źródłowy PHP ma za zadanie wyświetlić",
        odpowiedzi: [
            "kolejne liczby od x do 0",
            "liczby wczytywane z klawiatury, tak długo aż zostanie wczytana wartość x",
            "losowe liczby z przedziału (0, x)",
            "kolejne liczby od 0 do x-1"
        ],
        poprawna: "D",
        obraz: "927.jpg"
    },
    {
        id: 928,
        pytanie: "W języku JavaScript zdefiniowano obiekt. Aby dalej w kodzie modyfikować wartość właściwości x obiektu, należy zapisać",
        odpowiedzi: [
            "wsp.x = …",
            "x = …",
            "obiekt1::x = …",
            "obiekt1.x = …"
        ],
        poprawna: "D",
        obraz: "928.jpg"
    },
    {
        id: 929,
        pytanie: "Odpowiednia kolejność procesów przetwarzania analogowo-cyfrowego dźwięku to:",
        odpowiedzi: [
            "kwantyzacja, kodowanie, próbkowanie",
            "kwantyzacja, próbkowanie, kodowanie",
            "próbkowanie, kodowanie, kwantyzacja",
            "próbkowanie, kwantyzacja, kodowanie"
        ],
        poprawna: "D"
    },
    {
        id: 930,
        pytanie: "Na obrazie przedstawiono wybór formatu pliku importującego bazę danych. Którego formatu należy użyć, jeżeli dane są wyeksportowane z programu Excel i zapisane tekstowo z zastosowaniem przecinka do rozdzielenia wartości pól?",
        odpowiedzi: [
            "XML",
            "SQL",
            "ESRI",
            "CSV"
        ],
        poprawna: "D",
        obraz: "930.jpg"
    },
    {
        id: 931,
        pytanie: "Baza danych zawiera tabelę ksiazki o polach: tytul, id_autora, data_wypoz, id_czytelnika. Każdego dnia generowany jest raport książek wypożyczonych danego dnia. Wyświetlane są jedynie tytuły książek. Która z kwerend SQL posłuży do stworzenia tego raportu?",
        odpowiedzi: [
            "SELECT tytul, data_wypoz FROM ksiazki WHERE data_wypoz = CURRDATENT_E();",
            "SELECT * FROM ksiazki;",
            "SELECT tytul FROM ksiazki WHERE data_wypoz = CURRENT_DATE();",
            "SELECT tytul FROM ksiazki;"
        ],
        poprawna: "C"
    },
    {
        id: 932,
        pytanie: "W języku CSS zdefiniowano formatowanie dla pola edycyjnego. Tak formatowane pole edycyjne będzie miało jasnozielone tło",
        odpowiedzi: [
            "jeśli jest to pierwsze wystąpienie tego znacznika w dokumencie",
            "po kliknięciu myszą w celu zapisania w nim tekstu",
            "gdy zostanie wskazane kursorem myszy bez kliknięcia",
            "w każdym przypadku"
        ],
        poprawna: "B",
        obraz: "932.jpg"
    },
    {
        id: 933,
        pytanie: "W języku CSS zapisano wspólne formatowanie dla pewnej grupy znaczników. Formatowanie takich znaczników w kodzie HTML nastąpi przez atrybut",
        odpowiedzi: [
            "style = \"format1\"",
            "id = \"format1\"",
            "div = \"format1\"",
            "class = \"format1\""
        ],
        poprawna: "D",
        obraz: "933.jpg"
    },
    {
        id: 934,
        pytanie: "Formatem o najwyższej rozpiętości tonalnej wśród wymienionych jest",
        odpowiedzi: [
            "JPEG",
            "PNG",
            "RAW",
            "BMP"
        ],
        poprawna: "C"
    },
    {
        id: 935,
        pytanie: "Które z zadań programistycznych może być wykonane tylko po stronie klienta przeglądarki?",
        odpowiedzi: [
            "Bezpieczne wyświetlenie personalizowanej zawartości strony ze względu na prawa użytkownika aplikacji",
            "Zapisanie danych pobranych z formularza w bazie danych powiązanej z aplikacją internetową",
            "Sprawdzanie danych wpisywanych do pola tekstowego w czasie rzeczywistym",
            "Sprawdzenie hasła użytkownika w bazie danych powiązanej z aplikacją internetową"
        ],
        poprawna: "C"
    },
    {
        id: 936,
        pytanie: "Która instrukcja algorytmu odpowiada graficznej reprezentacji bloku przedstawionego na rysunku?",
        odpowiedzi: [
            "n > 20",
            "Wypisz n",
            "n ← n + 5",
            "Wykonaj podprogram sortowania tablicy t"
        ],
        poprawna: "A",
        obraz: "936.jpg"
    },
    {
        id: 937,
        pytanie: "Która z instrukcji języka JavaScript dokona zmiany koloru tekstu na niebieski w akapicie zdefiniowanym w dokumencie HTML?",
        odpowiedzi: [
            "document.getElementById(\"jeden\").style.color = \"blue\";",
            "document.getElementById(\"jeden\").style.background-color = \"blue\";",
            "document.getElementById(\"jeden\").color = \"blue\";",
            "document.getElementById(\"jeden\").background-color = \"blue\";"
        ],
        poprawna: "A",
        obraz: "937.jpg"
    },
    {
        id: 938,
        pytanie: "W języku SQL, po wykonaniu przedstawionych poleceń GRANT, prawo do zmiany struktury tabeli oraz jej usuwania zostanie przypisane",
        odpowiedzi: [
            "Adamowi i Annie",
            "Tomaszowi i Annie",
            "tylko Annie",
            "Tomaszowi i Adamowi"
        ],
        poprawna: "A",
        obraz: "938.jpg"
    },
    {
        id: 939,
        pytanie: "Dla których imion zastosowana w zapytaniu klauzula LIKE jest prawdziwa?",
        odpowiedzi: [
            "Arleta, Krzysztof, Krystyna, Tristan",
            "Gerald, Jarosław, Marek, Tamara",
            "Rafał, Rebeka, Renata, Roksana",
            "Krzysztof, Krystyna, Romuald"
        ],
        poprawna: "A",
        obraz: "939.jpg"
    },
    {
        id: 940,
        pytanie: "Grafik chce przekształcić bez utraty jakości obraz JPG w format PNG w ten sposób, żeby wszędzie tam, gdzie w pierwotnym obrazie jest kolor biały, w obrazie docelowym była przezroczystość. Aby to zrobić, powinien",
        odpowiedzi: [
            "przekształcić obraz w odcienie szarości",
            "zmniejszyć rozdzielczość obrazu",
            "dodać kanał alfa",
            "zaimportować obraz do edytora grafiki wektorowej"
        ],
        poprawna: "C"
    },
    {
        id: 941,
        pytanie: "Wskaż zapytanie SQL tworzące użytkownika sekretarka na localhost z hasłem zaq123",
        odpowiedzi: [
            "CREATE USER 'sekretarka'@'localhost' IDENTIFIED `zaq123`;",
            "CREATE USER `sekretarka`@`localhost` IDENTIFY BY `zaq123`;",
            "CREATE USER `sekretarka`@`localhost` IDENTIFY \"zaq123\";",
            "CREATE USER `sekretarka`@`localhost` IDENTIFIED BY 'zaq123';"
        ],
        poprawna: "D"
    },
    {
        id: 942,
        pytanie: "Która z funkcji SQL NIE pobiera argumentów?",
        odpowiedzi: [
            "upper",
            "now",
            "len",
            "year"
        ],
        poprawna: "B"
    },
    {
        id: 943,
        pytanie: "W którym z przypadków walidacja fragmentu kodu CSS przebiegnie pomyślnie?",
        odpowiedzi: [
            "<p style=\"font-size:bold;\">",
            "p { font-weight:bold; }",
            "<p style=\"font-style:bold;\">",
            "p { text-size:bold; }"
        ],
        poprawna: "B"
    },
    {
        id: 944,
        pytanie: "W języku JavaScript zadeklarowana zmienna i, która ma przechowywać wynik dzielenia wynoszący 1, to",
        odpowiedzi: [
            "var i = parseInt(3/2);",
            "var i = 3/2;",
            "var i = Number(3/2);",
            "var i = parseFloat(3/2);"
        ],
        poprawna: "A"
    },
    {
        id: 945,
        pytanie: "W języku HTML zapisano definicję tabeli. Który rysunek obrazuje efekt jej działania?",
        odpowiedzi: [
            "Rysunek 1",
            "Rysunek 2",
            "Rysunek 3",
            "Rysunek 4"
        ],
        poprawna: "A",
        obraz: "945.jpg"
    },
    {
        id: 946,
        pytanie: "W programie MS Access we właściwościach pola klasa należy ustawić maskę wprowadzania danych. Którą maskę należy podać, aby wprowadzone dane były złożone z trzech znaków w formacie: obowiązkowa cyfra, po niej obowiązkowe dwie litery?",
        odpowiedzi: [
            "000",
            "0CC",
            "CLL",
            "0LL"
        ],
        poprawna: "D",
        obraz: "946.jpg"
    },
    {
        id: 947,
        pytanie: "Który zapis definiuje w języku PHP komentarz wieloliniowy",
        odpowiedzi: [
            "#",
            "//",
            "<!-- -->",
            "/* */"
        ],
        poprawna: "D"
    },
    {
        id: 948,
        pytanie: "W programie do obróbki grafiki rastrowej zmodyfikowano krzywe kolorów tak, jak zaznaczono ramką na przedstawionym obrazie. Ma to na celu",
        odpowiedzi: [
            "rozjaśnienie całości obrazu",
            "wygładzenie krawędzi na obrazie",
            "modyfikację najjaśniejszych i najciemniejszych kolorów obrazu",
            "przyciemnienie całości obrazu"
        ],
        poprawna: "C",
        obraz: "948.jpg"
    },
    {
        id: 949,
        pytanie: "Pole insert_id zdefiniowane w bibliotece MySQLi języka PHP może być wykorzystane do",
        odpowiedzi: [
            "otrzymania id ostatnio wstawionego wiersza",
            "otrzymania kodu błędu, gdy proces wstawiania wiersza się nie powiódł",
            "pobrania pierwszego wolnego indeksu bazy, tak, aby można było pod nim wstawić nowe dane",
            "pobrania najwyższego indeksu bazy, aby po jego inkrementacji wstawić pod niego dane"
        ],
        poprawna: "A"
    },
    {
        id: 950,
        pytanie: "W języku HTML, aby utworzyć pole edycyjne do wpisywania hasła, w którym wpisywany tekst jest maskowany (zastępowany kropkami), należy użyć znacznika",
        odpowiedzi: [
            "<form=\"password\" type=\"password\" />",
            "<input type=\"password\" />",
            "<input name=\"password\" />",
            "<form input type=\"password\" />"
        ],
        poprawna: "B"
    },
    {
        id: 951,
        pytanie: "Które metody odnoszą się do predefiniowanego obiektu Date w języku JavaScript?",
        odpowiedzi: [
            "concat() oraz pop()",
            "row()",
            "getMonth() oraz getDay()",
            "fromCodePoint()"
        ],
        poprawna: "C"
    },
    {
        id: 952,
        pytanie: "Którego typu danych w bazie MySQL należy użyć, aby przechować w jednym polu datę i czas?",
        odpowiedzi: [
            "BOOLEAN",
            "TIMESTAMP",
            "DATE",
            "YEAR"
        ],
        poprawna: "B"
    },
    {
        id: 953,
        pytanie: "Dana jest tabela oceny o polach id, nazwisko, imie, ocena. Przedstawione zapytanie jest przykładem",
        odpowiedzi: [
            "łączenia",
            "selekcji",
            "sumy",
            "rekurencji"
        ],
        poprawna: "B",
        obraz: "953.jpg"
    },
    {
        id: 954,
        pytanie: "W przedstawionym fragmencie formularza HTML zdefiniowano pole input, o którym można powiedzieć, że",
        odpowiedzi: [
            "wyświetla wprowadzone do niego znaki",
            "ma wpisany domyślny tekst „pole”",
            "umożliwia wpisywanie tylko wartości liczbowych",
            "ukrywa wprowadzone do niego znaki"
        ],
        poprawna: "D",
        obraz: "954.jpg"
    },
    {
        id: 955,
        pytanie: "Znacznik <pre> </pre> jest stosowany w celu wyświetlenia",
        odpowiedzi: [
            "treści czcionką o stałej szerokości",
            "znaku wielokropka",
            "znaku przekreślenia",
            "treści polską czcionką"
        ],
        poprawna: "A"
    },
    {
        id: 956,
        pytanie: "W języku PHP zastosowano funkcję is_float(). Które z podanych wywołań tej funkcji zwróci wartość true",
        odpowiedzi: [
            "is_float(NULL)",
            "is_float(3.34)",
            "is_float('3,34')",
            "is_float(334)"
        ],
        poprawna: "B"
    },
    {
        id: 957,
        pytanie: "Aby dołączyć kaskadowy arkusz stylów zapisany w zewnętrznym pliku, należy użyć następującego fragmentu kodu HTML",
        odpowiedzi: [
            "<meta charset=\"styl.css\" />",
            "<div id=\"styl.css\" relation=\"css\" />",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"styl.css\" />",
            "<optionvalue=\"styl.css\" type=\"text/css\" />"
        ],
        poprawna: "C"
    },
    {
        id: 958,
        pytanie: "Tabela Pacjenci ma pola: imie, nazwisko, wiek, lekarz_id. Aby zestawić raport zawierający wyłącznie imiona i nazwiska pacjentów poniżej 18 roku życia, którzy zapisani są do lekarza o id równym 6, można posłużyć się kwerendą SQL",
        odpowiedzi: [
            "SELECT imie, nazwisko FROM Pacjenci WHERE wiek<18 AND lekarz_id=6;",
            "SELECT imie, nazwisko WHERE wiek<18 AND lekarz_id=6;",
            "SELECT imie, nazwisko WHERE wiek<18 OR lekarz_id=6;",
            "SELECT imie, nazwisko FROM Pacjenci WHERE wiek<18 OR lekarz_id=6;"
        ],
        poprawna: "A"
    },
    {
        id: 959,
        pytanie: "W języku SQL ustawienie klucza podstawowego na polu id w tabeli uczniowie możliwe jest za pomocą polecenia",
        odpowiedzi: [
            "INSERT TABLE uczniowie PRIMARY KEY (id);",
            "INSERT TABLE uczniowie ADD PRIMARY KEY (id);",
            "ALTER TABLE uczniowie ADD PRIMARY KEY (id);",
            "ADD TABLE uczniowie PRIMARY KEY (id);"
        ],
        poprawna: "C"
    },
    {
        id: 960,
        pytanie: "Które z tych rozszerzeń nie jest rozszerzeniem pliku video?",
        odpowiedzi: [
            "GIF",
            "MOV",
            "AVI",
            "MP4"
        ],
        poprawna: "A"
    },
    {
        id: 961,
        pytanie: "W języku PHP, aby prawidłowo obsłużyć połączenie z bazą danych MySQL, ostatnią operacją, powinno być zastosowanie polecenia",
        odpowiedzi: [
            "exit",
            "mysqli_close",
            "mysql_exit",
            "die"
        ],
        poprawna: "B"
    },
    {
        id: 962,
        pytanie: "Który z paragrafów został sformatowany przedstawionym stylem zakładając, że pozostałe własności paragrafu przyjmują wartości domyślne?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "962.jpg"
    },
    {
        id: 963,
        pytanie: "Dana jest tabela pracownicy, do której wpisano rekordy przedstawione obok. Po uruchomieniu podanej w ramce kwerendy SQL zostanie wyświetlona wartość",
        odpowiedzi: [
            "5400",
            "1300",
            "2200",
            "2600"
        ],
        poprawna: "D",
        obraz: "963.jpg"
    },
    {
        id: 964,
        pytanie: "W bazie danych MySQL polecenie CREATE USER umożliwia",
        odpowiedzi: [
            "utworzenie użytkownika i nadanie mu praw do bazy",
            "wyświetlenie informacji o istniejącym użytkowniku",
            "utworzenie użytkownika",
            "zmodyfikowanie hasła istniejącego użytkownika"
        ],
        poprawna: "C"
    },
    {
        id: 965,
        pytanie: "Poziom izolacji transakcji Repeatable Read (tryb powtarzalnego odczytu) stosowany przez MS SQL wiąże się z problemem",
        odpowiedzi: [
            "utraty aktualizacji",
            "niepowtarzalnych odczytów",
            "brudnych odczytów",
            "odczytów widm"
        ],
        poprawna: "D"
    },
    {
        id: 966,
        pytanie: "Relacja opisana w sposób: \"Rekordowi z tabeli A odpowiada dowolna liczba rekordów z tabeli B. Jednemu rekordowi z tabeli B odpowiada dokładnie jeden rekord z tabeli A\" jest relacją",
        odpowiedzi: [
            "nieoznaczoną",
            "jeden do jednego",
            "jeden do wielu",
            "wiele do wielu"
        ],
        poprawna: "C"
    },
    {
        id: 967,
        pytanie: "Dla przedstawionego fragmentu dokumentu HTML zdefiniowano formatowanie CSS selektora klasy \"menu\" tak, aby kolor tła bloku był zielony. Która definicja stylu CSS odpowiada temu formatowaniu?",
        odpowiedzi: [
            "#menu { background-color: rgb(0,255,0); }",
            "div:menu { color: green; }",
            "div.menu { background-color: green; }",
            "menu { background-color: rgb(0,255,0); }"
        ],
        poprawna: "C",
        obraz: "967.jpg"
    },
    {
        id: 968,
        pytanie: "Jak nazywa się metoda sortowania polegająca na podziale na n przedziałów jednakowej długości, w których następuje sortowanie, po czym posortowane zawartości przedziałów są poddawane analizie i prezentacji?",
        odpowiedzi: [
            "Sortowanie szybkie",
            "Sortowanie bąbelkowe",
            "Sortowanie kubełkowe",
            "Sortowanie przez wybór"
        ],
        poprawna: "C"
    },
    {
        id: 969,
        pytanie: "Stronę internetową zapisano w języku XHTML. Który z kodów stanowi implementację przedstawionego fragmentu strony, jeżeli żadne style CSS nie zostały zdefiniowane?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "969.jpg"
    },
    {
        id: 970,
        pytanie: "W przedstawionej klasie zdefiniowano",
        odpowiedzi: [
            "jedną właściwość",
            "dwie metody",
            "dwie właściwości",
            "dwa obiekty"
        ],
        poprawna: "C",
        obraz: "970.jpg"
    },
    {
        id: 971,
        pytanie: "Aby zamieścić na stronie internetowej film, należy użyć znacznika",
        odpowiedzi: [
            "<video>",
            "<media>",
            "<movie>",
            "<audio>"
        ],
        poprawna: "A"
    },
    {
        id: 972,
        pytanie: "Wskaż poprawną definicję stylu CSS dla przycisku typu submit o właściwościach: czarny kolor tła, brak obramowania, marginesy wewnętrzne 5px.",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "972.jpg"
    },
    {
        id: 973,
        pytanie: "Przedstawiony fragment kodu napisano w języku JavaScript. Aby program przypisywał wartość równą 1 co trzeciemu elementowi w tablicy, to w miejscu kropek należy wpisać",
        odpowiedzi: [
            "i = 3",
            "i += 3",
            "i ++ 3",
            "i =+ 3"
        ],
        poprawna: "B",
        obraz: "973.jpg"
    },
    {
        id: 974,
        pytanie: "W zapytaniu SQL umieszczonym poniżej, znak gwiazdki oznacza, że w wyniku tego zapytania",
        odpowiedzi: [
            "zostaną wyświetlone wszystkie rekordy tabeli mieszkancy",
            "zostanie zignorowany warunek sprawdzający imię",
            "zostaną wyświetlone wszystkie kolumny tabeli mieszkancy",
            "zostanie wyświetlone pole o nazwie \"*\" (gwiazdka)"
        ],
        poprawna: "C",
        obraz: "974.jpg"
    },
    {
        id: 975,
        pytanie: "Znacznik języka HTML, który służy do dynamicznego tworzenia grafiki na stronie internetowej bez osadzania dodatkowych plików, to",
        odpowiedzi: [
            "<embed>",
            "<img>",
            "<canvas>",
            "<object>"
        ],
        poprawna: "C"
    },
    {
        id: 976,
        pytanie: "Po wykonaniu kodu PHP zostanie wyświetlona aktualna data zawierająca jedynie",
        odpowiedzi: [
            "dzień i miesiąc",
            "miesiąc i rok",
            "rok",
            "dzień"
        ],
        poprawna: "C",
        obraz: "976.jpg"
    },
    {
        id: 977,
        pytanie: "Proces organizowania danych w bazie obejmujący tworzenie tabel, ustanawianie relacji między nimi i polegający na wyeliminowaniu z bazy nadmiarowych danych oraz niespójnych zależności nazywa się",
        odpowiedzi: [
            "weryfikacją spójności danych",
            "normalizacją",
            "weryfikacją integralności referencyjnej",
            "redundancją"
        ],
        poprawna: "B"
    },
    {
        id: 978,
        pytanie: "W jaki sposób, stosując język PHP, zapisać w ciasteczku napis znajdujący się w zmiennej dane na czas jednego dnia?",
        odpowiedzi: [
            "setcookie(\"dane\", $dane, time() + (3600*24));",
            "setcookie(\"dane\", $dane, 0);",
            "setcookie(\"dane\", \"dane\", 0);",
            "setcookie(\"dane\", $dane, time());"
        ],
        poprawna: "A"
    },
    {
        id: 979,
        pytanie: "Które stwierdzenie najlepiej opisuje klasę Owoc zdefiniowaną w języku PHP i przedstawioną na listingu?",
        odpowiedzi: [
            "Ma jedno pole i dwie metody, z czego jedna metoda ma zakres prywatny.",
            "Ma dwa pola i jedną metodę, pole nazwa ma zakres widzialności ograniczony tylko do metod klasy.",
            "Ma dwa pola i jeden konstruktor, oba pola mają zakres widzialności ograniczony tylko do metod klasy.",
            "Ma dwa pola i jedną metodę, pole kolor ma zakres widzialności ograniczony tylko do metod klasy."
        ],
        poprawna: "D",
        obraz: "979.jpg"
    },
    {
        id: 980,
        pytanie: "Aby stworzyć różnicową kopię bazy danych na serwerze MSSQL, należy zastosować klauzulę",
        odpowiedzi: [
            "FULL",
            "RESTORE",
            "WITH FORMAT",
            "DIFFERENTIAL"
        ],
        poprawna: "D"
    },
    {
        id: 981,
        pytanie: "W języku PHP wykonano operację przedstawioną w ramce. Aby wyświetlić wszystkie wyniki tego zapytania należy",
        odpowiedzi: [
            "wyświetlić zmienną $db",
            "zaindeksować zmienną tab, tab[0] to pierwsze imię",
            "zastosować pętlę z poleceniem mysqli_fetch_row",
            "zastosować polecenie mysql_fetch"
        ],
        poprawna: "C",
        obraz: "981.jpg"
    },
    {
        id: 982,
        pytanie: "Kwerendę SELECT DISTINCT należy zastosować w przypadku, gdy potrzeba wybrać rekordy",
        odpowiedzi: [
            "posortowane malejąco lub rosnąco",
            "pogrupowane",
            "występujące w bazie tylko raz",
            "tak, aby w podanej kolumnie nie powtarzały się wartości"
        ],
        poprawna: "D"
    },
    {
        id: 983,
        pytanie: "Grafik wykonał logo strony internetowej. To czarny znaczek na przezroczystym tle. Aby zachować wszystkie atrybuty obrazu i umieścić go na stronie internetowej, grafik powinien zapisać obraz w formacie",
        odpowiedzi: [
            "PNG",
            "CDR",
            "JPG",
            "BMP"
        ],
        poprawna: "A"
    },
    {
        id: 984,
        pytanie: "W języku PHP funkcja, która może służyć do sprawdzenia, czy dany ciąg jest fragmentem innego ciągu, to",
        odpowiedzi: [
            "trim();",
            "strtok();",
            "strlen();",
            "strstr();"
        ],
        poprawna: "D"
    },
    {
        id: 985,
        pytanie: "Wykonanie przedstawionego polecenia PHP umożliwi",
        odpowiedzi: [
            "odczyt danych z bazy",
            "modyfikację struktury bazy",
            "modyfikację danych w bazie",
            "zapis nowych danych do bazy"
        ],
        poprawna: "C",
        obraz: "984.jpg"
    },
    {
        id: 986,
        pytanie: "Funkcja mysqli_num_rows() języka PHP może być wywołana po uprzednim zastosowaniu kwerendy",
        odpowiedzi: [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        poprawna: "D"
    },
    {
        id: 987,
        pytanie: "Które wyrażenie logiczne należy zastosować w języku JavaScript, aby wykonać operacje tylko dla dowolnych liczb ujemnych z przedziału jednostronnie domkniętego <-200,-100)?",
        odpowiedzi: [
            "(liczba <=-200) || (liczba>-100)",
            "(liczba <=-200) && (liczba<-100)",
            "(liczba >=-200) || (liczba>-100)",
            "(liczba >=-200) && (liczba<-100)"
        ],
        poprawna: "D"
    },
    {
        id: 988,
        pytanie: "Wskaż instrukcję równoważną do instrukcji switch zapisanej językiem PHP",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "988.jpg"
    },
    {
        id: 989,
        pytanie: "Podane polecenie SQL nadaje prawo SELECT",
        odpowiedzi: [
            "dla użytkownika root na serwerze sprzedawca",
            "do wszystkich tabel w bazie hurtownia",
            "dla użytkownika root na serwerze localhost",
            "do wszystkich pól w tabeli hurtownia"
        ],
        poprawna: "B",
        obraz: "989.jpg"
    },
    {
        id: 990,
        pytanie: "Integralność encji w bazie danych zostanie zachowana, jeżeli między innymi",
        odpowiedzi: [
            "każdej kolumnie zostanie przypisany typ danych",
            "klucz główny będzie zawsze liczbą całkowitą",
            "każdy klucz główny będzie miał odpowiadający mu klucz obcy w innej tabeli",
            "dla każdej tabeli zostanie utworzony klucz główny"
        ],
        poprawna: "D"
    },
    {
        id: 991,
        pytanie: "W języku JavaScript stworzono funkcję o nazwie licz_pitagoras, która oblicza długość przeciwprostokątnej trójkąta prostokątnego, zgodnie z twierdzeniem Pitagorasa. Funkcja pobiera dwa parametry wejściowe i zwraca wartość. Prawidłowe wywołanie takiej funkcji, wraz z pobraniem zwróconego wyniku, będzie miało postać",
        odpowiedzi: [
            "c = licz_pitagoras(a, b);",
            "licz_pitagoras(a, b) = c;",
            "licz_pitagoras(a, b);",
            "licz_pitagoras(a, b, c);"
        ],
        poprawna: "A"
    },
    {
        id: 992,
        pytanie: "Który z typów wspieranych przez język PHP służy do obsługi zmiennych logicznych?",
        odpowiedzi: [
            "Boolean",
            "String",
            "Float",
            "Integer"
        ],
        poprawna: "A"
    },
    {
        id: 993,
        pytanie: "W edytorze grafiki rastrowej, aby pracować tylko na części obrazu, nie naruszając innych jego elementów, można wykorzystać",
        odpowiedzi: [
            "warstwy",
            "skalowanie",
            "kadrowanie",
            "inwersję"
        ],
        poprawna: "A"
    },
    {
        id: 994,
        pytanie: "Wielkość grafiki JPEG umieszczonej na stronie internetowej może mieć wpływ na",
        odpowiedzi: [
            "błędy składniowe języka HTML",
            "długość czasu ładowania strony",
            "kompatybilność z systemem Windows",
            "szybszą weryfikację odnośników"
        ],
        poprawna: "B"
    },
    {
        id: 995,
        pytanie: "Algorytm przedstawiony na rysunku można zapisać w języku JavaScript za pomocą instrukcji",
        odpowiedzi: [
            "for(i = 0; i > 10; i++)",
            "var i = 0; do i++; while(i > 10);",
            "var i = 0; while(i <= 10) i += 2;",
            "var i = 0; do i = i + 2; while(i < 10);"
        ],
        poprawna: "C",
        obraz: "995.jpg"
    },
    {
        id: 996,
        pytanie: "W kodzie HTML zdefiniowano formularz, który wysyła dane do pliku formularz.php. Po wciśnięciu przycisku typu submit przeglądarka przechodzi do przedstawionego adresu. Na podstawie podanego adresu można powiedzieć, że dane do pliku formularz.php zostały przesłane metodą",
        odpowiedzi: [
            "COOKIE",
            "POST",
            "GET",
            "SESSION"
        ],
        poprawna: "C",
        obraz: "996.jpg"
    },
    {
        id: 997,
        pytanie: "Wskaż funkcję PHP, za pomocą której odczytana zawartość pliku jest zapisywana do zmiennej reprezentującej ciąg znaków",
        odpowiedzi: [
            "get_file();",
            "file_get_contents();",
            "eof();",
            "fwrite();"
        ],
        poprawna: "B"
    },
    {
        id: 998,
        pytanie: "W której części dokumentu HTML należy umieścić wewnętrzny arkusz stylów?",
        odpowiedzi: [
            "Wewnątrz znacznika, którego styl dotyczy",
            "W ciele strony",
            "W części nagłówkowej strony",
            "W skrypcie dołączonym do strony"
        ],
        poprawna: "C"
    },
    {
        id: 999,
        pytanie: "W języku CSS zdefiniowano formatowanie paragrafu, które przypisze mu następujące cechy:",
        odpowiedzi: [
            "tło czerwone, kolor tekstu niebieski, marginesy wewnętrzne ustawione na wartość 40px",
            "tło niebieskie, kolor tekstu czerwony, marginesy zewnętrzne ustawione na wartość 40px",
            "tło czerwone, kolor tekstu niebieski, marginesy zewnętrzne ustawione na wartość 40px",
            "tło niebieskie, kolor tekstu czerwony, marginesy wewnętrzne ustawione na wartość 40px"
        ],
        poprawna: "C",
        obraz: "999.jpg"
    },
    {
        id: 1000,
        pytanie: "W znaczniku meta w miejsce kropek należy wpisać",
        odpowiedzi: [
            "informację o dostosowaniu do urządzeń mobilnych",
            "streszczenie treści strony",
            "nazwę edytora",
            "język dokumentu"
        ],
        poprawna: "B",
        obraz: "1000.jpg"
    },
    {
        id: 1001,
        pytanie: "W języku PHP zmiennej a przypisano tekst, w którym kilkukrotnie występuje słowo Kowalski. Aby jednym pleceniem zmienić w zmiennej a wszystkie wystąpienia słowa Kowalski na słowo Nowak, należy zastosować polecenie",
        odpowiedzi: [
            "$a = str_replace('Nowak', 'Kowalski');",
            "$a = str_replace('Kowalski', 'Nowak', $a);",
            "$a = str_replace('Nowak', 'Kowalski', $a);",
            "$a = str_rep('Kowalski', 'Nowak', $a);"
        ],
        poprawna: "B"
    },
    {
        id: 1002,
        pytanie: "W bazie danych samochodów pole kolor z tabeli samochody przyjmuje wartości kolorów jedynie ze słownika lakier. Aby połączyć tabele samochody i lakier relacją należy, zastosować kwerendę",
        odpowiedzi: [
            "ALTER TABLE samochody ADD FOREIGN KEY (kolor) REFERENCES lakier(lakierId);",
            "ALTER TABLE samochody ADD FOREIGN KEY kolor REFERENCES lakier;",
            "ALTER TABLE samochody ADD FOREIGN KEY barwa REFERENCES samochody.lakier;",
            "ALTER TABLE lakier ADD FOREIGN KEY (barwa) REFERENCES samochody(kolor);"
        ],
        poprawna: "A"
    },
    {
        id: 1003,
        pytanie: "W języku C++ zdefiniowano zmienną: char zm1;. W jaki sposób można do niej przypisać wartość zgodnie ze składnią języka?",
        odpowiedzi: [
            "zm1 == 0x35;",
            "zm1[2] = 32;",
            "zm1 = \"wiadro\";",
            "zm1 = 'w';"
        ],
        poprawna: "D"
    },
    {
        id: 1004,
        pytanie: "Znaczniki HTML <strong> oraz <em> służące do podkreślenia ważności tekstu, pod względem formatowania są odpowiednikami znaczników",
        odpowiedzi: [
            "<b> oraz <u>",
            "<u> oraz <sup>",
            "<i> oraz <mark>",
            "<b> oraz <i>"
        ],
        poprawna: "D"
    },
    {
        id: 1005,
        pytanie: "Obraz przedstawia formatowanie CSS paragrafu. Aby otrzymać czerwony kolor poza obramowaniem, tak jak przedstawiono na obrazie, należy zdefiniować własność:",
        odpowiedzi: [
            "border",
            "outline",
            "padding",
            "background"
        ],
        poprawna: "B",
        obraz: "1005.jpg"
    },
    {
        id: 1006,
        pytanie: "Klauzuli DROP COLUMN można użyć podczas wydawania kwerendy",
        odpowiedzi: [
            "ALTER TABLE",
            "DROP TABLE",
            "CREATE TABLE",
            "ALTER COLUMN"
        ],
        poprawna: "A"
    },
    {
        id: 1007,
        pytanie: "Który zapis tworzący tablicę w JavaScript jest niepoprawny składniowo?",
        odpowiedzi: [
            "var liczby = new Array(1, 2, 3);",
            "var liczby = [3];",
            "var liczby = [1, 2, 3];",
            "var liczby = new Array[1, 2, 3];"
        ],
        poprawna: "D"
    },
    {
        id: 1008,
        pytanie: "W języku HTML zapisano formularz. Który z efektów działania kodu będzie wyświetlony przez przeglądarkę zakładając, że w pierwsze pole użytkownik przeglądarki wpisał wartość \"Przykładowy text\"?",
        odpowiedzi: [
            "Efekt 1",
            "Efekt 2",
            "Efekt 3",
            "Efekt 4"
        ],
        poprawna: "B",
        obraz: "1008.jpg"
    },
    {
        id: 1009,
        pytanie: "Który kod PHP sprawi, że zostanie wyświetlona sformatowana data oraz czas ostatnich odwiedzin użytkownika witryny, natomiast podczas pierwszej wizyty nic się nie wyświetli?",
        odpowiedzi: [
            "Kod 1",
            "Kod 2",
            "Kod 3",
            "Kod 4"
        ],
        poprawna: "B",
        obraz: "1009.jpg"
    },
    {
        id: 1010,
        pytanie: "Zapis selektora input[type=number] { background-color: Brown; } oznacza, że tło będzie brązowe dla",
        odpowiedzi: [
            "pól edycyjnych, które są typu numerycznego",
            "wszystkich tekstów na stronie",
            "wszystkich pól edycyjnych",
            "pól edycyjnych, gdy użytkownik wpisze do nich dowolną cyfrę"
        ],
        poprawna: "A"
    },
    {
        id: 1011,
        pytanie: "W dokumencie HTML zdefiniowano listę oraz dodano do niej formatowanie CSS. Który z efektów odpowiada tej definicji",
        odpowiedzi: [
            "Efekt 1",
            "Efekt 2",
            "Efekt 3",
            "Efekt 4"
        ],
        poprawna: "D",
        obraz: "1011.jpg"
    },
    {
        id: 1012,
        pytanie: "Co można powiedzieć o wyświetlonym przez witrynę tekście \"test kolorów\"?",
        odpowiedzi: [
            "Wciskanie przycisku test sprawia, że kolor tekstu jest na przemian niebieski i czerwony.",
            "Zaraz po załadowaniu witryny kolor tekstu jest czerwony.",
            "Po wciśnięciu przycisku test kolor tekstu jest czerwony.",
            "Po wciśnięciu przycisku test kolor tekstu jest niebieski."
        ],
        poprawna: "C",
        obraz: "1012.jpg"
    },
    {
        id: 1013,
        pytanie: "Efekt przedstawiony na obrazie, wykonany za pomocą edytora grafiki rastrowej, to:",
        odpowiedzi: [
            "pikselizacja",
            "szum RGB",
            "grawerowanie",
            "rozmycie Gaussa"
        ],
        poprawna: "A",
        obraz: "1013.jpg"
    },
    {
        id: 1014,
        pytanie: "W formularzu zdefiniowano kontrolki do wpisania imienia i nazwiska. Który atrybut reprezentuje podpowiedź umiejscowioną w polu kontrolki, znikającą w momencie, gdy użytkownik rozpocznie wpisywanie wartości?",
        odpowiedzi: [
            "value",
            "placeholder",
            "title",
            "name"
        ],
        poprawna: "B",
        obraz: "1014.jpg"
    },
    {
        id: 1015,
        pytanie: "Metoda zachłanna konstruowania algorytmów polega na",
        odpowiedzi: [
            "podziale problemu na podproblemy w celu uzyskania problemów łatwych do rozwiązania",
            "wybieraniu rozwiązań, które w danym kroku wydają się najkorzystniejsze",
            "odwołaniu się funkcji lub definicji do samej siebie",
            "przeszukiwaniu zbioru danych aż do momentu znalezienia rozwiązania"
        ],
        poprawna: "B"
    },
    {
        id: 1016,
        pytanie: "W bibliotece mysqli języka PHP, aby uzyskać ostatni komunikat o błędzie można zastosować funkcję:",
        odpowiedzi: [
            "mysqli_error()",
            "mysqli_use_result()",
            "mysqli_errno()",
            "mysqli_error_list()"
        ],
        poprawna: "A"
    },
    {
        id: 1017,
        pytanie: "Funkcja PHP var_dump() wyświetla informację na temat zmiennej: jej typ i wartość. Wynikiem dla przedstawionego fragmentu kodu jest",
        odpowiedzi: [
            "array(2) {[0] => int(59) [1] => int(85)}",
            "int(59)",
            "string(\"59.85\")",
            "float(59.85)"
        ],
        poprawna: "D",
        obraz: "1017.jpg"
    },
    {
        id: 1018,
        pytanie: "Które polecenie jest poprawne pod względem walidacji HTML5?",
        odpowiedzi: [
            "<img src = mojPiesek.jpg alt = pies>",
            "<img src = \"mojPiesek.jpg\" alt = \"pies\">",
            "<img src = mojPiesek.jpg\" alt = \"pies>",
            "<img src = \"mojPiesek.jpg\" >"
        ],
        poprawna: "B"
    },
    {
        id: 1019,
        pytanie: "Lokalny System Zarządzania Bazą Danych (SZBD) udostępnia bazę danych",
        odpowiedzi: [
            "jako serwer w sieci",
            "w chmurze komputerowej",
            "tylko na jednym, określonym komputerze",
            "jako usługę sieciową serwera"
        ],
        poprawna: "C"
    },
    {
        id: 1020,
        pytanie: "Dla których imion klauzula LIKE jest prawdziwa?",
        odpowiedzi: [
            "Oksana, Oktawia, Olga",
            "Oksana, Ola, Olga",
            "Oktawia, Oktawian, Olga",
            "Oda, Oksana, Oktawia"
        ],
        poprawna: "A",
        obraz: "1020.jpg"
    },
    {
        id: 1021,
        pytanie: "Tabela samochody zawiera rekordy przedstawione na obrazie. Jakie dane zostaną zwrócone wykonując zapytanie SQL:",
        odpowiedzi: [
            "opel zafira",
            "zafira",
            "opel zafira; opel insignia",
            "zafira; insignia"
        ],
        poprawna: "B",
        obraz: "1021.jpg"
    },
    {
        id: 1022,
        pytanie: "Tabele Studenci, Zapisy, Zajecia są powiązane relacją. Aby wybrać jedynie nazwiska studentów oraz odpowiadające im idZajecia dla studentów z grupy 15, należy wydać kwerendę",
        odpowiedzi: [
            "SELECT nazwisko, idZajecia FROM Studenci INNER JOIN Zapisy WHERE grupa = 15;",
            "SELECT nazwisko, idZajecia FROM Studenci JOIN Zapisy ON Studenci.id = Zapisy.idZajecia;",
            "SELECT nazwisko, idZajecia FROM Studenci INNER JOIN Zapisy ON Studenci.id = Zapisy.idStudenta;",
            "SELECT nazwisko, idZajecia FROM Studenci INNER JOIN Zapisy ON Studenci.id = Zapisy.idStudenta WHERE grupa = 15;"
        ],
        poprawna: "D",
        obraz: "1022.jpg"
    },
    {
        id: 1023,
        pytanie: "W grafice funkcja desaturacja ma na celu",
        odpowiedzi: [
            "przekształcenie barw do odcieni szarości",
            "zwiększenie jaskrawości barw",
            "rozjaśnienie obrazu",
            "zwiększenie liczby kolorów wykorzystywanych w obrazie"
        ],
        poprawna: "A"
    },
    {
        id: 1024,
        pytanie: "Walidator W3C wygenerował błąd walidacji: End tag p seen, but there were open elements. Którego fragmentu kodu on dotyczy?",
        odpowiedzi: [
            "<p>Ala ma <b>kota</b></p>",
            "<p>Ala ma kota",
            "<p>Ala ma kota</p>",
            "<p>Ala ma <b>kota</p></b>"
        ],
        poprawna: "D"
    },
    {
        id: 1025,
        pytanie: "Które typy danych w języku C++ reprezentują liczby rzeczywiste?",
        odpowiedzi: [
            "float i long",
            "double i bool",
            "float i double",
            "double i short"
        ],
        poprawna: "C"
    },
    {
        id: 1026,
        pytanie: "W języku SQL wydano kwerendę, niestety jej wykonanie nie powiodło się i wystąpił błąd: #1396 - Operation CREATE USER failed for 'anna'@'localhost'. Powodem takiego zachowania bazy danych może być:",
        odpowiedzi: [
            "zbyt słabe hasło dla konta anna",
            "nieznane polecenie CREATE USER",
            "istnienie użytkownika anna w bazie",
            "nieprawidłowa składnia polecenia CREATE USER"
        ],
        poprawna: "C",
        obraz: "1026.jpg"
    },
    {
        id: 1027,
        pytanie: "Na listingu kodu JavaScript w wykropkowanej części definicji obiektu osoba należy wpisać kod, który prawidłowo obsłuży instrukcję osoba.j = \"PL\"; Który to będzie kod?",
        odpowiedzi: [
            "return this.j;",
            "this.jezyk = nazwa;",
            "this.j = nazwa;",
            "return this.jezyk;"
        ],
        poprawna: "B",
        obraz: "1027.jpg"
    },
    {
        id: 1028,
        pytanie: "Funkcji session_start() języka PHP należy użyć przy implementacji",
        odpowiedzi: [
            "obsługi formularza",
            "dowolnej witryny, która obsługuje ciasteczka",
            "wczytywania danych z plików zewnętrznych",
            "wielostronicowej witryny, która wymaga dostępu do danych przy przechodzeniu pomiędzy stronami"
        ],
        poprawna: "D"
    },
    {
        id: 1029,
        pytanie: "Zapis CSS margin: auto; oznacza, że marginesy są",
        odpowiedzi: [
            "wyliczane przez przeglądarkę tak, aby element został wyśrodkowany w poziomie",
            "równe domyślnym wartościom marginesów elementu, do którego są przypisane",
            "stałe dla danej przeglądarki, niezależnie od rozmiaru jej okna",
            "odziedziczone po elemencie rodzica dla danego elementu"
        ],
        poprawna: "A"
    },
    {
        id: 1030,
        pytanie: "W systemie barw i oznaczeń znaków bezpieczeństwa kolor czerwony zastrzeżony jest dla",
        odpowiedzi: [
            "znaków zakazu",
            "znaków nakazu",
            "dróg ewakuacyjnych",
            "znaków informacyjnych"
        ],
        poprawna: "A"
    },
    {
        id: 1031,
        pytanie: "Kompetencje związane z osobowością dotyczą",
        odpowiedzi: [
            "stanu zdrowia i predyspozycji do wykonywania określonych zadań",
            "wartości i wierzeń, które pozwalają na określenie motywów działania",
            "zadań w konkretnym zawodzie i wiedzy specjalistyczno-technicznej",
            "indywidualnego radzenia sobie z otoczeniem"
        ],
        poprawna: "D"
    },
    {
        id: 1032,
        pytanie: "Organem społecznym, którego zadaniem jest sprawowanie nadzoru społeczno-ekonomicznego nad warunkami pracy, jest",
        odpowiedzi: [
            "Straż Pożarna",
            "związek zawodowy",
            "komisja BHP",
            "kierownik zakładu"
        ],
        poprawna: "B"
    },
    {
        id: 1033,
        pytanie: "Co można powiedzieć o błędach interpretacji kodu PHP?",
        odpowiedzi: [
            "są ignorowane przez przeglądarkę oraz interpreter kodu PHP",
            "są zapisywane w podglądzie zdarzeń systemu Windows",
            "są zapisywane w logu pod warunkiem ustawienia odpowiedniego parametru w pliku php.ini",
            "są wyświetlane w oknie edytora kodu PHP po wybraniu przycisku kompiluj"
        ],
        poprawna: "C"
    },
    {
        id: 1034,
        pytanie: "Przedstawione w tabeli cechy dotyczą",
        odpowiedzi: [
            "umowy zlecenia",
            "umowy agencyjnej",
            "umowy o pracę",
            "umowy o dzieło"
        ],
        poprawna: "D",
        obraz: "1034.jpg"
    },
    {
        id: 1035,
        pytanie: "Który format pliku jest formatem rastrowym?",
        odpowiedzi: [
            "SWF",
            "TIFF",
            "SVG",
            "CDR"
        ],
        poprawna: "B"
    },
    {
        id: 1036,
        pytanie: "Przedstawiony znak ochrony przeciwpożarowej jest stosowany w przypadku",
        odpowiedzi: [
            "zakazu używania otwartego ognia",
            "niebezpieczeństwa pożaru spowodowanego materiałami utleniającymi",
            "niebezpieczeństwa pożaru spowodowanego materiałami łatwo zapalnymi",
            "zakazu gaszenia wodą"
        ],
        poprawna: "B",
        obraz: "1036.jpg"
    },
    {
        id: 1037,
        pytanie: "W przedstawionym programie napisanym w języku PHP zmienna $i przechowuje",
        odpowiedzi: [
            "wartość flagi",
            "zbiór liczb parzystych podzielonych bez reszty przez 59",
            "losową liczbę z zaokrągleniem do 100 miejsc po przecinku",
            "liczbę wykonanych losowań"
        ],
        poprawna: "D",
        obraz: "1037.jpg"
    },
    {
        id: 1038,
        pytanie: "W języku PHP operator ++ przed zmienną (np. ++$i) oznacza",
        odpowiedzi: [
            "predekrementację",
            "postinkrementację",
            "postdekrementację",
            "preinkrementację"
        ],
        poprawna: "D"
    },
    {
        id: 1039,
        pytanie: "Która operacja, na dwóch obiektach, została zastosowana w programie do obróbki grafiki wektorowej?",
        odpowiedzi: [
            "różnica",
            "wykluczenie",
            "suma",
            "podział"
        ],
        poprawna: "A"
    },
    {
        id: 1040,
        pytanie: "Która własności języka CSS umożliwia zmianę domyślnego koloru czcionki?",
        odpowiedzi: [
            "color",
            "text-decoration",
            "transform",
            "font-style"
        ],
        poprawna: "A"
    },
    {
        id: 1041,
        pytanie: "Dana jest tabela oceny o polach id, nazwisko, imie, ocena. Przedstawione zapytanie jest przykładem",
        odpowiedzi: [
            "sumy",
            "agregacji",
            "selekcji",
            "złączenia"
        ],
        poprawna: "C",
        obraz: "1041.jpg"
    },
    {
        id: 1042,
        pytanie: "Użyty w kodzie HTML znacznik <pre> umozliwia umieszczenie na stronie WWW",
        odpowiedzi: [
            "tekstu z zachowaniem jego oryginalnego formatowania",
            "edytowalnego pola tekstowego",
            "tekstu zapisanego w indeksie dolnym",
            "odwołania do innego fragmentu tekstu"
        ],
        poprawna: "A"
    },
    {
        id: 1043,
        pytanie: "W tabeli uczniowie, aby zmienić wszystkie wartości znajdujące się w kolumnie wiek na wartość 10, należy użyć zapytania",
        odpowiedzi: [
            "SET uczniowie UPDATE wiek=10;",
            "UPDATE uczniowie SET wiek 10 WHERE wiek ALL;",
            "UPDATE uczniowie SET wiek=10;",
            "SET uczniowie UPDATE wiek 10 WHERE wiek ALL;"
        ],
        poprawna: "C"
    },
    {
        id: 1044,
        pytanie: "Wskaż prawidłową kolejność etapów planowania pracy zespołu",
        odpowiedzi: [
            "Kolejność 2",
            "Kolejność 1",
            "Kolejność 3",
            "Kolejność 4"
        ],
        poprawna: "A",
        obraz: "1044.jpg"
    },
    {
        id: 1045,
        pytanie: "W języku PHP instrukcją, która jest przeznaczona do wykonania określonej liczby iteracji jest",
        odpowiedzi: [
            "switch",
            "for",
            "if",
            "continue"
        ],
        poprawna: "B"
    },
    {
        id: 1046,
        pytanie: "O przedstawionej definicji pola input można powiedzieć, że",
        odpowiedzi: [
            "umożliwia wpisywanie tylko wartości liczbowych",
            "ukrywa wprowadzone do niego znaki",
            "wyświetla wprowadzone do niego znaki",
            "ma wpisany domyślny tekst \"pole\""
        ],
        poprawna: "B",
        obraz: "1046.jpg"
    },
    {
        id: 1047,
        pytanie: "Który typ danych w bazie MySQL jest przeznaczony do przechowywania liczb",
        odpowiedzi: [
            "ENUM",
            "BIGINT",
            "VARCHAR",
            "DOUBLE"
        ],
        poprawna: "D"
    },
    {
        id: 1048,
        pytanie: "Przykładem etycznego zachowania informatyka jest",
        odpowiedzi: [
            "kopiowanie oprogramowania i przekazywanie kopii rodzinie",
            "podejmowanie prac jednocześnie u kliku zleceniodawców, których interesy są ze sobą sprzeczne",
            "przedstawianie swojemu klientowi prawdy o przewidywanych kosztach oraz przypuszczalnym czasie trwania analizowanych prac",
            "naruszanie integralności systemów informatycznych podmiotów, które są konkurencyjne dla jego zleceniodawcy"
        ],
        poprawna: "C"
    },
    {
        id: 1049,
        pytanie: "Aby prawidłowo utworzyć relację typu m..n nienarażoną na redundancję danych, należy",
        odpowiedzi: [
            "posortować przynajmniej jedną z tabel",
            "połączyć bezpośrednio klucze podstawowe obu tabel",
            "połączyć bezpośrednio klucze obce obu tabel",
            "utworzyć tabelę pomocniczą"
        ],
        poprawna: "D"
    },
    {
        id: 1050,
        pytanie: "Językami działającymi jedynie po stronie serwera są:",
        odpowiedzi: [
            "Java, C#, Python, Ruby, PHP",
            "Java, C#, TypeScript, Ruby, PHP",
            "C#, Python, Ruby, PHP, JavaScript",
            "Java, C#, Python, ActionScript, PHP"
        ],
        poprawna: "A"
    },
    {
        id: 1051,
        pytanie: "W relacyjnej bazie danych jednoznacznemu identyfikatorowi rekordu odpowiada",
        odpowiedzi: [
            "indeks tabeli",
            "klucz główny",
            "krotka",
            "klucz obcy"
        ],
        poprawna: "B"
    },
    {
        id: 1052,
        pytanie: "W języku PHP, aby wyświetlić n razy znak „@”, należy użyć funkcji",
        odpowiedzi: [
            "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki(@, $n);",
            "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki($n);",
            "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki(\"@\", $n);",
            "function znaki($i){\n  for($i=0; $i<$n; $i++)\n    print(\"@\");\n}\nznaki($i);"
        ],
        poprawna: "C"
    },
    {
        id: 1053,
        pytanie: "W stylu CSS właściwość float pozwala na umieszczenie elementu",
        odpowiedzi: [
            "po lewej lub prawej stronie innego elementu",
            "wyłącznie po prawej stronie innego elementu",
            "wyłącznie nad innym elementem",
            "nad lub pod innym elementem"
        ],
        poprawna: "A"
    },
    {
        id: 1054,
        pytanie: "Który etap nie jest częścią procesu kompilacji?",
        odpowiedzi: [
            "analiza składniowa kodu źródłowego",
            "optymalizacja kodu wynikowego",
            "generowanie kodu wynikowego",
            "formatowanie kodu źródłowego"
        ],
        poprawna: "D"
    },
    {
        id: 1055,
        pytanie: "Wskaż środki gaśnicze, które mogą zostać wykorzystane podczas pożaru urządzeń elektrycznych będących pod napięciem",
        odpowiedzi: [
            "proszek gaśniczy, dwutlenek węgla i halon",
            "piana gaśnicza, dwutlenek węgla i woda",
            "proszek gaśniczy, dwutlenek węgla i woda",
            "piana gaśnicza, dwutlenek węgla i halon"
        ],
        poprawna: "A"
    },
    {
        id: 1056,
        pytanie: "Podany wpis w dokumencie HTML oznacza, że",
        odpowiedzi: [
            "kod HTML zapisano w wersji 5 języka",
            "znaczniki zamykające w kodzie HTML są zawsze obowiązkowe",
            "znaczniki w kodzie HTML mogą być zapisane jedynie małymi literami",
            "kod HTML zapisano w wersji 4 języka"
        ],
        poprawna: "D",
        obraz: "1056.jpg"
    },
    {
        id: 1057,
        pytanie: "Która z poniższych praktyk jest przykładem wzorca prawidłowej współpracy w zespole?",
        odpowiedzi: [
            "ignorowanie opinii członków zespołu",
            "regularne spotkania \"feedbackowe\"",
            "unikanie odpowiedzialności za zadania",
            "omawianie indywidualnych błędów na forum publicznym"
        ],
        poprawna: "B"
    },
    {
        id: 1058,
        pytanie: "Ograniczanie dostępu do pól lub metod klasy nazywane jest",
        odpowiedzi: [
            "iteracją",
            "rekurencją",
            "dziedziczeniem",
            "hermetyzacją"
        ],
        poprawna: "D"
    },
    {
        id: 1059,
        pytanie: "Dana jest tabela uczniowie o polach id, nazwisko, imie, klasa. Które zapytanie SQL wyświetli liczbę osób w poszczególnych klasach oraz nazwę klasy?",
        odpowiedzi: [
            "SELECT SUM(id), klasa FROM uczniowie ORDER BY klasa;",
            "SELECT COUNT(id), klasa FROM uczniowie ORDER BY klasa;",
            "SELECT SUM(id), klasa FROM uczniowie GROUP BY klasa;",
            "SELECT COUNT(id), klasa FROM uczniowie GROUP BY klasa;"
        ],
        poprawna: "D"
    },
    {
        id: 1060,
        pytanie: "Ile poziomów znaczników nagłówka zdefiniowano w języku HTML5?",
        odpowiedzi: [
            "8 poziomów",
            "6 poziomów",
            "4 poziomy",
            "2 poziomy"
        ],
        poprawna: "B"
    },
    {
        id: 1061,
        pytanie: "Funkcja języka PHP settype(mixed &$var, string $type) służy do",
        odpowiedzi: [
            "wyświetlenia typu zmiennej",
            "przekształcenia zmiennej w stałą",
            "wykonania operacji dodawania zmiennych",
            "konwertowania zmiennej do wskazanego typu"
        ],
        poprawna: "D"
    },
    {
        id: 1062,
        pytanie: "Instrukcja DROP TABLE pozwala na",
        odpowiedzi: [
            "utworzenie struktury tabeli",
            "modyfikację struktury tabeli",
            "usunięcie zawartości tabeli i pozostawienie jej struktury",
            "usunięcie tabeli wraz z jej zawartością"
        ],
        poprawna: "D"
    },
    {
        id: 1063,
        pytanie: "Instrukcja GRANT w języku SQL służy do",
        odpowiedzi: [
            "odbierania użytkownikom praw do obiektów",
            "aktualizacji istniejących danych w bazie",
            "nadawania użytkownikom praw do obiektów",
            "umieszczania nowych danych w bazie"
        ],
        poprawna: "C"
    },
    {
        id: 1064,
        pytanie: "Który styl CSS pozwoli na ustawienie rozmiaru prawego marginesu zewnętrznego dla elementu <div> na 200px?",
        odpowiedzi: [
            "div { margin: 100px 200px 150px 80px; }",
            "div {padding: 200px 150px 100px 80px; }",
            "div {margin: 100px 80px 200px 250px; }",
            "div { padding: 80px 200px 150px 100px; }"
        ],
        poprawna: "A"
    },
    {
        id: 1065,
        pytanie: "Którą wartość właściwości position przypisano do obrazu z napisem Lorem Ipsum na przedstawionym filmie?",
        odpowiedzi: [
            "absolute",
            "static",
            "fixed",
            "relative"
        ],
        poprawna: "C"
    },
    {
        id: 1066,
        pytanie: "Który znacznik pozwala na wewnętrzne dodawanie stylów CSS w kodzie HTML?",
        odpowiedzi: [
            "<style>",
            "<type>",
            "<css>",
            "<script>"
        ],
        poprawna: "A"
    },
    {
        id: 1067,
        pytanie: "W języku SQL, aby sprawdzić czy wartość znajduje się w danym przedziale, należy użyć klauzuli",
        odpowiedzi: [
            "LIKE",
            "BETWEEN",
            "SET",
            "ORDER BY"
        ],
        poprawna: "B"
    },
    {
        id: 1068,
        pytanie: "Zgodnie z właściwościami ACID dotyczącymi wykonywania transakcji wymaganie izolacji (ang. isolation) oznacza, że",
        odpowiedzi: [
            "pod pewnymi warunkami dane zmieniane przez transakcję mogą zostać wycofane",
            "w przypadku konfliktu z inną transakcją, obie modyfikują te same dane w tym samym czasie",
            "po wykonaniu transakcji system bazy danych będzie spójny",
            "jeżeli dwie transakcje wykonują się współbieżnie, to zwykle nie widzą wprowadzanych przez siebie zmian"
        ],
        poprawna: "D"
    },
    {
        id: 1069,
        pytanie: "W języku SQL za pomocą kwerendy ALTER można",
        odpowiedzi: [
            "wprowadzić dane do tabeli",
            "usunąć tabelę",
            "utworzyć tabelę",
            "zmienić strukturę tabeli"
        ],
        poprawna: "D"
    },
    {
        id: 1070,
        pytanie: "Z ilu podstawowych kolorów składa się model przestrzeni barw CMYK?",
        odpowiedzi: [
            "4 kolorów",
            "2 kolorów",
            "5 kolorów",
            "3 kolorów"
        ],
        poprawna: "A"
    },
    {
        id: 1071,
        pytanie: "Który fragment kodu HTML umożliwi wyświetlenie na stronie WWW przedstawionego tekstu, jeśli żadne formatowanie CSS nie zostało zdefiniowane?",
        odpowiedzi: [
            "Zapraszamy <del>do odwiedzin</del> <u>do zakupów </u>w naszym sklepie internetowym",
            "Zapraszamy <del>do odwiedzin</del><cite> do zakupów </cite> w naszym sklepie internetowym",
            "Zapraszamy <del>do odwiedzin</del><seb> do zakupów </sub>w naszym sklepie internetowym",
            "Zapraszamy <del>do odwiedzin</del><dfn> do zakupów </dfn>w naszym sklepie internetowym"
        ],
        poprawna: "A",
        obraz: "1071.jpg"
    },
    {
        id: 1072,
        pytanie: "Którą wartość zwróci funkcja zlicz napisana w języku JavaScript, jeżeli zostanie wywołana w następujący sposób: zlicz(1, 5, 3, 10);?",
        odpowiedzi: [
            "1",
            "5",
            "3",
            "10"
        ],
        poprawna: "C",
        obraz: "1072.jpg"
    },
    {
        id: 1073,
        pytanie: "W edytorze grafiki rastrowej funkcja \"dodaj kanał alfa\" umożliwia",
        odpowiedzi: [
            "zwiększenie głębi ostrości obrazu",
            "określenie poprawnego balansu bieli",
            "wyostrzenie krawędzi obrazu",
            "dodanie warstwy z przezroczystością"
        ],
        poprawna: "D"
    },
    {
        id: 1074,
        pytanie: "Wskaż instrukcję, która została opisana w ramce",
        odpowiedzi: [
            "for",
            "foreach",
            "next",
            "while"
        ],
        poprawna: "B",
        obraz: "1074.jpg"
    },
    {
        id: 1075,
        pytanie: "W języku JavaScript zdefiniowano obiekt Samochod. Aby wywołać jedną z metod tego obiektu, należy zapisać",
        odpowiedzi: [
            "Samochod.spalanie()",
            "Samochod.kolor",
            "Samochod()",
            "Samochod.spalanie_na100"
        ],
        poprawna: "A"
    },
    {
        id: 1076,
        pytanie: "Weryfikację kompletności formularza, działającą po stronie przeglądarki, należy zrealizować w języku",
        odpowiedzi: [
            "Ruby on Rails",
            "PHP",
            "CSS",
            "JavaScript"
        ],
        poprawna: "D"
    },
    {
        id: 1077,
        pytanie: "Rekurencja to inaczej",
        odpowiedzi: [
            "zwiększenie wartości zmiennej.",
            "odwołanie funkcji do samej sobie.",
            "zmniejszenie wartości funkcji.",
            "zwrócenie wyniku do funkcji głównej."
        ],
        poprawna: "B"
    },
    {
        id: 1078,
        pytanie: "W przedstawionym kodzie HTML umieszczono fragment kodu zapisanego językiem skryptowym. Jest to język:",
        odpowiedzi: [
            "Python.",
            "PHP",
            "JavaScript.",
            "ActionScript."
        ],
        poprawna: "C",
        obraz: "1078.jpg"
    },
    {
        id: 1079,
        pytanie: "Jaką instrukcją języka JavaScript można zmodyfikować kolor czcionki na niebieski elementu HTML o identyfikatorze test?",
        odpowiedzi: [
            "document.getElementById(\"test\").style.font-color = \"blue\";",
            "document.getElementById(\"test\").css.font-color = \"blue\";",
            "document.getElementById(\"test\").css.color = \"blue\";",
            "document.getElementById(\"test\").style.color = \"blue\";"
        ],
        poprawna: "D"
    },
    {
        id: 1080,
        pytanie: "Ile razy powtórzy się wykonanie instrukcji echo w przedstawionym fragmencie kodu zapisanego w języku PHP?",
        odpowiedzi: [
            "dokładnie 5 razy",
            "raz, wypisując całą zawartość tablicy",
            "dokładnie 4 razy",
            "raz, wypisując słowo \"truskawka\""
        ],
        poprawna: "A",
        obraz: "1080.jpg"
    },
    {
        id: 1081,
        pytanie: "Parkowanie domeny jest czynnością polegającą na",
        odpowiedzi: [
            "zmianie abonenta domeny przez przeprowadzenie cesji.",
            "zakupie nowej domeny.",
            "utworzeniu strefy domeny i wskazaniu serwerów DNS.",
            "wpisaniu aliasu CNAME dla domeny."
        ],
        poprawna: "C"
    },
    {
        id: 1082,
        pytanie: "W firmie IT jest dostępna oferta pracy dla administratora sklepu internetowego. Do jego obowiązków należą instalacja i konfiguracja Systemu Zarządzania Treścią dedykowanego wyłącznie sklepowi internetowemu, zmiana szablonów wyglądu sklepu, dostosowanie grafiki. Odpowiednimi umiejętnościami nowego pracownika jest znajomość:",
        odpowiedzi: [
            "HTML, CSS, Photoshop.",
            "CMS WordPress, HTML, Gimp.",
            "CMS PrestaShop, CSS, Gimp.",
            "Photoshop, Gimp, JavaScript."
        ],
        poprawna: "C"
    },
    {
        id: 1083,
        pytanie: "Przedstawiony na ilustracji symbol diagramu związków encji w notacji Martina (kruczej stopki) to związek",
        odpowiedzi: [
            "wiele do wielu z opcjonalnością po prawej stronie.",
            "wiele do jednego z obligatoryjnością po lewej stronie",
            "wiele do jednego z opcjonalnością po prawej stronie",
            "wiele do wielu z obligatoryjnością po lewej stronie"
        ],
        poprawna: "A",
        obraz: "1083.jpg"
    },
    {
        id: 1084,
        pytanie: "W tabeli klienci znajdują się imiona i nazwiska klientów wraz z ich punktami lojalnościowymi. Aby dla dowolnego zestawu danych wyświetlić dane wyłącznie trzech najlepszych klientów można posłużyć się kwerendą",
        odpowiedzi: [
            "SELECT imie, nazwisko FROM klienci ORDER BY id LIMIT 3;",
            "SELECT imie, nazwisko FROM klienci ORDER BY punkty;",
            "SELECT imie, nazwisko FROM klienci ORDER BY id DESC;",
            "SELECT imie, nazwisko FROM klienci ORDER BY punkty DESC LIMIT 3;"
        ],
        poprawna: "D"
    },
    {
        id: 1085,
        pytanie: "Zastosowany w poleceniu GRANT zestaw praw: CREATE, ALTER, DROP dotyczy",
        odpowiedzi: [
            "wybierania informacji z bazy danych",
            "manipulowania danymi",
            "nadawania praw innym użytkownikom.",
            "manipulowania strukturą."
        ],
        poprawna: "D"
    },
    {
        id: 1086,
        pytanie: "Według obowiązującego w Polsce prawa, pracownicy inżynieryjno-techniczni powinni odbywać okresowe szkolenia BHP nie rzadziej niż co",
        odpowiedzi: [
            "8 lat",
            "1 rok",
            "5 lat",
            "6 lat"
        ],
        poprawna: "C"
    },
    {
        id: 1087,
        pytanie: "Kod przedstawia fragment dokumentu HTML i przypisanego do niego formatowania CSS. Użytkownik wyświetlając stronę w przeglądarce stwierdził, że panele są wyświetlone w dwóch liniach, po dwa obok siebie. Oznacza to, że ekran jest szerokości",
        odpowiedzi: [
            "300 px i wysokości 600 px .",
            "większej niż 600 px.",
            "600 px lub mniej, ale nie mniej niż 301 px.",
            "900 px."
        ],
        poprawna: "C",
        obraz: "1087.jpg"
    },
    {
        id: 1088,
        pytanie: "Tabela zakupy zawiera pola: id, nazwa, cena. Aby usunąć wiersze, w których cena jest nie mniejsza niż 1000 zł i nie większa niż 1500 zł, należy wydać kwerendę",
        odpowiedzi: [
            "DELETE FROM zakupy WHERE cena > 1000 AND cena < 1500;",
            "DELETE zakupy WHERE cena BETWEEN 1000 AND 1500;",
            "DELETE zakupy WHERE cena;",
            "DELETE FROM zakupy WHERE cena BETWEEN 1000 AND 1500;"
        ],
        poprawna: "D"
    },
    {
        id: 1089,
        pytanie: "Wskaż najszybszy sposób usunięcia wszystkich rekordów z tabeli adresy bez usuwania struktury tabeli",
        odpowiedzi: [
            "DELETE * FROM adresy;",
            "TRUNCATE TABLE adresy;",
            "DROP TABLE adresy;",
            "DELETE TABLE adresy;"
        ],
        poprawna: "B"
    },
    {
        id: 1090,
        pytanie: "Z przedstawionej ilustracji panelu Artykuły systemu CMS można wywnioskować, że",
        odpowiedzi: [
            "artykuł numer 2 został opublikowany.",
            "artykuł numer 5 został wyróżniony.",
            "artykuł numer 1 został wyróżniony.",
            "artykuł numer 4 nie został jeszcze opublikowany."
        ],
        poprawna: "A",
        obraz: "1090.jpg"
    },
    {
        id: 1091,
        pytanie: "Efekt przedstawiony w filmie powinien być zdefiniowany w selektorze",
        odpowiedzi: [
            "tr { background-color: Pink; }",
            "td, th { background-color: Pink; }",
            "tr:hover { background-color: Pink; }",
            "tr:active { background-color: Pink; }"
        ],
        poprawna: "C"
    },
    {
        id: 1092,
        pytanie: "Witryna internetowa zawiera formatowanie nagłówka pierwszego stopnia w zewnętrznym arkuszu stylów. Podstrona news.html, która powinna być formatowana zgodnie z przedstawioną ilustracją, powinna dodatkowo zawierać styl wewnętrzny, którego minimalny zestaw cech to",
        odpowiedzi: [
            "styl wewnętrzny 3",
            "styl wewnętrzny 2",
            "styl wewnętrzny 4",
            "styl wewnętrzny 1"
        ],
        poprawna: "A",
        obraz: "1092.jpg"
    },
    {
        id: 1093,
        pytanie: "Który rodzaj ataku hakerskiego jest niebezpieczny dla bazy danych i polega na dodaniu złośliwego kodu do zapytania?",
        odpowiedzi: [
            "SQL Injection.",
            "Man-in-the-middle.",
            "brute force.",
            "DDoS."
        ],
        poprawna: "A"
    },
    {
        id: 1094,
        pytanie: "Na ilustracji przedstawiono tabelę o nazwie konta. Aby policzyć ile rejestracji dokonano w poszczególnych latach, oraz wyświetlić te liczby wraz z rokiem rejestracji należy wydać zapytanie",
        odpowiedzi: [
            "SELECT COUNT(rejestracja) FROM konta GROUP BY rejestracja;",
            "SELECT rejestracja, COUNT(rejestracja) FROM konta GROUP BY rejestracja;",
            "SELECT COUNT(rejestracja) FROM konta JOIN rejestracja ON id;",
            "SELECT rejestracja, COUNT(rejestracja) FROM konta;"
        ],
        poprawna: "B",
        obraz: "1094.jpg"
    },
    {
        id: 1095,
        pytanie: "Przedstawione na ilustracji narzędzie służy do",
        odpowiedzi: [
            "walidacji kodu HTML i XHTML.",
            "sprawdzenia zgodności witryny ze standardem HTML5.",
            "debugowania strony internetowej.",
            "walidacji stylów CSS."
        ],
        poprawna: "D",
        obraz: "1095.jpg"
    },
    {
        id: 1096,
        pytanie: "Po kliknięciu w blok div, blok ten",
        odpowiedzi: [
            "przesunie się w dół.",
            "powiększy się.",
            "przesunie się w prawo",
            "zmieni swoją szerokość, nie zmieni wysokości."
        ],
        poprawna: "B",
        obraz: "1096.jpg"
    },
    {
        id: 1097,
        pytanie: "W przedstawionym środowisku programistycznym, aby zobaczyć listę błędów składniowych po nieudanej kompilacji, należy wybrać kombinację klawiszy",
        odpowiedzi: [
            "Ctrl+W, O",
            "Ctrl+W, N",
            "Ctrl+W, T",
            "Ctrl+W, E"
        ],
        poprawna: "D",
        obraz: "1097.jpg"
    },
    {
        id: 1098,
        pytanie: "Przedstawiony kod PHP wygenerował ostrzeżenia wyświetlone na stronie internetowej. Co jest ich prawdopodobną przyczyną?",
        odpowiedzi: [
            "brak wysłanych danych z formularza, co powoduje błąd przy czytaniu z tablicy $_POST",
            "odwołanie do tablicy $_POST zamiast do $POST.",
            "błąd logiczny w warunku, zamiast iloczynu logicznego && powinna być suma logiczna ||",
            "błąd składniowy w kwerendzie SQL, po słowie WHERE."
        ],
        poprawna: "A",
        obraz: "1098.jpg"
    },
    {
        id: 1099,
        pytanie: "W programie Audacity podczas obróbki dźwięku pozyskanego z płyty analogowej należy usunąć pojedyncze trzaski charakterystyczne dla płyt winylowych. Do tego celu przeznaczone jest narzędzie",
        odpowiedzi: [
            "Redukcja szumu (Noise Reduction).",
            "Usuwanie stukotu (Click Removal).",
            "Obwiednia (Envelope).",
            "Normalizuj (Normalize)."
        ],
        poprawna: "B"
    },
    {
        id: 1100,
        pytanie: "Wykonanie fragmentu kodu JavaScript spowoduje utworzenie elementu",
        odpowiedzi: [
            "<button onclick=\"wywolaj()\" id=\"przycisk\" value=\"OK\">",
            "<button id=\"przycisk\">OK</button>",
            "<button class=\"przycisk\">OK<</button>",
            "<button onclick=\"wywolaj()\" class=\"przycisk\">OK</button>"
        ],
        poprawna: "D",
        obraz: "1100.jpg"
    },
    {
        id: 1101,
        pytanie: "W języku PHP, aby otworzyć plik dane.txt tylko do odczytu i pobrać z niego zawartość należy zastosować funkcje:",
        odpowiedzi: [
            "fopen(\"dane.txt\", \"r\") oraz fputs()",
            "fopen(\"dane.txt\", \"r\") oraz fgets()",
            "fopen(\"dane.txt\", \"w\") oraz fputs()",
            "fopen(\"dane.txt\", \"w\") oraz fgets()"
        ],
        poprawna: "B"
    },
    {
        id: 1102,
        pytanie: "W języku HTML zdefiniowano dwie listy zagnieżdżone. Zakładając, że żadne formatowanie CSS nie zostało użyte, kod odpowiadający temu wyglądowi ma postać",
        odpowiedzi: [
            "Kod 3",
            "Kod 2",
            "Kod 4",
            "Kod 1"
        ],
        poprawna: "C",
        obraz: "1102.jpg"
    },
    {
        id: 1103,
        pytanie: "Który filtr zastosowano na przedstawionej grafice?",
        odpowiedzi: [
            "szum RGB",
            "błysk soczewki",
            "pikselizuj",
            "wygładź"
        ],
        poprawna: "C",
        obraz: "1103.jpg"
    },
    {
        id: 1104,
        pytanie: "Wynikiem działania przedstawionego kodu PHP jest wyświetlenie",
        odpowiedzi: [
            "int(314)",
            "object(3.14)",
            "float(3.14)",
            "string(3)"
        ],
        poprawna: "C",
        obraz: "1104.jpg"
    },
    {
        id: 1105,
        pytanie: "Spójność danych w bazie MySQL można sprawdzić za pomocą polecenia",
        odpowiedzi: [
            "mysql",
            "REPAIR TABLE",
            "mysqldump",
            "CHECK TABLE"
        ],
        poprawna: "D"
    },
    {
        id: 1106,
        pytanie: "Strona internetowa zawiera menu poziome w postaci listy punktowanej. Aby elementy tej listy mogły być wyświetlane w jednej linii, należy ustawić dla selektora li właściwość",
        odpowiedzi: [
            "possition",
            "outline",
            "text-align",
            "display"
        ],
        poprawna: "D"
    },
    {
        id: 1107,
        pytanie: "Na ilustracji jest przedstawiona struktura sekcji dla strony internetowej. Zakładając, że blok5 nie ma zdefiniowanej szerokości, a bloki są zdefiniowane w dokumencie HTML kolejno, zgodnie z ich numerami, to powinno się następująco zdefiniować opływanie",
        odpowiedzi: [
            "bloki 1, 2, 3, 4 float: right; blok 5 clear: right;",
            "bloki 1, 2, 4 float: left; blok 3, 5 float: right;",
            "blok 1 float: left; bloki 2, 4 float: center; blok 3 float: right; blok 5 clear: both;",
            "bloki 1, 2, 4 float: left; blok 3 float: right; blok 5 clear: both;"
        ],
        poprawna: "D",
        obraz: "1107.jpg"
    },
    {
        id: 1108,
        pytanie: "Wykres słupkowy należy zapisać w formacie rastrowym tak, aby jakość jego krawędzi była jak najlepsza, również dla dużego powiększenia, unikając efektu aliasingu. Do tego celu można zastosować format",
        odpowiedzi: [
            "JPEG",
            "SVG",
            "PNG",
            "CDR"
        ],
        poprawna: "C"
    },
    {
        id: 1109,
        pytanie: "W kodzie zapisanym w języku skryptowym PHP należy wykonać operacje dla spełnionego warunku: adresy są parzystymi numerami na ulicach: Bratkowej, Nasturcjowej. Wyrażeniem logicznym sprawdzającym ten warunek jest",
        odpowiedzi: [
            "($ulica == \"Bratkowa\" || $ulica == \"Nasturcjowa\") && $numer % 2 == 0",
            "$ulica == \"Bratkowa\" && $ulica == \"Nasturcjowa\" && $numer / 2 == 0",
            "$ulica == \"Bratkowa\" && $ulica == \"Nasturcjowa\" && $numer % 2 == 0",
            "($ulica == \"Bratkowa\" || $ulica == \"Nasturcjowa\") && $numer / 2 == 0"
        ],
        poprawna: "A"
    },
    {
        id: 1110,
        pytanie: "Którą funkcję należy wpisać w miejsce znaków zapytania, aby dane zwrócone kwerendą zostały wyświetlone na stronie internetowej?",
        odpowiedzi: [
            "mysqli_num_rows($zapytanie)",
            "mysqli_fetch_array($zapytanie)",
            "mysql_fetch_assoc($zapytanie)",
            "mysql_fetch_field($zapytanie)"
        ],
        poprawna: "B",
        obraz: "1110.jpg"
    },
    {
        id: 1111,
        pytanie: "W tabeli klienci istnieje pole status przyjmujące wartości: Zwykły, Złoty, Platynowy.  Ze względu na to, że bardzo często przetwarzane są tylko dane klientów o statusie Platynowy, należy utworzyć wirtualną tabelę (widok) przechowującą wszystkie dane jedynie tych klientów. W tym celu można zastosować kwerendę",
        odpowiedzi: [
            "CREATE VIEW KlienciPlatyna FROM klienci WHERE status = \"Platynowy\";",
            "CREATE VIEW KlienciPlatyna AS SELECT * FROM klienci WHERE status = \"Platynowy\";",
            "CREATE VIEW KlienciPlatyna AS SELECT status FROM klienci WHERE \"Platynowy\";",
            "CREATE VIEW KlienciPlatyna AS klient WHERE status = \"Platynowy\";"
        ],
        poprawna: "B"
    },
    {
        id: 1112,
        pytanie: "Dane ciasteczek są przechowywane w tablicy",
        odpowiedzi: [
            "$_GET",
            "$_POST",
            "$_COOKIE",
            "$_SERVER"
        ],
        poprawna: "C"
    },
    {
        id: 1113,
        pytanie: "W ramce przedstawiono umiejętności członków zespołu tworzącego witrynę internetową. Który z przydziałów prac najbardziej pasuje do ich umiejętności?",
        odpowiedzi: [
            "Przydział 2",
            "Przydział 1",
            "Przydział 3",
            "Przydział 4"
        ],
        poprawna: "A",
        obraz: "1113.jpg"
    },
    {
        id: 1114,
        pytanie: "Aby utworzyć stronę internetową odpowiednią dla osób z niepełnosprawnościami, stosując wytyczne WCAG 2.x należy między innymi",
        odpowiedzi: [
            "podpisywać wszystkie obrazy tekstem alternatywnym oraz kontrolki etykietami.",
            "stosować tylko jedną paletę barw wykorzystującą jeden główny kolor z różnymi jego odcieniami.",
            "stosować tylko paragrafy, nie stosować nagłówków h1 – h6.",
            "wybrać najpopularniejszą przeglądarkę i na niej testować tworzoną stronę."
        ],
        poprawna: "A"
    },
    {
        id: 1115,
        pytanie: "Z tabeli należy wybrać imiona osób, spełniające warunek taki, że drugą literą jest ‘e’, a słowo jest nie krótsze niż 5 znaków (pięcioznakowe lub dłuższe). W tym celu można zastosować w klauzuli WHERE wyrażenie",
        odpowiedzi: [
            "imie LIKE '_e___%' (po literze e trzy podkreślniki)",
            "imie LIKE '_e_%'",
            "imie LIKE '%e%'",
            "imie LIKE '_e___' (po literze e trzy podkreślniki)"
        ],
        poprawna: "A"
    },
    {
        id: 1116,
        pytanie: "Przedstawiony fragment strony HTML formatowany stylem CSS jest interpretowany jako",
        odpowiedzi: [
            "Wygląd 2",
            "Wygląd 4",
            "Wygląd 1",
            "Wygląd 3"
        ],
        poprawna: "A",
        obraz: "1116.jpg"
    },
    {
        id: 1117,
        pytanie: "Który wygląd strony internetowej w przeglądarce, można uzyskać w wyniku interpretacji przedstawionego kodu HTML zakładając, że żadne formatowanie CSS nie jest zdefiniowane?",
        odpowiedzi: [
            "Wygląd 4",
            "Wygląd 2",
            "Wygląd 3",
            "Wygląd 1"
        ],
        poprawna: "B",
        obraz: "1117.jpg"
    },
    {
        id: 1118,
        pytanie: "Która z wymienionych zasad wpływa niekorzystnie na czytelność kodu?",
        odpowiedzi: [
            "Należy wprowadzać komentarze w trudniejszych częściach kodu.",
            "W każdej linii kodu powinna występować tylko jedna instrukcja.",
            "Kod powinien być napisany bez wcięć i zbędnych enterów.",
            "Nazwy zmiennych powinny odzwierciedlać ich zadanie."
        ],
        poprawna: "C"
    },
    {
        id: 1119,
        pytanie: "Efektem wykonania przedstawionego kodu PHP jest wypełnienie tablicy",
        odpowiedzi: [
            "kolejnymi liczbami od -100 do 100 i wypisanie wartości ujemnych.",
            "10 liczbami pseudolosowymi, a następnie wypisanie wartości ujemnych.",
            "kolejnymi liczbami od 0 do 9 i wypisanie ich.",
            "100 liczbami pseudolosowymi, a następnie wypisanie wartości dodatnich."
        ],
        poprawna: "B",
        obraz: "1119.jpg"
    },
    {
        id: 1120,
        pytanie: "W której notacji diagramów ER został zapisany model związków encji przedstawiony na ilustracji?",
        odpowiedzi: [
            "Martina.",
            "Min-Max.",
            "Bachmana.",
            "Chena."
        ],
        poprawna: "A",
        obraz: "1120.jpg"
    },
    {
        id: 1121,
        pytanie: "Czynnością polegającą na przetwarzaniu grafiki rastrowej na wektorową jest",
        odpowiedzi: [
            "wektoryzacja.",
            "kadrowanie.",
            "rasteryzacja.",
            "skalowanie."
        ],
        poprawna: "A"
    },
    {
        id: 1122,
        pytanie: "Narzędzie phpMyAdmin służy do administrowania serwerem",
        odpowiedzi: [
            "WWW",
            "FTP",
            "plików",
            "baz danych"
        ],
        poprawna: "D"
    },
    {
        id: 1123,
        pytanie: "W jaki sposób należy ustawić monitor, aby były spełnione zasady ergonomicznej pracy na stanowisku komputerowym?",
        odpowiedzi: [
            "Monitor powinien stać tak, by jego górna krawędź ekranu znajdowała się od 15° do 20° powyżej linii oczu.",
            "Dla osób praworęcznych monitor powinien stać z prawej strony, a dla leworęcznych z lewej strony stanowiska komputerowego.",
            "Monitor powinien stać bokiem do okna w celu wyeliminowania refleksów świetlnych.",
            "Monitor powinien być tak ustawiony, by kąt między płaszczyzną monitora, a linią patrzenia na jego środek mieścił się w granicy 30° ÷ 50°."
        ],
        poprawna: "C"
    },
    {
        id: 1124,
        pytanie: "W języku PHP zmienna globalna $_POST, służąca do odbierania danych z formularza przesłanych metodą POST, jest:",
        odpowiedzi: [
            "ciągiem znaków zakodowanym w JSON.",
            "zmienną tekstową.",
            "tablicą asocjacyjną.",
            "obiektem klasy stdClass."
        ],
        poprawna: "C"
    },
    {
        id: 1125,
        pytanie: "Dana jest tabela studenci o polach id_albumu, ubezpieczenie. Modyfikacja w kolumnie ubezpieczenie polegająca na zmianie wierszy bez wartości (NULL) na ciąg znaków „brak” zostanie wykonana kwerendą",
        odpowiedzi: [
            "ALTER TABLE studenci ADD ubezpieczenie='brak' WHERE ubezpieczenie IS NULL;",
            "ALTER TABLE studenci MODIFY COLUMN ubezpieczenie='brak' NOT NULL;",
            "UPDATE studenci ubezpieczenie IS NULL SET ubezpieczenie='brak';",
            "UPDATE studenci SET ubezpieczenie='brak' WHERE ubezpieczenie IS NULL;"
        ],
        poprawna: "D"
    },
    {
        id: 1126,
        pytanie: "Z ilustracji można odczytać, że",
        odpowiedzi: [
            "opóźnienie transmisji wynosi 17 ms.",
            "testowano łącze symetryczne.",
            "opóźnienie transmisji wynosi około 3,6 MB/s.",
            "testowano szybkość odczytu i zapisu oraz czas dostępu do dysku twardego."
        ],
        poprawna: "A",
        obraz: "1126.jpg"
    },
    {
        id: 1127,
        pytanie: "Na ilustracji przedstawiono konfigurację serwera Apache dla środowiska XAMPP. Pod jakim lokalnym adresem jest on dostępny?",
        odpowiedzi: [
            "127.0.0.1:70",
            "htdocs",
            "192.168.0.1:3306",
            "localhost:80"
        ],
        poprawna: "A",
        obraz: "1127.jpg"
    },
    {
        id: 1128,
        pytanie: "Który typ danych SQL należy użyć, jako optymalny, do zapisania numeru PESEL?",
        odpowiedzi: [
            "FLOAT(11)",
            "CHAR(11)",
            "BLOB",
            "TINYINT"
        ],
        poprawna: "B"
    },
    {
        id: 1129,
        pytanie: "Którą wartość atrybutu name znacznika  wykorzystuje się do kontrolowania obszaru widzialnego na różnych urządzeniach, na których jest wyświetlana strona internetowa?",
        odpowiedzi: [
            "viewport",
            "keywords",
            "description",
            "generator"
        ],
        poprawna: "A"
    },
    {
        id: 1130,
        pytanie: "Gaśnicę oznaczoną literą C stosuje się do gaszenia pożarów",
        odpowiedzi: [
            "cieczy i ciał stałych.",
            "gazów palnych.",
            "metali palnych.",
            "tłuszczów i olejów kuchennych."
        ],
        poprawna: "B",
        obraz: "1130.jpg"
    },
    {
        id: 1131,
        pytanie: "Semantyczny znacznik sekcji języka HTML 5 przeznaczony do umieszczenia stopki strony WWW to",
        odpowiedzi: [
            "<figcaption>",
            "<aside>",
            "<footer>",
            "<header>"
        ],
        poprawna: "C"
    },
    {
        id: 1132,
        pytanie: "Którego polecenia JavaScript należy użyć, aby w oknie przeglądarki wyświetliło się okno przedstawione na obrazie?",
        odpowiedzi: [
            "document.write(’Ile masz lat?’)",
            "confirm(’Ile masz lat?’)",
            "alert(’Ile masz lat?’)",
            "prompt(’Ile masz lat?’)"
        ],
        poprawna: "D",
        obraz: "1132.jpg"
    },
    {
        id: 1133,
        pytanie: "Która ikona przeglądarki internetowej Mozilla Firefox przełącza stronę w tryb responsywny?",
        odpowiedzi: [
            "Ikona A.",
            "Ikona B.",
            "Ikona C.",
            "Ikona D."
        ],
        poprawna: "D",
        obraz: "1133.jpg"
    },
    {
        id: 1134,
        pytanie: "W pliku konfiguracyjnym serwera Apache httpd.conf  linia kodu Listen 120 oznacza",
        odpowiedzi: [
            "numer portu, na którym nasłuchuje serwer.",
            "czwarty oktet adresu IP serwera.",
            "jeden z numerów kodu błędu odpowiedzi HTTP.",
            "maksymalną liczbę jednoczesnych połączeń z sieci do serwera."
        ],
        poprawna: "A"
    },
    {
        id: 1135,
        pytanie: "Które z przedstawionych usług są niezbędne w celu udostępnienia strony internetowej pod adresem https://domowastrona.pl?",
        odpowiedzi: [
            "DNS, serwer WWW, certyfikat SSL",
            "serwer WWW, SMTP, POP3",
            "SMTP, FTP",
            "DNS, FTP"
        ],
        poprawna: "A"
    },
    {
        id: 1136,
        pytanie: "W kodzie HTML 5, w celu walidacji wartości pola <input type=\"text\"> za pomocą wyrażenia regularnego, należy użyć atrybutu",
        odpowiedzi: [
            "step",
            "pattern",
            "value",
            "readonly"
        ],
        poprawna: "B"
    },
    {
        id: 1137,
        pytanie: "W języku PHP, aby otworzyć już istniejący plik lektury.txt w trybie dodawania treści, tak aby wskaźnik pliku został umieszczony na końcu tego pliku należy zastosować instrukcję",
        odpowiedzi: [
            "fopen(\"lektury.txt\", \"w\")",
            "fopen(\"lektury.txt\", \"x\")",
            "fopen(\"lektury.txt\", \"r\")",
            "fopen(\"lektury.txt\", \"a\")"
        ],
        poprawna: "D"
    },
    {
        id: 1138,
        pytanie: "DELETE FROM Pracownicy ORDER BY rok_urodzenia LIMIT 1; \nW wyniku wykonania zapytania SQL zostanie",
        odpowiedzi: [
            "usunięty rekord z danymi pracownika, który miał wpisaną datę urodzenia.",
            "usunięta tabela Pracownicy.",
            "usunięta kolumna rok_urodzenia z tabeli Pracownicy.",
            "usunięty rekord najstarszego pracownika."
        ],
        poprawna: "D"
    },
    {
        id: 1139,
        pytanie: "Który semantyczny znacznik języka HTML 5 może wystąpić tylko raz na stronie?",
        odpowiedzi: [
            "<article>",
            "<header>",
            "<section>",
            "<main>"
        ],
        poprawna: "D"
    },
    {
        id: 1140,
        pytanie: "Warunkiem koniecznym uznania choroby za zawodową jest",
        odpowiedzi: [
            "nagłe wystąpienie jej podczas wypadku w pracy.",
            "występowanie jej objawów do12 miesięcy od rozpoczęcia stosunku pracy.",
            "wystąpienie jej objawów tylko podczas wykonywania pracy.",
            "wymienienie jej w wykazie chorób zawodowych."
        ],
        poprawna: "D"
    },
    {
        id: 1141,
        pytanie: "Na ilustracji przedstawiono ustawienia programu służącego do montażu filmów. Nowy projekt ma ustawienia",
        odpowiedzi: [
            "25 klatek na każdą sekundę filmu.",
            "25 klatek na cały film.",
            "48 minut czasu trwania filmu.",
            "wysokość 1920 px i szerokość 1080 px."
        ],
        poprawna: "A",
        obraz: "1141.jpg"
    },
    {
        id: 1142,
        pytanie: "Poleceniem SQL służącym do wstawiania nowego rekordu z danymi jest",
        odpowiedzi: [
            "CREATE",
            "ADD",
            "INSERT INTO",
            "UPDATE"
        ],
        poprawna: "C"
    },
    {
        id: 1143,
        pytanie: "Odizolowane środowisko ogólnego przeznaczenia, utworzone na fizycznym serwerze z wykorzystaniem technologii wirtualizacji, to",
        odpowiedzi: [
            "serwer aplikacji.",
            "serwer VPS.",
            "serwer dedykowany.",
            "serwer DHCP."
        ],
        poprawna: "B"
    },
    {
        id: 1144,
        pytanie: "Aby utworzyć strukturę strony internetowej za pomocą znaczników semantycznych języka HTML 5, zgodnie z przedstawionym na ilustracji projektem, SEKCJA B powinna być zawarta w znaczniku",
        odpowiedzi: [
            "<footer> </footer>",
            "<header> </header>",
            "<section> </section>",
            "<nav> </nav>"
        ],
        poprawna: "D",
        obraz: "1144.jpg"
    },
    {
        id: 1145,
        pytanie: "Który fragment definicji dwukolumnowej tabeli odpowiada efektowi scalenia komórki 1 i 3, przedstawionemu na ilustracji?",
        odpowiedzi: [
            "<td rowspan = \"2\">komórka1+3</td>",
            "<td rowspan = \"3\">komórka1+3</td>",
            "<td colspan = \"3\">komórka1+3</td>",
            "<td colspan = \"2\">komórka1+3</td>"
        ],
        poprawna: "A",
        obraz: "1145.jpg"
    },
    {
        id: 1146,
        pytanie: "W kodzie JavaScript aby wywołać okno z polem do wprowadzania danych i przyciskami OK i ANULUJ, należy zastosować metodę",
        odpowiedzi: [
            "confirm();",
            "message();",
            "prompt();",
            "alert();"
        ],
        poprawna: "C"
    },
    {
        id: 1147,
        pytanie: "Na przedstawionym diagramie ER zapis FK1 oznacza",
        odpowiedzi: [
            "relację 1:N.",
            "relację 1:1.",
            "klucz podstawowy.",
            "klucz obcy."
        ],
        poprawna: "D",
        obraz: "1147.jpg"
    },
    {
        id: 1148,
        pytanie: "Wynikiem działania algorytmu dla c = 3 jest liczba",
        odpowiedzi: [
            "24",
            "60",
            "6",
            "12"
        ],
        poprawna: "A",
        obraz: "1148.jpg"
    },
    {
        id: 1149,
        pytanie: "Rozdzielczość obrazów cyfrowych wyświetlanych na ekranie monitora wyrażona w liczbie pikseli na cal określa jednostka",
        odpowiedzi: [
            "dpi",
            "ppi",
            "lpi",
            "spi"
        ],
        poprawna: "B"
    },
    {
        id: 1150,
        pytanie: "Na filmie zaprezentowano algorytm sortowania",
        odpowiedzi: [
            "grzebieniowego.",
            "przez scalanie.",
            "przez wstawianie.",
            "bąbelkowego."
        ],
        poprawna: "C"
    },
    {
        id: 1151,
        pytanie: "tr:nth-child(even) {background-color: #F2F2F2;} \nZastosowane formatowanie selektora tr spowoduje",
        odpowiedzi: [
            "wypełnienie szarym tłem wierszy nieparzystych tabeli.",
            "wypełnienie szarym tłem wierszy parzystych tabeli.",
            "oddzielenie wierszy nieparzystych od parzystych wierszem z szarym tłem.",
            "wypełnienie wszystkich wierszy tabeli szarym tłem."
        ],
        poprawna: "B"
    },
    {
        id: 1152,
        pytanie: "Na podstawie analizy ilustracji można stwierdzić, że publikacja pliku o nazwie plik1.zip nie powiodła się z powodu",
        odpowiedzi: [
            "błędu autoryzacji użytkownika, wynikającej z nieprawidłowego hasła.",
            "przekroczenia rozmiaru w lokalizacji docelowej przeznaczonego dla użytkownika.",
            "przerwania transmisji przez użytkownika.",
            "usunięcia pliku w źródłowej lokalizacji."
        ],
        poprawna: "B",
        obraz: "1152.jpg"
    },
    {
        id: 1153,
        pytanie: "Która informacja, zgodnie z RODO, jest daną wrażliwą szczególnie chronioną?",
        odpowiedzi: [
            "Numer telefonu.",
            "Pochodzenie rasowe.",
            "Wykształcenie.",
            "Adres e-mail."
        ],
        poprawna: "B"
    },
    {
        id: 1154,
        pytanie: "System informatyczny umożliwiający tworzenie, edycję i publikację treści na stronach internetowych bez konieczności posiadania zaawansowanej wiedzy technicznej, to",
        odpowiedzi: [
            "RDBMS",
            "ERP",
            "CMS",
            "DBMS"
        ],
        poprawna: "C"
    },
    {
        id: 1155,
        pytanie: "Aby utworzyć styl strony responsywnej dla ekranów o szerokości od 600 px do 800 px należy zastosować regułę CSS",
        odpowiedzi: [
            "@media (max-width: 800px) (min-width: 600px){/*style css*/}",
            "@media screen and (max-width: 800px) and (min-width: 600px){/*style css*/}",
            "@media (min-width: 800px){/*style css*/}",
            "@media screen (min-width: 800px) and (max-width: 600px){/*style css*/}"
        ],
        poprawna: "B"
    },
    {
        id: 1156,
        pytanie: "Właściwość CSS animation-duration określa",
        odpowiedzi: [
            "czas trwania jednego cyklu animacji.",
            "liczba powtórzeń animacji.",
            "kierunek rozpoczęcia animacji.",
            "opóźnienie startu animacji."
        ],
        poprawna: "A"
    },
    {
        id: 1157,
        pytanie: "Kod JavaScript ma za zadanie szukanie wartości maksymalnej w tablicy. Wskaż błąd występujący w skrypcie.",
        odpowiedzi: [
            "Kod zapisany w linii 20 ma nieprawidłową składnię.",
            "Zmienna max ma niewłaściwie przypisaną wartość w linii 14.",
            "Zastosowano operator porównania zamiast przypisania w linii 15.",
            "Warunek w linii 16 powinien być odwrócony."
        ],
        poprawna: "C",
        obraz: "1157.jpg"
    },
    {
        id: 1158,
        pytanie: "Delegacja domeny to",
        odpowiedzi: [
            "zmiana nazwy domeny.",
            "utrata okresu ważności domeny z możliwością odnowienia jej.",
            "zmiana rejestratora domeny.",
            "umieszczenie informacji o zewnętrznych serwerach, które obsługują stronę."
        ],
        poprawna: "D"
    },
    {
        id: 1159,
        pytanie: "Domyślny użytkownik, który posiada pełne uprawnienia do zarządzania bazą danych w systemie MySQL, to",
        odpowiedzi: [
            "admin",
            "sysadmin",
            "root",
            "mysqld"
        ],
        poprawna: "C"
    },
    {
        id: 1160,
        pytanie: "p { font-family: Arial, Helvetica, sans-serif; } \nZdefiniowany styl dla selektora p spowoduje, że w paragrafie zostanie wyświetlony tekst czcionką",
        odpowiedzi: [
            "szeryfową.",
            "bezszeryfową.",
            "dekoracyjną.",
            "maszynową."
        ],
        poprawna: "B"
    },
    {
        id: 1161,
        pytanie: "Złożoność obliczeniowa prezentowanego kodu wynosi",
        odpowiedzi: [
            "O(1)",
            "O(n)",
            "O(n!)",
            "O(n2)"
        ],
        poprawna: "B",
        obraz: "1161.jpg"
    },
    {
        id: 1162,
        pytanie: "Który z elementów jest opcjonalny w kodzie HTML5 i jego pominięcie nie spowoduje wygenerowania błędu lub ostrzeżenia walidatora HTML?",
        odpowiedzi: [
            "<meta name=\"keywords\" content=\"\">",
            "<!DOCTYPE html>",
            "<title>Tytuł strony</title>",
            "<html lang=\"pl\">"
        ],
        poprawna: "A"
    },
    {
        id: 1163,
        pytanie: "Które kolory tła zostały przypisane odpowiednio do akapitów o identyfikatorach 1, 2, 3, 4?",
        odpowiedzi: [
            "Szary, niebieski, czerwony, żółty.",
            "Żółty, zielony, czerwony, szary.",
            "Szary, żółty, zielony, niebieski.",
            "Żółty, czerwony, zielony, szary."
        ],
        poprawna: "C",
        obraz: "1163.jpg"
    },
    {
        id: 1164,
        pytanie: "Co oznacza pojęcie integralności referencyjnej?",
        odpowiedzi: [
            "Wartość atrybutu należy do jego dziedziny.",
            "Baza jest odporna na błędy i awarie wynikające z zawodności sprzętu i oprogramowania.",
            "Każda encja musi mieć zdefiniowany klucz podstawowy o wartości unikatowej i różnej od NULL.",
            "Każdej wartości klucza obcego odpowiada dokładnie jedna wartość klucza podstawowego."
        ],
        poprawna: "D"
    },
    {
        id: 1165,
        pytanie: "Który styl CSS ma najwyższy priorytet ważności w zastosowaniu do elementów dokumentu HTML?",
        odpowiedzi: [
            "Styl importowany do wewnętrznego arkusza.",
            "Zewnętrzny arkusz stylów.",
            "Styl lokalny.",
            "Wewnętrzny arkusz stylów."
        ],
        poprawna: "C"
    },
    {
        id: 1166,
        pytanie: "Organ nadzoru i kontroli nad przestrzeganiem przepisów prawa pracy, w tym zasad BHP to",
        odpowiedzi: [
            "Polska Agencja Pracy.",
            "Wojewódzki Departament Kontroli Pracy.",
            "Państwowa Inspekcja Pracy.",
            "Powiatowy Urząd Pracy."
        ],
        poprawna: "C"
    },
    {
        id: 1167,
        pytanie: "Które zdarzenie języka JavaScript jest wyzwalane w momencie, gdy kursor myszy znajduje się na elemencie do którego jest przypisane?",
        odpowiedzi: [
            "onmouseout",
            "onmousedown",
            "onmouseup",
            "onmouseover"
        ],
        poprawna: "D"
    },
    {
        id: 1168,
        pytanie: "Upload danych to termin, który oznacza",
        odpowiedzi: [
            "opóźnienie w transmisji pliku.",
            "przesyłanie plików na serwer.",
            "pobieranie plików z serwera.",
            "trasę transferu pliku."
        ],
        poprawna: "B"
    },
    {
        id: 1169,
        pytanie: "Który typ danych należy przypisać kolumnie z kodami pocztowymi w tabeli relacyjnej bazy danych, aby przechowywała dane w formie łańcuchów znakowych o zdefiniowanej, stałej długości?",
        odpowiedzi: [
            "BLOB",
            "TEXT",
            "DECIMAL",
            "CHAR"
        ],
        poprawna: "D"
    },
    {
        id: 1170,
        pytanie: "Które zapytanie SQL należy wykonać na tabeli Pracownicy, aby otrzymać średnie wynagrodzenie dla pracownika na stanowisku kasjer?",
        odpowiedzi: [
            "SELECT SREDNIA(Wynagrodzenie) AND Stanowisko='kasjer' FROM Pracownicy;",
            "SELECT SUM(*) FROM Pracownicy AND Stanowisko= 'kasjer';",
            "SELECT AVG(Wynagrodzenie) FROM Pracownicy WHERE Stanowisko='kasjer';",
            "SELECT AVG(kasjer.Wynagrodzenie) FROM Pracownicy;"
        ],
        poprawna: "C",
        obraz: "1170.jpg"
    },
    {
        id: 1171,
        pytanie: "Obraz o rozdzielczości 72 PPI oznacza, że ma 72 piksele na",
        odpowiedzi: [
            "megabajt.",
            "centymetr.",
            "cal.",
            "milimetr."
        ],
        poprawna: "C"
    },
    {
        id: 1172,
        pytanie: "Obiekt bazy danych, którego głównym przeznaczeniem jest drukowanie lub wyświetlanie zestawień danych, to",
        odpowiedzi: [
            "moduł.",
            "formularz.",
            "makro.",
            "raport."
        ],
        poprawna: "D"
    },
    {
        id: 1173,
        pytanie: "Wynikiem działania kodu jest ciąg",
        odpowiedzi: [
            "0 2 4 6 8",
            "0 2 4 6 8 10",
            "0 1 2 3 4 5 6 7 8 9",
            "0 1 2 3 4 5 6 7 8 9 10"
        ],
        poprawna: "A",
        obraz: "1173.jpg"
    },
    {
        id: 1174,
        pytanie: "Na podstawie kodu widocznego na ilustracji można stwierdzić, że",
        odpowiedzi: [
            "nie przypisano wartości do zmiennej nazwisko.",
            "funkcja wyswietlNazwisko(nazwisko) musi być wywołana wewnątrz innej funkcji.",
            "podano nieprawidłowy argument do funkcji alert.",
            "nie zadeklarowano funkcji wyswietlNazwisko."
        ],
        poprawna: "A",
        obraz: "1174.jpg"
    },
    {
        id: 1175,
        pytanie: "Aby zdefiniować styl akapitu <p>, który występuje bezpośrednio po znaczniku <img>, należy w arkuszu stylów CSS zastosować związek",
        odpowiedzi: [
            "img > p",
            "img p",
            "img [p]",
            "img + p"
        ],
        poprawna: "D"
    },
    {
        id: 1176,
        pytanie: "Które zapytanie MySQL należy użyć, aby usunąć jedynie pracowników, którzy zarabiają nie mniej niż 500 i nie więcej niż 1000 zł oraz ich miejsce pracy zawiera frazę tx",
        odpowiedzi: [
            "DELETE FROM pracownicy WHERE pensja IN (500,1000) AND miejsce_pracy LIKE '*tx*';",
            "DELETE FROM pracownicy WHERE pensja BETWEEN 500 AND 1000 OR miejsce_pracy LIKE '%tx%';",
            "DELETE FROM pracownicy WHERE pensja BETWEEN 500 AND 1000 AND miejsce_pracy LIKE '%tx%';",
            "DELETE FROM pracownicy WHERE pensja > 500 AND pensja < 1000 AND miejsce_pracy LIKE '%tx%';"
        ],
        poprawna: "C"
    },
    {
        id: 1177,
        pytanie: "Przedstawiony kod JavaScript powoduje przypisanie do zmiennej tymczasowa wartości",
        odpowiedzi: [
            "1",
            "3",
            "4",
            "9"
        ],
        poprawna: "C",
        obraz: "1177.jpg"
    },
    {
        id: 1178,
        pytanie: "W bazach danych typ DECIMAL jest przeznaczony do przechowywania",
        odpowiedzi: [
            "liczb rzeczywistych zmiennoprzecinkowych.",
            "liczb rzeczywistych stałoprzecinkowych.",
            "liczb zapisanych w systemie binarnym.",
            "danych napisowych o określonej długości."
        ],
        poprawna: "B"
    },
    {
        id: 1179,
        pytanie: "Którą z kompetencji społecznych możemy przypisać do osoby, którą cechuje umiejętność wyrażania własnego zdania, argumentowanie własnych racji bez naruszania przestrzeni własnej i innych ludzi?",
        odpowiedzi: [
            "Asertywność",
            "Akomodacja",
            "Empatia",
            "Konformizm"
        ],
        poprawna: "A"
    },
    {
        id: 1180,
        pytanie: "W języku PHP pobrano z bazy danych wynik działania kwerendy wybierającej za pomocą polecenia mysqli_query. Aby otrzymać wiersz danych, należy zastosować polecenie",
        odpowiedzi: [
            "mysqli_fetch_row",
            "mysqli_fetch_lengths",
            "mysqli_list_fields",
            "mysqli_field_len"
        ],
        poprawna: "A"
    },
    {
        id: 1181,
        pytanie: "Do grupowania elementów w blok, można użyć znacznika",
        odpowiedzi: [
            "<p>",
            "<div>",
            "<span>",
            "<param>"
        ],
        poprawna: "B"
    },
    {
        id: 1182,
        pytanie: "Która właściwość języka CSS może przyjmować wartości: underline, overline, line-through?",
        odpowiedzi: [
            "text-decoration",
            "font-weight",
            "text-style",
            "font-style"
        ],
        poprawna: "A"
    },
    {
        id: 1183,
        pytanie: "Typowym programem przeznaczonym do edycji grafiki wektorowej jest",
        odpowiedzi: [
            "Inkscape.",
            "Audacity.",
            "Brasero.",
            "Paint."
        ],
        poprawna: "A"
    },
    {
        id: 1184,
        pytanie: "Kod programu wraz z komentarzami oraz opisem algorytmów i metod stanowi dokumentację",
        odpowiedzi: [
            "graficzną.",
            "techniczną.",
            "urzędową.",
            "audiowizualną."
        ],
        poprawna: "B"
    },
    {
        id: 1185,
        pytanie: "Na podstawie przedstawionego kodu formularza HTML można powiedzieć, że pole edycyjne",
        odpowiedzi: [
            "może być puste.",
            "wymaga wpisania jedynie znaków alfanumerycznych.",
            "nie może być puste i wymaga wpisania tekstu ze znakiem @.",
            "nie powinno zawierać znaków numerycznych."
        ],
        poprawna: "C",
        obraz: "1185.jpg"
    },
    {
        id: 1186,
        pytanie: "Przedstawiony algorytm umożliwia wyliczenie",
        odpowiedzi: [
            "średniej geometrycznej n liczb a wprowadzonych przez użytkownika.",
            "reszty z dzielenia kolejnych liczb a przez liczbę n.",
            "średniej arytmetycznej n liczb a wprowadzonych przez użytkownika.",
            "najmniejszego wspólnego dzielnika dla n kolejnych liczb a."
        ],
        poprawna: "C",
        obraz: "1186.jpg"
    },
    {
        id: 1187,
        pytanie: "W języku HTML 5 do grupowania powiązanych ze sobą elementów formularza używa się znacznika",
        odpowiedzi: [
            "<fieldset>",
            "<optgroup>",
            "<summary>",
            "<option>"
        ],
        poprawna: "A"
    },
    {
        id: 1188,
        pytanie: "Przedstawiony fragment kodu JavaScript powinien wylosować liczbę całkowitą z zakresu < 1, 10 > i porównać ją z liczbą podaną przez użytkownika w oknie dialogowym. Skrypt po uruchomieniu generuje błąd, którego przyczyną jest",
        odpowiedzi: [
            "przypisanie wartości do stałej liczba w piątej linii skryptu.",
            "błędna składnia deklaracji zmiennych gora i dol w drugiej linii skryptu.",
            "błędna składnia instrukcji warunkowej if ... else.",
            "niepotrzebne użycie konwersji z funkcji prompt do liczby całkowitej."
        ],
        poprawna: "A",
        obraz: "1188.jpg"
    },
    {
        id: 1189,
        pytanie: "Barwy kolorów reprezentowane na stożku można uzyskać w modelu",
        odpowiedzi: [
            "CIEXYZ",
            "RGB",
            "CMYK",
            "HSV"
        ],
        poprawna: "D"
    },
    {
        id: 1190,
        pytanie: "ALTER TABLE transport MODIFY COLUMN rok_produkcji INT; \nWykonanie kwerendy SQL w bazie MySQL spowoduje",
        odpowiedzi: [
            "zmianę typu danych w kolumnie rok_produkcji na INT.",
            "utworzenie tabeli transport zawierającej kolumnę rok_produkcji.",
            "usunięcie kolumny rok_produkcji w tabeli transport.",
            "dodanie kolumny rok_produkcji typu INT w tabeli transport."
        ],
        poprawna: "A"
    },
    {
        id: 1191,
        pytanie: "W języku SQL dodanie nowej kolumny z nazwą miejscowości do istniejącej tabeli pracownicy umożliwia kwerenda",
        odpowiedzi: [
            "CREATE TABLE pracownicy ADD miejscowosc FLOAT(2);",
            "ALTER TABLE pracownicy ADD miejscowosc FLOAT(2);",
            "ALTER TABLE pracownicy ADD miejscowosc VARCHAR(100);",
            "ALTER TABLE pracownicy DROP COLUMN miejscowosc;"
        ],
        poprawna: "C"
    },
    {
        id: 1192,
        pytanie: "Na podstawie przedstawionego kodu PHP wskaż ile wynosi czas ważności ustawionego ciasteczka?",
        odpowiedzi: [
            "24 doby.",
            "1 godzina.",
            "24 godziny.",
            "1 minuta."
        ],
        poprawna: "D",
        obraz: "1192.jpg"
    },
    {
        id: 1193,
        pytanie: "Której kwerendy SQL należy użyć, aby utworzyć tabelę samochod z atrybutami marka, model, cena, gdzie marka i model są typu tekstowego, natomiast cena jest liczbą rzeczywistą typu stałoprzecinkowego?",
        odpowiedzi: [
            "CREATE TABLE samochod VALUES (marka CHAR(30), model CHAR(30), cena DOUBLE);",
            "CREATE TABLE samochod (marka CHAR(30), model CHAR(30), cena DECIMAL(15,2));",
            "CREATE TABLE samochod (marka INT(30), model INT(30), cena DECIMAL(2,15));",
            "CREATE TABLE samochod VALUES (marka CHAR(30), model CHAR(30), cena FLOAT);"
        ],
        poprawna: "B"
    },
    {
        id: 1194,
        pytanie: "W kodzie PHP zastosowano zmienne $x oraz $y, do zbudowania warunków, z wykorzystaniem dwóch przedstawionych wyrażeń logicznych. Wynikami sprawdzenia wyrażeń są",
        odpowiedzi: [
            "true dla pierwszego i false dla drugiego wyrażenia.",
            "false dla obu wyrażeń.",
            "false dla pierwszego i true dla drugiego wyrażenia.",
            "true dla obu wyrażeń."
        ],
        poprawna: "C",
        obraz: "1194.jpg"
    },
    {
        id: 1195,
        pytanie: "Aby na stronie internetowej wszystkie elementy blokowe były wyśrodkowane w poziomie należy dla nich zdefiniować styl",
        odpowiedzi: [
            "text-align: center;",
            "padding: auto;",
            "display: block;",
            "margin: auto;"
        ],
        poprawna: "D"
    },
    {
        id: 1196,
        pytanie: "Które odnośniki w przeglądarce będą zapisane w zielonym kolorze czcionki na podstawie przedstawionych fragmentów kodu CSS i HTML?",
        odpowiedzi: [
            "wszystkie cztery odnośniki.",
            "link1 i link4.",
            "żaden z odnośników.",
            "link2 i link3."
        ],
        poprawna: "B",
        obraz: "1196.jpg"
    },
    {
        id: 1197,
        pytanie: "Dla dowolnego zestawu danych, do zbudowania warunku w kwerendzie wybierającej nazwiska wszystkich uczniów z klas nauczania początkowego (od pierwszej do trzeciej) można posłużyć się klauzulą",
        odpowiedzi: [
            "WHERE klasa BETWEEN 1 AND 3",
            "WHERE klasa IN (1, 3)",
            "WHERE klasa >= 1 OR klasa <= 3",
            "WHERE klasa < 3"
        ],
        poprawna: "A"
    },
    {
        id: 1198,
        pytanie: "Jedną z cech relacyjnej bazy danych jest",
        odpowiedzi: [
            "występowanie klas, obiektów i metod.",
            "określenie jej stanu zgodnie z obiektowym modelem danych.",
            "wykorzystanie kluczy głównych do identyfikacji rekordów w tabelach.",
            "stosowanie języka zapytań OQL."
        ],
        poprawna: "C"
    },
    {
        id: 1199,
        pytanie: "Przedstawiona w filmie czynność wykonana w systemie CMS Joomla! ma na celu",
        odpowiedzi: [
            "dodanie tłumaczenia na język angielski dla zmiennej językowej o nazwie SUNDAY.",
            "definiowanie tłumaczenia całej witryny z języka angielskiego na język polski.",
            "definiowanie pełnej wersji językowej szablonu dla języka polskiego, gdy szablon pierwotnie opracowano wyłącznie w języku angielskim.",
            "dodanie tłumaczenia na język polski dla zmiennej językowej o nazwie SUNDAY."
        ],
        poprawna: "D"
    },
    {
        id: 1200,
        pytanie: "Plik wideo należy osadzić na stronie internetowej tak, aby były widoczne przyciski sterujące oraz materiał odtwarzał się w sposób zapętlony. W tym celu należy zastosować w znaczniku <video> atrybuty",
        odpowiedzi: [
            "controls i loop",
            "autoplay i preload",
            "loop i muted",
            "controls i autoplay"
        ],
        poprawna: "A"
    },
    {
        id: 1201,
        pytanie: "Witryna internetowa zawiera bardzo rozbudowany system stylów, na który składają się style zewnętrzne, wewnętrzne i lokalne. Aby upewnić się, że dana cecha opisana w zewnętrznym stylu jest zawsze przypisywana do elementu HTML, niezależnie od stylów bardziej priorytetowych, należy ją zdefiniować",
        odpowiedzi: [
            "przy pomocy reguły !important",
            "jako selektor potomka",
            "przy pomocy pseudoelementu ::after",
            "jako pseudoklasę :active"
        ],
        poprawna: "A"
    },
    {
        id: 1202,
        pytanie: "Którą funkcję należy wpisać w miejsce znaków zapytania (trzecia linia), aby wyświetlić komunikat postaci: „Zaktualizowano 30 wierszy”, informujący o liczbie wierszy, które zostały zaktualizowane na skutek wydania kwerendy?",
        odpowiedzi: [
            "mysqli_affected_rows($db)",
            "mysqli_num_rows($zap)",
            "mysqli_field_count($db)",
            "mysqli_errno()"
        ],
        poprawna: "A",
        obraz: "1202.jpg"
    },
    {
        id: 1203,
        pytanie: "Za pomocą którego kodu JavaScript zostanie uzupełniona lista o element \"chleb\"?",
        odpowiedzi: [
            "Kod 1.",
            "Kod 2.",
            "Kod 3.",
            "Kod 4."
        ],
        poprawna: "B",
        obraz: "1203.jpg"
    },
    {
        id: 1204,
        pytanie: "Jedną z technik optymalizacji czasu ładowania strony internetowej przez przeglądarki jest",
        odpowiedzi: [
            "stosowanie formatu JPEG do czarno-białych rysunków technicznych, zawierających dużą liczbę krawędzi.",
            "zapisywanie zdjęć w formacie RAW.",
            "zmniejszenie rozmiarów zdjęcia w programie graficznym do rozmiarów wykorzystywanych na stronie.",
            "eksportowanie zdjęć krajobrazu do formatu PNG."
        ],
        poprawna: "C"
    },
    {
        id: 1205,
        pytanie: "Projektant strony internetowej chce umieścić w znaczniku <header> nagłówek dla treści. Zgodnie z zasadami stosowania znaczników semantycznych powinien do tego zastosować znacznik",
        odpowiedzi: [
            "<h1>",
            "<strong>",
            "<title>",
            "<p>"
        ],
        poprawna: "A"
    },
    {
        id: 1206,
        pytanie: "Podczas wyświetlania strony internetowej na najmniejszych ekranach do 400 px szerokości, niektóre sekcje ze strony są pomijane (ukrywane). Aby zdefiniować w stylu CSS klasę .ukryj, która będzie przypisana do takich sekcji można posłużyć się kodem",
        odpowiedzi: [
            "Kod 1.",
            "Kod 2.",
            "Kod 3.",
            "Kod 4."
        ],
        poprawna: "B",
        obraz: "1206.jpg"
    },
    {
        id: 1207,
        pytanie: "Aby dla każdego zestawu danych z tabeli sprzet o polach: nazwa, cena, liczbaSztuk, dataDodania wybrać nazwy produktów dodanych w roku 2021, których cena jest niższa niż 100 zł albo liczba sztuk jest większa niż 4 należy w sekcji WHERE zapisać",
        odpowiedzi: [
            "WHERE dataDodania LIKE '2021%' AND cena < 100 AND liczbaSztuk > 4;",
            "WHERE dataDodania LIKE '2021%' OR (cena < 100 AND liczbaSztuk > 4);",
            "WHERE dataDodania LIKE '2021%' AND (cena < 100 OR liczbaSztuk > 4);",
            "WHERE dataDodania LIKE '2021%' OR cena < 100 OR liczbaSztuk > 4;"
        ],
        poprawna: "C"
    },
    {
        id: 1208,
        pytanie: "Dana jest tabela mieszkancy. Aby  przetworzyć wszystkie dane jedynie mieszkańców z polem dzielnica = 1, dla uproszczenia działań utworzono tabelę wirtualną (widok) korzystając z kwerendy",
        odpowiedzi: [
            "CREATE VIEW mieszkancySrodmiescie AS SELECT * FROM mieszkancy;",
            "CREATE VIEW mieszkancySrodmiescie AS SELECT * FROM mieszkancy WHERE dzielnica = 1;",
            "CREATE VIEW mieszkancy FROM mieszkancy WHERE dzielnica = 1;",
            "CREATE VIEW mieszkancy WHERE dzielnica = 1;"
        ],
        poprawna: "B"
    },
    {
        id: 1209,
        pytanie: "Na ilustracji został przedstawiony fragment bazy danych. Aby wybrać nazwy produktów, które zostały zakupione przez klienta o id = 1 należy zastosować kwerendę",
        odpowiedzi: [
            "SELECT nazwa FROM produkty JOIN transakcje_produkty USING(nr_produktu) JOIN transakcje USING(nr_transakcji) WHERE nr_klienta = 1;",
            "SELECT nazwa FROM produkty JOIN transakcje ON nr_produktu = nr_klienta  WHERE nr_klienta = 1;",
            "SELECT nazwa FROM produkty JOIN transakcje_produkty JOIN transakcje WHERE nr_klienta = 1;",
            "SELECT nazwa FROM produkty JOIN transakcje_produkty USING(nr_produktu) WHERE nr_klienta = 1;"
        ],
        poprawna: "A",
        obraz: "1209.jpg"
    },
    {
        id: 1210,
        pytanie: "Jeżeli dane z formularza zostały przesłane w postaci jawnej, jako parametry w adresie URL, to w skrypcie PHP można się do nich odwołać za pomocą tablicy",
        odpowiedzi: [
            "$_COOKIE",
            "$_SESSION",
            "$_GET",
            "$_POST"
        ],
        poprawna: "C"
    },
    {
        id: 1211,
        pytanie: "Instrukcję transakcyjną ROLLBACK można wydać, aby",
        odpowiedzi: [
            "cofnąć działanie transakcji.",
            "cofnąć transakcję po zastosowaniu na niej instrukcji COMMIT.",
            "zatwierdzić transakcję.",
            "zatwierdzić tylko wybrane modyfikacje transakcji."
        ],
        poprawna: "A"
    },
    {
        id: 1212,
        pytanie: "Która pętla zapisana w języku JavaScript i wstawiona w miejsce znaków zapytania sprawi, że zmienna napis będzie równa \"Magda Nowak 30\"?",
        odpowiedzi: [
            "Pętla 1.",
            "Pętla 2.",
            "Pętla 3.",
            "Pętla 4."
        ],
        poprawna: "B",
        obraz: "1212.jpg"
    },
    {
        id: 1213,
        pytanie: "Które definicje znacznika input języka HTML zastosowano do wygenerowania przedstawionego na ilustracji zestawu kontrolek formularza (w kodzie podano jedynie znaczniki input, pomijając inne ewentualne znaczniki)?",
        odpowiedzi: [
            "Kod 1.",
            "Kod 2.",
            "Kod 3.",
            "Kod 4."
        ],
        poprawna: "B",
        obraz: "1213.jpg"
    },
    {
        id: 1214,
        pytanie: "Na podstawie dokumentacji funkcji, wskaż jej deklarację.",
        odpowiedzi: [
            "char& liczParametr(int, char);",
            "int liczParametr(float, int);",
            "void liczParametr(int, void);",
            "float liczParametr(int, float);"
        ],
        poprawna: "D",
        obraz: "1214.jpg"
    },
    {
        id: 1215,
        pytanie: "Projekt strony internetowej, zgodny z przedstawioną ilustracją, wymaga stosowania semantycznych znaczników sekcji języka HTML5. W tym celu, aby zdefiniować sekcję menu należy użyć znacznika",
        odpowiedzi: [
            "nav",
            "header",
            "div",
            "aside"
        ],
        poprawna: "A",
        obraz: "1215.jpg"
    },
    {
        id: 1216,
        pytanie: "Przedstawiona zmiana zawartości tabeli miody może być efektem działania zapytania",
        odpowiedzi: [
            "UPDATE miody SET cena_kg =40.00 WHERE nr_produktu IN (4, 6);",
            "UPDATE miody SET cena_kg =40.00 WHERE nr_produktu = 5;",
            "UPDATE miody SET cena_kg =40.00 WHERE nazwa = 'Miód wielokwiatowy';",
            "UPDATE miody SET cena_kg =40.00 WHERE rocznik > 2019;"
        ],
        poprawna: "C",
        obraz: "1216.jpg"
    },
    {
        id: 1217,
        pytanie: "Wybranymi technikami rozwiązywania problemów w firmie są: ignorowanie, separacja, arbitraż, i kompromis. Wskaż technikę, która jest szczególnie ryzykowna i może prowadzić do zaostrzenia sytuacji w firmie.",
        odpowiedzi: [
            "arbitraż.",
            "kompromis.",
            "ignorowanie.",
            "separacja."
        ],
        poprawna: "C"
    },
    {
        id: 1218,
        pytanie: "Indywidualnym środkiem ochrony oczu i twarzy może być",
        odpowiedzi: [
            "fartuch ochronny.",
            "sprzęt filtrujący powietrze.",
            "osłona pleksi pomiędzy stanowiskami pracy.",
            "przyłbica."
        ],
        poprawna: "D"
    },
    {
        id: 1219,
        pytanie: "Funkcja JavaScript wywołuje błąd, który jest widoczny w przedstawionym oknie. Jest on spowodowany",
        odpowiedzi: [
            "nieznanym obiektem document",
            "błędnie napisaną nazwą metody, powinno być getElementsByTagName",
            "polskim znakiem diakrytycznym w nazwie funkcji zatwierdź()",
            "brakiem zdefiniowania zdarzenia onclick dla przycisku"
        ],
        poprawna: "B",
        obraz: "1219.jpg"
    },
    {
        id: 1220,
        pytanie: "Błąd wygenerowany przez walidator HTML może świadczyć o",
        odpowiedzi: [
            "braku zamknięcia znacznika <p>.",
            "zamknięciu znacznika <p>, choć wcześniej nie był otwarty.",
            "niezgadzającej się liczbie znaczników <p> otwartych i zamkniętych.",
            "braku zamknięcia znaczników zagnieżdżonych w znaczniku <p> przed jego zamknięciem."
        ],
        poprawna: "D",
        obraz: "1220.jpg"
    },
    {
        id: 1221,
        pytanie: "Tabela bilety zawiera pola id, typ, cena. Wszystkie bilety podrożały o 10%. Aby zaktualizować te dane należy wydać kwerendę",
        odpowiedzi: [
            "UPDATE bilety SET cena = cena + 10%;",
            "UPDATE bilety SET cena = 10%;",
            "UPDATE bilety SET cena = cena * 1.1;",
            "UPDATE bilety SET cena = cena * 0.1;"
        ],
        poprawna: "C"
    },
    {
        id: 1222,
        pytanie: "Która instrukcja jest równoważna funkcjonalnie do przedstawionej instrukcji if?",
        odpowiedzi: [
            "Instrukcja 1.",
            "Instrukcja 2.",
            "Instrukcja 3.",
            "Instrukcja 4."
        ],
        poprawna: "C",
        obraz: "1222.jpg"
    },
    {
        id: 1223,
        pytanie: "Zdefiniowanie klucza obcego jest niezbędne do utworzenia",
        odpowiedzi: [
            "relacji 1..n.",
            "transakcji.",
            "klucza podstawowego.",
            "relacji 1..1."
        ],
        poprawna: "A"
    },
    {
        id: 1224,
        pytanie: "Polecenie GRANT w języku SQL służy do",
        odpowiedzi: [
            "umieszczania nowych danych w bazie.",
            "aktualizacji istniejących danych w bazie.",
            "nadawania użytkownikom praw do obiektów.",
            "odbierania użytkownikom praw do obiektów."
        ],
        poprawna: "C"
    },
    {
        id: 1225,
        pytanie: "Formatem grafiki wektorowej jest",
        odpowiedzi: [
            "JPG",
            "SVG",
            "PNG",
            "GIF"
        ],
        poprawna: "B"
    },
    {
        id: 1226,
        pytanie: "Model barw o parametrach: odcień, nasycenie, jasność i przezroczystość, to",
        odpowiedzi: [
            "CMYK",
            "HSLA",
            "RGBA",
            "SRGB"
        ],
        poprawna: "B"
    },
    {
        id: 1227,
        pytanie: "SELECT miasto, AVG(pensja) FROM pracownicy GROUP BY miasto;\nPodane zapytanie wybierze",
        odpowiedzi: [
            "nazwy miast z powtórzeniami oraz sumę pensji dla każdego z nich.",
            "nazwy miast bez powtórzeń oraz średnią pensję dla każdego z nich.",
            "nazwy miast bez powtórzeń oraz sumę pensji dla każdego z nich.",
            "nazwy miast z powtórzeniami oraz średnią pensję dla każdego z nich."
        ],
        poprawna: "B"
    },
    {
        id: 1228,
        pytanie: "Proces zmierzający do osiągnięcia przez stronę internetową jak najwyższych pozycji w rankingach wyszukiwarek internetowych nosi nazwę",
        odpowiedzi: [
            "pozycjonowania.",
            "walidacji HTML.",
            "optymalizacji wydajności.",
            "responsywności."
        ],
        poprawna: "A"
    },
    {
        id: 1229,
        pytanie: "UPDATE klient SET miejscowosc='Warszawa' WHERE id IN(2,4);  \nW tabeli klient o polach: id, imie, nazwisko, miejscowosc znajduje się 5 rekordów o id od 1 do 5. Dla których wartości kolumny id przedstawiona kwerenda zaktualizuje zawartość pola miejscowość na Warszawa?",
        odpowiedzi: [
            "2, 3, 4",
            "1, 5",
            "3",
            "2, 4"
        ],
        poprawna: "D"
    },
    {
        id: 1230,
        pytanie: "Który ze skrótów oznacza sieć bezprzewodową?",
        odpowiedzi: [
            "WLAN",
            "MAN",
            "LAN",
            "WAN"
        ],
        poprawna: "A"
    },
    {
        id: 1231,
        pytanie: "W języku SQL, aby wybrać wszystkie rekordy z tabeli B, w tym część wspólną z tabelą A, należy zastosować typ związku",
        odpowiedzi: [
            "A FULL OUTER JOIN B",
            "A INNER JOIN B",
            "A RIGHT JOIN B",
            "A LEFT JOIN B"
        ],
        poprawna: "C",
        obraz: "1231.jpg"
    },
    {
        id: 1232,
        pytanie: "Funkcjonalność obejmującą edycję kodu źródłowego, jego kompilację, tworzenie zasobów programu, baz danych i komponentów udostępnia",
        odpowiedzi: [
            "debugger",
            "PhpMyAdmin",
            "Notepad++",
            "środowisko IDE"
        ],
        poprawna: "D"
    },
    {
        id: 1233,
        pytanie: "Na ilustracji przedstawiono",
        odpowiedzi: [
            "testowanie zgodności z wytycznymi WCAG2.0 strony internetowej.",
            "walidację strony internetowej.",
            "debuggowanie strony internetowej.",
            "testowanie responsywności strony internetowej."
        ],
        poprawna: "D",
        obraz: "1233.jpg"
    },
    {
        id: 1234,
        pytanie: "Która funkcja PHP obsługi bazy danych służy do kodowania polskich znaków?",
        odpowiedzi: [
            "mysqli_connect()",
            "mysqli_fetch_assoc()",
            "mysqli_set_charset()",
            "mysqli_query()"
        ],
        poprawna: "C"
    },
    {
        id: 1235,
        pytanie: "<source src=\"plik.mp4\" type=\"video/mp4\"> \nW celu osadzenia pliku wideo na stronie WWW należy przedstawiony kod HTML5 zapisać wewnątrz znaczników",
        odpowiedzi: [
            "<video> </video>",
            "<div> </div>",
            "<section> </section>",
            "<embed> </embed>"
        ],
        poprawna: "A"
    },
    {
        id: 1236,
        pytanie: "Efekt AutoDuck w obróbce dźwięku jest stosowany do",
        odpowiedzi: [
            "ściszenia dźwięku w tle, gdy pojawia się dźwięk pierwszoplanowy.",
            "ocieplenia głosu i dźwięków pochodzących z tła.",
            "eliminacji szumów pochodzących z dźwięków w tle.",
            "wyrównania głośności całej ścieżki dźwiękowej."
        ],
        poprawna: "A"
    },
    {
        id: 1237,
        pytanie: "Pozycjonowanie poza stroną (off-page SEO) polega na",
        odpowiedzi: [
            "pozyskiwaniu linków zewnętrznych prowadzących do strony.",
            "sprawdzeniu i testowaniu szybkości ładowania strony.",
            "walidacji kodu HTML, CSS oraz linków.",
            "zoptymalizowaniu elementów grafiki i multimediów."
        ],
        poprawna: "A"
    },
    {
        id: 1238,
        pytanie: "Który paragraf w przedstawionym kodzie zostanie wyświetlony czcionką o kolorze niebieskim?",
        odpowiedzi: [
            "Czwarty.",
            "Trzeci.",
            "Drugi.",
            "Pierwszy."
        ],
        poprawna: "A",
        obraz: "1238.jpg"
    },
    {
        id: 1239,
        pytanie: "Który atrybut należy wstawić w miejsce kropek, aby przeglądarka wyświetliła komunikat o błędzie w przypadku kliknięcia przycisku Zapisz bez wypełnionego pola nazwisko?",
        odpowiedzi: [
            "disable",
            "pattern",
            "required",
            "checked"
        ],
        poprawna: "C",
        obraz: "1239.jpg"
    },
    {
        id: 1240,
        pytanie: "Wskaż metodę biblioteki Math języka JavaScript, która dla parametru x = 2.8 zwróci wartość 2.",
        odpowiedzi: [
            "exp(x)",
            "ceil(x)",
            "floor(x)",
            "sqrt(x)"
        ],
        poprawna: "C"
    },
    {
        id: 1241,
        pytanie: "<img src=\"nowa_lektura.jpg\" ...> \nKtóry z atrybutów obrazu jest niezbędny w znaczniku  na załączonym przykładzie, aby ułatwić korzystanie ze strony użytkownikom z niepełnosprawnością narządu wzroku?",
        odpowiedzi: [
            "usemap=\"#lekturamap\"",
            "alt=\"technik informatyk\"",
            "\"height=\"42\" width=\"42\"",
            "align=\"middle\""
        ],
        poprawna: "B"
    },
    {
        id: 1242,
        pytanie: "Funkcja silnia jest funkcją",
        odpowiedzi: [
            "bezparametrową.",
            "nie zwracającą wyniku.",
            "rekurencyjną.",
            "abstrakcyjną."
        ],
        poprawna: "C",
        obraz: "1242.jpg"
    },
    {
        id: 1243,
        pytanie: "W dokumentacji CMS WordPress znajduje się zdanie:\n\"Enable comments for this post\" \nCo oznacza to zdanie?",
        odpowiedzi: [
            "Włącz publikację wpisu.",
            "Włącz formatowanie wpisu.",
            "Włącz możliwość dodawania komentarzy do wpisu.",
            "Włącz edycję wpisu."
        ],
        poprawna: "C"
    },
    {
        id: 1244,
        pytanie: "Który składnik nie jest wymagany do instalacji i uruchomienia systemu CMS Joomla!?",
        odpowiedzi: [
            "serwer WWW",
            "platforma .NET",
            "baza danych",
            "parser PHP"
        ],
        poprawna: "B"
    },
    {
        id: 1245,
        pytanie: "W dokumentacji języka PHP znajduje się informacja odnośnie jednej z jego funkcji: \"Warning. This extension was deprecated in PHP 5.5.0, and it was removed in PHP 7.0.0.\". Zgodnie z tą informacją użycie funkcji jest",
        odpowiedzi: [
            "przestarzałe od wersji PHP 5.5.0 i całkowicie usunięte w wersji 7.0.0.",
            "niemożliwe w wersjach PHP 5.5.0 lub starszych i dostępne dopiero od wersji 7.0.0.",
            "niezalecane w wersji PHP 5.5.0 i dostępne od wersji 7.0.0.",
            "dostępne w wersjach PHP od 5.5.0 do 7.0.0 (włącznie) i niedostępne w innych wersjach."
        ],
        poprawna: "A"
    },
    {
        id: 1246,
        pytanie: "Na ilustracji przedstawiono",
        odpowiedzi: [
            "testy bezpieczeństwa strony.",
            "analizę poprawności kodu strony internetowej.",
            "testy funkcjonalne strony interenetowej.",
            "analizę ruchu sieciowego między serwerem a przeglądarką."
        ],
        poprawna: "D",
        obraz: "1246.jpg"
    },
    {
        id: 1247,
        pytanie: "Którą rozdzielczość należy ustawić w opcjach kodera, aby przygotować do publikacji film w rozdzielczości HD Ready?",
        odpowiedzi: [
            "480x360",
            "1920x1080",
            "720x480",
            "1280x720"
        ],
        poprawna: "D"
    },
    {
        id: 1248,
        pytanie: "W przedstawionym filmie, aby połączyć tekst i wielokąt w jeden obiekt Nie, aby operacja ta była odwracalna zastosowano funkcję",
        odpowiedzi: [
            "grupowania.",
            "sumy.",
            "części wspólnej.",
            "wykluczenia."
        ],
        poprawna: "A"
    },
    {
        id: 1249,
        pytanie: "Który związek selektorów CSS należy zastosować w miejscu znaków zapytania, aby zdefiniowany styl został zastosowany tylko na tekście \"paragrafie\"?",
        odpowiedzi: [
            "b > i",
            "b + i",
            "b i",
            "i + b"
        ],
        poprawna: "B",
        obraz: "1249.jpg"
    },
    {
        id: 1250,
        pytanie: "mysql -u ******* -p Sklep < towary.sql \nAby przywrócić bazę danych o nazwie Sklep z pliku towary.sql należy w miejsce gwiazdek wpisać",
        odpowiedzi: [
            "liczbę importowanych obiektów bazy.",
            "nazwę użytkownika.",
            "adres IP bazy.",
            "nazwę odzyskiwanej tabeli."
        ],
        poprawna: "B"
    },
    {
        id: 1251,
        pytanie: "Głównym zadaniem systemu CMS jest",
        odpowiedzi: [
            "ujednolicenie tematyczne zawartości stron internetowych.",
            "przyspieszenie projektowania aplikacji desktopowych.",
            "konwersja obiektowego języka programowania na strukturalny.",
            "ułatwienie zarządzania treścią na stronie internetowej."
        ],
        poprawna: "D"
    },
    {
        id: 1252,
        pytanie: "Który element blokowy języka HTML5 jest przeznaczony do umieszczenia w nim nawigacji witryny?",
        odpowiedzi: [
            "nav",
            "aside",
            "main",
            "header"
        ],
        poprawna: "A"
    },
    {
        id: 1253,
        pytanie: "Ilustracja przedstawia ograniczenia zasobów użytkownika bazy danych, ustawione w phpMyAdmin. Które operacje, wykonane przez tego użytkownika, są możliwe do przeprowadzenia?",
        odpowiedzi: [
            "Wykonanie 300 zapytań w ciągu godziny.",
            "Dwukrotne logowanie się w czasie 1 godziny.",
            "Logowanie się do systemu, gdy zalogowano już 30 innych użytkowników.",
            "Wykonanie 100 modyfikacji danych w ciągu godziny."
        ],
        poprawna: "D",
        obraz: "1253.jpg"
    },
    {
        id: 1254,
        pytanie: "W CMS Joomla! opcja konfiguracji globalnej, pokazana na ilustracji, służy do",
        odpowiedzi: [
            "dopuszczenia do przesyłania danych z formularzy wypełnionych tylko przez człowieka.",
            "zapobiegania aNieom typu SQL Injection.",
            "wyświetlania okna informującego o zgodzie użytkownika na pliki cookie.",
            "wyświetlenia okna umożliwiającego wyszukiwanie tekstu na stronie."
        ],
        poprawna: "A",
        obraz: "1254.jpg"
    },
    {
        id: 1255,
        pytanie: "W diagramie ER powiązanie między dwoma zbiorami encji nazywamy",
        odpowiedzi: [
            "dziedziną.",
            "atrybutem.",
            "krotką.",
            "związkiem."
        ],
        poprawna: "D"
    },
    {
        id: 1256,
        pytanie: "Dodanie ograniczenia klucza obcego w Niei sposób, aby kolumna Klasy_id z tabeli Uczniowie była powiązana z kolumną id w tabeli Klasy zostanie wykonane przy użyciu polecenia",
        odpowiedzi: [
            "ALTER TABLE Uczniowie DROP FOREIGN KEY FKKlasy FOREIGN KEY(Klasy_id) REFERENCES Klasy(id);",
            "ALTER TABLE Uczniowie DROP CONSTRAINT FKKlasy FOREIGN KEY(Klasy_id) REFERENCES Klasy(id);",
            "ALTER TABLE Uczniowie ADD FOREIGN KEY FKKlasy FOREIGN KEY(Klasy_id) REFERENCES Klasy(id);",
            "ALTER TABLE Uczniowie ADD CONSTRAINT FKKlasy FOREIGN KEY(Klasy_id) REFERENCES Klasy(id);"
        ],
        poprawna: "D",
        obraz: "1256.jpg"
    },
    {
        id: 1257,
        pytanie: "Wskaż element, który definiuje pole edycyjne formularza zgodne z ilustracją",
        odpowiedzi: [
            "<input type=\"number\" id=\"mm\" name=\"hh\" min=\"0\" max=\"24\">",
            "<input type=\"date\" id=\" minutes\" name=\"hours\">",
            "<input type=\"month\" id=\"hh\" name=\"mm\">",
            "<input type=\"time\" id=\"minutes\" name=\"hours\">"
        ],
        poprawna: "D",
        obraz: "1257.jpg"
    },
    {
        id: 1258,
        pytanie: "Którą kwerendę należy wykonać, aby zaktualizować wszystkim rekordom z tabeli pracownicy wartość w kolumnie plec na K, przyjmując na potrzeby zadania, że każde imię żeńskie kończy się literą a?",
        odpowiedzi: [
            "UPDATE pracownicy SET plec='K' WHERE imie='%a';",
            "ALTER TABLE pracownicy SET plec='K' WHERE imie LIKE '%a';",
            "ALTER TABLE pracownicy SET plec='K' WHERE imie='%a';",
            "UPDATE pracownicy SET plec='K' WHERE imie LIKE '%a';"
        ],
        poprawna: "D"
    },
    {
        id: 1259,
        pytanie: "W języku PHP zapis $b++ jest równoważny zapisowi",
        odpowiedzi: [
            "$b == $b",
            "$b = $b + $b",
            "$b = $b + 1",
            "$b == $b + $b"
        ],
        poprawna: "C"
    },
    {
        id: 1260,
        pytanie: "Które zapytanie w języku MySQL usunie z tabeli uczniowie uczniów urodzonych w czerwcu?",
        odpowiedzi: [
            "DELETE FROM `uczniowie` WHERE data_ur LIKE \"?-06-?\"",
            "DROP FROM `uczniowie` WHERE data_ur LIKE \"06\"",
            "DROP FROM `uczniowie` WHERE data_ur == #-06-#",
            "DELETE FROM `uczniowie` WHERE data_ur LIKE \"%-06-%\""
        ],
        poprawna: "D",
        obraz: "1260.jpg"
    },
    {
        id: 1261,
        pytanie: "Który typ danych jest przeznaczony do zapisywania daty urodzenia uczniów w bazie danych szkoły?",
        odpowiedzi: [
            "ENUM",
            "DATE",
            "TIME",
            "BLOB"
        ],
        poprawna: "B"
    },
    {
        id: 1262,
        pytanie: "W celu wykonania kopii bazy danych biblioteka w systemie MySQL należy w konsoli użyć polecenia",
        odpowiedzi: [
            "mysqlduplicate –u root biblioteka > kopia.sql",
            "mysqldump -u root biblioteka > kopia.sql",
            "copymysql –u root biblioteka kopia.sql",
            "backupmysql -u root biblioteka kopia.sql"
        ],
        poprawna: "B"
    },
    {
        id: 1263,
        pytanie: "Znak pisarski @ jest czytany w języku angielskim jako",
        odpowiedzi: [
            "on.",
            "ape.",
            "monkey.",
            "at."
        ],
        poprawna: "D"
    },
    {
        id: 1264,
        pytanie: "Który znacznik ma zastosowanie w sekcji body dokumentu HTML?",
        odpowiedzi: [
            "<title>",
            "<meta>",
            "<h2>",
            "<link>"
        ],
        poprawna: "C"
    },
    {
        id: 1265,
        pytanie: "Który organ, sprawujący nadzór nad warunkami pracy, odpowiedzialny jest za ochronę praworządności w stosunkach pracy?",
        odpowiedzi: [
            "Państwowa Inspekcja Ochrony Środowiska.",
            "Państwowa Inspekcja Sanitarna.",
            "Państwowa Inspekcja Pracy.",
            "Urząd Dozoru Technicznego."
        ],
        poprawna: "C"
    },
    {
        id: 1266,
        pytanie: "Przedstawiony w ramce kod języka PHP oznacza, że zmienna $liczba2 jest",
        odpowiedzi: [
            "iloczynem logicznym ze zmienną $liczba1",
            "referencją do $liczba1",
            "negacją logiczną zmiennej $liczba1",
            "wskaźnikiem do $liczba1"
        ],
        poprawna: "B",
        obraz: "1266.jpg"
    },
    {
        id: 1267,
        pytanie: "Którą technologię poleca się przy tworzeniu serwisów WWW, Nie aby zmiany w treści można było wykonywać bez potrzeby ich kodowania, przez użytkowników bez kompetencji programistycznych?",
        odpowiedzi: [
            "SSL",
            "SEO",
            "FTP",
            "CMS"
        ],
        poprawna: "D"
    },
    {
        id: 1268,
        pytanie: "W języku PHP zapisano instrukcję pętli przedstawioną w ramce. Ile powtórzeń będzie miała podana pętla, jeśli zmienna sterująca nie jest modyfikowana w jej wnętrzu oraz nie wprowadzono instrukcji modyfikacji pętli typu break?",
        odpowiedzi: [
            "100 powtórzeń.",
            "9 powtórzeń.",
            "10 powtórzeń.",
            "11 powtórzeń."
        ],
        poprawna: "C",
        obraz: "1268.jpg"
    },
    {
        id: 1269,
        pytanie: "Który efekt został zaprezentowany na filmie?",
        odpowiedzi: [
            "Zmiana jasności zdjęć.",
            "Zwiększenie ostrości zdjęcia.",
            "Przenikanie zdjęć.",
            "Zmniejszenie kontrastu zdjęcia."
        ],
        poprawna: "C"
    },
    {
        id: 1270,
        pytanie: "Która rozdzielczość jest wyrażana za pomocą jednostki ppi (ang. pixels per inch)?",
        odpowiedzi: [
            "Obrazów tworzonych przez drukarki i plotery.",
            "Skanerów.",
            "Cyfrowych urządzeń wykonujących pomiary.",
            "Obrazów rastrowych."
        ],
        poprawna: "D"
    },
    {
        id: 1271,
        pytanie: "Która zasada wpływa negatywnie na dobrą współpracę w zespole?",
        odpowiedzi: [
            "rywalizacja między członkami zespołu.",
            "skuteczna komunikacja.",
            "wzajemny szacunek.",
            "przydzielenie ról i odpowiedzialności."
        ],
        poprawna: "A"
    },
    {
        id: 1272,
        pytanie: "Do zachowań etycznych w miejscu pracy zaliczyć można",
        odpowiedzi: [
            "przekazywanie członkom rodziny służbowych materiałów eksploatacyjnych.",
            "wykorzystanie sprzętu biurowego do celów prywatnych.",
            "przekazywanie znajomym danych osobowych pracowników.",
            "przestrzeganie tajemnicy zawodowej."
        ],
        poprawna: "D"
    },
    {
        id: 1273,
        pytanie: "W języku JavaScript zdefiniowano funkcję potega. Funkcja ta",
        odpowiedzi: [
            "wymaga podania wartości dwóch parametrów przy wywołaniu.",
            "nie zwraca żadnej wartości.",
            "nie przyjmuje parametrów.",
            "może być wywołana z jednym parametrem."
        ],
        poprawna: "D",
        obraz: "1273.jpg"
    },
    {
        id: 1274,
        pytanie: "Wszelkie dane, które dostarczają informacji o innych danych, nazywane są",
        odpowiedzi: [
            "metadata.",
            "markup language.",
            "databus.",
            "metalanguage."
        ],
        poprawna: "A"
    },
    {
        id: 1275,
        pytanie: "Poniżej przedstawiono cechy jednej z umów:\n\"Pracownik wykonuje pracę pod kierownictwem pracodawcy.\nMiejsce i czas wykonywania pracy wyznacza pracodawca.\nZa pracę przysługuje wynagrodzenie oraz składki na ubezpieczenia społeczne.\n\"\nPrzedstawione cechy dotyczą",
        odpowiedzi: [
            "umowy o pracę.",
            "umowy agencyjnej.",
            "umowy zlecenia.",
            "umowy o dzieło."
        ],
        poprawna: "A"
    },
    {
        id: 1276,
        pytanie: "Do podzbioru DML (ang. Data Manipulation Language) języka SQL należą polecenia:",
        odpowiedzi: [
            "INSERT, UPDATE, DELETE",
            "CREATE, DROP, ALTER",
            "BEGIN, COMMIT, ROLLBACK",
            "GRANT, REVOKE, DENY"
        ],
        poprawna: "A"
    }
];
