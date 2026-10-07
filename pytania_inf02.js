// Baza pytań do quizu.
// id          - numer pytania w źródle
// pytanie     - treść pytania
// odpowiedzi  - cztery odpowiedzi w kolejności A, B, C, D (bez liter)
// poprawna    - litera poprawnej odpowiedzi
// obraz       - opcjonalnie: nazwa pliku ze zdjęciem z folderu inf02/

const BAZA_INF02 = [
    {
        id: 1,
        pytanie: "Układy sekwencyjne zbudowane z zespołu przerzutników, najczęściej synchronicznych typu D, służące do\nprzechowywania danych, to",
        odpowiedzi: [
            "bramki",
            "kodery",
            "rejestry",
            "dekodery"
        ],
        poprawna: "C"
    },
    {
        id: 2,
        pytanie: "Transformator impulsowy w przedstawionym zasilaczu oznaczono symbolem",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "2.jpg"
    },
    {
        id: 3,
        pytanie: "Na przedstawionej płycie głównej możliwy jest montaż procesora z obudową typu",
        odpowiedzi: [
            "LGA",
            "PGA",
            "SECC",
            "SPGA"
        ],
        poprawna: "A",
        obraz: "3.jpg"
    },
    {
        id: 4,
        pytanie: "Kompatybilne podzespoły oznaczono w tabeli numerami",
        odpowiedzi: [
            "1, 3, 5",
            "1, 4, 6",
            "2, 4, 5",
            "2, 4, 6"
        ],
        poprawna: "C",
        obraz: "4.jpg"
    },
    {
        id: 5,
        pytanie: "Przed rozpoczęciem modernizacji komputerów osobistych oraz serwerów, polegającej na dołożeniu nowych\nmodułów pamięci RAM, należy sprawdzić",
        odpowiedzi: [
            "model pamięci RAM, maksymalną pojemność i liczbę modułów obsługiwaną przez płytę\ngłówną.",
            "pojemność i rodzaj interfejsu dysku twardego oraz rodzaj gniazda zainstalowanej pamięci\nRAM.",
            "producenta pamięci RAM oraz interfejsy zewnętrzne zainstalowanej płyty głównej.",
            "gniazdo interfejsu karty graficznej oraz moc zainstalowanego zasilacza."
        ],
        poprawna: "A"
    },
    {
        id: 6,
        pytanie: "Do aktualizacji systemów Linux można wykorzystać programy",
        odpowiedzi: [
            "cron i mount",
            "defrag i YaST",
            "apt-get i zypper",
            "aptitude i amaro"
        ],
        poprawna: "C"
    },
    {
        id: 7,
        pytanie: "Aby umożliwić komunikację urządzenia mobilnego z komputerem przez interfejs Bluetooth, należy",
        odpowiedzi: [
            "skonfigurować urządzenie mobilne przez przeglądarkę.",
            "połączyć urządzenia kablem krosowym.",
            "utworzyć sieć WAN dla urządzeń.",
            "wykonać parowanie urządzeń."
        ],
        poprawna: "D"
    },
    {
        id: 8,
        pytanie: "Która licencja ma charakter grupowy oraz umożliwia instytucjom komercyjnym lub organizacjom\nedukacyjnym, państwowym, charytatywnym zakup na korzystnych warunkach większej liczby\noprogramowania firmy Microsoft?",
        odpowiedzi: [
            "MPL",
            "OEM",
            "APSL",
            "MOLP"
        ],
        poprawna: "D"
    },
    {
        id: 9,
        pytanie: "Topologia fizyczna sieci, w której jako medium transmisyjne stosuje się fale radiowe, jest nazywana\ntopologią",
        odpowiedzi: [
            "ad-hoc",
            "magistrali",
            "pierścienia",
            "CSMA/CD"
        ],
        poprawna: "A"
    },
    {
        id: 10,
        pytanie: "Który ze standardów Gigabit Ethernet umożliwia budowę segmentów sieci o długości 550 m/5000 m\nz prędkością transmisji 1 Gb/s?",
        odpowiedzi: [
            "1000Base-T",
            "1000Base-FX",
            "1000Base-LX",
            "1000Base-SX"
        ],
        poprawna: "C"
    },
    {
        id: 11,
        pytanie: "Protokołem kontrolnym rodziny TCP/IP, którego rolą jest między innymi wykrywanie awarii urządzeń\nsieciowych, jest",
        odpowiedzi: [
            "FDDI",
            "ICMP",
            "IMAP",
            "SMTP"
        ],
        poprawna: "B"
    },
    {
        id: 12,
        pytanie: "Aby można było wykorzystać aparat telefoniczny PSTN do wykonywania połączeń za pomocą sieci\nkomputerowej, należy go podłączyć do",
        odpowiedzi: [
            "modemu analogowego",
            "mostka sieciowego",
            "repetera sygnału",
            "bramki VoIP"
        ],
        poprawna: "D"
    },
    {
        id: 13,
        pytanie: "Wskaż narzędzie służące do mocowania pojedynczych żył kabla miedzianego w złączach.",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "13.jpg"
    },
    {
        id: 14,
        pytanie: "Za pomocą programu Acrylic Wi-Fi Home wykonano test, którego wyniki przedstawiono na zrzucie. Na ich\npodstawie można stwierdzić, że dostępna sieć bezprzewodowa",
        odpowiedzi: [
            "jest nieszyfrowana.",
            "korzysta z kanałów 10 ÷ 12.",
            "ma bardzo dobrą jakość sygnału.",
            "osiąga maksymalną szybkość transferu 72 Mbps."
        ],
        poprawna: "A",
        obraz: "14.jpg"
    },
    {
        id: 15,
        pytanie: "Który adres IP należy do klasy A?",
        odpowiedzi: [
            "239.0.255.15",
            "217.12.45.1",
            "129.10.0.17",
            "125.11.0.7"
        ],
        poprawna: "D"
    },
    {
        id: 16,
        pytanie: "Wskaż adres rozgłoszeniowy sieci, do której należy host o adresie 88.89.90.91/6?",
        odpowiedzi: [
            "91.255.255.255",
            "88.255.255.255",
            "91.89.255.255",
            "88.89.255.255"
        ],
        poprawna: "A"
    },
    {
        id: 17,
        pytanie: "Aby w systemie Windows wykonać śledzenie trasy pakietów do serwera strony internetowej, należy\nwykorzystać polecenie",
        odpowiedzi: [
            "ping",
            "tracert",
            "netstat",
            "iproute"
        ],
        poprawna: "B"
    },
    {
        id: 18,
        pytanie: "Na schemacie obrazującym zasadę działania monitora plazmowego numerem 6 oznaczono",
        odpowiedzi: [
            "warstwę fosforową.",
            "warstwę dielektryka.",
            "elektrody adresujące.",
            "elektrody wyświetlacza."
        ],
        poprawna: "C",
        obraz: "18.jpg"
    },
    {
        id: 19,
        pytanie: "Na ilustracji zaznaczono strzałkami funkcję przycisków znajdujących się na obudowie projektora\nmultimedialnego. Za pomocą tych przycisków można",
        odpowiedzi: [
            "przełączać sygnały wejściowe",
            "regulować zniekształcony obraz.",
            "zmieniać poziom jasności obrazu.",
            "regulować odwzorowanie przestrzeni kolorów"
        ],
        poprawna: "B",
        obraz: "19.jpg"
    },
    {
        id: 20,
        pytanie: "Pierwszą czynnością niezbędną do zabezpieczenia rutera przed dostępem do jego panelu konfiguracyjnego\nprzez osoby niepowołane jest",
        odpowiedzi: [
            "włączenie filtrowania adresów MAC.",
            "włączenie szyfrowania kluczem WEP",
            "zmiana domyślnej nazwy sieci (SSID) na unikatową",
            "zmiana nazwy login i hasła wbudowanego konta administratora."
        ],
        poprawna: "D"
    },
    {
        id: 21,
        pytanie: "Aby wyczyścić z kurzu wnętrze obudowy drukarki fotograficznej, należy użyć",
        odpowiedzi: [
            "sprężonego powietrza w pojemniku z wydłużoną rurką.",
            "szczotki z twardym włosiem",
            "opaski antystatycznej.",
            "środka smarującego."
        ],
        poprawna: "A"
    },
    {
        id: 22,
        pytanie: "Na podstawie zrzutu ekranu przedstawiającego konfigurację przełącznika można stwierdzić, że",
        odpowiedzi: [
            "czas między wysyłaniem kolejnych komunikatów o poprawnej pracy urządzenia wynosi\n3 sekundy.",
            "maksymalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 20 sekund.",
            "minimalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 25 sekund.",
            "maksymalny czas pomiędzy zmianami statusu łącza wynosi 5 sekund."
        ],
        poprawna: "A",
        obraz: "22.jpg"
    },
    {
        id: 23,
        pytanie: "Przedstawione polecenia, uruchomione w interfejsie CLI rutera firmy CISCO, spowodują",
        odpowiedzi: [
            "dopuszczenie ruchu pochodzącego z sieci o adresie 10.0.0.1",
            "określenie puli adresów wewnętrznych 10.0.0.1 ÷ 255.255.255.0",
            "ustawienie interfejsu zewnętrznego o adresie 10.0.0.1/24 dla technologii NAT",
            "ustawienie interfejsu wewnętrznego o adresie 10.0.0.1/24 dla technologii NAT"
        ],
        poprawna: "D",
        obraz: "23.jpg"
    },
    {
        id: 24,
        pytanie: "Schemat przedstawia zasadę działania sieci VPN o nazwie",
        odpowiedzi: [
            "Client - to -Site",
            "Site - to - Site",
            "Gateway",
            "L2TP"
        ],
        poprawna: "B",
        obraz: "24.jpg"
    },
    {
        id: 25,
        pytanie: "Przedstawione narzędzie może być wykorzystane do",
        odpowiedzi: [
            "podgrzania i zamontowania elementu elektronicznego.",
            "sprawdzenia długości badanego kabla sieciowego.",
            "pomiaru wartości napięcia w zasilaczu",
            "utrzymania drukarki w czystości."
        ],
        poprawna: "C",
        obraz: "25.jpg"
    },
    {
        id: 26,
        pytanie: "Wskaż program systemu Linux, służący do kompresji danych.",
        odpowiedzi: [
            "arj",
            "tar",
            "gzip",
            "shar"
        ],
        poprawna: "C"
    },
    {
        id: 27,
        pytanie: "Wskaż sygnał oznaczający błąd karty graficznej komputera wyposażonego w BIOS POST firmy AWARD.",
        odpowiedzi: [
            "1 długi, 1 krótki.",
            "1 długi, 2 krótkie.",
            "1 długi, 5 krótkich.",
            "1 długi, 9 krótkich."
        ],
        poprawna: "B"
    },
    {
        id: 28,
        pytanie: "Po sprawdzeniu komputera programem diagnostycznym wykryto, że temperatura pracy karty graficznej\nposiadającej wyjścia HDMI i D-SUB, osadzonej w gnieździe PCI Express komputera stacjonarnego, wynosi\n87°C. W takim przypadku serwisant powinien",
        odpowiedzi: [
            "zamienić kabel sygnałowy D-SUB na HDMI.",
            "sprawdzić, czy wentylator jest sprawny i czy nie jest zakurzony.",
            "zainstalować dodatkowy moduł pamięci RAM, aby odciążyć kartę.",
            "wymienić dysk twardy na nowy, o podobnej wielkości i prędkości obrotowej."
        ],
        poprawna: "B"
    },
    {
        id: 29,
        pytanie: "SuperPi to program wykorzystywany do sprawdzenia",
        odpowiedzi: [
            "wydajności dysków twardych.",
            "obciążenia i wydajności kart graficznych.",
            "ilości niewykorzystanej pamięci operacyjnej RAM.",
            "wydajności procesorów o zwiększonej częstotliwości."
        ],
        poprawna: "D"
    },
    {
        id: 30,
        pytanie: "Odzyskanie listy kontaktów w telefonie komórkowym z zainstalowanym systemem Android jest możliwe,\ngdy użytkownik wcześniej wykonał synchronizację danych urządzenia z Google Drive za pomocą",
        odpowiedzi: [
            "konta Yahoo",
            "konta Google",
            "konta Microsoft",
            "dowolnego konta pocztowego z portalu Onet"
        ],
        poprawna: "B"
    },
    {
        id: 31,
        pytanie: "Aby wyeliminować podstawowe zagrożenia związane z bezpieczeństwem pracy na komputerze podłączonym\ndo sieci Internet, w pierwszej kolejności należy",
        odpowiedzi: [
            "odsunąć komputer od źródła ciepła, nie przygniatać przewodów zasilających komputera\ni urządzeń peryferyjnych.",
            "zainstalować program antywirusowy, zaktualizować bazy wirusów, włączyć firewall\ni wykonać aktualizację systemu.",
            "wyczyścić wnętrze jednostki centralnej, nie jeść i nie pić przy komputerze oraz nie podawać\nswojego hasła innym użytkownikom",
            "sprawdzić temperaturę podzespołów, podłączyć komputer do zasilacza UPS oraz nie wchodzić\nna podejrzane strony internetowe."
        ],
        poprawna: "B"
    },
    {
        id: 32,
        pytanie: "Serwisant wykonał w ramach zlecenia czynności wymienione w tabeli. Koszt zlecenia obejmuje cenę usług\nzawartych w tabeli oraz koszt pracy serwisanta, którego stawka godzinowa wynosi 60,00 zł netto. Ustal\ncałkowity koszt zlecenia brutto. Stawka podatku VAT na usługi wynosi 23%.",
        odpowiedzi: [
            "492,00 zł",
            "455,20 zł",
            "436,80 zł",
            "400,00 zł"
        ],
        poprawna: "A",
        obraz: "32.jpg"
    },
    {
        id: 33,
        pytanie: "Aby w systemie Windows zmienić parametry konfiguracyjne Menu Start i paska zadań należy wykorzystać\nprzystawkę",
        odpowiedzi: [
            "dcpol.msc",
            "azman.msc",
            "gpedit.msc",
            "fsmgmt.msc"
        ],
        poprawna: "C"
    },
    {
        id: 34,
        pytanie: "Konfigurację interfejsu sieciowego w systemie Linux można wykonać, edytując plik",
        odpowiedzi: [
            "/ etc / hosts",
            "/ etc / host.conf",
            "/ etc / resolv.conf",
            "/ etc / network / interfaces"
        ],
        poprawna: "D"
    },
    {
        id: 35,
        pytanie: "W systemie Linux polecenie touch służy do",
        odpowiedzi: [
            "utworzenia pliku lub zmiany daty modyfikacji lub daty ostatniego dostępu.",
            "obliczenia liczby wierszy, słów i znaków w pliku.",
            "wyszukania podanego wzorca w tekście pliku.",
            "przeniesienia lub zmiany nazwy pliku."
        ],
        poprawna: "A"
    },
    {
        id: 36,
        pytanie: "Aby w systemie Windows Server wykonać rezerwację adresów IP na podstawie adresów fizycznych MAC\nurządzeń, należy skonfigurować usługę",
        odpowiedzi: [
            "DNS",
            "NAT",
            "RRAS",
            "DHCP"
        ],
        poprawna: "D"
    },
    {
        id: 37,
        pytanie: "Po wydaniu przedstawionego polecenia systemu Windows, wartość 11 zostanie ustawiona dla",
        odpowiedzi: [
            "maksymalnej liczby dni ważności konta.",
            "minimalnej liczby znaków w hasłach użytkowników.",
            "maksymalnej liczby dni między zmianami haseł użytkowników.",
            "minimalnej liczby minut, przez które użytkownik może być zalogowany."
        ],
        poprawna: "B",
        obraz: "37.jpg"
    },
    {
        id: 38,
        pytanie: "Protokół RDP jest wykorzystywany w usłudze",
        odpowiedzi: [
            "SCP w systemie Windows.",
            "terminalowej w systemie Linux.",
            "pulpitu zdalnego w systemie Windows.",
            "poczty elektronicznej w systemie Linux"
        ],
        poprawna: "C"
    },
    {
        id: 39,
        pytanie: "Narzędziem systemu Windows służącym do sprawdzenia prób logowania do systemu jest dziennik",
        odpowiedzi: [
            "Setup",
            "System",
            "aplikacji",
            "zabezpieczeń"
        ],
        poprawna: "D"
    },
    {
        id: 40,
        pytanie: "Program fsck jest wykorzystywany w systemie Linux do",
        odpowiedzi: [
            "wykrycia struktury sieci i diagnostyki przepustowości sieci lokalnej.",
            "monitorowania parametrów pracy i wydajności podzespołów komputera.",
            "dokonania oceny stanu systemu plików i wykrycia uszkodzonych sektorów.",
            "przeprowadzenia testów wydajnościowych serwera WWW poprzez wysłanie dużej liczby\nżądań."
        ],
        poprawna: "C"
    },
    {
        id: 41,
        pytanie: "Który zapis w systemie binarnym odpowiada liczbie 91 zapisanej w systemie szesnastkowym?",
        odpowiedzi: [
            "10010001",
            "10001001",
            "10001011",
            "10011001"
        ],
        poprawna: "A"
    },
    {
        id: 42,
        pytanie: "Którą bramkę logiczną opisuje wyrażenie",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "42.jpg"
    },
    {
        id: 43,
        pytanie: "Na rysunku przedstawiona jest karta",
        odpowiedzi: [
            "kontrolera RAID",
            "kontrolera SCSII",
            "sieciowa Token Ring",
            "sieciowa Fibre Channel"
        ],
        poprawna: "D",
        obraz: "43.jpg"
    },
    {
        id: 44,
        pytanie: "Na rysunku przedstawiono schemat blokowy karty",
        odpowiedzi: [
            "sieciowej.",
            "graficznej.",
            "dźwiękowej.",
            "telewizyjnej."
        ],
        poprawna: "D",
        obraz: "44.jpg"
    },
    {
        id: 45,
        pytanie: "Na rysunku przedstawiono fragment dokumentacji technicznej płyty głównej GA-K8NF-9-RH rev. 2.x.\nWynika z niej, że maksymalna liczba możliwych do zamontowania kart rozszerzeń (pomijając interfejs USB)\nwynosi",
        odpowiedzi: [
            "6",
            "5",
            "3",
            "2"
        ],
        poprawna: "A",
        obraz: "45.jpg"
    },
    {
        id: 46,
        pytanie: "Na rysunku przedstawiono tylny panel stacji roboczej. Strzałką oznaczono port",
        odpowiedzi: [
            "HDMI",
            "eSATA",
            "USB 3.0",
            "DisplayPort"
        ],
        poprawna: "D",
        obraz: "46.jpg"
    },
    {
        id: 47,
        pytanie: "Na rysunku przedstawiono komunikat systemowy. Jakie działanie powinien wykonać użytkownik, aby\nusunąć błąd?",
        odpowiedzi: [
            "Podłączyć monitor do złącza HDMI.",
            "Odświeżyć okno Menedżer urządzeń.",
            "Zainstalować sterownik do karty graficznej.",
            "Zainstalować sterownik do Karty HD Graphics."
        ],
        poprawna: "C",
        obraz: "47.jpg"
    },
    {
        id: 48,
        pytanie: "Shareware to rodzaj licencji polegającej na",
        odpowiedzi: [
            "używaniu programu bezpłatnie, bez żadnych ograniczeń.",
            "bezpłatnym rozprowadzaniu aplikacji bez ujawniania kodu źródłowego.",
            "bezpłatnym rozpowszechnianiu programu na czas testów przed zakupem.",
            "korzystaniu z programu przez określony czas, po którym program przestaje działać."
        ],
        poprawna: "C"
    },
    {
        id: 49,
        pytanie: "Ataki na systemy komputerowe polegające na podstępnym wyłudzaniu od użytkownika jego osobistych\ndanych, przy wykorzystaniu zazwyczaj formy fałszywych powiadomień z instytucji czy od dostawców\nsystemów e-płatności i innych ogólnie znanych organizacji, to",
        odpowiedzi: [
            "DDoS",
            "phishing",
            "brute force",
            "SYN flooding"
        ],
        poprawna: "B"
    },
    {
        id: 50,
        pytanie: "Który z symboli oznacza zastrzeżenie praw autorskich?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "50.jpg"
    },
    {
        id: 51,
        pytanie: "Który typ fizycznej topologii sieci komputerowej przedstawiono na rysunku?",
        odpowiedzi: [
            "Siatki.",
            "Gwiazdy.",
            "Magistrali.",
            "Podwójnego pierścienia."
        ],
        poprawna: "A",
        obraz: "51.jpg"
    },
    {
        id: 52,
        pytanie: "Ile domen kolizyjnych i rozgłoszeniowych jest widocznych na schemacie?",
        odpowiedzi: [
            "9 domen kolizyjnych i 1 domena\nrozgłoszeniowa",
            "9 domen kolizyjnych i 4 domeny\nrozgłoszeniowe.",
            "1 domena kolizyjna i 9 domen\nrozgłoszeniowych.",
            "4 domeny kolizyjne i 9 domen\nrozgłoszeniowych."
        ],
        poprawna: "B",
        obraz: "52.jpg"
    },
    {
        id: 53,
        pytanie: "Zasady budowy systemu okablowania strukturalnego, specyfikacja parametrów kabli oraz procedury\ntestowania obowiązujące w Polsce zostały zawarte w normach",
        odpowiedzi: [
            "EN 50167",
            "EN 50169",
            "PN-EN 50173",
            "PN-EN 50310"
        ],
        poprawna: "C"
    },
    {
        id: 54,
        pytanie: "Który adres IPv6 jest prawidłowy?",
        odpowiedzi: [
            "1234:9ABC::123::DEF4",
            "1234:9ABC::123:DEF4",
            "1234-9ABC-123-DEF4",
            "1234.9ABC.123.DEF4"
        ],
        poprawna: "B"
    },
    {
        id: 55,
        pytanie: "Który z protokołów w systemach operacyjnych Linux wykorzystywany jest w sieciach LAN?",
        odpowiedzi: [
            "IP",
            "IPX",
            "NetBEUI",
            "AppleTalk"
        ],
        poprawna: "A"
    },
    {
        id: 56,
        pytanie: "Przedstawione na rysunku urządzenie",
        odpowiedzi: [
            "służy do przechwytywania i nagrywania pakietów danych w sieciach komputerowych.",
            "odpowiada za przekazywanie ramki między segmentami sieci z doborem portu, na który jest\nprzekazywana.",
            "umożliwia zamianę sygnału pochodzącego z okablowania miedzianego na okablowanie\nświatłowodowe.",
            "odpowiada za wytworzenie na wyjściu sygnału analogowego, będącego wzmocnionym\nsygnałem wejściowym, kosztem zużycia energii pobieranej ze źródła prądu."
        ],
        poprawna: "C",
        obraz: "56.jpg"
    },
    {
        id: 57,
        pytanie: "Które urządzenie zastosowane w sieci komputerowej nie zmienia liczby domen kolizyjnych?",
        odpowiedzi: [
            "Ruter.",
            "Serwer.",
            "Przełącznik.",
            "Koncetrator."
        ],
        poprawna: "B"
    },
    {
        id: 58,
        pytanie: "Na rysunku przedstawiono zakończenie kabla",
        odpowiedzi: [
            "typu skrętka.",
            "telefonicznego.",
            "koncentrycznego.",
            "światłowodowego."
        ],
        poprawna: "D",
        obraz: "58.jpg"
    },
    {
        id: 59,
        pytanie: "Przedstawione na rysunku urządzenie wraz ze specyfikacją techniczną można wykorzystać do pomiarów\nokablowania",
        odpowiedzi: [
            "telefonicznego.",
            "skrętki cat. 5e / 6.",
            "koncentrycznego.",
            "światłowodowego."
        ],
        poprawna: "D",
        obraz: "59.jpg"
    },
    {
        id: 60,
        pytanie: "Który tryb pracy Access Pointa jest stosowany dla zapewnienia urządzeniom bezprzewodowym dostępu do\nprzewodowej sieci LAN?",
        odpowiedzi: [
            "Most bezprzewodowy.",
            "Punkt dostępowy.",
            "Tryb klienta.",
            "Repeater."
        ],
        poprawna: "B"
    },
    {
        id: 61,
        pytanie: "Jeżeli adres IP stacji roboczej ma postać 176.16.50.10/26 to adres rozgłoszeniowy oraz maksymalna liczba\nhostów w sieci wynoszą odpowiednio",
        odpowiedzi: [
            "176.16.50.1; 26 hostów.",
            "176.16.50.36; 6 hostów.",
            "176.16.50.63; 62 hosty.",
            "176.16.50.62; 63 hosty."
        ],
        poprawna: "C"
    },
    {
        id: 62,
        pytanie: "Sieć, w której pracuje stacja robocza o adresie IP 192.168.100.50/28, podzielono na 4 podsieci. Prawidłowa\nlista podsieci to",
        odpowiedzi: [
            "192.168.100.48/30; 192.168.100.52/30; 192.168.100.56/30; 192.168.100.60/30",
            "192.168.100.48/29; 192.168.100.54/29; 192.168.100.56/29; 192.168.100.58/29",
            "192.168.100.50/28; 192.168.100.52/28; 192.168.100.56/28; 192.168.100.60/28",
            "192.168.100.48/27; 192.168.100.52/27; 192.168.100.56/27; 192.168.100.58/27"
        ],
        poprawna: "A"
    },
    {
        id: 63,
        pytanie: "Na rysunku przedstawiono wynik testu okablowania. Zinterpretuj wynik pomiaru.",
        odpowiedzi: [
            "Błąd zwarcia.",
            "Błąd rozwarcia.",
            "Odwrócenie pary.",
            "Rozdzielenie pary."
        ],
        poprawna: "A",
        obraz: "63.jpg"
    },
    {
        id: 64,
        pytanie: "Na rysunku przedstawiono fragment wyniku działania programu do testowania sieci. Wskazuje to na\nzastosowanie sieciowego polecenia testującego",
        odpowiedzi: [
            "arp",
            "route",
            "tracert",
            "netstat"
        ],
        poprawna: "D",
        obraz: "64.jpg"
    },
    {
        id: 65,
        pytanie: "Które z protokołów przekazują okresowe kopie tablic rutingu do sąsiedniego rutera i nie mają pełnej\ninformacji o odległych ruterach?",
        odpowiedzi: [
            "RIP, IGRP",
            "EGP, BGP",
            "OSPF, RIP",
            "EIGPR, OSPF"
        ],
        poprawna: "D"
    },
    {
        id: 66,
        pytanie: "Rozdzielczość optyczna to jeden z parametrów",
        odpowiedzi: [
            "skanera.",
            "drukarki.",
            "modemu.",
            "monitora."
        ],
        poprawna: "A"
    },
    {
        id: 67,
        pytanie: "Na rysunku przedstawiono interfejs w komputerze przeznaczony do podłączenia",
        odpowiedzi: [
            "monitora LCD.",
            "plotera tnącego.",
            "drukarki laserowej.",
            "skanera lustrzanego."
        ],
        poprawna: "A",
        obraz: "67.jpg"
    },
    {
        id: 68,
        pytanie: "Które oprogramowanie należy zainstalować, aby umożliwić zeskanowanie tekstu z wydrukowanego\ndokumentu do edytora tekstu?",
        odpowiedzi: [
            "Program ERP",
            "Program CAD",
            "Program OCR",
            "Program COM +"
        ],
        poprawna: "C"
    },
    {
        id: 69,
        pytanie: "Użytkownicy z grupy Pracownicy nie mogą drukować dokumentów przy użyciu serwera wydruku na\nsystemie operacyjnym Windows Server. Mają oni przydzielone uprawnienia tylko „Zarządzanie\ndokumentami”. Co należy zrobić, aby rozwiązać opisany problem?",
        odpowiedzi: [
            "Dla grupy Pracownicy należy nadać uprawnienia „Drukuj”",
            "Dla grupy Administratorzy należy usunąć uprawnienia „Drukuj”",
            "Dla grupy Pracownicy należy usunąć uprawnienia „Zarządzanie dokumentami”",
            "Dla grupy Administratorzy należy usunąć uprawnienia „Zarządzanie dokumentami”"
        ],
        poprawna: "A"
    },
    {
        id: 70,
        pytanie: "Na rysunku przedstawiającym budowę drukarki, w której nierównomiernie podawany jest toner na bęben,\nnależy wymienić wałek magnetyczny, który jest oznaczony numerem",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "B",
        obraz: "70.jpg"
    },
    {
        id: 71,
        pytanie: "Który protokół działa w warstwie aplikacji modelu ISO/OSI umożliwiając wymianę informacji kontrolnych\npomiędzy urządzeniami sieciowymi?",
        odpowiedzi: [
            "DNS",
            "POP3",
            "SNMP",
            "SMTP"
        ],
        poprawna: "C"
    },
    {
        id: 72,
        pytanie: "Na rysunku przedstawiono konfigurację urządzenia. Do których portów należy podłączyć serwer o adresie IP\n192.168.20.254/24 oraz stację roboczą o adresie IP 192.168.20.10/24, aby zapewnić komunikację tych\nurządzeń w sieci?",
        odpowiedzi: [
            "Do portów 1 i 2",
            "Do portów 2 i 3",
            "Do portów 1 i 3",
            "Do portów 3 i 4"
        ],
        poprawna: "C",
        obraz: "72.jpg"
    },
    {
        id: 73,
        pytanie: "Na rysunku przedstawiono konfigurację urządzenia, z której wynika, że",
        odpowiedzi: [
            "utworzono dwa nowe VLAN-y: ID13, ID48",
            "do VLAN z ID48 przypisano wszystkie porty.",
            "utworzono trzy nowe VLAN-y: ID1, ID13, ID48",
            "VLAN z ID48 jest skonfigurowany jako zarządzalny."
        ],
        poprawna: "A",
        obraz: "73.jpg"
    },
    {
        id: 74,
        pytanie: "Na rysunku przedstawiono okno konfiguracyjne rutera. Ustawione parametry świadczą o tym, że",
        odpowiedzi: [
            "na komputerze o adresie MAC 44-8A-5B-5A-56-D0 ustawiono adres IP 192.168.17.30\nza pomocą Panelu Sterowania.",
            "komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 nie będzie mógł\npołączyć się z urządzeniami tej sieci.",
            "komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 został wykluczony\nz sieci.",
            "komputerowi o adresie MAC 44-8A-5B-5A-56-D0 usługa DHCP rutera przydzieli adres\nIP 192.168.17.30"
        ],
        poprawna: "D",
        obraz: "74.jpg"
    },
    {
        id: 75,
        pytanie: "Który typ zabezpieczeń w sieci WiFi posiada najlepszy poziom zabezpieczeń?",
        odpowiedzi: [
            "WEP",
            "WPA",
            "WPA2",
            "NTFS"
        ],
        poprawna: "C"
    },
    {
        id: 76,
        pytanie: "Jeżeli przy uruchamianiu komputera procedura POST zasygnalizuje błąd odczytu/zapisu pamięci CMOS, to\nnależy",
        odpowiedzi: [
            "przywrócić ustawienia fabryczne BIOS Setup.",
            "zaprogramować pamięć EEPROM płyty głównej.",
            "wymienić baterię układu lub wymienić płytę główną.",
            "wymontować moduł pamięci RAM, oczyścić styki modułu pamięci i zamontować pamięć\nponownie."
        ],
        poprawna: "C"
    },
    {
        id: 77,
        pytanie: "Które polecenie powinien zastosować root w systemie Ubuntu Linux, aby zaktualizować wszystkie pakiety\n(cały system) do nowej wersji wraz z nowym jądrem?",
        odpowiedzi: [
            "apt-get update",
            "apt-get upgrade",
            "apt-get dist-upgrade",
            "apt-get install nazwa_pakietu"
        ],
        poprawna: "C"
    },
    {
        id: 78,
        pytanie: "Które polecenie w systemie Linux nada uprawnienia do pisania dla wszystkich obiektów w /usr/share dla\nwszystkich użytkowników, nie zmieniając pozostałych uprawnień?",
        odpowiedzi: [
            "chmod a-w /usr/share",
            "chmod ugo+rw /usr/share",
            "chmod -R a+w /usr/share",
            "chmod -R o+r /usr/share"
        ],
        poprawna: "C"
    },
    {
        id: 79,
        pytanie: "Udostępniono w sieci lokalnej jako udział specjalny folder o nazwie egzamin znajdujący się na komputerze\no nazwie SERWER_2 w katalogu głównym dysku C:\\. Jak powinna wyglądać ścieżka dostępu do katalogu\negzamin, w którym przechowywany jest folder macierzysty dla konta użytkownika o określonym loginie?",
        odpowiedzi: [
            "\\\\SERWER_2\\$egzamin\\%USERNAME%",
            "\\\\SERWER_2\\$egzamin$\\%USERNAME%",
            "\\\\SERWER_2\\egzamin$\\%$USERNAME%",
            "\\\\SERWER_2\\egzamin$\\%USERNAME%"
        ],
        poprawna: "D"
    },
    {
        id: 80,
        pytanie: "Aby profil stał się obowiązkowym, należy zmienić rozszerzenie pliku ntuser.dat na",
        odpowiedzi: [
            "ntuser.sys",
            "ntuser.man",
            "$ntuser.bat",
            "$ntuser.exe"
        ],
        poprawna: "B",
        obraz: "80.jpg"
    },
    {
        id: 81,
        pytanie: "Przedstawiony na rysunku element elektroniczny to",
        odpowiedzi: [
            "cewka.",
            "rezystor.",
            "tranzystor.",
            "kondensator."
        ],
        poprawna: "C",
        obraz: "81.jpg"
    },
    {
        id: 82,
        pytanie: "W dokumentacji technicznej efektywność głośnika podłączonego do komputera zapisuje się w jednostce",
        odpowiedzi: [
            "J",
            "W",
            "dB",
            "kHz"
        ],
        poprawna: "C"
    },
    {
        id: 83,
        pytanie: "Na urządzeniu zasilanym prądem stałym znajduje się przedstawione oznaczenie. Wynika z niego, że\nurządzenie pobiera moc około",
        odpowiedzi: [
            "2,5 W",
            "7,5 W",
            "11,0 W",
            "18,75 W"
        ],
        poprawna: "D",
        obraz: "83.jpg"
    },
    {
        id: 84,
        pytanie: "Gniazdo LGA znajdujące się na płycie głównej komputera stacjonarnego umożliwia zainstalowanie\nprocesora",
        odpowiedzi: [
            "Intel Core i5",
            "Athlon 64 X2",
            "AMD Sempron",
            "Intel Pentium II Xeon"
        ],
        poprawna: "A"
    },
    {
        id: 85,
        pytanie: "Aby serwer umożliwiał transmisję danych w pasmach częstotliwości 2,4 GHz oraz 5 GHz, należy\nzainstalować w nim kartę sieciową pracującą w standardzie",
        odpowiedzi: [
            "802.11a",
            "802.11b",
            "802.11g",
            "802.11n"
        ],
        poprawna: "D"
    },
    {
        id: 86,
        pytanie: "Do instalacji oraz deinstalacji oprogramowania w systemie Ubuntu służy menadżer",
        odpowiedzi: [
            "ls",
            "tar",
            "apt",
            "kast"
        ],
        poprawna: "C"
    },
    {
        id: 87,
        pytanie: "Wydając w wierszu poleceń systemu Windows Server polecenie convert, można przeprowadzić",
        odpowiedzi: [
            "defragmentację dysku.",
            "zmianę systemu plików.",
            "naprawę systemu plików.",
            "naprawę logicznej struktury dysku."
        ],
        poprawna: "B"
    },
    {
        id: 88,
        pytanie: "Aby zaktualizować zmiany w konfiguracji systemu operacyjnego Windows wykonane za pomocą edytora\nzasad grup, można posłużyć się poleceniem",
        odpowiedzi: [
            "restore",
            "dompol",
            "services",
            "gpupdate"
        ],
        poprawna: "D"
    },
    {
        id: 89,
        pytanie: "Przedstawiona na rysunku topologia sieci to",
        odpowiedzi: [
            "bus",
            "star",
            "ring",
            "mesh"
        ],
        poprawna: "D",
        obraz: "89.jpg"
    },
    {
        id: 90,
        pytanie: "Łącze światłowodowe wykorzystywane do transmisji danych w standardzie 10GBASE-SR może mieć\ndługość wynoszącą maksymalnie",
        odpowiedzi: [
            "2 km",
            "4 km",
            "200 m",
            "400 m"
        ],
        poprawna: "D"
    },
    {
        id: 91,
        pytanie: "Który protokół jest wykorzystywany do transmisji danych w warstwie transportowej modelu ISO/OSI?",
        odpowiedzi: [
            "ARP",
            "TCP",
            "HTTP",
            "LDAP"
        ],
        poprawna: "B"
    },
    {
        id: 92,
        pytanie: "Pomiar tłumienia w kablowym torze transmisyjnym pozwala określić",
        odpowiedzi: [
            "czas opóźnienia propagacji.",
            "błędy instalacyjne typu zamiana pary.",
            "różnice miedzy przesłuchami zdalnymi.",
            "spadek mocy sygnału w danej parze przewodu."
        ],
        poprawna: "D"
    },
    {
        id: 93,
        pytanie: "Odpowiednikiem adresu pętli zwrotnej jest w IPv6 adres",
        odpowiedzi: [
            "0:0/32",
            "::fff/64",
            "::1/128",
            ":1:1:1/96"
        ],
        poprawna: "C"
    },
    {
        id: 94,
        pytanie: "Który zapis adresu IPv4 wraz z maską jest błędny?",
        odpowiedzi: [
            "16.1.1.1/5",
            "100.0.0.0/8",
            "18.4.0.0, maska 255.0.0.0",
            "192.168.0.1, maska 255.250.255.0"
        ],
        poprawna: "D"
    },
    {
        id: 95,
        pytanie: "Dana jest sieć o adresie 172.16.0.0/16. Które z adresów sieci 172.16.0.0/16 są prawidłowe, jeśli zostaną\nwydzielone cztery podsieci o masce 18 bitowej?",
        odpowiedzi: [
            "172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0",
            "172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192",
            "172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255",
            "172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192"
        ],
        poprawna: "A"
    },
    {
        id: 96,
        pytanie: "Administrator sieci LAN zauważył przejście w tryb awaryjny urządzenia typu UPS. Świadczy to o awarii\nsystemu",
        odpowiedzi: [
            "zasilania.",
            "okablowania.",
            "urządzeń aktywnych.",
            "chłodzenia i wentylacji."
        ],
        poprawna: "A"
    },
    {
        id: 97,
        pytanie: "Szerokopasmowy dostęp do Internetu przy różnej prędkości pobierania i wysyłania danych zapewnia\ntechnologia",
        odpowiedzi: [
            "MSK",
            "ISDN",
            "QAM",
            "ADSL"
        ],
        poprawna: "D"
    },
    {
        id: 98,
        pytanie: "Wewnętrzny protokół trasowania, którego metryką jest wektor odległości, to",
        odpowiedzi: [
            "RIP",
            "EGP",
            "IS-IS",
            "OSPF"
        ],
        poprawna: "A"
    },
    {
        id: 99,
        pytanie: "Jaką nazwę nosi indentyfikator, który musi być identyczny, by urządzenia sieciowe mogły pracować w danej\nsieci bezprzewodowej?",
        odpowiedzi: [
            "IP",
            "URL",
            "SSID",
            "MAC"
        ],
        poprawna: "C"
    },
    {
        id: 100,
        pytanie: "Materiałem eksploatacyjnym plotera solwentowego jest",
        odpowiedzi: [
            "głowica tnąca.",
            "atrament żelowy.",
            "zestaw metalowych rylców.",
            "farba na bazie rozpuszczalników."
        ],
        poprawna: "D"
    },
    {
        id: 101,
        pytanie: "Za pomocą polecenia ipconfig /flushdns można wykonać konserwację urządzenia sieciowego\npolegającą na",
        odpowiedzi: [
            "odnowieniu dzierżawy adresu IP.",
            "zwolnieniu dzierżawy adresu uzyskanego z DHCP.",
            "aktualizacji ustawień nazw interfejsów sieciowych.",
            "wyczyszczeniu bufora systemu nazw domenowych."
        ],
        poprawna: "D"
    },
    {
        id: 102,
        pytanie: "Który protokół jest wykorzystywany przez polecenie ping?",
        odpowiedzi: [
            "IPX",
            "FTP",
            "SMTP",
            "ICMP"
        ],
        poprawna: "D"
    },
    {
        id: 103,
        pytanie: "Programem nasłuchowym służącym do przechwytywania i nagrywania różnych pakietów sieciowych oraz\nich dekodowania jest",
        odpowiedzi: [
            "finder.",
            "tracker.",
            "konqueror.",
            "whireshark."
        ],
        poprawna: "D"
    },
    {
        id: 104,
        pytanie: "Przedstawiony listing zawiera polecenia umożliwiające",
        odpowiedzi: [
            "usunięcie portów 0 i 1 przełącznika z sieci vlan.",
            "zmianę ustawienia prędkości dla portu 0/1 na fastethernet.",
            "konfigurację wirtualnej sieci lokalnej o nazwie vlan 10 w przełączniku.",
            "ustawienie nazwy fastEthernet dla pierwszych dziesięciu portów przełącznika."
        ],
        poprawna: "C",
        obraz: "104.jpg"
    },
    {
        id: 105,
        pytanie: "Przedstawiony fragment konfiguracji zapory sieciowej zezwala na ruch sieciowy z wykorzystaniem\nprotokołów",
        odpowiedzi: [
            "FTP, SSH",
            "POP3, TFTP",
            "HTTP, SMPT",
            "HTTPS, IMAP"
        ],
        poprawna: "D",
        obraz: "105.jpg"
    },
    {
        id: 106,
        pytanie: "Przedstawione na rysunku narzędzie służy do testowania",
        odpowiedzi: [
            "zasilacza.",
            "płyty głównej.",
            "karty sieciowej.",
            "okablowania LAN."
        ],
        poprawna: "D",
        obraz: "106.jpg"
    },
    {
        id: 107,
        pytanie: "Kopię danych w systemie Linux można wykonać za pomocą polecenia",
        odpowiedzi: [
            "dd",
            "tac",
            "split",
            "restore"
        ],
        poprawna: "A"
    },
    {
        id: 108,
        pytanie: "W systemie Linux odpowiednikiem programu Windows o nazwie chkdsk jest program",
        odpowiedzi: [
            "fsck",
            "icacls",
            "totem",
            "synaptic"
        ],
        poprawna: "A"
    },
    {
        id: 109,
        pytanie: "Za pomocą polecenia dxdiag wywołanego z wiersza poleceń systemu Windows można",
        odpowiedzi: [
            "sprawdzić parametry karty graficznej.",
            "wykonać pełną diagnostykę karty sieciowej.",
            "przeskanować dysk twardy w poszukiwaniu błędów.",
            "zweryfikować prędkość zapisu oraz odczytu napędów DVD."
        ],
        poprawna: "A"
    },
    {
        id: 110,
        pytanie: "Które narzędzie jest stosowane do weryfikacji sterowników w systemie Windows?",
        odpowiedzi: [
            "sfc",
            "debug",
            "verifier",
            "replace"
        ],
        poprawna: "C"
    },
    {
        id: 111,
        pytanie: "Wskaż efekt działania przedstawionego polecenia.",
        odpowiedzi: [
            "Ustawiony czas aktywacji konta Test.",
            "Ustawiona data wygaśnięcia konta Test.",
            "Sprawdzona data ostatniego logowania na konto Test.",
            "Wymuszona zmiana hasła na koncie Test w podanym terminie."
        ],
        poprawna: "B",
        obraz: "111.jpg"
    },
    {
        id: 112,
        pytanie: "Użytkownik systemu operacyjnego Linux chce przypisać adres IP 152.168.1.200 255.255.0.0 interfejsowi\nsieciowemu. Które polecenie powinien wydać, mając uprawnienia root?",
        odpowiedzi: [
            "ip addr add 152.168.1.200/16 dev eth1",
            "netsh interface IP 152.168.1.200/16 /add",
            "ip addr add 152.168.1.200 255.255.0.0 dev eth1",
            "netsh interface IP 152.168.1.200 255.255.0.0 /add"
        ],
        poprawna: "A"
    },
    {
        id: 113,
        pytanie: "W wyniku użycia polecenia route ustawiono",
        odpowiedzi: [
            "koszt metryki na 0 przeskoków",
            "adres docelowej sieci na 192.168.35.0",
            "25 bitową maskę dla adresu docelowego",
            "maskę 255.255.255.0 dla adresu IP bramy 192.168.0.2"
        ],
        poprawna: "B",
        obraz: "113.jpg"
    },
    {
        id: 114,
        pytanie: "Sprawdzenie minimalnego okresu ważności hasła w systemie Windows umożliwia polecenie",
        odpowiedzi: [
            "net user",
            "net time",
            "net group",
            "net accounts"
        ],
        poprawna: "D"
    },
    {
        id: 115,
        pytanie: "W systemie Linux polecenie chmod umożliwia",
        odpowiedzi: [
            "zmianę właściciela pliku.",
            "naprawę systemu plików.",
            "ustawienie praw dostępu do pliku.",
            "wyświetlenie informacji o ostatniej aktualizacji pliku."
        ],
        poprawna: "C"
    },
    {
        id: 116,
        pytanie: "Aby uzupełnić prawidłową składnię prezentowanego polecenia, które udostępnia folder Dane pod nazwą test,\nw miejscu kropek należy wpisać słowo",
        odpowiedzi: [
            "use",
            "view",
            "share",
            "connect"
        ],
        poprawna: "C",
        obraz: "116.jpg"
    },
    {
        id: 117,
        pytanie: "Które ze zdań jest prawdziwe dla przedstawionej konfiguracji usługi DHCP w systemie Linux?",
        odpowiedzi: [
            "System zamieni adres IP 192.168.221.102 na nazwę main",
            "Komputery otrzymają adres IP z zakresu 176.16.20.251 ÷ 255.255.255.0",
            "Karcie sieciowej komputera main przypisany zostanie adres IP 39:12:86:07:55:00",
            "Komputery pracujące w sieci otrzymają adres IP z zakresu 176.16.20.50 ÷ 176.16.20.250"
        ],
        poprawna: "D",
        obraz: "117.jpg"
    },
    {
        id: 118,
        pytanie: "Dla danego użytkownika w systemie Linux polecenie usermod -s pozwala na",
        odpowiedzi: [
            "zablokowanie jego konta.",
            "przypisanie go do nowej grupy.",
            "zmianę jego katalogu domowego.",
            "zmianę jego powłoki systemowej."
        ],
        poprawna: "D"
    },
    {
        id: 119,
        pytanie: "Który protokół nie funkcjonuje w warstwie aplikacji modelu ISO/OSI?",
        odpowiedzi: [
            "IP",
            "FTP",
            "DNS",
            "HTTP"
        ],
        poprawna: "A"
    },
    {
        id: 120,
        pytanie: "Protokół umożliwiający hostom uzyskanie od serwera danych konfiguracyjnych, np. adresu IP bramy\nsieciowej, to",
        odpowiedzi: [
            "RTP",
            "NFS",
            "DHCP",
            "HTTPS"
        ],
        poprawna: "C"
    },
    {
        id: 121,
        pytanie: "W układzie SI jednostką miary napięcia jest",
        odpowiedzi: [
            "wat.",
            "herc.",
            "wolt.",
            "amper."
        ],
        poprawna: "C"
    },
    {
        id: 122,
        pytanie: "Wskaż rysunek przedstawiający kondensator stały",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "D",
        obraz: "122.jpg"
    },
    {
        id: 123,
        pytanie: "Na rysunku został przedstawiony schemat budowy logicznej",
        odpowiedzi: [
            "procesora.",
            "klawiatury.",
            "karty graficznej.",
            "myszy komputerowej."
        ],
        poprawna: "A",
        obraz: "123.jpg"
    },
    {
        id: 124,
        pytanie: "Oznaczenie przedstawionego procesora informuje o",
        odpowiedzi: [
            "jego małej obudowie.",
            "wersji mobilnej procesora.",
            "braku blokady mnożnika (unlocked).",
            "bardzo niskim zużyciu energii przez procesor."
        ],
        poprawna: "C",
        obraz: "124.jpg"
    },
    {
        id: 125,
        pytanie: "Wskaż podzespół niekompatybilny z płytą główną o przedstawionych w tabeli parametrach.",
        odpowiedzi: [
            "Monitor: Dell, 34”, 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0\nDownstream",
            "Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0\nx16",
            "Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150",
            "Pamięć RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black"
        ],
        poprawna: "C",
        obraz: "125.jpg"
    },
    {
        id: 126,
        pytanie: "W zestawie komputerowym o parametrach przedstawionych w tabeli należy wymienić kartę graficzną na\nkartę \nGeForce GTX 1070 Ti Titanium 8G DDR5, PCI EX-x16 3.0, 256b, 1683 MHz/1607 MHz, Power\nconsumption 180W, 3x DP, 2x HDMI, recommended power supply 500W, DirectX 12, OpenGL 4.5 \nW związku z tym modernizacja tego komputera wymaga również wymiany",
        odpowiedzi: [
            "karty sieciowej.",
            "płyty głównej.",
            "procesora.",
            "zasilacza."
        ],
        poprawna: "D",
        obraz: "126.jpg"
    },
    {
        id: 127,
        pytanie: "Do aktualizacji systemów Linux można wykorzystać programy",
        odpowiedzi: [
            "cron i mount",
            "defrag i YaST",
            "apt-get i zypper",
            "aptitude i amarok"
        ],
        poprawna: "C"
    },
    {
        id: 128,
        pytanie: "Autor zamieszczonego oprogramowania zezwala na jego bezpłatne używanie jedynie w przypadku",
        odpowiedzi: [
            "zaakceptowania ograniczenia czasowego podczas instalacji.",
            "uiszczenia dobrowolnej opłaty na cele charytatywne.",
            "wysłania tradycyjnej kartki pocztowej do autora.",
            "przesłania przelewu z kwotą 1$ na konto autora."
        ],
        poprawna: "C",
        obraz: "128.jpg"
    },
    {
        id: 129,
        pytanie: "W dwóch przyległych pomieszczeniach pewnej firmy występują bardzo silne zakłócenia elektromagnetyczne.\nAby zapewnić możliwie największą przepustowość podczas pracy istniejącej sieci LAN, jako medium\ntransmisyjne należy zastosować",
        odpowiedzi: [
            "kabel telefoniczny.",
            "kabel światłowodowy.",
            "skrętkę nieekranowaną.",
            "fale elektromagnetyczne w zakresie podczerwieni."
        ],
        poprawna: "B"
    },
    {
        id: 130,
        pytanie: "Narzędziem służącym do połączenia pigtaila z włóknami kabla światłowodowego jest",
        odpowiedzi: [
            "przedłużacz kategorii 5e z zestawem pasywnych kabli o prędkości połączenia 100 Mb/s.",
            "narzędzie zaciskowe do wtyków RJ45, wyposażone w odpowiednie dla kabla gniazdo.",
            "spawarka światłowodowa, spajająca włókna za pomocą łuku elektrycznego.",
            "stacja lutownicza, wykorzystująca mikroprocesor do regulacji temperatury."
        ],
        poprawna: "C"
    },
    {
        id: 131,
        pytanie: "Aby zabezpieczyć sieć bezprzewodową przed nieautoryzowanym dostępem, należy między innymi",
        odpowiedzi: [
            "wyłączyć szyfrowanie danych.",
            "włączyć filtrowanie adresów MAC.",
            "korzystać wyłącznie z kanałów używanych przez inne sieci WiFi.",
            "zastosować nazwę identyfikatora sieci SSID o długości min. 16 znaków."
        ],
        poprawna: "B"
    },
    {
        id: 132,
        pytanie: "Wskaż adres sieci, do której należy host o adresie 172.16.0.123/27",
        odpowiedzi: [
            "172.16.0.16",
            "172.16.0.96",
            "172.16.0.112",
            "172.16.0.224"
        ],
        poprawna: "B"
    },
    {
        id: 133,
        pytanie: "Ile bitów należy wyodrębnić z części hosta, aby z sieci o adresie IPv4 170.16.0.0/16 wydzielić 24 podsieci?",
        odpowiedzi: [
            "3 bity",
            "4 bity",
            "5 bitów",
            "6 bitów"
        ],
        poprawna: "C"
    },
    {
        id: 134,
        pytanie: "Programem służącym do wyświetlenia listy aktywnych urządzeń pracujących w sieci LAN jest",
        odpowiedzi: [
            "Advanced IP Scaner",
            "Ultimate Boot",
            "Ace Utilities",
            "Netstat"
        ],
        poprawna: "A"
    },
    {
        id: 135,
        pytanie: "Wskaż technologię wykorzystywaną do udostępniania Internetu wraz z usługą telewizji kablowej, w której\njako medium transmisyjne jest wykorzystywany światłowód oraz kabel koncentryczny.",
        odpowiedzi: [
            "PLC",
            "HFC",
            "xDSL",
            "GPRS"
        ],
        poprawna: "B"
    },
    {
        id: 136,
        pytanie: "Aby w systemie Windows zmienić port zainstalowanej drukarki, należy wykorzystać funkcję",
        odpowiedzi: [
            "Menedżer zadań.",
            "Właściwości drukarki.",
            "Preferencje drukowania.",
            "Ostatnia znana dobra konfiguracja."
        ],
        poprawna: "B"
    },
    {
        id: 137,
        pytanie: "W sieci LAN do zabezpieczenia urządzeń sieciowych przed przepięciami oraz różnicami potencjałów, które\nmogą wystąpić podczas burzy lub innych wyładowań atmosferycznych, należy wykorzystać",
        odpowiedzi: [
            "ruter.",
            "przełącznik.",
            "sprzętową zaporę sieciową.",
            "urządzenie typu NetProtector."
        ],
        poprawna: "D"
    },
    {
        id: 138,
        pytanie: "Do sprawdzenia indeksu stabilności systemu Windows Server należy wykorzystać narzędzie",
        odpowiedzi: [
            "Monitor niezawodności.",
            "Dziennik zdarzeń.",
            "Menedżer zadań.",
            "Zasady grupy."
        ],
        poprawna: "A"
    },
    {
        id: 139,
        pytanie: "Wskaż nazwę usługi przełącznika, która umożliwi ustawienie wyższego priorytetu dla transmisji VoIP.",
        odpowiedzi: [
            "SNMP",
            "VNC",
            "QoS",
            "STP"
        ],
        poprawna: "C"
    },
    {
        id: 140,
        pytanie: "Połączenie VPN obsługiwane przez system Windows Server, w którym uwierzytelnienie użytkowników\nnastępuje przez niezabezpieczone połączenia, a dopiero po wymianie uwierzytelnień rozpoczyna się\nszyfrowanie połączenia, to",
        odpowiedzi: [
            "SSTP",
            "PPTP",
            "L2TP",
            "IPSEC"
        ],
        poprawna: "B"
    },
    {
        id: 141,
        pytanie: "Do sprawdzenia prawidłowych przebiegów i wartości napięć układu urządzenia elektronicznego można użyć",
        odpowiedzi: [
            "watomierza.",
            "testera płyt głównych.",
            "oscyloskopu cyfrowego.",
            "miernika uniwersalnego."
        ],
        poprawna: "C"
    },
    {
        id: 142,
        pytanie: "Użycie polecenia tar –xf dane.tar w systemie Linux spowoduje",
        odpowiedzi: [
            "skopiowanie pliku dane.tar do katalogu /home",
            "wyświetlenie informacji o zawartości pliku dane.tar",
            "wyodrębnienie danych z archiwum o nazwie dane.tar",
            "utworzenie archiwum dane.tar zawierające kopię katalogu /home"
        ],
        poprawna: "C"
    },
    {
        id: 143,
        pytanie: "Komunikat tekstowy BIOS POST firmy Award o treści „Display switch is set incorrectly” wskazuje na",
        odpowiedzi: [
            "usterkę pamięci operacyjnej.",
            "brak urządzenia rozruchowego.",
            "błąd inicjalizacji dysku twardego.",
            "nieprawidłowy tryb wyświetlania obrazu."
        ],
        poprawna: "D"
    },
    {
        id: 144,
        pytanie: "Do wykonania monitoringu stanu dysków twardych w serwerach, komputerach stacjonarnych i laptopach\nmożna wykorzystać program",
        odpowiedzi: [
            "Super Pi",
            "Packet Tracer",
            "Acronis Drive Monitor",
            "PRTG Network Monitor"
        ],
        poprawna: "C"
    },
    {
        id: 145,
        pytanie: "Serwisant dojechał do klienta oddalonego od siedziby firmy o 11 km oraz wykonał u niego czynności\nnaprawcze zawarte w tabeli. Wskaż całkowity koszt brutto jego pracy, jeśli dojazd do klienta kosztuje\n1,20 zł/km brutto i jest on liczony w obie strony. Stawka podatku VAT na usługi wynosi 23%.",
        odpowiedzi: [
            "153,20 zł",
            "166,40 zł",
            "195,40 zł",
            "198,60 zł"
        ],
        poprawna: "D",
        obraz: "145.jpg"
    },
    {
        id: 146,
        pytanie: "Aby ikony widoczne na przedstawionym obrazie pojawiły się na Pasku zadań, należy w systemie Windows\nskonfigurować",
        odpowiedzi: [
            "funkcję Snap i Peek.",
            "funkcję Pokaż pulpit.",
            "obszar powiadomień.",
            "obszar Action Center."
        ],
        poprawna: "C",
        obraz: "146.jpg"
    },
    {
        id: 147,
        pytanie: "Po analizie zamieszczonych wyników konfiguracji kart sieciowych zainstalowanych na komputerze można\nstwierdzić, że",
        odpowiedzi: [
            "karta bezprzewodowa ma nazwę Net11",
            "wszystkie karty mogą uzyskać adres IP automatycznie.",
            "karta przewodowa ma adres MAC 8C-70-5A-F3-75-BC",
            "interfejs Bluetooth ma przydzielony adres IPv4 192.168.0.102"
        ],
        poprawna: "B",
        obraz: "147.jpg"
    },
    {
        id: 148,
        pytanie: "W systemie Windows przeprowadzenie analizy wpływu uruchamianych programów na wydajność komputera\njest między innymi możliwe po użyciu polecenia",
        odpowiedzi: [
            "dfrgui.exe",
            "iscsicpl.exe",
            "perfmon.msc",
            "taskschd.msc"
        ],
        poprawna: "C"
    },
    {
        id: 149,
        pytanie: "W systemie Linux polecenie cd ~ służy do",
        odpowiedzi: [
            "utworzenia katalogu /~.",
            "przejścia do katalogu głównego.",
            "wyszukania znaku ~ w zapisanych danych.",
            "przejścia do katalogu domowego użytkownika."
        ],
        poprawna: "D"
    },
    {
        id: 150,
        pytanie: "W systemie Windows Server udostępnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej\nw postaci dysku oznaczonego literą, jest możliwe dzięki wykonaniu operacji",
        odpowiedzi: [
            "zerowania.",
            "mapowania.",
            "oczyszczania.",
            "defragmentacji."
        ],
        poprawna: "B"
    },
    {
        id: 151,
        pytanie: "Serwer Samba umożliwia współdzielenie plików i drukarek w sieci za pomocą demona",
        odpowiedzi: [
            "grep",
            "mkfs",
            "smbd",
            "quota"
        ],
        poprawna: "C"
    },
    {
        id: 152,
        pytanie: "Który z rekordów DNS należy dodać w strefie wyszukiwania do przodu, aby zmapować nazwę domeny DNS\nna adres IP?",
        odpowiedzi: [
            "MX lub PTR",
            "A lub AAAA",
            "SRV lub TXT",
            "NS lub CNAME"
        ],
        poprawna: "B"
    },
    {
        id: 153,
        pytanie: "Polecenie net accounts zastosowane w Wierszu poleceń systemu Windows, powodujące ustawienie\nmaksymalnej liczby dni ważności hasła, wymaga użycia opcji",
        odpowiedzi: [
            "/TIMES",
            "/EXPIRES",
            "/MAXPWAGE",
            "/FORCELOGOFF"
        ],
        poprawna: "C"
    },
    {
        id: 154,
        pytanie: "W systemie Windows Server narzędziem umożliwiającym zarządzanie zasadami grupy jest",
        odpowiedzi: [
            "Panel sterowania.",
            "Menedżer zadań.",
            "Konsola GPMC.",
            "Serwer DNS."
        ],
        poprawna: "C"
    },
    {
        id: 155,
        pytanie: "Narzędziem umożliwiającym zdalną kontrolę użytkownika sieci lokalnej poprzez śledzenie jego działań lub\nprzejęcie całkowitej kontroli nad zdalną maszyną jest program",
        odpowiedzi: [
            "RealVNC",
            "Nslookup",
            "Recuva",
            "CPU-Z"
        ],
        poprawna: "A"
    },
    {
        id: 156,
        pytanie: "Na komputerze z zainstalowanymi dwoma systemami – Windows i Linux, po wykonaniu reinstalacji systemu\nWindows nie uruchamia się drugi system. Aby przywrócić możliwość uruchamiania się systemu Linux oraz\naby nie stracić danych i ustawień w nim zapisanych, należy",
        odpowiedzi: [
            "wykonać reinstalację systemu Linux.",
            "ponownie zainstalować bootloadera GRUB.",
            "wykonać kolejny raz instalację systemu Windows.",
            "przeprowadzić skanowanie dysku programem antywirusowym."
        ],
        poprawna: "B"
    },
    {
        id: 157,
        pytanie: "Zamieszczony komunikat widoczny po uruchomieniu narzędzia do naprawy systemu Windows może\nświadczyć o",
        odpowiedzi: [
            "uszkodzeniu sterowników.",
            "wykryciu nieprawidłowej adresacji IP.",
            "uszkodzeniu plików startowych systemu.",
            "konieczności wykonania kopii zapasowej systemu."
        ],
        poprawna: "C",
        obraz: "157.jpg"
    },
    {
        id: 158,
        pytanie: "Symbolem literowym P oznacza się",
        odpowiedzi: [
            "moc.",
            "rezystancję.",
            "częstotliwość.",
            "indukcyjność."
        ],
        poprawna: "A"
    },
    {
        id: 159,
        pytanie: "Wskaż poprawny zapis liczby -1210 metodą znak-moduł do postaci ośmiobitowej liczby dwójkowej.",
        odpowiedzi: [
            "10001100zm",
            "00001100zm",
            "+1.11000zm",
            "–1.11000zm"
        ],
        poprawna: "A"
    },
    {
        id: 160,
        pytanie: "Elementem elektronicznym zdolnym do gromadzenia ładunku elektrycznego jest",
        odpowiedzi: [
            "dioda.",
            "rezystor.",
            "tranzystor.",
            "kondensator."
        ],
        poprawna: "D"
    },
    {
        id: 161,
        pytanie: "Elementem odpowiedzialnym za wymianę danych między procesorem a magistralą PCI-E jest",
        odpowiedzi: [
            "chipset.",
            "pamięć RAM.",
            "cache procesora.",
            "układ Super I/O."
        ],
        poprawna: "A"
    },
    {
        id: 162,
        pytanie: "Przedstawiony symbol, stosowany w dokumentacji technicznej, oznacza",
        odpowiedzi: [
            "wymóg selektywnej zbiórki sprzętu elektronicznego.",
            "konieczność utylizacji wszystkich elementów elektrycznych.",
            "brak możliwości składowania odpadów aluminiowych oraz innych tworzyw metalicznych.",
            "zielony punkt upoważniający do wniesienia opłaty pieniężnej na rzecz organizacji odzysku\nopakowań."
        ],
        poprawna: "A",
        obraz: "162.jpg"
    },
    {
        id: 163,
        pytanie: "Moc zasilacza wynosi 450 W, czyli",
        odpowiedzi: [
            "0,045 hW",
            "0,45 kW",
            "4,5 MW",
            "45 GW"
        ],
        poprawna: "B"
    },
    {
        id: 164,
        pytanie: "Aby złożyć komputer z podzespołów, wykorzystując obudowę SFF, należy wybrać płytę główną\nw standardzie",
        odpowiedzi: [
            "BTX",
            "WTX",
            "E-ATX",
            "mini ITX"
        ],
        poprawna: "D"
    },
    {
        id: 165,
        pytanie: "Aby zwiększyć wydajność procesora rodziny Intel poprzez jego „podkręcenie” (ang. overclocking) można\nzastosować procesor oznaczony",
        odpowiedzi: [
            "literą B",
            "literą K",
            "literą U",
            "literą Y"
        ],
        poprawna: "B"
    },
    {
        id: 166,
        pytanie: "Do usuwania plików lub katalogów w systemie Linux służy polecenie",
        odpowiedzi: [
            "cat",
            "tar",
            "rm",
            "ls"
        ],
        poprawna: "C"
    },
    {
        id: 167,
        pytanie: "Aby włączyć lub wyłączyć usługi w zainstalowanym systemie operacyjnym Windows, można posłużyć się\nprzystawką",
        odpowiedzi: [
            "dcpol.msc",
            "dfsgui.msc",
            "lusrmgr.msc",
            "services.msc"
        ],
        poprawna: "D"
    },
    {
        id: 168,
        pytanie: "Na którym rysunku przedstawiono topologię sieci typu magistrala?",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "B",
        obraz: "168.jpg"
    },
    {
        id: 169,
        pytanie: "Technika przekazywania żetonu (ang. token) jest stosowana w topologii",
        odpowiedzi: [
            "kraty.",
            "gwiazdy.",
            "magistrali.",
            "pierścienia."
        ],
        poprawna: "D"
    },
    {
        id: 170,
        pytanie: "Która pula adresów umożliwia komunikację typu multicast w sieci wykorzystującej adresację IPv6?",
        odpowiedzi: [
            "::/96",
            "ff00::/8",
            "3ffe::/16",
            "2002::/24"
        ],
        poprawna: "B"
    },
    {
        id: 171,
        pytanie: "Dana jest sieć o adresie 192.168.100.0/24. Ile podsieci można z niej wydzielić, stosując maskę\n255.255.255.224?",
        odpowiedzi: [
            "4 podsieci.",
            "6 podsieci.",
            "8 podsieci.",
            "12 podsieci."
        ],
        poprawna: "C"
    },
    {
        id: 172,
        pytanie: "Która technologia umożliwia dostęp do Internetu oraz odbiór cyfrowych kanałów telewizyjnych?",
        odpowiedzi: [
            "QoS",
            "VPN",
            "CLIP",
            "ADSL2+"
        ],
        poprawna: "D"
    },
    {
        id: 173,
        pytanie: "Wewnętrzny protokół trasowania, oparty na analizie stanu łącza, to",
        odpowiedzi: [
            "RIP",
            "EGP",
            "BGP",
            "OSPF"
        ],
        poprawna: "D"
    },
    {
        id: 174,
        pytanie: "Aby w sieci komputerowej była możliwa praca w wydzielonych logicznie mniejszych podsieciach, należy\nskonfigurować w przełączniku",
        odpowiedzi: [
            "WLAN",
            "VLAN",
            "WAN",
            "VPN"
        ],
        poprawna: "B"
    },
    {
        id: 175,
        pytanie: "Który materiał eksploatacyjny nie jest wykorzystywany w ploterach?",
        odpowiedzi: [
            "Tusz.",
            "Pisak.",
            "Filament.",
            "Atrament."
        ],
        poprawna: "C"
    },
    {
        id: 176,
        pytanie: "Aby w systemie Windows wyczyścić bufor nazw domenowych, należy zastosować polecenie",
        odpowiedzi: [
            "ipconfig /renew",
            "ipconfig /release",
            "ipconfig /flushdns",
            "ipconfig /setclassid"
        ],
        poprawna: "C"
    },
    {
        id: 177,
        pytanie: "Poleceniem służącym do wyświetlania i modyfikacji tabel translacji adresów IP na adresy fizyczne jest",
        odpowiedzi: [
            "EXPAND",
            "PATH",
            "MMC",
            "ARP"
        ],
        poprawna: "D"
    },
    {
        id: 178,
        pytanie: "Który program nie umożliwia testowania sieci komputerowej w celu identyfikacji usterek?",
        odpowiedzi: [
            "traceroute",
            "nslookup",
            "getfacl",
            "ping"
        ],
        poprawna: "C"
    },
    {
        id: 179,
        pytanie: "Wskaż efekt działania przedstawionego polecenia.",
        odpowiedzi: [
            "Otwarcie portu 53 dla protokołu TCP.",
            "Usunięcie z zapory sieciowej reguły o nazwie Open.",
            "Import ustawienia zapory sieciowej z katalogu in action.",
            "Blokowanie działania usługi DNS opartej na w protokole TCP."
        ],
        poprawna: "D",
        obraz: "179.jpg"
    },
    {
        id: 180,
        pytanie: "Które z poleceń systemu Linux nie umożliwia przeprowadzenia diagnostyki sprzętu komputerowego?",
        odpowiedzi: [
            "ls",
            "top",
            "fsck",
            "lspci"
        ],
        poprawna: "A"
    },
    {
        id: 181,
        pytanie: "W systemie Windows parametry karty graficznej można sprawdzić za pomocą polecenia",
        odpowiedzi: [
            "color",
            "dxdiag",
            "graphics",
            "cliconfg"
        ],
        poprawna: "B"
    },
    {
        id: 182,
        pytanie: "Które narzędzie w systemie Linux wyświetla zapisane w BIOS informacje o sprzęcie?",
        odpowiedzi: [
            "cron",
            "watch",
            "debug",
            "dmidecode"
        ],
        poprawna: "D"
    },
    {
        id: 183,
        pytanie: "Istniejące konto użytkownika jest modyfikowane poleceniem net user. Aby wymusić zmianę hasła po\nponownym zalogowaniu użytkownika, należy dodać do polecenia parametr",
        odpowiedzi: [
            "passwordreq",
            "passwordchg",
            "expirespassword",
            "logonpasswordchg"
        ],
        poprawna: "D"
    },
    {
        id: 184,
        pytanie: "Przedstawione polecenie zostało wydane przez Administratora systemu operacyjnego podczas ręcznej\nkonfiguracji interfejsu sieciowego. Efektem działania tego polecenia jest",
        odpowiedzi: [
            "włączenie dynamicznego przypisywania adresów IP.",
            "ustawienie adresu 151.10.0.1 jako bramy domyślnej.",
            "ustawienie 24 bitowej maski.",
            "wyłączenie interfejsu."
        ],
        poprawna: "B",
        obraz: "184.jpg"
    },
    {
        id: 185,
        pytanie: "Aby ustawić routing statyczny do sieci 192.168.10.0, należy wydać polecenie",
        odpowiedzi: [
            "route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5",
            "route 192.168.10.1 MASK 255.255.255.0 192.168.10.0 5 ADD",
            "static route 92.168.10.1 MASK 255.255.255.0 192.168.10.0 5",
            "static 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5 route"
        ],
        poprawna: "A"
    },
    {
        id: 186,
        pytanie: "Aktualizację systemu Windows umożliwia polecenie",
        odpowiedzi: [
            "wuauclt",
            "winmine",
            "verifier",
            "vssadmin"
        ],
        poprawna: "A"
    },
    {
        id: 187,
        pytanie: "W systemie Linux polecenie tty umożliwia",
        odpowiedzi: [
            "wyświetlenie nazwy terminala.",
            "wysłanie sygnału zakończenia procesu.",
            "zmianę bieżącego katalogu na katalog domowy użytkownika",
            "uruchomienie programu listującego zawartość pamięci operacyjnej."
        ],
        poprawna: "A"
    },
    {
        id: 188,
        pytanie: "Aby w systemie Linux zmapować katalog udostępniony w sieci komputerowej, należy posłużyć się\npoleceniem",
        odpowiedzi: [
            "join",
            "view",
            "mount",
            "connect"
        ],
        poprawna: "C"
    },
    {
        id: 189,
        pytanie: "W systemie Linux, aby zmienić nowo tworzonym użytkownikom domyślny katalog domowy na katalog\n/ users / home / new, należy użyć polecenia",
        odpowiedzi: [
            "useradd -D -b / users / home / new",
            "useradd / users / home / new -D -f",
            "/ users / home / new -n -D useradd",
            "/ users / home / new useradd -s -D"
        ],
        poprawna: "A"
    },
    {
        id: 190,
        pytanie: "Protokołem funkcjonującym w warstwie aplikacji modelu TCP/IP jest",
        odpowiedzi: [
            "FTP",
            "ARP",
            "UDP",
            "SPX"
        ],
        poprawna: "A"
    },
    {
        id: 191,
        pytanie: "Działający w systemie Linux program iftop służy do",
        odpowiedzi: [
            "monitorowania połączeń sieciowych.",
            "konfigurowania ustawień interfejsu graficznego.",
            "wyświetlania chwilowej prędkości zapisu do pamięci operacyjnej.",
            "wyłączania procesu zużywającego najwięcej mocy obliczeniowej procesora."
        ],
        poprawna: "A"
    },
    {
        id: 192,
        pytanie: "Wskaż rysunek przedstawiający symbol bramki logicznej NOT.",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "C",
        obraz: "192.jpg"
    },
    {
        id: 193,
        pytanie: "Obraz przedstawia oznaczenie sygnalizacji świetlnej w dokumentacji technicznej laptopa. Wskaż numer \noznaczający kontrolkę zapalającą się podczas ładowania baterii.",
        odpowiedzi: [
            "2",
            "3",
            "4",
            "5"
        ],
        poprawna: "C",
        obraz: "193.jpg"
    },
    {
        id: 194,
        pytanie: "Wskaż poprawną kolejność czynności prowadzących do zamontowania procesora w gnieździe LGA na nowej \npłycie głównej, odłączonej od źródła zasilania.",
        odpowiedzi: [
            "5, 2, 3, 4, 1, 6, 7",
            "5, 6, 1, 7, 2, 3, 4",
            "5, 7, 6, 1, 4, 3, 2",
            "5, 1, 7, 3, 6, 2, 4"
        ],
        poprawna: "D",
        obraz: "194.jpg"
    },
    {
        id: 195,
        pytanie: "W trybie graficznym systemów Ubuntu lub SuSE Linux, do zainstalowania aktualizacji oprogramowania \nsystemu można użyć programów",
        odpowiedzi: [
            "Shutter lub J-Pilot",
            "Pocket lub Dolphin",
            "Synaptic lub YaST",
            "Chromium lub XyGrib"
        ],
        poprawna: "C"
    },
    {
        id: 196,
        pytanie: "Do wykonania nienadzorowanej instalacji w systemie Windows należy przygotować plik odpowiedzi o nazwie",
        odpowiedzi: [
            "modprobe.conf",
            "unattend.txt",
            "pagefile.sys",
            "boot.ini"
        ],
        poprawna: "B"
    },
    {
        id: 197,
        pytanie: "Po zainstalowaniu systemu Linux użytkownik chce przeprowadzić konfigurację karty sieciowej poprzez \nwpisanie ustawień konfiguracyjnych sieci. Jest to możliwe przez edycję pliku",
        odpowiedzi: [
            "/ etc / profile",
            "/ etc / shadow",
            "/ etc /network / interfaces",
            "/ etc / resolv.configuration"
        ],
        poprawna: "C"
    },
    {
        id: 198,
        pytanie: "Licencja programu komputerowego rozpowszechnianego za darmo z ograniczoną przez producenta \nfunkcjonalnością w stosunku do pełnej, płatnej wersji, gdzie po okresie 30 dni pojawiają się reklamy oraz \nprzypomnienia o konieczności zarejestrowania się, nosi nazwę",
        odpowiedzi: [
            "OEM",
            "adware",
            "liteware",
            "GNU-GPL"
        ],
        poprawna: "C"
    },
    {
        id: 199,
        pytanie: "Cechy której topologii fizycznej sieci zostały opisane w ramce?",
        odpowiedzi: [
            "Rozgłaszania.",
            "Magistrali.",
            "Gwiazdy.",
            "Siatki."
        ],
        poprawna: "B",
        obraz: "199.jpg"
    },
    {
        id: 200,
        pytanie: "Widoczny na schemacie symbol okablowania oznacza kabel",
        odpowiedzi: [
            "szeregowy",
            "światłowodowy",
            "ethernetowy prosty.",
            "ethernetowy krosowany."
        ],
        poprawna: "D",
        obraz: "200.jpg"
    },
    {
        id: 201,
        pytanie: "Zastosowanie skrętki kategorii 6 (CAT 6) o długości 20 metrów w sieci LAN wskazuje na jej maksymalną \nprzepustowość równą",
        odpowiedzi: [
            "10 Gb/s",
            "10 Mb/s",
            "100 Gb/s",
            "100 Mb/s"
        ],
        poprawna: "A"
    },
    {
        id: 202,
        pytanie: "Wskaż protokół warstwy aplikacji służący do odbierania poczty elektronicznej, który w pierwszej fazie pobiera \nnagłówki wiadomości, a pobranie ich treści oraz załączników następuje dopiero po otwarciu maila.",
        odpowiedzi: [
            "IMAP",
            "SNMP",
            "MIME",
            "FTAM"
        ],
        poprawna: "A"
    },
    {
        id: 203,
        pytanie: "Do podłączenia (zaszycia) kabla w module Keystone należy wykorzystać",
        odpowiedzi: [
            "praskę ręczną.",
            "bit imbusowy.",
            "wkrętak typu Torx.",
            "narzędzie uderzeniowe."
        ],
        poprawna: "D"
    },
    {
        id: 204,
        pytanie: "Adresem rozgłoszeniowym w podsieci o adresie IPv4 192.168.160.0/21 jest",
        odpowiedzi: [
            "192.168.7.255",
            "192.168.160.254",
            "192.168.167.255",
            "192.168.255.254"
        ],
        poprawna: "C"
    },
    {
        id: 205,
        pytanie: "W adresacji IPv6 zastosowanie podwójnego dwukropka jest wykorzystywane do",
        odpowiedzi: [
            "jednorazowego zastąpienia jednego bloku jedynek.",
            "wielokrotnego zastąpienia dowolnych bloków jedynek.",
            "wielokrotnego zastąpienia dowolnych bloków zer odseparowanych blokiem jedynek.",
            "jednorazowego zastąpienia jednego lub kolejno ułożonych po sobie bloków złożonych wyłącznie \nz zer."
        ],
        poprawna: "D"
    },
    {
        id: 206,
        pytanie: "Co należy wpisać w miejscu kropek, aby w systemie Linux zwiększyć domyślny odstęp czasowy między \nkolejnymi transmisjami pakietów przy użyciu polecenia ping?",
        odpowiedzi: [
            "-i 3",
            "-c 9",
            "-a 81",
            "-s 75"
        ],
        poprawna: "A",
        obraz: "206.jpg"
    },
    {
        id: 207,
        pytanie: "Drukarką przeznaczoną do druku etykiet i kodów kreskowych, która drukuje poprzez roztapianie pokrycia\nspecjalnej taśmy, w wyniku czego barwnik z niej zostaje przyklejony do materiału, na którym następuje \ndrukowanie jest drukarka",
        odpowiedzi: [
            "igłowa",
            "laserowa",
            "atramentowa",
            "termotransferowa"
        ],
        poprawna: "D"
    },
    {
        id: 208,
        pytanie: "Aby podłączyć do komputera drukarkę igłową o przedstawionych parametrach, należy kabel dołączony do \ndrukarki zamocować w porcie",
        odpowiedzi: [
            "USB",
            "Ethernet",
            "FireWire",
            "Centronics"
        ],
        poprawna: "D",
        obraz: "208.jpg"
    },
    {
        id: 209,
        pytanie: "W systemie Windows Professional do konfiguracji czasu dostępności drukarki należy wykorzystać zakładkę",
        odpowiedzi: [
            "Zaawansowane we Właściwościach drukarki.",
            "Zabezpieczenia we Właściwościach drukarki.",
            "Konfiguracja w Preferencjach drukowania.",
            "Ustawienia w Preferencjach drukowania."
        ],
        poprawna: "A"
    },
    {
        id: 210,
        pytanie: "Podstawową czynnością eksploatacyjną drukarki igłowej jest wymiana pojemnika",
        odpowiedzi: [
            "z atramentem",
            "z tonerem",
            "z fluidem",
            "z taśmą"
        ],
        poprawna: "D"
    },
    {
        id: 211,
        pytanie: "W systemie Linux do monitorowania pracy sieci, urządzeń sieciowych oraz serwerów można wykorzystać \nprogram",
        odpowiedzi: [
            "Nagios",
            "Brasero",
            "Dolphin",
            "Shotwell"
        ],
        poprawna: "A"
    },
    {
        id: 212,
        pytanie: "Która z czynności jest możliwa do wykonania podczas konfiguracji przełącznika CISCO w interfejsie CLI, bez przechodzenia w tryb uprzywilejowany, na poziomie dostępu widocznym w ramce?",
        odpowiedzi: [
            "Zmiana nazwy systemowej.",
            "Wyświetlenie tablicy ARP.",
            "Określanie haseł dostępu.",
            "Tworzenie sieci VLAN"
        ],
        poprawna: "B",
        obraz: "212.jpg"
    },
    {
        id: 213,
        pytanie: "Aby ukryć identyfikator sieci bezprzewodowej, należy w ruterze zmienić jego konfigurację w polu oznaczonym \nnumerem",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "B",
        obraz: "213.jpg"
    },
    {
        id: 214,
        pytanie: "Konfiguracja rutingu statycznego na ruterze polega na",
        odpowiedzi: [
            "zdefiniowaniu adresu IP serwera DNS przekazywanego przez serwer DHCP.",
            "przesyłaniu kopii danych z wybranych portów rutera na wskazany port docelowy.",
            "przesyłaniu kopii danych z wybranych portów rutera na wskazany port docelowy.",
            "wskazaniu adresu sieci docelowej wraz z jej maską oraz podaniu adresu lub interfejsu do przesłania \ndanych do zadanej sieci."
        ],
        poprawna: "D"
    },
    {
        id: 215,
        pytanie: "Wskaż zestaw służący do diagnostyki logicznych układów elektronicznych znajdujących się na płycie głównej \nkomputera, który nie reaguje na próby włączenia zasilania.",
        odpowiedzi: [
            "A",
            "B",
            "C",
            "D"
        ],
        poprawna: "A",
        obraz: "215.jpg"
    },
    {
        id: 216,
        pytanie: "Do naprawy zasilacza laptopa polegającej na wymianie kondensatorów należy zastosować",
        odpowiedzi: [
            "chwytak próżniowy.",
            "tester płyt głównych.",
            "lutownicę z cyną i kalafonią.",
            "tester okablowania sieciowego."
        ],
        poprawna: "C"
    },
    {
        id: 217,
        pytanie: "Aby wyodrębnić dane zawarte w archiwum o nazwie dane.tar, użytkownik pracujący w systemie Linux \npowinien użyć polecenia",
        odpowiedzi: [
            "gzip –r dane.tar",
            "tar –cvf dane.tar",
            "tar –xvf dane.tar",
            "gunzip –r dane.tar"
        ],
        poprawna: "C"
    },
    {
        id: 218,
        pytanie: "Na wydrukach drukarki laserowej można zaobserwować podłużne pasma oraz powtarzające się artefakty. \nMożliwą przyczyną złej jakości wydruku jest usterka",
        odpowiedzi: [
            "taśmy barwiącej.",
            "układu zliczającego.",
            "głowicy drukującej.",
            "bębna światłoczułego."
        ],
        poprawna: "D"
    },
    {
        id: 219,
        pytanie: "Przedstawiony wynik działania polecenia systemu Linux służy do diagnostyki",
        odpowiedzi: [
            "karty graficznej.",
            "dysku twardego",
            "karty sieciowe",
            "pamięci RAM."
        ],
        poprawna: "B",
        obraz: "219.jpg"
    },
    {
        id: 220,
        pytanie: "System operacyjny został zaatakowany przez oprogramowanie szpiegujące. Po usunięciu usterek, aby \nuniknąć kolejnego ataku, zaleca się",
        odpowiedzi: [
            "wykonanie defragmentacji dysku",
            "ustawienie czyszczenia pamięci podręcznej.",
            "zainstalowanie oprogramowania antyspyware",
            "utworzenie dwóch partycji na dysku twardym"
        ],
        poprawna: "C"
    },
    {
        id: 221,
        pytanie: "Wskaż należność brutto za wykonanie wymienionych w tabeli czynności serwisowych, jeśli koszt jednej \nroboczogodziny wynosi 120,00 zł netto, a stawka podatku VAT wynosi 23%.",
        odpowiedzi: [
            "231,00 zł",
            "300,00 zł",
            "369,00 zł",
            "480,00 zł"
        ],
        poprawna: "C",
        obraz: "221.jpg"
    },
    {
        id: 222,
        pytanie: "Aby po uruchomieniu systemu Windows automatycznie włączał się program Kalkulator, należy wykonać \nkonfigurację",
        odpowiedzi: [
            "pliku wymiany.",
            "funkcji Snap i Peak.",
            "pulpitu systemowego.",
            "harmonogramu zadań."
        ],
        poprawna: "D"
    },
    {
        id: 223,
        pytanie: "Do sprawdzenia przedstawionej konfiguracji interfejsów sieciowych w systemie Linux użyto polecenia",
        odpowiedzi: [
            "ping",
            "ip route",
            "ifconfig",
            "ip addr down"
        ],
        poprawna: "C",
        obraz: "223.jpg"
    },
    {
        id: 224,
        pytanie: "Wskaż polecenie systemu Linux służące do sprawdzenia, w którym katalogu znajduje się użytkownik.",
        odpowiedzi: [
            "cls",
            "pwd",
            "path",
            "mkdir"
        ],
        poprawna: "B"
    },
    {
        id: 225,
        pytanie: "W systemach z rodziny Windows system EFS służy do zabezpieczenia danych poprzez ich",
        odpowiedzi: [
            "archiwizowanie.",
            "przenoszenie.",
            "szyfrowanie.",
            "kopiowanie."
        ],
        poprawna: "C"
    },
    {
        id: 226,
        pytanie: "Usługa systemu Windows Server, służąca do zdalnej instalacji systemów operacyjnych na komputerach \nzarządzanych przez serwer, to",
        odpowiedzi: [
            "FTP",
            "DFS",
            "GPO",
            "WDS"
        ],
        poprawna: "D"
    },
    {
        id: 227,
        pytanie: "Którą rolę serwera należy dodać w systemach z rodziny Windows Server, aby możliwe było utworzenie nowej \nwitryny FTP?",
        odpowiedzi: [
            "IIS",
            "SSH",
            "RRAS",
            "DHCP"
        ],
        poprawna: "A"
    },
    {
        id: 228,
        pytanie: "W systemie Linux do zablokowania hasła użytkownika egzamin należy użyć polecenia",
        odpowiedzi: [
            "passwd –p egzamin",
            "userdel –r egzamin",
            "usermod –L egzamin",
            "useradd –d egzamin"
        ],
        poprawna: "C"
    },
    {
        id: 229,
        pytanie: "Wskaż polecenie systemu Windows Server służące do usunięcia jednostki organizacyjnej z katalogu.",
        odpowiedzi: [
            "dsrm",
            "dsadd",
            "adprep",
            "redircmp"
        ],
        poprawna: "A"
    },
    {
        id: 230,
        pytanie: "W systemie Linux do zarządzania tablicami partycji można wykorzystać polecenie",
        odpowiedzi: [
            "free",
            "lspci",
            "fdisk",
            "iostat"
        ],
        poprawna: "C"
    },
    {
        id: 231,
        pytanie: "Aby w systemie Windows Server zarejestrować udane i nieudane próby logowania użytkowników oraz \noperacje na zasobach dyskowych, należy skonfigurować dziennik",
        odpowiedzi: [
            "systemu.",
            "ustawień.",
            "zabezpieczeń.",
            "aplikacji i usług."
        ],
        poprawna: "C"
    },
    {
        id: 232,
        pytanie: "Materiałem eksploatacyjnym dla kolorowej drukarki laserowej jest",
        odpowiedzi: [
            "pamięć wydruku",
            "podajnik papieru",
            "kartridż z tonerem",
            "przetwornik CMOS"
        ],
        poprawna: "C"
    },
    {
        id: 233,
        pytanie: "W systemie Windows do zarządzania programami i usługami uruchamianymi wraz ze startem systemu operacyjnego można wykorzystać program",
        odpowiedzi: [
            "config.sys",
            "autorun.inf",
            "autoexec.bat",
            "msconfig.exe"
        ],
        poprawna: "D"
    },
    {
        id: 234,
        pytanie: "Który z adresów IP jest adresem prywatnym?",
        odpowiedzi: [
            "192.168.0.1",
            "190.5.7.126",
            "131.107.5.65",
            "38.176.55.44"
        ],
        poprawna: "A"
    },
    {
        id: 235,
        pytanie: "Wskaż poprawną postać maski podsieci.",
        odpowiedzi: [
            "255.255.255.64",
            "255.255.255.96",
            "255.255.255.192",
            "255.255.255.228"
        ],
        poprawna: "C"
    },
    {
        id: 236,
        pytanie: "Który port jest domyślny dla protokołu HTTPS?",
        odpowiedzi: [
            "80",
            "143",
            "443",
            "8080"
        ],
        poprawna: "C"
    },
    {
        id: 237,
        pytanie: "Który protokół komunikacyjny służy do transferu plików w architekturze klient-serwer oraz może działać w dwóch trybach: aktywnym i pasywnym?",
        odpowiedzi: [
            "IP",
            "FTP",
            "DNS",
            "EI-SI"
        ],
        poprawna: "B"
    },
    {
        id: 238,
        pytanie: "Wskaż ostatni możliwy do wykorzystania adres IP przeznaczony do adresacji hosta w podsieci 196.10.20.0/26.",
        odpowiedzi: [
            "196.10.20.0",
            "196.10.20.1",
            "196.10.20.62",
            "196.10.20.63"
        ],
        poprawna: "C"
    },
    {
        id: 239,
        pytanie: "Zastosowanie którego urządzenia w sieci komputerowej nie zmieni liczby domen kolizyjnych?",
        odpowiedzi: [
            "Mostu (ang. Bridge)",
            "Rutera (ang. Router)",
            "Przełącznika (ang. Switch)",
            "Koncentratora (ang. Hub)"
        ],
        poprawna: "D"
    },
    {
        id: 240,
        pytanie: "Interfejsem umożliwiającym przesyłanie danych pomiędzy płytą główną, a urządzeniem zewnętrznym, bez równoczesnego zasilenia urządzenia poprzez ten interfejs, jest",
        odpowiedzi: [
            "PCI",
            "USB",
            "PCIe",
            "SATA"
        ],
        poprawna: "D"
    },
    {
        id: 241,
        pytanie: "Zachowaniem asertywnym jest między innymi",
        odpowiedzi: [
            "zaniżanie własnej samooceny.",
            "duża podatność na naciski i manipulacje.",
            "brak umiejętności kontrolowania własnych emocji.",
            "umiejętność odmawiania innym w kulturalny sposób"
        ],
        poprawna: "D"
    },
    {
        id: 242,
        pytanie: "Na podstawie tabeli wskaż prawidłową kolejność etapów wykonania szkolnej sieci komputerowej.",
        odpowiedzi: [
            "1, 2, 4, 5, 3, 6",
            "1, 3, 2, 4, 5, 6",
            "1, 5, 4, 2, 3, 6",
            "1, 5, 2, 3, 4, 6"
        ],
        poprawna: "C",
        obraz: "242.jpg"
    },
    {
        id: 243,
        pytanie: "W przypadku, gdy ruter jest urządzeniem brzegowym dwóch domen kolizyjnych, jego rolą jest",
        odpowiedzi: [
            "tłumaczenie nazw mnemonicznych na adresy MAC.",
            "całkowite wyeliminowanie kolizji w każdej z domen.",
            "przekazywanie pakietów TCP/IP z sieci źródłowej do docelowej.",
            "przetwarzanie przesyłanych danych między domenami do ich postaci kanonicznej."
        ],
        poprawna: "C"
    },
    {
        id: 244,
        pytanie: "Którą czynność należy wykonać, aby zamienić profil mobilny na profil obowiązkowy użytkownika?",
        odpowiedzi: [
            "Usunąć plik NTUSER.DAT",
            "Usunąć plik NTUSER.MAN",
            "Zmienić rozszerzenie pliku NTUSER z MAN na DAT",
            "Zmienić rozszerzenie pliku NTUSER z DAT na MAN"
        ],
        poprawna: "D"
    },
    {
        id: 245,
        pytanie: "Kontrolne badanie profilaktyczne, przeprowadzane na podstawie skierowania od pracodawcy, dotyczy",
        odpowiedzi: [
            "osoby przyjmowanej do pracy",
            "każdego pracownika, co 3 lata, niezależnie od rodzaju wykonywanej pracy",
            "pracownika, którego niezdolność do pracy z powodu choroby trwała ponad 30 dni",
            "pracownika młodocianego kierowanego na praktyki zawodowe i zajęcia praktyczne"
        ],
        poprawna: "C"
    },
    {
        id: 246,
        pytanie: "Zgodnie z tabelą z dokumentacji technicznej gry komputerowej wymagana wielkość pliku wymiany wynosi",
        odpowiedzi: [
            "1 GB",
            "2 GB",
            "8 GB",
            "256 MB"
        ],
        poprawna: "A",
        obraz: "246.jpg"
    },
    {
        id: 247,
        pytanie: "Licencja wolnego i otwartego oprogramowania to",
        odpowiedzi: [
            "Trial",
            "OEM",
            "Adware",
            "GNU GPL"
        ],
        poprawna: "D"
    },
    {
        id: 248,
        pytanie: "Złącze uniwersalne: 2,5 mm / 125 mm\nDługość fali: 850 kalibrowane, 1300, 1310, 1490, 1550 nm\nWyświetlacz 4-cyfrowy umożliwia precyzyjne pomiary w dBm, dB, i UW\nIntuicyjna obsługa 2-przyciskowa\nZakres pomiarowy: od +5 do -60 dBm\nDokładność: +/- 0,15 dB\nRozdzielczość: 0,01 dBm\nLiniowość: +/- 0,20 dB\nUrządzenie przedstawione na rysunku wraz ze specyfikacją techniczną można wykorzystać do pomiarów okablowania",
        odpowiedzi: [
            "telefonicznego.",
            "skrętki kat. 5e/6.",
            "koncentrycznego.",
            "światłowodowego."
        ],
        poprawna: "D",
        obraz: "248.jpg"
    },
    {
        id: 249,
        pytanie: "Rysunek przedstawia panel konfiguracyjny bezprzewodowego urządzenia dostępowego, który umożliwia",
        odpowiedzi: [
            "nadanie nazwy hosta.",
            "przypisanie maski podsieci.",
            "konfigurację serwera DHCP.",
            "przypisanie adresów MAC kart sieciowych."
        ],
        poprawna: "C",
        obraz: "249.jpg"
    },
    {
        id: 251,
        pytanie: "W systemie operacyjnym Ubuntu konto użytkownika student można usunąć za pomocą polecenia",
        odpowiedzi: [
            "userdel student",
            "del user student",
            "net user student /del",
            "user net student /del"
        ],
        poprawna: "A"
    },
    {
        id: 252,
        pytanie: "Serwer Windows z zainstalowaną i skonfigurowaną usługą Active Directory, kontrolujący uwierzytelnianie i autoryzację użytkowników domenowych nosi nazwę",
        odpowiedzi: [
            "serwera DHCP.",
            "serwera WWW.",
            "kontrolera portów.",
            "kontrolera domeny."
        ],
        poprawna: "D"
    },
    {
        id: 253,
        pytanie: "Wykonanie polecenia net localgroup w systemie Windows spowoduje",
        odpowiedzi: [
            "defragmentację plików.",
            "skompresowanie wszystkich plików.",
            "utworzenie dowolnej grupy użytkowników.",
            "wyświetlenie lokalnych grup użytkowników."
        ],
        poprawna: "D"
    },
    {
        id: 254,
        pytanie: "Które zmiany w funkcjonowaniu organizmu w płaszczyźnie fizjologicznej może powodować stres?",
        odpowiedzi: [
            "Rozdrażnienie.",
            "Odczuwanie lęku.",
            "Przyśpieszony puls.",
            "Poczucie osamotnienia."
        ],
        poprawna: "C"
    },
    {
        id: 255,
        pytanie: "Ile par przewodów skrętki miedzianej kategorii 5e wykorzystuje się do transmisji danych w standardzie sieci Ethernet 100Base-TX?",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "B"
    },
    {
        id: 256,
        pytanie: "Przedstawiony schemat obrazuje zasadę działania skanera",
        odpowiedzi: [
            "2D",
            "3D",
            "ręcznego",
            "płaskiego"
        ],
        poprawna: "B",
        obraz: "256.jpg"
    },
    {
        id: 257,
        pytanie: "Do serwisu komputerowego dostarczono laptop z matrycą bardzo słabo wyświetlającą obraz. Ponadto obraz jest bardzo ciemny i widoczny tylko z bliska. Przyczyną usterki jest",
        odpowiedzi: [
            "pęknięta matryca.",
            "uszkodzony inwerter.",
            "uszkodzone gniazdo HDMI.",
            "zerwane łącze między płytą główną a matrycą."
        ],
        poprawna: "B"
    },
    {
        id: 258,
        pytanie: "Aby uzyskać maksymalną wydajność obliczeniową komputera, którego płyta główna jest przedstawiona na ilustracji, zaleca się",
        odpowiedzi: [
            "zastosowanie dysku SAS.",
            "zastosowanie kontrolera RAID.",
            "zainstalowanie dwóch procesorów.",
            "zainstalowanie pamięci RAM we wszystkich gniazdach."
        ],
        poprawna: "C",
        obraz: "258.jpg"
    },
    {
        id: 259,
        pytanie: "Który port na przedstawionej płycie głównej umożliwia podłączenie zewnętrznego dysku poprzez interfejs e-SATA?",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "B",
        obraz: "259.jpg"
    },
    {
        id: 260,
        pytanie: "Na podstawie instrukcji przełącznika wskaż, która z opcji menu przywraca ustawienia fabryczne.",
        odpowiedzi: [
            "Reset System",
            "Reboot Device",
            "Firmware Upgrade",
            "Save Configuration"
        ],
        poprawna: "A",
        obraz: "260.jpg"
    },
    {
        id: 261,
        pytanie: "Do podłączenia dysku wyposażonego w interfejs SAS należy zastosować",
        odpowiedzi: [
            "złącze 1",
            "złącze 2",
            "złącze 3",
            "złącze 4"
        ],
        poprawna: "D",
        obraz: "261.jpg"
    },
    {
        id: 262,
        pytanie: "Toner jest stosowany w drukarkach",
        odpowiedzi: [
            "igłowych",
            "laserowych",
            "sublimacyjnych",
            "atramentowych"
        ],
        poprawna: "B"
    },
    {
        id: 263,
        pytanie: "Odpowiednikiem maski 255.255.252.0 jest prefiks",
        odpowiedzi: [
            "/22",
            "/23",
            "/24",
            "/25"
        ],
        poprawna: "A"
    },
    {
        id: 264,
        pytanie: "Parametrem opóźnienia określającym czas potrzebny do odczytania danych przez kontroler pamięci od \nmomentu wysłania żądania jest",
        odpowiedzi: [
            "CAS Latency (CL)",
            "RAS Precharge (RP)",
            "Command Rate (CR)",
            "Serial presence detect (SPD)"
        ],
        poprawna: "A"
    },
    {
        id: 265,
        pytanie: "Jedną z przyczyn pokazanego na ilustracji problemu z wydrukiem z drukarki laserowej może być",
        odpowiedzi: [
            "brak tonera w kasecie",
            "uszkodzony podajnik papieru",
            "uszkodzony bęben światłoczuły",
            "zaschnięty tusz na głowicy drukującej"
        ],
        poprawna: "C",
        obraz: "265.jpg"
    },
    {
        id: 266,
        pytanie: "Przedstawiony opis dotyczy",
        odpowiedzi: [
            "podłączenia zasilacza awaryjnego",
            "montażu procesora na płycie głównej",
            "podłączania zasilania do płyty głównej",
            "procedury wymiany radiatora z wentylatorem"
        ],
        poprawna: "C",
        obraz: "266.jpg"
    },
    {
        id: 267,
        pytanie: "Na którym rysunku przedstawiono topologię sieci typu rozszerzona gwiazda?",
        odpowiedzi: [
            "Na rysunku 1",
            "Na rysunku 2",
            "Na rysunku 3",
            "Na rysunku 4"
        ],
        poprawna: "D",
        obraz: "267.jpg"
    },
    {
        id: 268,
        pytanie: "W systemie Windows profil użytkownika tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera, charakteryzujący się tym, że każda jego modyfikacja dotyczy jedynie komputera, na którym została ona wprowadzona, to profil",
        odpowiedzi: [
            "lokalny",
            "mobilny",
            "tymczasowy",
            "obowiązkowy"
        ],
        poprawna: "A"
    },
    {
        id: 269,
        pytanie: "Co stanie się w wyniku wykonania przedstawionego skryptu?",
        odpowiedzi: [
            "Zostanie wpisany tekst \"ola.txt\" do pliku ala.txt",
            "Zostanie wpisany tekst \"ala.txt\" do pliku ola.txt",
            "Zawartość pliku ola.txt zostanie skopiowana do pliku ala.txt",
            "Zawartość pliku ala.txt zostanie skopiowana do pliku ola.txt"
        ],
        poprawna: "A",
        obraz: "269.jpg"
    },
    {
        id: 271,
        pytanie: "Aby, za pomocą polecenia ping, było możliwe sprawdzenie poprawności komunikacji z innymi urządzeniami pracującymi w sieci, należy w zaporze Windows skonfigurować reguły dotyczące protokołu",
        odpowiedzi: [
            "UDP",
            "TCP",
            "ICMP",
            "IGMP"
        ],
        poprawna: "C"
    },
    {
        id: 272,
        pytanie: "Które urządzenie jest przedstawione na ilustracji?",
        odpowiedzi: [
            "przełącznik",
            "koncentrator",
            "zasilacz PoE",
            "punkt dostępowy"
        ],
        poprawna: "D",
        obraz: "272.jpg"
    },
    {
        id: 273,
        pytanie: "Centralny punkt infrastruktury sieciowej, z którego rozprowadzane jest okablowanie szkieletowe, to punkt",
        odpowiedzi: [
            "pośredni",
            "abonencki",
            "dostępowy",
            "dystrybucyjny"
        ],
        poprawna: "D"
    },
    {
        id: 274,
        pytanie: "Używanie na platformie do zarządzania projektem informatycznym komunikatów pisemnych w celu porozumiewania się szefa ze współpracownikami spowoduje",
        odpowiedzi: [
            "brak odpowiedzialności za realizowane zadania",
            "trudności w komunikacji z dużą grupą pracowników",
            "lepszy przepływ informacji niż tradycyjna komunikacja ustna",
            "opóźnienie terminu realizacji projektu z powodu niewiedzy pracowników"
        ],
        poprawna: "C"
    },
    {
        id: 275,
        pytanie: "Którego polecenia, z odpowiednimi parametrami należy użyć, aby ustawić w systemach operacyjnych rodziny Windows właściwość pliku na tylko do odczytu?",
        odpowiedzi: [
            "set",
            "attrib",
            "ftype",
            "chmod"
        ],
        poprawna: "B"
    },
    {
        id: 276,
        pytanie: "Zgodnie z Kodeksem pracy do obowiązków pracownika w zakresie bezpieczeństwa i higieny pracy należy",
        odpowiedzi: [
            "odpowiedzialność za stan BHP w zakładzie pracy",
            "dbanie o właściwy stan maszyn, urządzeń, narzędzi i sprzętu",
            "prowadzenie spójnej polityki zapobiegania wypadkom przy pracy",
            "zapewnianie wykonywania zaleceń społecznego inspektora pracy"
        ],
        poprawna: "B"
    },
    {
        id: 277,
        pytanie: "Którym poleceniem w systemie Linux można przypisać adres IP i maskę podsieci dla interfejsu eth0?",
        odpowiedzi: [
            "ipconfig eth0 172.16.31.1 mask 255.255.0.0",
            "ifconfig eth0 172.16.31.1 mask 255.255.0.0",
            "ifconfig eth0 172.16.31.1 netmask 255.255.0.0",
            "ipconfig eth0 172.16.31.1 netmask 255.255.0.0"
        ],
        poprawna: "C"
    },
    {
        id: 278,
        pytanie: "Który z wymienionych mechanizmów zapewni najwyższy poziom bezpieczeństwa sieci bezprzewodowych standardu 802.11n?",
        odpowiedzi: [
            "WPS (Wi-Fi Protected Setup)",
            "WPA (Wi-Fi Protected Access)",
            "WEP (Wired Equivalent Privacy)",
            "WPA2 (Wi-Fi Protected Access II)"
        ],
        poprawna: "D"
    },
    {
        id: 279,
        pytanie: "Która topologia fizyczna charakteryzuje się nadmiarowymi połączeniami pomiędzy urządzeniami sieci?",
        odpowiedzi: [
            "siatki",
            "gwiazdy",
            "magistrali",
            "pierścienia"
        ],
        poprawna: "A"
    },
    {
        id: 280,
        pytanie: "Programem umożliwiającym wydzielenie logicznych części dysku twardego w systemie GNU/Linux jest",
        odpowiedzi: [
            "fdisk",
            "format",
            "convert",
            "truncate"
        ],
        poprawna: "A"
    },
    {
        id: 281,
        pytanie: "Ile bitów przeznaczonych jest na adresację hostów w sieci z maską 255.255.255.224?",
        odpowiedzi: [
            "3 bity",
            "4 bity",
            "5 bitów",
            "6 bitów"
        ],
        poprawna: "C"
    },
    {
        id: 282,
        pytanie: "Protokołem aplikacyjnym używanym przez WWW jest",
        odpowiedzi: [
            "SFTP",
            "LAGP",
            "IPSec",
            "HTTPS"
        ],
        poprawna: "D"
    },
    {
        id: 283,
        pytanie: "Który symbol oznacza przełącznik?",
        odpowiedzi: [
            "symbol 1",
            "symbol 2",
            "symbol 3",
            "symbol 4"
        ],
        poprawna: "D",
        obraz: "283.jpg"
    },
    {
        id: 284,
        pytanie: "Wskaż materiał eksploatacyjny typowy dla drukarek żelowych.",
        odpowiedzi: [
            "materiał 1",
            "materiał 2",
            "materiał 3",
            "materiał 4"
        ],
        poprawna: "C",
        obraz: "284.jpg"
    },
    {
        id: 285,
        pytanie: "Poleceniem służącym do śledzenia trasy pakietów przesyłanych z komputera do punktu docelowego w sieci\nkomputerowej jest",
        odpowiedzi: [
            "ping",
            "route",
            "tracert",
            "nslookup"
        ],
        poprawna: "C"
    },
    {
        id: 286,
        pytanie: "Wymiana uszkodzonych kondensatorów karty graficznej możliwa jest przy pomocy",
        odpowiedzi: [
            "żywicy epoksydowej",
            "kleju cyjanoakrylowego",
            "lutownicy z cyną i kalafonią",
            "wkrętaka krzyżowego i opaski zaciskowej"
        ],
        poprawna: "C"
    },
    {
        id: 287,
        pytanie: "Urządzeniem, które zapewnia ochronę przed atakami z sieci i może pełnić inne dodatkowe funkcje, jak np. szyfrowanie przesyłanych danych czy automatyczne powiadamianie administratora systemu o włamaniu, jest",
        odpowiedzi: [
            "regenerator",
            "koncentrator",
            "punkt dostępowy",
            "firewall sprzętowy"
        ],
        poprawna: "D"
    },
    {
        id: 288,
        pytanie: "Które zadanie realizuje protokół ARP (Address Resolution Protocol)?",
        odpowiedzi: [
            "Ustala adres MAC na podstawie adresu IP",
            "Przesyła informacje zwrotne o problemach z siecią",
            "Kontroluje przepływ pakietów wewnątrz systemów autonomicznych",
            "Zarządza grupami multicastowymi w sieciach opartych na protokole IP"
        ],
        poprawna: "A"
    },
    {
        id: 289,
        pytanie: "Jak nazywa się rodzaj licencji, na której program jest w pełni funkcjonalny, ale można go uruchomić jedynie\nokreśloną, niewielką liczbę razy od momentu instalacji?",
        odpowiedzi: [
            "Donationware",
            "Adware",
            "Trial",
            "Box"
        ],
        poprawna: "C"
    },
    {
        id: 290,
        pytanie: "Który parametr polecenia ipconfig w systemie Windows powoduje odnowienie konfiguracji adresów IP?",
        odpowiedzi: [
            "/renew",
            "/release",
            "/flushdns",
            "/displaydns"
        ],
        poprawna: "A"
    },
    {
        id: 291,
        pytanie: "Na przedstawionym schemacie blokowym element płyty głównej odpowiedzialny za wymianę danych między\nmikroprocesorem a pamięcią operacyjną RAM oraz magistralą karty graficznej jest na rysunku oznaczony\nnumerem",
        odpowiedzi: [
            "6",
            "5",
            "4",
            "3"
        ],
        poprawna: "A",
        obraz: "291.jpg"
    },
    {
        id: 292,
        pytanie: "Protokół, który tłumaczy nazwy domenowe na adresy IP, to",
        odpowiedzi: [
            "DNS",
            "ARP",
            "ICMP",
            "DHCP"
        ],
        poprawna: "A"
    },
    {
        id: 293,
        pytanie: "Do którego rodzaju wtyków jest stosowana przedstawiona na rysunku zaciskarka?",
        odpowiedzi: [
            "BNC",
            "8P8C",
            "6P2C",
            "SC/APC"
        ],
        poprawna: "A",
        obraz: "293.jpg"
    },
    {
        id: 294,
        pytanie: "Na rysunkach technicznych instalacji sieci komputerowej wraz z dedykowaną jej instalacją elektryczną\nsymbolem przedstawionym na rysunku oznacza się gniazdo",
        odpowiedzi: [
            "telefoniczne",
            "ethernetowe",
            "elektryczne bez styku ochronnego",
            "elektryczne ze stykiem ochronnym"
        ],
        poprawna: "D",
        obraz: "294.jpg"
    },
    {
        id: 295,
        pytanie: "Wskaż typ złącza przedstawionej karty graficznej.",
        odpowiedzi: [
            "AGP x2",
            "AGP x8",
            "PCI-E x4",
            "PCI-E x16"
        ],
        poprawna: "D",
        obraz: "295.jpg"
    },
    {
        id: 296,
        pytanie: "Która przystawka w systemie Windows umożliwia sprawdzenie stanu sprzętu, aktualizację sterowników oraz\nrozwiązanie konfliktów urządzeń?",
        odpowiedzi: [
            "services.msc",
            "eventvwr.msc",
            "perfmon.msc",
            "devmgmt.msc"
        ],
        poprawna: "D"
    },
    {
        id: 297,
        pytanie: "Które medium transmisyjne zapewnia najmniejsze narażenie na zakłócenia elektromagnetyczne\nprzesyłanego sygnału?",
        odpowiedzi: [
            "Kabel światłowodowy",
            "Czteroparowy kabel FTP",
            "Gruby kabel koncentryczny",
            "Cienki kabel koncentryczny"
        ],
        poprawna: "A"
    },
    {
        id: 298,
        pytanie: "Programem służącym do utworzenia archiwum danych w systemie Linux jest",
        odpowiedzi: [
            "compact",
            "lzma",
            "fsck",
            "tar"
        ],
        poprawna: "D"
    },
    {
        id: 299,
        pytanie: "Analiza wyświetlonych przez program danych, pozwala stwierdzić, że",
        odpowiedzi: [
            "jeden dysk twardy został podzielony na 6 partycji podstawowych",
            "zamontowano trzy dyski twarde oznaczone sda1, sda2 oraz sda3",
            "partycja rozszerzona ma wielkość 24,79 GiB",
            "partycja wymiany zajmuje 2 GiB"
        ],
        poprawna: "D",
        obraz: "299.jpg"
    },
    {
        id: 300,
        pytanie: "Które z przedstawionych źródeł stresu jest zaliczane do czynników fizycznych?",
        odpowiedzi: [
            "Wahania temperatury otoczenia",
            "Nadmiar zadań",
            "Pośpiech",
            "Mobbing"
        ],
        poprawna: "A"
    },
    {
        id: 301,
        pytanie: "Woda jest środkiem gaśniczym, którego należy użyć podczas gaszenia pożaru",
        odpowiedzi: [
            "gazów palnych",
            "mebli biurowych",
            "pracującej drukarki",
            "instalacji elektrycznej"
        ],
        poprawna: "B"
    },
    {
        id: 302,
        pytanie: "Wskaż adres rozgłoszeniowy sieci, do której należy host o adresie 88.89.90.91/8",
        odpowiedzi: [
            "91.255.255.255",
            "88.255.255.255",
            "91.89.255.255",
            "88.89.255.255"
        ],
        poprawna: "B"
    },
    {
        id: 303,
        pytanie: "Które porty rutera muszą być otwarte, aby użytkownicy sieci lokalnej mogli pobierać pliki z serwera FTP\ndziałającego w trybie aktywnym na domyślnych portach?",
        odpowiedzi: [
            "20 i 21",
            "22 i 25",
            "80 i 443",
            "110 i 995"
        ],
        poprawna: "A"
    },
    {
        id: 304,
        pytanie: "Aby uruchomić przedstawione narzędzie systemu Windows 10, należy w interpreterze poleceń użyć",
        odpowiedzi: [
            "control userpasswords2",
            "﻿show userpasswords",
            "net localgroup",
            "net users"
        ],
        poprawna: "A",
        obraz: "304.jpg"
    },
    {
        id: 305,
        pytanie: "Metoda dostępu do medium CSMA/CA jest stosowana w sieci o standardzie",
        odpowiedzi: [
            "IEEE 802.1",
            "IEEE 802.3",
            "IEEE 802.8",
            "IEEE 802.11"
        ],
        poprawna: "D"
    },
    {
        id: 306,
        pytanie: "Zainstalowanie serwera stron internetowych w rodzinie systemów Windows Server umożliwia rola",
        odpowiedzi: [
            "usługi plików",
            "serwera aplikacji",
            "serwera sieci Web",
            "usługi pulpitu zdalnego"
        ],
        poprawna: "C"
    },
    {
        id: 307,
        pytanie: "Protokół komunikacyjny używany w sieciach komputerowych do obsługi odległego terminala w architekturze\nklient-serwer, który nie zapewnia bezpieczeństwa przesyłanych informacji i pracuje wyłącznie w trybie\ntekstowym, to",
        odpowiedzi: [
            "Telnet",
            "Secure Shell",
            "Internet Protocol",
            "Remote Desktop Protocol"
        ],
        poprawna: "A"
    },
    {
        id: 308,
        pytanie: "Wskaż standard interfejsu stosowanego do przewodowego połączenia dwóch urządzeń",
        odpowiedzi: [
            "WiMAX",
            "802.11ac",
            "IEEE 1394",
            "IEEE 802.15.1"
        ],
        poprawna: "C"
    },
    {
        id: 309,
        pytanie: "Podłączając drukarkę wyposażoną w złącze równoległe do komputera, który dysponuje tylko portami USB,\nnależy zastosować adapter",
        odpowiedzi: [
            "USB na LPT",
            "USB na PS/2",
            "USB na COM",
            "USB na RS-232"
        ],
        poprawna: "A"
    },
    {
        id: 310,
        pytanie: "Na serwerze DNS rekordem wskazującym serwer nazw, który jest tworzony automatycznie w momencie\nkonfigurowania strefy wyszukiwania do przodu jest rekord",
        odpowiedzi: [
            "A",
            "NS",
            "MX",
            "PTR"
        ],
        poprawna: "B"
    },
    {
        id: 311,
        pytanie: "Na podstawie dokumentacji technicznej procesora wskaż liczbę jego wątków",
        odpowiedzi: [
            "6",
            "12",
            "16",
            "24"
        ],
        poprawna: "D",
        obraz: "311.jpg"
    },
    {
        id: 312,
        pytanie: "Wadą metody sieciowej analizy oszacowania czasu trwania zadania jest",
        odpowiedzi: [
            "nieskomplikowany wzór obliczenia wartości czasu",
            "możliwość oceny ryzyka czasowego ukończenia zadań i projektu",
            "mała elastyczność w trakcie realizacji projektu ze względu na deterministyczny charakter sieci",
            "możliwość szacowania prawdopodobieństwa ukończenia zadań jak i całego projektu w zadanym\nterminie"
        ],
        poprawna: "C"
    },
    {
        id: 313,
        pytanie: "Równoważnym zapisem 232 bajtów jest zapis",
        odpowiedzi: [
            "1 GiB",
            "2 GiB",
            "4 GiB",
            "8 GiB"
        ],
        poprawna: "C"
    },
    {
        id: 314,
        pytanie: "Na rysunku przedstawiono narzędzie do",
        odpowiedzi: [
            "zaciskania złącz BNC",
            "zaciskania złącz 8P8C",
            "zdejmowania izolacji z kabli",
            "montażu okablowania w gnieździe sieciowym"
        ],
        poprawna: "C",
        obraz: "314.jpg"
    },
    {
        id: 315,
        pytanie: "Miarą podawaną w decybelach, będącą różnicą mocy sygnału przesyłanego w parze zakłócającej i sygnału\nwytworzonego w parze zakłócanej jest",
        odpowiedzi: [
            "rezystancja pętli",
            "przesłuch zbliżny",
            "opóźnienie propagacji",
            "poziom mocy wyjściowej"
        ],
        poprawna: "B"
    },
    {
        id: 316,
        pytanie: "Który zapis w systemie binarnym odpowiada liczbie 111 zapisanej w systemie dziesiętnym?",
        odpowiedzi: [
            "1101111",
            "1110111",
            "1111110",
            "1111111"
        ],
        poprawna: "A"
    },
    {
        id: 317,
        pytanie: "Aby zabezpieczyć nowo zainstalowany system operacyjny przed działaniem szkodliwego oprogramowania,\nprogram antywirusowy należy zainstalować",
        odpowiedzi: [
            "po zainstalowaniu programów narzędziowych z Internetu",
            "zaraz po pobraniu poprawek systemowych z sieci",
            "zaraz po zainstalowaniu systemu operacyjnego",
            "przed zainstalowaniem systemu operacyjnego"
        ],
        poprawna: "C"
    },
    {
        id: 318,
        pytanie: "Wskaż cechę struktury chirurgicznej zespołu.",
        odpowiedzi: [
            "Brak jest przywódcy, a decyzje podejmuje się poprzez powszechną zgodę członków zespołu",
            "Kierownik pilnuje, aby wszystkie części projektu złożyły się na logiczny i harmonijny produkt końcowy",
            "Kierownik musi panować nad całym projektem, jednocześnie nie mając optymalnej kontroli nad\nzasobami, które są pozyskane na pewien okres czasu",
            "Szef wydaje polecenia i prowadzi wszystkie działania, jednak dzięki asystentom nie musi zajmować\nsię działaniami administracyjnymi czy technicznymi"
        ],
        poprawna: "D"
    },
    {
        id: 319,
        pytanie: "Przykładem komunikacji werbalnej jest",
        odpowiedzi: [
            "zadanie pytania",
            "szybkie uniesienie brwi",
            "zdjęcie nakrycia głowy podczas powitania",
            "utrzymywanie kontaktu wzrokowego z rozmówcą"
        ],
        poprawna: "A"
    },
    {
        id: 320,
        pytanie: "W który standard transmisji powinien być wyposażony ruter, aby w modernizowanej, bezprzewodowej sieci\nkomputerowej mogła być uzyskana jak najszybsza transmisja danych?",
        odpowiedzi: [
            "802.11a",
            "802.11b",
            "802.11g",
            "802.11ac"
        ],
        poprawna: "D"
    },
    {
        id: 321,
        pytanie: "Podstawową funkcją serwera FTP jest",
        odpowiedzi: [
            "monitoring sieci",
            "synchronizacja czasu",
            "udostępnianie plików",
            "zarządzanie kontami poczty"
        ],
        poprawna: "C"
    },
    {
        id: 322,
        pytanie: "Na fotografii przedstawiono",
        odpowiedzi: [
            "tusz",
            "toner",
            "kartridż",
            "taśmę barwiącą"
        ],
        poprawna: "D",
        obraz: "322.jpg"
    },
    {
        id: 323,
        pytanie: "Wskaż adres sieci",
        odpowiedzi: [
            "16.1.0.0/8",
            "100.0.0.0/16",
            "18.4.0.0, maska 255.0.0.0",
            "192.168.0.63, maska 255.255.255.0"
        ],
        poprawna: "B"
    },
    {
        id: 324,
        pytanie: "Którego protokołu należy użyć do odbioru poczty elektronicznej ze swojego serwera?",
        odpowiedzi: [
            "FTP",
            "POP3",
            "SMTP",
            "SNMP"
        ],
        poprawna: "B"
    },
    {
        id: 325,
        pytanie: "Na rysunku przedstawiono przekrój kabla",
        odpowiedzi: [
            "S/UTP",
            "U/UTP",
            "optycznego",
            "koncentrycznego"
        ],
        poprawna: "D",
        obraz: "325.jpg"
    },
    {
        id: 326,
        pytanie: "Na fotografii przedstawiono",
        odpowiedzi: [
            "reflektometr",
            "tester sieciowy",
            "zaciskarkę do tulejek",
            "zaciskarkę wtyków 8P8C"
        ],
        poprawna: "D",
        obraz: "326.jpg"
    },
    {
        id: 327,
        pytanie: "Wskaż domyślny port do przekazywania poleceń (command) serwera usługi FTP",
        odpowiedzi: [
            "20",
            "21",
            "67",
            "68"
        ],
        poprawna: "B"
    },
    {
        id: 328,
        pytanie: "Aby dokonać aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu, należy użyć między innymi\npolecenia",
        odpowiedzi: [
            "yum upgrade",
            "kernel update",
            "system update",
            "apt-get upgrade"
        ],
        poprawna: "D"
    },
    {
        id: 329,
        pytanie: "Które oznaczenie kabla typu skrętka określa, że jej cały przewód jest nieekranowany?",
        odpowiedzi: [
            "U",
            "F",
            "S",
            "SF"
        ],
        poprawna: "A"
    },
    {
        id: 330,
        pytanie: "Jaki jest koszt wymiany karty graficznej w komputerze, jeśli karta kosztuje 250 zł, jej wymiana zajmie\npracownikowi serwisu 80 minut, a każda rozpoczęta roboczogodzina kosztuje 50 zł?",
        odpowiedzi: [
            "250 zł",
            "300 zł",
            "350 zł",
            "400 zł"
        ],
        poprawna: "C"
    },
    {
        id: 331,
        pytanie: "Pracownik doznał urazu. Pierwszą czynnością podczas udzielania pomocy jest",
        odpowiedzi: [
            "wezwanie karetki pogotowia",
            "udzielenie pierwszej pomocy poszkodowanemu",
            "ocena zdarzenia i zabezpieczenie miejsca wypadku",
            "zapewnienie poszkodowanemu komfortu psychicznego"
        ],
        poprawna: "C"
    },
    {
        id: 332,
        pytanie: "Który standard należy wybrać, konfigurując punkt dostępowy dla częstotliwości 5 GHz?",
        odpowiedzi: [
            "802.11b/g",
            "802.11ac",
            "802.11g",
            "802.11d"
        ],
        poprawna: "B"
    },
    {
        id: 333,
        pytanie: "Urządzenie, które łączy segmenty sieci komputerowej przekazując ramki między tymi segmentami\nz doborem portu urządzenia, do którego są one przekazywane, to",
        odpowiedzi: [
            "rejestrator",
            "przełącznik",
            "koncentrator",
            "zasilacz awaryjny"
        ],
        poprawna: "B"
    },
    {
        id: 334,
        pytanie: "Którego kodu numerycznego należy użyć w poleceniu zmiany praw do pliku w systemie Linux, aby jego \nwłaściciel miał prawa zapisu i odczytu, grupa miała prawa odczytu i wykonania, a pozostali użytkownicy tylko \nprawo odczytu?",
        odpowiedzi: [
            "765",
            "751",
            "654",
            "123"
        ],
        poprawna: "C"
    },
    {
        id: 335,
        pytanie: "Wynik działania polecenia ls -l użytego w systemie Linux jest przedstawiony na",
        odpowiedzi: [
            "wyniku 1.",
            "wyniku 2.",
            "wyniku 3.",
            "wyniku 4."
        ],
        poprawna: "D",
        obraz: "335.jpg"
    },
    {
        id: 336,
        pytanie: "Wskaż, zgodną z obowiązującymi normami, maksymalną odległość pomiędzy urządzeniami sieciowymi, \npołączonymi bezpośrednio skrętką kategorii 5e?",
        odpowiedzi: [
            "10 m",
            "100 m",
            "500 m",
            "1000 m"
        ],
        poprawna: "B"
    },
    {
        id: 337,
        pytanie: "Oprogramowanie sprzętowe zainstalowane na stałe w urządzeniu, które umożliwia jego obsługę to w języku \nangielskim",
        odpowiedzi: [
            "firmware",
            "stealware",
            "shareware",
            "ransomware"
        ],
        poprawna: "A"
    },
    {
        id: 338,
        pytanie: "Transmisja za pomocą fal radiowych korzystających z pasma ISM jest realizowana w interfejsie",
        odpowiedzi: [
            "Bluetooth",
            "FireWire",
            "HDMI",
            "IrDA"
        ],
        poprawna: "A"
    },
    {
        id: 339,
        pytanie: "Na ilustracji jest przedstawione okno konfiguracji urządzenia dostępu do lokalnej sieci bezprzewodowej. Aby\nzmienić identyfikator sieci wykorzystywany podczas próby nawiązywania połączenia z punktem dostępowym,\nnależy użyć pole oznaczone numerem",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "A",
        obraz: "339.jpg"
    },
    {
        id: 340,
        pytanie: "Nadzorem i kontrolą w zakresie przestrzegania zasad bezpieczeństwa i higieny pracy oraz przepisów \nzwiązanych z zatrudnieniem w Polsce zajmuje się",
        odpowiedzi: [
            "Państwowa Inspekcja Pracy",
            "Rządowe Centrum Legislacji",
            "Zakład Ubezpieczeń Społecznych",
            "Biuro Bezpieczeństwa Narodowego"
        ],
        poprawna: "A"
    },
    {
        id: 341,
        pytanie: "Parametrem określającym o ile zmniejszy się moc sygnału w danej parze przewodów po przejściu przez cały \ntor kablowy, jest",
        odpowiedzi: [
            "długość",
            "tłumienie",
            "przesłuch zdalny",
            "przesłuch zbliżny"
        ],
        poprawna: "B"
    },
    {
        id: 342,
        pytanie: "W systemie Windows Server zdalny dostęp do sieci organizacji zapewnia usługa",
        odpowiedzi: [
            "IIS",
            "FTP",
            "SMB",
            "RRAS"
        ],
        poprawna: "D"
    },
    {
        id: 343,
        pytanie: "Adresem rozgłoszeniowym sieci, w której pracuje host o adresie IP 195.120.252.32 i masce podsieci \n255.255.255.192 jest",
        odpowiedzi: [
            "195.120.252.0",
            "195.120.252.63",
            "195.120.252.255",
            "195.120.255.255"
        ],
        poprawna: "B"
    },
    {
        id: 344,
        pytanie: "Co jest charakterystyczne dla architektury sieci lokalnych typu klient – serwer?",
        odpowiedzi: [
            "Żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych",
            "Wszystkie komputery klienckie mają dostęp do zasobów pozostałych komputerów",
            "Każdy komputer zarówno udostępnia pewne zasoby, jak i korzysta z zasobów innych komputerów",
            "Wyróżnione komputery pełnią rolę serwerów udostępniających zasoby, a pozostałe komputery z tych \nzasobów korzystają"
        ],
        poprawna: "D"
    },
    {
        id: 345,
        pytanie: "Na ilustracji jest przedstawiony",
        odpowiedzi: [
            "ruter.",
            "przełącznik.",
            "koncentrator.",
            "panel krosowy."
        ],
        poprawna: "D",
        obraz: "345.jpg"
    },
    {
        id: 346,
        pytanie: "Zgodnie z zasadami etykiety związanymi ze spotkaniami służbowymi należy pamiętać, aby",
        odpowiedzi: [
            "wchodząc do miejsc publicznych pukać przed wejściem, z wyjątkiem pokoju szefa urzędu.",
            "unikać nadmiernej gestykulacji oraz piskliwego i wysokiego tonu głosu.",
            "nie przedstawiać się i bez pytania usiąść na wolnym krześle.",
            "mężczyźni całowali wszystkie kobiety w rękę."
        ],
        poprawna: "B"
    },
    {
        id: 347,
        pytanie: "Oznaczenie przedstawionego procesora informuje o",
        odpowiedzi: [
            "jego małej obudowie.",
            "wersji mobilnej procesora.",
            "braku blokady mnożnika (unlocked).",
            "bardzo niskim zużyciu energii przez procesor."
        ],
        poprawna: "C",
        obraz: "347.jpg"
    },
    {
        id: 348,
        pytanie: "Na ilustracji przedstawiono",
        odpowiedzi: [
            "impulsator.",
            "sondę logiczną.",
            "czujnik temperatury.",
            "tester płyt głównych."
        ],
        poprawna: "D",
        obraz: "348.jpg"
    },
    {
        id: 349,
        pytanie: "Podczas podłączenia sprawnego monitora do innego komputera jest wyświetlany komunikat przedstawiony \nna ilustracji. Pojawienie się komunikatu jest spowodowane",
        odpowiedzi: [
            "wyłączeniem komputera.",
            "zbyt wysoko ustawioną ostrością obrazu.",
            "uszkodzeniem monitora podczas podłączania.",
            "zbyt wysoką lub zbyt niską częstotliwością sygnału."
        ],
        poprawna: "D",
        obraz: "349.jpg"
    },
    {
        id: 350,
        pytanie: "Ile maksymalnie komputerów może być zaadresowanych w podsieci o adresie 192.168.1.0/25?",
        odpowiedzi: [
            "62",
            "126",
            "254",
            "510"
        ],
        poprawna: "B"
    },
    {
        id: 351,
        pytanie: "Urządzeniem stosowanym do połączenia 6 komputerów w sieć lokalną jest",
        odpowiedzi: [
            "most",
            "wzmacniak",
            "transceiver",
            "przełącznik"
        ],
        poprawna: "D"
    },
    {
        id: 352,
        pytanie: "W tabeli przedstawiono parametry zestawu komputerowego. Ponieważ jego karta graficzna uległa \nuszkodzeniu, należy ją wymienić na kartę graficzną o parametrach przedstawionych w ramce. W związku \nz tym modernizacja tego komputera wymaga również wymiany",
        odpowiedzi: [
            "karty sieciowej",
            "płyty głównej",
            "procesora",
            "zasilacza"
        ],
        poprawna: "D",
        obraz: "352.jpg"
    },
    {
        id: 353,
        pytanie: "Aby zmienić właściciela pliku w systemie Linux, należy użyć polecenia",
        odpowiedzi: [
            "ps",
            "pwd",
            "chown",
            "chmod"
        ],
        poprawna: "C"
    },
    {
        id: 354,
        pytanie: "Na ilustracji jest przedstawiona konfiguracja",
        odpowiedzi: [
            "wirtualnych sieci.",
            "sieci bezprzewodowej.",
            "przekierowania portów.",
            "rezerwacji adresów MAC."
        ],
        poprawna: "A",
        obraz: "354.jpg"
    },
    {
        id: 355,
        pytanie: "Przed wykonaniem prac serwisowych związanych z modyfikacją rejestru systemu Windows należy wykonać",
        odpowiedzi: [
            "kopię rejestru za pomocą programu regedit",
            "defragmentację dysku za pomocą programu defrag",
            "oczyszczanie dysku za pomocą programu cleanmgr",
            "czyszczenie rejestru za pomocą programu defraggler"
        ],
        poprawna: "A"
    },
    {
        id: 356,
        pytanie: "Aby była możliwa komunikacja między różnymi sieciami VLAN, należy zastosować",
        odpowiedzi: [
            "ruter.",
            "modem.",
            "regenerator.",
            "koncentrator."
        ],
        poprawna: "A"
    },
    {
        id: 357,
        pytanie: "Na ilustracji jest przedstawiony symbol graficzny",
        odpowiedzi: [
            "rutera.",
            "mostu.",
            "przełącznika.",
            "punktu dostępowego."
        ],
        poprawna: "C",
        obraz: "357.jpg"
    },
    {
        id: 358,
        pytanie: "W Wierszu polecenia wydano komendę: wykonaj.bat przyklad.txt \nWykonanie skryptu spowoduje",
        odpowiedzi: [
            "zabezpieczenie pliku przykład.txt hasłem hsr",
            "dopisanie ciągu znaków „hsr” do zawartości pliku wykonaj.bat",
            "nadanie dla pliku wykonaj.bat atrybutów ukryty, systemowy, tylko do odczytu",
            "nadanie dla pliku przykład.txt atrybutów ukryty, skompresowany, tylko do odczytu"
        ],
        poprawna: "C",
        obraz: "358.jpg"
    },
    {
        id: 359,
        pytanie: "Aby udrożnić zatkane dysze kartridża drukarki atramentowej, należy oczyścić dysze",
        odpowiedzi: [
            "środkiem smarującym.",
            "alkoholem izopropylowym.",
            "drobnym papierem ściernym.",
            "za pomocą drucianego zmywaka."
        ],
        poprawna: "B"
    },
    {
        id: 360,
        pytanie: "Zespoły doraźne powoływane są",
        odpowiedzi: [
            "na potrzeby realizacji nieprzewidzianych zadań lub rozwiązywania niespodziewanych problemów",
            "do wykonania zaplanowanego i określonego projektu lub zadania",
            "na stałe i są trwale umiejscowione w strukturze organizacji",
            "do realizacji zadań powtarzalnych i przewidywalnych"
        ],
        poprawna: "A"
    },
    {
        id: 362,
        pytanie: "Wskaż zakres grupy, który jest ustawiany domyślnie dla nowo utworzonej grupy w kontrolerze domeny \nsystemu Windows Serwer?",
        odpowiedzi: [
            "Lokalny.",
            "Globalny.",
            "Uniwersalny.",
            "Dystrybucyjny."
        ],
        poprawna: "B"
    },
    {
        id: 363,
        pytanie: "Aby zagwarantować użytkownikom Active Directory możliwość zalogowania do domeny na wypadek awarii \nkontrolera domeny, należy",
        odpowiedzi: [
            "promować drugi kontroler domeny.",
            "udostępnić użytkownikom numer do Help Desk.",
            "dodać wszystkich użytkowników do grupy Administratorzy.",
            "przekopiować wszystkie zasoby sieci na każdy komputer w domenie."
        ],
        poprawna: "A"
    },
    {
        id: 364,
        pytanie: "Wynikiem dodawania liczb 33(8) oraz 71(8) jest liczba",
        odpowiedzi: [
            "1010101(2)",
            "1100101(2)",
            "1001100(2)",
            "1010100(2)"
        ],
        poprawna: "D"
    },
    {
        id: 365,
        pytanie: "W tabeli jest przedstawiony fragment procesu komunikacji serwera ze stacją roboczą przechwycony przez \nprogram Wireshark. Której usługi dotyczy ta komunikacja?",
        odpowiedzi: [
            "FTP",
            "DNS",
            "DHCP",
            "WWW"
        ],
        poprawna: "C",
        obraz: "365.jpg"
    },
    {
        id: 366,
        pytanie: "Protokół DNS odpowiada za",
        odpowiedzi: [
            "odwzorowanie nazw domenowych na adresy IP.",
            "odwzorowanie adresów fizycznych MAC na adresy IP.",
            "statyczne przydzielanie adresacji urządzeniom sieciowym.",
            "automatyczne przydzielanie adresacji urządzeniom sieciowym."
        ],
        poprawna: "A"
    },
    {
        id: 367,
        pytanie: "Który ze sposobów radzenia sobie ze stresem jest szkodliwy dla organizmu?",
        odpowiedzi: [
            "Sen.",
            "Hobby.",
            "Używki.",
            "Aktywność fizyczna."
        ],
        poprawna: "C"
    },
    {
        id: 368,
        pytanie: "W systemach Windows Server polecenie dsadd umożliwia",
        odpowiedzi: [
            "zmianę właściwości obiektów w katalogu.",
            "przenoszenie obiektów w obrębie jednej domeny.",
            "usuwanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych z usługi Active Directory.",
            "dodawanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych do usługi Active Directory."
        ],
        poprawna: "D"
    },
    {
        id: 369,
        pytanie: "Wewnętrzny dysk twardy IDE jest zasilany poprzez złącze",
        odpowiedzi: [
            "MOLEX",
            "ATX20",
            "SATA",
            "PCIe"
        ],
        poprawna: "A"
    },
    {
        id: 370,
        pytanie: "W systemie Linux plik ma ustawione prawa na wartość 541. Właściciel tego pliku ma możliwość",
        odpowiedzi: [
            "tylko wykonania.",
            "tylko modyfikacji.",
            "odczytu i wykonania.",
            "odczytu, zapisu i wykonania."
        ],
        poprawna: "C"
    },
    {
        id: 371,
        pytanie: "W przedstawionym zasilaczu transformator oznaczono znakiem",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "B",
        obraz: "371.jpg"
    },
    {
        id: 372,
        pytanie: "W systemach operacyjnych Windows natywnym systemem plików, który umożliwia ograniczenie użytkownikom dostępu do poszczególnych katalogów, plików lub dysków jest",
        odpowiedzi: [
            "Ext2",
            "NTFS",
            "FAT16",
            "FAT32"
        ],
        poprawna: "B"
    },
    {
        id: 373,
        pytanie: "Które zdanie odnoszące się do urządzenia sieciowego most (ang. bridge) jest prawdziwe?",
        odpowiedzi: [
            "Analizuje ramki pod kątem adresu IP.",
            "Pracuje w piątej warstwie modelu OSI.",
            "Jest urządzeniem typu store and forward.",
            "Pracuje w siódmej warstwie modelu OSI."
        ],
        poprawna: "C"
    },
    {
        id: 374,
        pytanie: "Na rysunku przedstawiono symbol graficzny",
        odpowiedzi: [
            "rutera.",
            "mostu.",
            "regeneratora.",
            "koncentratora."
        ],
        poprawna: "A",
        obraz: "374.jpg"
    },
    {
        id: 375,
        pytanie: "Plik ma rozmiar 2 KiB. W przeliczeniu na bity jest to",
        odpowiedzi: [
            "2000 bitów.",
            "2048 bitów.",
            "16000 bitów.",
            "16384 bitów."
        ],
        poprawna: "D"
    },
    {
        id: 376,
        pytanie: "Do wyświetlenia zawartości katalogu w systemie Linux służy polecenie",
        odpowiedzi: [
            "ls",
            "cd",
            "rpm",
            "pwd"
        ],
        poprawna: "A"
    },
    {
        id: 378,
        pytanie: "Narzędziem blokującym ataki hakerskie z zewnątrz jest",
        odpowiedzi: [
            "protokół SSH.",
            "serwer DHCP.",
            "zapora sieciowa.",
            "menadżer połączeń."
        ],
        poprawna: "C"
    },
    {
        id: 379,
        pytanie: "Przy rozbudowie sieci Ethernet działającej w oparciu o standard 1000BaseT jest wymagane stosowanie skrętki, w kategorii co najmniej",
        odpowiedzi: [
            "3",
            "6",
            "5e",
            "6a"
        ],
        poprawna: "C"
    },
    {
        id: 380,
        pytanie: "Sieć o adresie 192.168.1.128/29 pozwala na zaadresowanie",
        odpowiedzi: [
            "6 hostów.",
            "8 hostów.",
            "12 hostów.",
            "16 hostów."
        ],
        poprawna: "A"
    },
    {
        id: 381,
        pytanie: "Ktory typ złącza na płycie głównej umożliwia zamontowanie przedstawionej karty graficznej?",
        odpowiedzi: [
            "PCI",
            "AGP",
            "PCIe x1",
            "PCIe x16"
        ],
        poprawna: "D",
        obraz: "381.jpg"
    },
    {
        id: 382,
        pytanie: "Przedstawiony opis usterki i procedura jej rozwiązania zawarta w dokumentacji technicznej dotyczy problemu związanego",
        odpowiedzi: [
            "z podłączeniem skanera bębnowego.",
            "z niepoprawnym wydrukiem z drukarki laserowej.",
            "z konfiguracją skanera bębnowego do pracy sieciowej.",
            "z niepoprawnym wydrukiem z drukarki termosublimacyjnej."
        ],
        poprawna: "B",
        obraz: "382.jpg"
    },
    {
        id: 383,
        pytanie: "Zgodnie z przepisami BHP oraz zasadami ergonomii stanowiska pracy, maksymalna odległość ekranu monitora komputerowego od oczu pracownika wynosi",
        odpowiedzi: [
            "55 cm",
            "60cm",
            "75 cm",
            "80 cm"
        ],
        poprawna: "C"
    },
    {
        id: 384,
        pytanie: "Zachowaniem sprzyjającym organizacji pracy małego zespołu programistów jest",
        odpowiedzi: [
            "ignorowanie innych członków zespołu.",
            "przypisywanie sobie dominującej roli w dyskusji.",
            "nieustanna dezaprobata dla pomysłów innych osób.",
            "proponowanie nowych rozwiązań przez wszystkich członków zespołu."
        ],
        poprawna: "D"
    },
    {
        id: 385,
        pytanie: "Stosunek ładunku zgromadzonego na przewodniku do potencjału tego przewodnika określa jego",
        odpowiedzi: [
            "moc",
            "rezystancję",
            "indukcyjność",
            "pojemność elektryczną"
        ],
        poprawna: "D"
    },
    {
        id: 386,
        pytanie: "Czynnym elementem elektronicznym jest",
        odpowiedzi: [
            "cewka",
            "rezystor",
            "tranzystor",
            "kondensator"
        ],
        poprawna: "C"
    },
    {
        id: 387,
        pytanie: "Wskaż element, który dopasowuje poziom napięcia z sieci energetycznej przy użyciu transformatora \nprzenoszącego energię z jednego obwodu elektrycznego do drugiego z wykorzystaniem zjawiska indukcji \nmagnetycznej.",
        odpowiedzi: [
            "Rejestr szeregowy",
            "Rezonator kwarcowy",
            "Przerzutnik synchroniczny",
            "Zasilacz transformatorowy"
        ],
        poprawna: "D"
    },
    {
        id: 388,
        pytanie: "Na schemacie płyty głównej, znajdującym się w dokumentacji laptopa, numerami 8 i 9 oznaczono złącza",
        odpowiedzi: [
            "M.2",
            "USB 3.0",
            "Serial ATA",
            "cyfrowe audio"
        ],
        poprawna: "C",
        obraz: "388.jpg"
    },
    {
        id: 389,
        pytanie: "Przedstawiona karta przechwytująca wideo będzie współpracowała z płytą główną wyposażoną w port",
        odpowiedzi: [
            "AGP",
            "PCI-e",
            "1-Wire",
            "eSATA"
        ],
        poprawna: "B",
        obraz: "389.jpg"
    },
    {
        id: 390,
        pytanie: "Podczas instalacji systemu Windows, tuż po uruchomieniu instalatora w trybie graficznym, możliwe jest \nuruchomienie Wiersza poleceń (konsoli) za pomocą kombinacji przycisków",
        odpowiedzi: [
            "ALT + F4",
            "CTRL + Z",
            "SHIFT + F10",
            "CTRL + SHIFT"
        ],
        poprawna: "C"
    },
    {
        id: 391,
        pytanie: "Po zainstalowaniu systemu Windows 10, aby skonfigurować połączenie internetowe z limitem danych, \nw ustawieniach sieci i Internetu należy ustawić połączenie",
        odpowiedzi: [
            "taryfowe.",
            "przewodowe.",
            "przewodowe.",
            "szerokopasmowe."
        ],
        poprawna: "A"
    },
    {
        id: 392,
        pytanie: "Licencja dostępowa w systemie Windows Server, umożliwiająca użytkownikom stacji roboczych korzystanie \nz usług serwera to licencja",
        odpowiedzi: [
            "BOX",
            "CAL",
            "OEM",
            "MOLP"
        ],
        poprawna: "B"
    },
    {
        id: 393,
        pytanie: "Cechą charakterystyczną topologii gwiazdy jest",
        odpowiedzi: [
            "małe zużycie kabla",
            "centralne zarządzanie siecią",
            "trudna lokalizacja uszkodzeń",
            "blokada sieci w wyniku awarii terminala"
        ],
        poprawna: "B"
    },
    {
        id: 394,
        pytanie: "Na przedstawionym schemacie logicznym sieci ujęto",
        odpowiedzi: [
            "7 budynkowych punktów dystrybucyjnych",
            "2 kampusowe punkty dystrybucyjne",
            "4 kondygnacyjne punkty dostępowe",
            "9 gniazd telekomunikacyjnych"
        ],
        poprawna: "D",
        obraz: "394.jpg"
    },
    {
        id: 395,
        pytanie: "Co można powiedzieć o budowie skrętki S/FTP?",
        odpowiedzi: [
            "Każda para przewodów jest foliowana i dodatkowo całość w ekranie z siatki",
            "Każda para przewodów jest w osobnym ekranie z folii, całość jest nieekranowana",
            "Każda para przewodów jest foliowana i dodatkowo całość w ekranie z folii i siatki",
            "Każda para przewodów jest w osobnym ekranie z folii i dodatkowo całość w ekranie z folii."
        ],
        poprawna: "A"
    },
    {
        id: 396,
        pytanie: "Przedstawione narzędzie jest stosowane do",
        odpowiedzi: [
            "lokalizacji uszkodzeń włókien światłowodowych",
            "spawania przewodów światłowodowych",
            "zdejmowania izolacji okablowania",
            "zaciskania wtyków RJ11 i RJ45"
        ],
        poprawna: "A",
        obraz: "396.jpg"
    },
    {
        id: 397,
        pytanie: "Testowanie okablowania strukturalnego światłowodowego można wykonać za pomocą",
        odpowiedzi: [
            "sondy logicznej",
            "stacji lutowniczej",
            "odsysacza próżniowego",
            "reflektometru optycznego"
        ],
        poprawna: "D"
    },
    {
        id: 398,
        pytanie: "Adresem rozgłoszeniowym w podsieci o adresie IPv4 192.168.0.0/20 jest",
        odpowiedzi: [
            "192.168.255.255",
            "192.168.255.254",
            "192.168.15.255",
            "192.168.15.254"
        ],
        poprawna: "C"
    },
    {
        id: 399,
        pytanie: "W adresacji IPv6 adres ff00::/8 określa",
        odpowiedzi: [
            "adres nieokreślony",
            "pulę adresów testowej sieci 6bone",
            "adres wskazujący na lokalnego hosta",
            "pulę adresów używanych do komunikacji multicast"
        ],
        poprawna: "D"
    },
    {
        id: 400,
        pytanie: "Wskaż maksymalną liczbę adresów hostów, którą można użyć w każdej z 8 równych podsieci, wydzielonych \nz sieci komputerowej o adresie 10.10.10.0/24",
        odpowiedzi: [
            "14",
            "16",
            "30",
            "62"
        ],
        poprawna: "C"
    },
    {
        id: 401,
        pytanie: "Informacje przedstawione na wydruku zostały wyświetlone w wyniku wywołania",
        odpowiedzi: [
            "netstat -r",
            "route change",
            "ipconfig /all",
            "traceroute -src"
        ],
        poprawna: "A",
        obraz: "401.jpg"
    },
    {
        id: 402,
        pytanie: "Urządzeniem sieciowym pracującym w drugiej warstwie modelu OSI, w którym sygnał na podstawie analizy \nadresu MAC nadawcy i odbiorcy jest przesyłany do portu połączonego z urządzeniem odbierającym dane, \njest",
        odpowiedzi: [
            "modem",
            "terminator",
            "przełącznik",
            "wzmacniak"
        ],
        poprawna: "C"
    },
    {
        id: 403,
        pytanie: "Gniazdo tablicy interaktywnej jest oznaczone za pomocą przedstawionego symbolu. Którego złącza należy \nużyć do podłączenia tablicy do komputera?",
        odpowiedzi: [
            "HDMI",
            "USB A-A",
            "FireWire",
            "D-SUB VGA"
        ],
        poprawna: "D",
        obraz: "403.jpg"
    },
    {
        id: 404,
        pytanie: "Aby w systemie Windows zmienić port zainstalowanej drukarki, należy wykorzystać funkcję",
        odpowiedzi: [
            "Menedżer zadań",
            "Właściwości drukarki",
            "Preferencje drukowania",
            "Ostatnia znana dobra konfiguracja"
        ],
        poprawna: "B"
    },
    {
        id: 405,
        pytanie: "Wskaż czynność konserwacyjną, którą należy wykonać, jeśli na wydruku drukarki atramentowej widoczne \nsą smugi, kolory wydruku są niewłaściwe lub brakuje niektórych kolorów",
        odpowiedzi: [
            "Wymiana taśmy barwiącej",
            "Kalibrowanie przesuwu papieru",
            "Czyszczenie głowicy drukującej",
            "Aktualizacja oprogramowania drukarki"
        ],
        poprawna: "C"
    },
    {
        id: 406,
        pytanie: "Przedstawione narzędzie służące do monitorowania sieci LAN to",
        odpowiedzi: [
            "konfigurator IP",
            "skaner portów",
            "zapora sieciowa",
            "konfigurator sieci"
        ],
        poprawna: "B",
        obraz: "406.jpg"
    },
    {
        id: 407,
        pytanie: "Do sprawdzenia stanu podłączonego kabla i zdiagnozowania odległości od miejsca awarii sieci należy \nwykorzystać funkcję przełącznika oznaczoną numerem",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "C",
        obraz: "407.jpg"
    },
    {
        id: 408,
        pytanie: "Podczas konfiguracji rutera, aby wprowadzić parametry połączenia dostarczone przez dostawcę \ninternetowego należy wybrać obszar oznaczony numerem",
        odpowiedzi: [
            "4",
            "3",
            "2",
            "1"
        ],
        poprawna: "B",
        obraz: "408.jpg"
    },
    {
        id: 409,
        pytanie: "Do czyszczenia układów optycznych w sprzęcie komputerowym należy użyć",
        odpowiedzi: [
            "smaru",
            "żywicy",
            "izopropanolu",
            "oleju wazelinowego"
        ],
        poprawna: "C"
    },
    {
        id: 410,
        pytanie: "Matę antystatyczną i opaskę stosuje się podczas montażu podzespołu w celu",
        odpowiedzi: [
            "ułatwienia jego naprawy",
            "poprawy higieny serwisanta",
            "oczyszczenia jego zabrudzeń",
            "neutralizacji ładunków elektrostatycznych"
        ],
        poprawna: "D"
    },
    {
        id: 411,
        pytanie: "W systemie Windows Server udostępnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej \nw postaci dysku oznaczonego literą, jest możliwe dzięki wykonaniu operacji",
        odpowiedzi: [
            "zerowania",
            "mapowania",
            "oczyszczania",
            "defragmentacji"
        ],
        poprawna: "B"
    },
    {
        id: 412,
        pytanie: "Do identyfikacji rozmiaru wolnej i zajętej pamięci fizycznej w systemie Linux można użyć polecenia",
        odpowiedzi: [
            "cat /proc/meminfo",
            "lspci | grep -i raid",
            "dmidecode –t baseboard",
            "tail –n 10 /var/log/messages"
        ],
        poprawna: "A"
    },
    {
        id: 413,
        pytanie: "Wskaż koszt brutto wykonanych przez serwisanta usług, jeśli do rachunku doliczony jest również koszt \ndojazdu w wysokości 55,00 zł netto.",
        odpowiedzi: [
            "160,00 zł",
            "196,80 zł",
            "215,00 zł",
            "264,45 zł"
        ],
        poprawna: "D",
        obraz: "413.jpg"
    },
    {
        id: 414,
        pytanie: "System Linux Ubuntu zainstalowano na dysku obok systemu Windows. Aby skonfigurować kolejność \nuruchamianych systemów operacyjnych, należy zmodyfikować zawartość",
        odpowiedzi: [
            "/etc/grub.d",
            "/etc/inittab",
            "boot.ini",
            "bcdedit"
        ],
        poprawna: "A"
    },
    {
        id: 415,
        pytanie: "Użycie polecenia ipconfig /renew podczas konfiguracji interfejsów sieciowych spowoduje",
        odpowiedzi: [
            "wyświetlenie identyfikatora klasy DHCP dla kart sieciowych",
            "wyczyszczenie bufora programu rozpoznającego DNS",
            "odnowienie wszystkich dzierżaw adresów IP z DHCP",
            "zwolnienie wszystkich dzierżaw adresów IP z DHCP"
        ],
        poprawna: "C"
    },
    {
        id: 416,
        pytanie: "Do harmonogramowania zadań w systemie Linux służy polecenie",
        odpowiedzi: [
            "top",
            "cron",
            "shred",
            "taskschd"
        ],
        poprawna: "B"
    },
    {
        id: 417,
        pytanie: "Wykonanie polecenia dxdiag w systemie Windows umożliwi",
        odpowiedzi: [
            "wykonanie konfiguracji klawiatury, aby spełniała wymagania języka polskiego",
            "uruchomienie maszyny wirtualnej z zainstalowanym systemem Windows 10",
            "wykonanie kompresji wskazanych na dysku twardym danych",
            "uruchomienie narzędzia diagnostycznego DirectX"
        ],
        poprawna: "D"
    },
    {
        id: 418,
        pytanie: "AppLocker to narzędzie w systemach Windows Server służące do",
        odpowiedzi: [
            "szyfrowania partycji systemowej, z wyjątkiem partycji rozruchowej.",
            "nadawania uprawnień do plików i katalogów zawierających dane użytkownika.",
            "tworzenia reguł kontrolujących uruchamianie aplikacji dla użytkowników lub grup.",
            "zarządzania partycjami dysków twardych przy użyciu interpretera poleceń PowerShell."
        ],
        poprawna: "C"
    },
    {
        id: 419,
        pytanie: "W systemie serwerowym Windows widoczny jest zakres adresów IPv4. Wskazana ikona znajdująca się przy \njego nazwie oznacza, że",
        odpowiedzi: [
            "zakres ten jest aktywny",
            "zakres ten jest nieaktywny",
            "pula adresów w tym zakresie jest wyczerpana w 100%",
            "pula adresów w tym zakresie jest wyczerpana na poziomie bliskim 100%"
        ],
        poprawna: "B",
        obraz: "419.jpg"
    },
    {
        id: 420,
        pytanie: "Wskaż polecenie systemu Linux służące do wyświetlenia numeru identyfikacyjnego użytkownika.",
        odpowiedzi: [
            "whoami",
            "users",
            "who",
            "id"
        ],
        poprawna: "D"
    },
    {
        id: 421,
        pytanie: "Za pomocą którego polecenia systemu Linux możliwa jest zmiana domyślnej powłoki użytkownika egzamin\nna sh",
        odpowiedzi: [
            "usermod –s /bin/sh egzamin",
            "vi /etc/passwd –sh egzamin",
            "chmod egzamin /etc/shadow sh",
            "groupmod /users/egzamin /bin/sh"
        ],
        poprawna: "A"
    },
    {
        id: 422,
        pytanie: "Narzędziem usług katalogowych w systemach z rodziny Windows Server, służącym do przekierowania \nkomputerów do jednostki organizacyjnej określonej przez administratora, jest polecenie",
        odpowiedzi: [
            "dsrm",
            "dcdiag",
            "redircmp",
            "redirusr"
        ],
        poprawna: "C"
    },
    {
        id: 423,
        pytanie: "Po zainstalowaniu programu VNC, wykorzystywanego do podglądu pulpitu wybranego komputera, oprócz \nnumeru portu należy podać jego",
        odpowiedzi: [
            "adres rozgłoszeniowy",
            "bramę domyślną",
            "adres MAC",
            "adres IP"
        ],
        poprawna: "D",
        obraz: "423.jpg"
    },
    {
        id: 424,
        pytanie: "Higiena pracy to:",
        odpowiedzi: [
            "Utrzymanie porządku na stanowisku pracy",
            "Nauka o metodach utrzymywania czystości w pomieszczeniach przemysłowych",
            "Działania zmierzające do uchronienia pracownika od utraty zdrowia, która może nastąpić w wyniku oddziaływania różnych czynników związanych z pracą",
            "Stosowanie diety odpowiedniej do tryby życia"
        ],
        poprawna: "C"
    },
    {
        id: 425,
        pytanie: "Pracownik rozlał w pracy substancję żrącą, wskutek czego uszkodził stojący na stole mikroskop i swoją odzież. Zdarzenie to jest:",
        odpowiedzi: [
            "Zdarzeniem traktowanym na równi z wypadkiem przy pracy",
            "Wypadkiem przy pracy",
            "Wypadkiem zbiorowym",
            "Zdarzeniem potencjalnie wypadkowym"
        ],
        poprawna: "B"
    },
    {
        id: 426,
        pytanie: "Wypadek śmiertelny przy pracy to wypadek, w którego wyniku nastąpiła śmierć poszkodowanego pracownika",
        odpowiedzi: [
            "W okresie nieprzekraczającym miesiąca od wypadku",
            "Na miejscu zdarzenia",
            "W okresie nieprzekraczającym 6 miesięcy od wypadku",
            "Na miejscu zdarzenia lub w trakcie leczenia w szpitalu, do którego został przewieziony bezpośrednio po wypadku"
        ],
        poprawna: "C"
    },
    {
        id: 427,
        pytanie: "Chorobą zawodową najczęściej występującą wśród pracowników kuźni jest/są",
        odpowiedzi: [
            "Przewlekła choroba narządu głosu",
            "Uszkodzenia słuchu",
            "Pylica płuc",
            "Choroby zakaźne"
        ],
        poprawna: "B"
    },
    {
        id: 428,
        pytanie: "Zapobieganie chorobom zawodowym nie polega na",
        odpowiedzi: [
            "Badaniach lekarskich pracowników",
            "Wykrywaniu i usuwaniu zagrożeń chorobowych w środowisku pracy",
            "Wykrywaniu i usuwaniu zagrożeń chorobowych w środowisku pracy oraz na badaniach lekarskich pracowników",
            "Odpowiedniej diecie stosowanej przez pracowników"
        ],
        poprawna: "D"
    },
    {
        id: 430,
        pytanie: "Adresem pętli zwrotnej w protokole IPv6 jest",
        odpowiedzi: [
            "0:0/32",
            "::fff/64",
            "::1/128",
            ":1:1:1/96"
        ],
        poprawna: "C"
    },
    {
        id: 431,
        pytanie: "W systemie Linux do monitorowania bieżących procesów służy polecenie",
        odpowiedzi: [
            "free",
            "ps",
            "test",
            "pd"
        ],
        poprawna: "B"
    },
    {
        id: 432,
        pytanie: "W modelu hierarchicznym sieci komputery użytkowników są elementami warstwy",
        odpowiedzi: [
            "dostępu",
            "szkieletowej",
            "dystrybucji",
            "rdzenia"
        ],
        poprawna: "A"
    },
    {
        id: 433,
        pytanie: "Profil użytkownika systemu Windows wykorzystywany do logowania na dowolnym komputerze w sieci, który jest przechowywany na serwerze i może być modyfikowany przez użytkownika, to profil",
        odpowiedzi: [
            "lokalny",
            "obowiązkowy",
            "mobilny",
            "tymczasowy"
        ],
        poprawna: "C"
    },
    {
        id: 434,
        pytanie: "Elementem zestawu komputerowego przetwarzającym zarówno dane wejściowe, jak i wyjściowe, jest",
        odpowiedzi: [
            "modem",
            "ploter",
            "drukarka",
            "skaner"
        ],
        poprawna: "A"
    },
    {
        id: 435,
        pytanie: "Na ilustracji przedstawione jest oprogramowanie monitorujące technologię",
        odpowiedzi: [
            "NCQ",
            "IRDA",
            "SAS",
            "S.M.A.R.T"
        ],
        poprawna: "D",
        obraz: "435.jpg"
    },
    {
        id: 436,
        pytanie: "Udostępnienie linuksowych usług drukowania oraz serwera plików stacjom roboczym Windows, OS X, Linux umożliwia serwer",
        odpowiedzi: [
            "SAMBA",
            "POSTFIX",
            "APACHE",
            "SQUID"
        ],
        poprawna: "A"
    },
    {
        id: 437,
        pytanie: "Który z typów rekordów DNS definiuje alias (alternatywną nazwę) rekordu A dla kanonicznej (rzeczywistej) nazwy hosta?",
        odpowiedzi: [
            "CNAME",
            "NS",
            "AAAA",
            "PTR"
        ],
        poprawna: "A"
    },
    {
        id: 438,
        pytanie: "Liczby 1001 oraz 100 w wierszu pliku /etc/passwd znaczają",
        odpowiedzi: [
            "liczbę udanych i nieudanych prób logowania",
            "numer koloru czcionki i numer koloru tła w terminalu",
            "identyfikatory użytkownika i grupy w systemie",
            "liczbę dni do ostatniej zmiany hasła i liczbę dni do wygaśnięcia hasła"
        ],
        poprawna: "C",
        obraz: "438.jpg"
    },
    {
        id: 439,
        pytanie: "Zgodnie z przedstawioną instrukcją montażu płyty głównej należy",
        odpowiedzi: [
            "w przypadku braku opaski ESD, przed dotknięciem elementów elektronicznych, najpierw dotknąć metalowy przedmiot",
            "unikat wyłączania zasilania sieciowego przed demontażem płyty głównej",
            "umieścić podzespół w dowolnym miejscu i dowolnym opakowaniu przed jego zainstalowaniem",
            "dotykać w dowolny sposób i w dowolnej kolejności metalowe przewody lub złącza"
        ],
        poprawna: "A",
        obraz: "439.jpg"
    },
    {
        id: 440,
        pytanie: "Psychicznym skutkiem przewlekłego stresu może być",
        odpowiedzi: [
            "nawracająca infekcja",
            "depresja",
            "atopowe zapalenie skóry i chroniczne zapalenie oczu",
            "choroba układu krążenia"
        ],
        poprawna: "B"
    },
    {
        id: 441,
        pytanie: "Które polecenie należy wydać w systemie Windows, aby sprawdzić tabelę translacji adresów IP na adresy fizyczne?",
        odpowiedzi: [
            "ipconfig",
            "route print",
            "netstat -r",
            "arp -a"
        ],
        poprawna: "D"
    },
    {
        id: 442,
        pytanie: "Na ilustracji została przedstawiona topologia",
        odpowiedzi: [
            "pierścienia",
            "magistrali",
            "gwiazdy rozszerzonej",
            "pełnej siatki"
        ],
        poprawna: "C",
        obraz: "442.jpg"
    },
    {
        id: 443,
        pytanie: "Wskaż domyślną maskę szesnastobitowego adresu IPv4",
        odpowiedzi: [
            "255.255.0.0",
            "255.0.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        poprawna: "A"
    },
    {
        id: 444,
        pytanie: "Głównym zadaniem usługi DNS jest",
        odpowiedzi: [
            "sprawdzanie poprawności adresów domenowych",
            "sprawdzanie poprawności adresów IP",
            "rozwiązywanie nazw domenowych na adresy IP",
            "rozwiązywanie nazw domenowych na adresy fizyczne"
        ],
        poprawna: "C"
    },
    {
        id: 445,
        pytanie: "Do pomiaru wartości mocy czynnej metodą bezpośrednią należy użyć",
        odpowiedzi: [
            "watomierza",
            "woltomierza",
            "omomierza",
            "amperomierza"
        ],
        poprawna: "A"
    },
    {
        id: 447,
        pytanie: "Serwerowa płyta główna do poprawnego działania wymaga pamięci z rejestrem, Który z wymienionych modułów pamięci będzie kompatybilny z taką płytą?",
        odpowiedzi: [
            "Kingston 4GB 1600MHz DDR3 ECC CL11 DIMM 1,5V",
            "Kingston 4GB 1333MHz DDR3 Non-ECC CL9 DIMM",
            "Kingston 8GB 1333MHz DDR3 ECC REG CL9 DIMM 2Rx8",
            "Kingston Hynix B 8GB 1600MHz DRR3L CL11 ECC SODIMM 1,35V"
        ],
        poprawna: "C"
    },
    {
        id: 448,
        pytanie: "Program tar umożliwia",
        odpowiedzi: [
            "zarządzanie pakietami",
            "archiwizowanie plików",
            "konfigurowanie karty sieciowej",
            "wyświetlanie listy aktywnych procesów"
        ],
        poprawna: "B"
    },
    {
        id: 449,
        pytanie: "Przedstawiony na ilustracji wtyk 8P8C (złącze męskie modularne) jest stosowany jako zakończenia kabla",
        odpowiedzi: [
            "koncetrycznego",
            "światłowodowego",
            "YTDY",
            "F/UTP"
        ],
        poprawna: "D",
        obraz: "449.jpg"
    },
    {
        id: 450,
        pytanie: "IMAP jest protokołem obsługującym",
        odpowiedzi: [
            "wysyłanie poczty elektronicznej",
            "odbiór poczty elektronicznej",
            "monitorowanie urządzeń sieciowych",
            "synchronizację czasu z serwerami"
        ],
        poprawna: "B"
    },
    {
        id: 451,
        pytanie: "Która technologia umożliwia dostęp do Internetu?",
        odpowiedzi: [
            "CLIP",
            "xDSL",
            "OCR",
            "SLI"
        ],
        poprawna: "B"
    },
    {
        id: 452,
        pytanie: "Który styl zarządzania grupą, odbywający się w trybie rozkazów, jest skierowany na wykonywanie zadania bez względu na interesy pracowników?",
        odpowiedzi: [
            "wspierający",
            "dyrektywny",
            "delegujący",
            "trenerski"
        ],
        poprawna: "B"
    },
    {
        id: 453,
        pytanie: "Który mechanizm musi być uruchomiony na ruterze, aby ruter mógł zmieniać źródłowe i docelowe adresy IP przy przekazywaniu pakietów pomiędzy sieciami?",
        odpowiedzi: [
            "UDP",
            "FTP",
            "TCP",
            "NAT"
        ],
        poprawna: "D"
    },
    {
        id: 454,
        pytanie: "W systemie Windows, aby ustawić routing statyczny do sieci 192.168.10.0, należy wydać polecenie",
        odpowiedzi: [
            "static route 92.168.10.1 MASK 255.255.255.0 192.168.10.0 5",
            "route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.15",
            "static 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5 route",
            "route 192.168.10.1 MASK 255.255.255.0 192.168.10.0 5 ADD"
        ],
        poprawna: "B"
    },
    {
        id: 455,
        pytanie: "Menedżer usług IIS (Internet Information Services) systemu Windows służy do konfiguracji serwera",
        odpowiedzi: [
            "terminali",
            "WWW",
            "DNS",
            "wydruku"
        ],
        poprawna: "B"
    },
    {
        id: 456,
        pytanie: "Użytkownikom pracującym poza biurem uzyskanie zdalnego dostępu do serwera w sieci prywatnej przy wykorzystywaniu infrastruktury sieci publicznej, takiej jak Internet, umożliwia połączenie",
        odpowiedzi: [
            "IMAP",
            "VPN",
            "SMTP",
            "FTP"
        ],
        poprawna: "B"
    },
    {
        id: 457,
        pytanie: "Które urządzenie należy zainstalować w serwerze, by można było automatycznie archiwizować dane na taśmach magnetycznych?",
        odpowiedzi: [
            "dysk SSD",
            "streamer",
            "Blu-Ray",
            "napęd DVD"
        ],
        poprawna: "B"
    },
    {
        id: 458,
        pytanie: "Program df działający w systemach rodziny Linux umożliwia wyświetlenie",
        odpowiedzi: [
            "nazwy bieżącego katalogu",
            "tekstu pasującego do wzorca",
            "zawartości ukrytego katalogu",
            "informacji o wolnej przestrzeni dyskowej"
        ],
        poprawna: "D"
    },
    {
        id: 459,
        pytanie: "Adresem IPv6 hosta skonfigurowanym na karcie sieciowej enp0s25 jest",
        odpowiedzi: [
            "fe80::3d6:e6d2:1c93:56e2",
            "172.16.21.255",
            "a0:b3:cc:28:8f:37",
            "172.16.21.100"
        ],
        poprawna: "A",
        obraz: "459.jpg"
    },
    {
        id: 460,
        pytanie: "Jeśli pracownik przebywał na zwolnieniu lekarskim dłużej niż 30 dni, to przed powrotem do pracy musi przejść badania",
        odpowiedzi: [
            "kontrolne",
            "okresowe",
            "tymczasowe",
            "wstępne"
        ],
        poprawna: "A"
    },
    {
        id: 461,
        pytanie: "Przypisanie licencji oprogramowania wyłączenie do jednego komputera lub jego podzespołów jest cechą licencji",
        odpowiedzi: [
            "TRIAL",
            "OEM",
            "AGPL",
            "BOX"
        ],
        poprawna: "B"
    },
    {
        id: 462,
        pytanie: "Przedstawione na ilustracji urządzenie peryferyjne jest wyposażone w interfejs",
        odpowiedzi: [
            "PS/2",
            "IEEE 1284",
            "DVI-D",
            "mini USB"
        ],
        poprawna: "D",
        obraz: "462.jpg"
    },
    {
        id: 463,
        pytanie: "Przed rozpoczęciem czynności instalacyjnych wykonano przygotowanie dysku twardego. widoczne na ilustracji wydane polecenia prowadzą do",
        odpowiedzi: [
            "ustawienia systemu plików NTFS dla dysków nr 1 i nr 2",
            "oczyszczenia dysków nr 0 i nr 2",
            "konwersji partycji GPT na MBR na dysku nr 1",
            "formatowania i utraty danych na dysku nr 0"
        ],
        poprawna: "C",
        obraz: "463.jpg"
    },
    {
        id: 464,
        pytanie: "Na której ilustracji zostało przedstawione narzędzie używane w symulatorze Cisco Packet Tracer, umożliwiające zastosowanie światłowodu jako medium transmisyjnego w projektowaniu sieci? (Ilustracje pochodzą z programu w wersji 8.0.0.0212)",
        odpowiedzi: [
            "na ilustracji 3",
            "na ilustracji 1",
            "na ilustracji 4",
            "na ilustracji 2"
        ],
        poprawna: "A",
        obraz: "464.jpg"
    },
    {
        id: 465,
        pytanie: "Przedstawiony panel tylny płyty głównej jest wyposażony w interfejsy",
        odpowiedzi: [
            "2 x PS2; 1 xRJ45; 6 x USB 2.0, 1.1",
            "2 x USB 3.0; 2 x USB 2.0, 1.1; 2 x DP, 1 x DVI",
            "2 x USB 3.0; 4 x USB 2.0, 1.1; 1 x D-SUB",
            "2 x HDMI, 1 x D-SUB, 1 x RJ11, 6 x USB 2.0"
        ],
        poprawna: "C",
        obraz: "465.jpg"
    },
    {
        id: 466,
        pytanie: "Urządzenie przedstawione na rysunku jest stosowane do",
        odpowiedzi: [
            "zabezpieczenia przed niepożądanym dostępem z sieci",
            "wzmocnienia sygnału",
            "zamiany transmisji sygnału kablem światłowodowym na skrętkę",
            "rozdzielenia sygnału"
        ],
        poprawna: "C",
        obraz: "466.jpg"
    },
    {
        id: 467,
        pytanie: "w której topologii logicznej sieci komputerowej urządzenia wysyłające dane używają znacznika nazywanego tokenem?",
        odpowiedzi: [
            "punkt-punkt",
            "przekazywania żetonu",
            "hierarchicznej",
            "siatki"
        ],
        poprawna: "B"
    },
    {
        id: 468,
        pytanie: "W przedstawionym fragmencie instrukcji obsługi drukarki 3D została opisana czynność",
        odpowiedzi: [
            "montażu modułu drukującego i zgarniacza.",
            "konserwacji ekstrudera.",
            "ładowania i wymiany filamentu.",
            "czyszczenia platformy roboczej z resztek filamentu."
        ],
        poprawna: "C",
        obraz: "468.jpg"
    },
    {
        id: 469,
        pytanie: "Wskaż materiał eksploatacyjny stosowany w kolorowych drukarkach laserowych.",
        odpowiedzi: [
            "Papier termiczny.",
            "Pas transmisyjny.",
            "Taśma barwiąca.",
            "Głowica drukująca."
        ],
        poprawna: "B"
    },
    {
        id: 470,
        pytanie: "Pharming to rodzaj ataku, który ma na celu",
        odpowiedzi: [
            "przeciążenie łącza użytkownika poprzez atakowanie pakietami ICMP.",
            "rozpowszechnianie złośliwego oprogramowania w sieci za pomocą reklam internetowych.",
            "uniemożliwienie działania witryny, której adres został wpisany przez użytkownika.",
            "skierowanie użytkownika na fałszywą stronę."
        ],
        poprawna: "D"
    },
    {
        id: 471,
        pytanie: "Który program można zastosować do diagnostyki dysku twardego?",
        odpowiedzi: [
            "MemTest86",
            "GSmartControl",
            "GPU-Z",
            "Core Temp"
        ],
        poprawna: "B"
    },
    {
        id: 472,
        pytanie: "Wynikiem dodawania liczb 1011010(2) oraz 101100(2) jest",
        odpowiedzi: [
            "11001100(2)",
            "10001100(2)",
            "10001110(2)",
            "10000110(2)"
        ],
        poprawna: "D"
    },
    {
        id: 473,
        pytanie: "Na której ilustracji została przedstawiona bramka logiczna realizująca funkcję",
        odpowiedzi: [
            "Na ilustracji 1",
            "Na ilustracji 4",
            "Na ilustracji 2",
            "Na ilustracji 3"
        ],
        poprawna: "A",
        obraz: "473.jpg"
    },
    {
        id: 474,
        pytanie: "Adresem rozgłoszeniowym w sieci 172.16.0.0/19 w adresacji IPv4 jest",
        odpowiedzi: [
            "172.16.255.254",
            "172.16.31.254",
            "172.16.31.255",
            "172.16.255.255"
        ],
        poprawna: "C"
    },
    {
        id: 475,
        pytanie: "Poleceniem systemu Linux używanym do nadawania praw do plików jest",
        odpowiedzi: [
            "chroot",
            "chkntfs",
            "chmod",
            "chkdsk"
        ],
        poprawna: "C"
    },
    {
        id: 476,
        pytanie: "Aby uniknąć nieodwracalnego uszkodzenia komórek nerwowych, resuscytacja krążeniowo-oddechowa (RKO) powinna zostać rozpoczęta w przypadku zatrzymania oddechu i krążenia przed upływem",
        odpowiedzi: [
            "8 minut",
            "4 minut",
            "16 minut",
            "12 minut"
        ],
        poprawna: "B"
    },
    {
        id: 477,
        pytanie: "W której strukturze organizacyjnej przedsiębiorstwa właściciel bezpośrednio zarządza kilkoma pracownikami?",
        odpowiedzi: [
            "liniowej",
            "smukłej",
            "promienistej",
            "funkcjonalnej"
        ],
        poprawna: "C"
    },
    {
        id: 478,
        pytanie: "Na ilustracji przedstawiono ustawienia serwera DHCP w systemie Windows Server z dodanym zakresem o nazwie My_scope. Aby przypisać stacji roboczej adres IPv4 na podstawie adresu MAC, należy wybrać zakładkę",
        odpowiedzi: [
            "Adress Leases",
            "Reservations",
            "Address Pool",
            "Policies"
        ],
        poprawna: "B",
        obraz: "478.jpg"
    },
    {
        id: 479,
        pytanie: "Kliknięcie wskazanej na ilustracji ikony, dostępnej w urządzeniu mobilnym, umożliwi",
        odpowiedzi: [
            "konfigurowanie ustawień zapory systemowej.",
            "konfigurowanie usługi sieci komórkowej.",
            "przeglądanie i pobieranie aplikacji wybranych do zainstalowania.",
            "włączenie i używanie wbudowanych funkcji ochrony i bezpieczeństwa."
        ],
        poprawna: "C",
        obraz: "479.jpg"
    },
    {
        id: 480,
        pytanie: "Lokalna polityka bezpieczeństwa w systemie Windows 10 polegająca na definiowaniu zasad zabezpieczeń dla komputerów, może być zrealizowana za pomocą narzędzia",
        odpowiedzi: [
            "eventvwr.msc",
            "perfmon.msc",
            "secpol.msc",
            "taskschd.msc"
        ],
        poprawna: "C"
    },
    {
        id: 481,
        pytanie: "Z widocznego na ilustracji schematu działania drukarki laserowej można wywnioskować, że jest to drukarka",
        odpowiedzi: [
            "monochromatyczna, w której wydruk można otrzymać w czasie czterech przebiegów papieru.",
            "kolorowa, w której wydruk można otrzymać w czasie czterech przebiegów papieru.",
            "monochromatyczna, w której wydruk można otrzymać w czasie jednego przebiegu papieru.",
            "kolorowa, w której wydruk można otrzymać w czasie jednego przebiegu papieru."
        ],
        poprawna: "D",
        obraz: "481.jpg"
    },
    {
        id: 482,
        pytanie: "Na ilustracji przedstawiono kartę",
        odpowiedzi: [
            "graficzną.",
            "dzwiękową.",
            "sieciową bezprzewodową",
            "pamięci secure digital"
        ],
        poprawna: "B",
        obraz: "482.jpg"
    },
    {
        id: 483,
        pytanie: "Celem normalizacji krajowej jest",
        odpowiedzi: [
            "kontrola respektowania autorskich praw majątkowych związanych z wyrobami.",
            "pośrednictwo w krajowym obrocie towarowym.",
            "poprawa funkcjonalności, kompatybilności i zamienności wyrobów.",
            "uzyskanie informacji o firmie wypuszczającej towary na rynek."
        ],
        poprawna: "C"
    },
    {
        id: 484,
        pytanie: "Konfiguracja punktu dostępowego widoczna na ilustracji została wykonana, aby",
        odpowiedzi: [
            "zezwolić komputerowi o adresie MAC 38:f2:3e:1e:f1:b4 na dostęp do sieci bezprzewodowej.",
            "zabronić komputerowi o adresie MAC 38:f2:3e:1e:f1:b4 dostępu do sieci bezprzewodowej.",
            "wykonać klonowanie adresu MAC punktu dostępowego i skojarzyć go z nazwą Stacja-1.",
            "wyświetlić adresy sprzętowe wszystkich aktywnych klientów punktu dostępowego."
        ],
        poprawna: "A",
        obraz: "484.jpg"
    },
    {
        id: 485,
        pytanie: "Które urządzenie, pracujące w warstwie pierwszej modelu OSI, będące połączeniem nadajnika i odbiornika, wykorzystywane jest w sieciach informatycznych do zamiany sygnału przesyłanego światłowodem na sygnał przesyłany kablem miedzianym i odwrotnie?",
        odpowiedzi: [
            "Firewall sprzętowy.",
            "Koncentrator aktywny.",
            "Przełącznik zarządzalny.",
            "Konwerter mediów."
        ],
        poprawna: "D"
    },
    {
        id: 486,
        pytanie: "Serwisant, który podczas wymiany dysku twardego w laptopie klienta uszkodził matrycę wyświetlacza, powinien",
        odpowiedzi: [
            "zakupić matrycę na własny koszt i wymienić ją bezpłatnie.",
            "obciążyć klienta kosztami zakupu matrycy i jej wymiany.",
            "zakupić matrycę na własny koszt, a kosztami wymiany matrycy obciążyć klienta.",
            "bezpłatnie dokonać wymiany matrycy, a kosztami zakupu matrycy obciążyć klienta."
        ],
        poprawna: "A"
    },
    {
        id: 487,
        pytanie: "Urządzeniem wejścia i wyjścia jest",
        odpowiedzi: [
            "czytnik linii papilarnych.",
            "skaner.",
            "ploter.",
            "ekran dotykowy."
        ],
        poprawna: "D"
    },
    {
        id: 488,
        pytanie: "Które prawa do pliku egzamin.txt są efektem wykonania przedstawionego w ramce polecenia w systemie Linux?",
        odpowiedzi: [
            "Użytkownik: jedynie prawo do zapisu, grupa: prawo do odczytu i wykonania, pozostali: brak praw do pliku.",
            "Użytkownik: prawo do odczytu i wykonania, grupa: pełne prawa, pozostali: brak praw do pliku.",
            "Użytkownik: pełne prawa, grupa: prawo do odczytu, pozostali: brak praw do pliku.",
            "Użytkownik: prawo do zapisu, grupa: brak praw, pozostali: brak praw do pliku."
        ],
        poprawna: "C",
        obraz: "488.jpg"
    },
    {
        id: 489,
        pytanie: "Narzędziem przeznaczonym do wypięcia żyły kabla U/UTP z modułu Keystone jest",
        odpowiedzi: [
            "stripper do kabli ∅ = 5.6 ÷ 6.2 mm",
            "narzędzie uderzeniowe LSA",
            "zaciskacz wtyków 8P8C",
            "wkrętak Torx"
        ],
        poprawna: "B"
    },
    {
        id: 490,
        pytanie: "Polecenie netplan try zastosowane w systemie Linux Ubuntu 20.04 służy do",
        odpowiedzi: [
            "zmiany uprawnień użytkownika do zasobów sieciowych.",
            "przetestowania pliku konfiguracyjnego interfejsów sieciowych.",
            "zastosowania zmian w konfiguracji kart sieciowych.",
            "usunięcia ustawień sieciowych w systemie operacyjnym."
        ],
        poprawna: "B"
    },
    {
        id: 491,
        pytanie: "W adresacji IPv4 postacią dziesiętną maski /27 zapisanej w bezklasowej metodzie przydzielania adresów IP jest",
        odpowiedzi: [
            "255.255.192.0",
            "255.255.255.224",
            "255.255.254.0",
            "255.255.255.192"
        ],
        poprawna: "B"
    },
    {
        id: 492,
        pytanie: "Do sieci o adresie IPv4 192.168.15.0/27 należy host o adresie",
        odpowiedzi: [
            "192.168.15.62",
            "192.168.15.96",
            "192.168.15.30",
            "192.168.15.84"
        ],
        poprawna: "C"
    },
    {
        id: 493,
        pytanie: "Elementem pasywnym sieci komputerowej jest",
        odpowiedzi: [
            "punkt dostępowy.",
            "przełącznik.",
            "regenerator.",
            "panel krosowy."
        ],
        poprawna: "D"
    },
    {
        id: 494,
        pytanie: "Do wirtualizacji systemów operacyjnych w systemie Windows Server 2016 można wykorzystać funkcję serwera o nazwie",
        odpowiedzi: [
            "VMWare",
            "VirtualBox",
            "Hyper-V",
            "QEMU"
        ],
        poprawna: "C"
    },
    {
        id: 495,
        pytanie: "Analizując widoczny na ilustracji kod źródłowy skryptu systemu Windows można stwierdzić, że",
        odpowiedzi: [
            "zadeklarowano w nim zmienną o nazwie p.",
            "użyto w nim zmienną środowiskową przynajmniej raz.",
            "wykorzystano w nim instrukcję warunkową.",
            "zastosowano w nim instrukcję pętli."
        ],
        poprawna: "C",
        obraz: "495.jpg"
    },
    {
        id: 496,
        pytanie: "Wskaż bezpłatny program, który umożliwi przygotowanie prezentacji multimedialnej dla klienta.",
        odpowiedzi: [
            "LibreOffice Impress",
            "Advanced SystemCare Free",
            "Abby Fine Reader",
            "Adobe Acrobat"
        ],
        poprawna: "A"
    },
    {
        id: 497,
        pytanie: "Po zainstalowaniu serwera Apache położenie głównego katalogu zawierającego strony udostępnione użytkownikom można zmienić w jednym z plików konfiguracyjnych serwera, poprzez modyfikację zmiennej",
        odpowiedzi: [
            "wwwRoot",
            "htaccess",
            "documentRoot",
            "inetpub"
        ],
        poprawna: "C"
    },
    {
        id: 498,
        pytanie: "Przedstawione na ilustracji urządzenie peryferyjne jest wyposażone w interfejs",
        odpowiedzi: [
            "PS/2",
            "DVI-D",
            "mini USB",
            "IEEE 1284"
        ],
        poprawna: "C",
        obraz: "498.jpg"
    },
    {
        id: 499,
        pytanie: "W modelu ISO/OSI protokół ICMP działa w warstwie",
        odpowiedzi: [
            "transportowej.",
            "fizycznej.",
            "sieciowej.",
            "sesji."
        ],
        poprawna: "C"
    },
    {
        id: 500,
        pytanie: "Zgodnie z oknem konfiguracji ustawień rutera, wskaż numer grupy, której ustawienie umożliwia uzyskanie połączenia z usługodawcą internetowym.",
        odpowiedzi: [
            "3",
            "4",
            "2",
            "1"
        ],
        poprawna: "D",
        obraz: "500.jpg"
    },
    {
        id: 501,
        pytanie: "W programie Oracle VM VirtualBox należy zainstalować dwa serwerowe systemy operacyjne z kartami sieciowymi, umożliwiającymi komunikowanie się z siecią, w której pracuje fizyczny komputer. Dodatkowo skonfigurowane na wirtualnych serwerach usługi powinny być dostępne dla komputerów w tej sieci.\nW tym celu, przed instalacją, należy w programie do wirtualizacji w ustawieniach sieci ustawić tryb karty sieciowej na",
        odpowiedzi: [
            "NAT (Network Address Translation).",
            "Sieć wewnętrzna (Internal network).",
            "Sieć NAT (NAT network).",
            "Mostkowana karta sieciowa (bridged)."
        ],
        poprawna: "D"
    },
    {
        id: 502,
        pytanie: "Sposobem ochrony przed atakami zwanymi Social Engineering jest",
        odpowiedzi: [
            "ustawienie progu blokady konta użytkowników na 3 nieudane próby logowania.",
            "zablokowanie uruchamiania przez użytkowników edytora rejestru systemowego.",
            "szkolenie pracowników z zakresu stosowania procedur bezpieczeństwa.",
            "ustawienie minimalnej długości haseł użytkowników na 13 znaków."
        ],
        poprawna: "C"
    },
    {
        id: 503,
        pytanie: "Wewnętrzne urządzenie sieciowe przedstawione na ilustracji to",
        odpowiedzi: [
            "most",
            "hub",
            "modem",
            "ruter"
        ],
        poprawna: "C",
        obraz: "503.jpg"
    },
    {
        id: 505,
        pytanie: "Które porty należy zablokować w zaporze sieciowej, aby uniemożliwić połączenie z serwerem FTP?",
        odpowiedzi: [
            "80 i 443",
            "20 i 21",
            "22 i 23",
            "25 i 143"
        ],
        poprawna: "B"
    },
    {
        id: 506,
        pytanie: "Zgodnie z przepisami BHP minimalny poziom natężenia oświetlenia dla stanowisk do pracy z komputerem wynosi",
        odpowiedzi: [
            "500 lx dla pracy ciągłej.",
            "800 lx dla pracy dorywczej.",
            "300 lx dla pracy ciągłej.",
            "1100 lx dla pracy dorywczej."
        ],
        poprawna: "A"
    },
    {
        id: 507,
        pytanie: "Odmianą programowalnej pamięci tylko do odczytu, której zawartość można wykasować za pomocą promieni ultrafioletowych, jest pamięć",
        odpowiedzi: [
            "ROM",
            "EPROM",
            "PROM",
            "EEPROM"
        ],
        poprawna: "B"
    },
    {
        id: 508,
        pytanie: "W systemie Windows za pomocą polecenia assoc można",
        odpowiedzi: [
            "wyświetlić atrybuty plików.",
            "porównać zawartość dwóch plików.",
            "zmienić skojarzenia rozszerzeń plików.",
            "zmodyfikować listę kontroli dostępu do plików."
        ],
        poprawna: "C"
    },
    {
        id: 509,
        pytanie: "Który element szafy krosowniczej jest przedstawiony na ilustracji?",
        odpowiedzi: [
            "Przepust kablowy 2U",
            "Wieszak do kabli 2U",
            "Maskownica 1U",
            "Panel krosowy 1U"
        ],
        poprawna: "D",
        obraz: "509.jpg"
    },
    {
        id: 510,
        pytanie: "Wskaż zgodną z zasadami netykiety, formę oficjalnego e-maila zawierającego CV, który ma zostać wysłany do potencjalnego pracodawcy.",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "A",
        obraz: "510.jpg"
    },
    {
        id: 511,
        pytanie: "Który standard szyfrowania stosowany w sieciach bezprzewodowych zapewnia najniższy poziom bezpieczeństwa?",
        odpowiedzi: [
            "WPA2",
            "WPA AES",
            "WEP",
            "WPA TKIP"
        ],
        poprawna: "C"
    },
    {
        id: 512,
        pytanie: "Który z adresów IP jest adresem publicznym?",
        odpowiedzi: [
            "172.18.0.16",
            "10.99.15.16",
            "192.168.168.16",
            "172.168.0.16"
        ],
        poprawna: "D"
    },
    {
        id: 513,
        pytanie: "Protokołem wysyłania poczty elektronicznej jest",
        odpowiedzi: [
            "Internet Message Access Protocol.",
            "Post Office Protocol.",
            "Simple Mail Transfer Protocol.",
            "File Transfer Protocol."
        ],
        poprawna: "C"
    },
    {
        id: 514,
        pytanie: "Które urządzenie spowoduje zwiększenie zasięgu sieci bezprzewodowej?",
        odpowiedzi: [
            "Modem VDSL.",
            "Wzmacniacz",
            "Przełącznik.",
            "Konwerter mediów."
        ],
        poprawna: "B"
    },
    {
        id: 515,
        pytanie: "Przedstawiony schemat organizacji zespołu projektowego jest przykładem struktury",
        odpowiedzi: [
            "kolektywnej.",
            "eksperckiej.",
            "chirurgicznej.",
            "izomorficznej"
        ],
        poprawna: "B",
        obraz: "515.jpg"
    },
    {
        id: 516,
        pytanie: "Wynikiem sumowania liczb binarnych 1001101 i 11001 jest",
        odpowiedzi: [
            "1100111",
            "1100110",
            "1000111",
            "1000110"
        ],
        poprawna: "B"
    },
    {
        id: 517,
        pytanie: "CommView i WireShark to programy stosowane do",
        odpowiedzi: [
            "określania wielkości tłumienia w torze transmisyjnym.",
            "sprawdzania zasięgu sieci bezprzewodowej.",
            "zabezpieczenia transmisji danych w sieci.",
            "analizowania pakietów transmitowanych w sieci."
        ],
        poprawna: "D"
    },
    {
        id: 518,
        pytanie: "Aby odzyskać dane ze sformatowanego dysku twardego, należy wykorzystać program",
        odpowiedzi: [
            "Recuva",
            "Acronis True Image",
            "CD Recorvery Toolbox Free",
            "CDTrack Rescue"
        ],
        poprawna: "A"
    },
    {
        id: 519,
        pytanie: "Kolor pierwszej żyły we wtyku 8P8C zaciśniętym zgodnie ze standardem T568A to",
        odpowiedzi: [
            "biało-pomarańczowy.",
            "biało-niebieski.",
            "biało-zielony.",
            "biało-brązowy."
        ],
        poprawna: "C"
    },
    {
        id: 520,
        pytanie: "Użytkownik systemu Windows często otrzymuje komunikaty o zbyt małej pamięci wirtualnej. Problem ten można rozwiązać przez modernizację komputera polegającą na",
        odpowiedzi: [
            "zamontowaniu dodatkowej pamięci cache procesora.",
            "zwiększeniu pamięci RAM.",
            "instalacji w systemie oprogramowania do wirtualizacji.",
            "zwiększeniu rozmiaru pliku virtualfile.sys."
        ],
        poprawna: "B"
    },
    {
        id: 521,
        pytanie: "Użytkownik systemu Linux, chcąc przetestować dysk twardy pod kątem występowania na nim uszkodzonych sektorów, może użyć programu",
        odpowiedzi: [
            "fsck",
            "scandisk",
            "defrag",
            "chkdsk"
        ],
        poprawna: "A"
    },
    {
        id: 522,
        pytanie: "System S.M.A.R.T. służy do monitorowania pracy i wykrywania błędów",
        odpowiedzi: [
            "kart rozszerzeń",
            "napędów płyt CD/DVD",
            "dysków twardych",
            "płyty głównej"
        ],
        poprawna: "C"
    },
    {
        id: 523,
        pytanie: "Host www.wp.pl ma przypisany adres IP 212.77.98.9. Co jest przyczyną sytuacji przedstawionej na zrzucie ekranowym?",
        odpowiedzi: [
            "Błędny adres serwera DNS lub brak połączenia z serwerem DNS.",
            "Stacja robocza ma przypisany nieprawidłowy adres bramy sieciowej.",
            "Host o adresie IP 212.77.98.9 nie jest dostępny.",
            "Domena o nazwie www.wp.pl jest niedostępna w sieci."
        ],
        poprawna: "A",
        obraz: "523.jpg"
    },
    {
        id: 524,
        pytanie: "Do realizacji iloczynu logicznego z negacją należy użyć funktora",
        odpowiedzi: [
            "EX-OR",
            "NAND",
            "AND",
            "NOT"
        ],
        poprawna: "B"
    },
    {
        id: 526,
        pytanie: "Który standard złącza DVI umożliwia przesyłanie wyłącznie sygnału analogowego?",
        odpowiedzi: [
            "1",
            "2",
            "3",
            "4"
        ],
        poprawna: "A",
        obraz: "526.jpg"
    },
    {
        id: 527,
        pytanie: "W systemie Linux program dd, którego przykład zastosowania przedstawiono w ramce, pozwala na\ndd if=/dev/sdb of=/home/użytkownik/Linux.iso",
        odpowiedzi: [
            "utworzenie dowiązania symbolicznego Linux.iso do katalogu.",
            "konfigurowanie interfejsu karty sieciowej.",
            "utworzenie obrazu nośnika danych.",
            "konwersję systemu plików z wersji ext3 na ext4."
        ],
        poprawna: "C"
    },
    {
        id: 528,
        pytanie: "Technologia Hyper- threading stosowana w procesorach umożliwia",
        odpowiedzi: [
            "wymianę danych pomiędzy procesorem a dyskiem twardym z prędkością pracy procesora.",
            "zwiększenie szybkości pracy zegara.",
            "automatyczną regulację częstotliwości rdzeni procesora w zależności od jego obciążenia.",
            "wykonywanie przez jeden rdzeń procesora dwóch niezależnych wątków jednocześnie."
        ],
        poprawna: "D"
    },
    {
        id: 529,
        pytanie: "Tworzenie zaszyfrowanych połączeń między hostami przez sieć publiczną Internet, stosowane w połączeniach VPN (Virtual Private Network), to",
        odpowiedzi: [
            "tunelowanie",
            "trasowanie",
            "mostkowanie",
            "mapowanie"
        ],
        poprawna: "A"
    },
    {
        id: 530,
        pytanie: "Gdzie przechowywane są informacje o kontach użytkowników domenowych w systemach Windows Server?",
        odpowiedzi: [
            "W plikach hosts na każdym komputerze używanym w domenie.",
            "W bazie SAM zapisanej na lokalnym komputerze.",
            "W pliku users w katalogu komputera C:\\Windows\\system32.",
            "W bazie danych kontrolera domeny."
        ],
        poprawna: "D"
    },
    {
        id: 531,
        pytanie: "W systemie Windows Server, w zasadach haseł ustawionych za pomocą Zasad zabezpieczeń lokalnych, jest włączona opcja Hasło musi spełniać wymagania co do złożoności. Z co najmniej ilu znaków musi się składać hasło użytkownika?",
        odpowiedzi: [
            "12 znaków",
            "10 znaków",
            "6 znaków",
            "5 znaków"
        ],
        poprawna: "C"
    },
    {
        id: 532,
        pytanie: "Watomierz jest stosowany do pomiaru",
        odpowiedzi: [
            "mocy czynnej",
            "rezystancji",
            "natężenia prądu elektrycznego",
            "napięcia prądu elektrycznego"
        ],
        poprawna: "A"
    },
    {
        id: 533,
        pytanie: "Na rysunku przedstawiono grot wkrętaka typu",
        odpowiedzi: [
            "Torx",
            "Krzyżowego",
            "Imbus",
            "Tri-wing"
        ],
        poprawna: "A",
        obraz: "533.jpg"
    },
    {
        id: 534,
        pytanie: "Który rodzaj plotera, stosowany do pracy z płaskimi powierzchniami wielkoformatowymi, wykorzystuje do wydruku odpornego na czynniki zewnętrzne farby na bazie rozpuszczalników?",
        odpowiedzi: [
            "Solwentowy",
            "Pisakowy",
            "Tnący",
            "Grawerujący"
        ],
        poprawna: "A"
    },
    {
        id: 535,
        pytanie: "Której funkcji należy użyć do wykonania kopii zapasowej rejestru systemowego w edytorze regedit?",
        odpowiedzi: [
            "Kopiuj nazwę klucza.",
            "Importuj",
            "Załaduj gałąź rejestru",
            "Eksportuj"
        ],
        poprawna: "D"
    },
    {
        id: 536,
        pytanie: "W systemach Linux, aby dodać repozytorium, można użyć poleceń",
        odpowiedzi: [
            "zypper ref oraz add-apt-repository",
            "zypper ar oraz add-apt-repository",
            "zypper lr oraz remove-apt-repository",
            "zypper rr oraz remove-apt-repository"
        ],
        poprawna: "B"
    },
    {
        id: 537,
        pytanie: "Ekstruder jest stosowany jako element drukarek",
        odpowiedzi: [
            "3D",
            "laserowych",
            "atramentowych",
            "igłowych"
        ],
        poprawna: "A"
    },
    {
        id: 538,
        pytanie: "Przy rozbudowie sieci Ethernet działającej w oparciu o standard 1000BaseT jest wymagane stosowanie skrętki, w kategorii co najmniej",
        odpowiedzi: [
            "6a",
            "5e",
            "3",
            "6"
        ],
        poprawna: "B"
    },
    {
        id: 539,
        pytanie: "Którą rolę serwera Windows, oznaczoną na ilustracji cyframi od 1 do 4, należy wybrać, aby zainstalować środowisko do wirtualizacji?",
        odpowiedzi: [
            "1",
            "3",
            "4",
            "2"
        ],
        poprawna: "A",
        obraz: "539.jpg"
    },
    {
        id: 540,
        pytanie: "Który zapis w systemie binarnym odpowiada liczbie 91H?",
        odpowiedzi: [
            "10011001",
            "10001001",
            "10010001",
            "10001011"
        ],
        poprawna: "C"
    },
    {
        id: 541,
        pytanie: "Który protokół odpowiada za zamianę adresów IP na adresy MAC?",
        odpowiedzi: [
            "ARP",
            "ATM",
            "SMTP",
            "SNMP"
        ],
        poprawna: "A"
    },
    {
        id: 543,
        pytanie: "Która usługa Windows Serwer umożliwia zdalną oraz szybką instalację systemów klienckich Windows na komputerach podłączonych bezpośrednio do sieci LAN?",
        odpowiedzi: [
            "ReFS",
            "LDAP",
            "WDS",
            "IIS"
        ],
        poprawna: "C"
    },
    {
        id: 544,
        pytanie: "Z przedstawionej dokumentacji technicznej płyty głównej GA-K8NF-9-RH rev. 2.x wynika, że maksymalna liczba możliwych do zamontowania kart rozszerzeń (pomijając interfejs USB) wynosi",
        odpowiedzi: [
            "2",
            "6",
            "3",
            "5"
        ],
        poprawna: "B",
        obraz: "544.jpg"
    },
    {
        id: 545,
        pytanie: "W systemie Linux polecenie ln służy do +++++++++++++++++",
        odpowiedzi: [
            "restart systemu.",
            "wyświetlania informacji o dostępnej przestrzeni dyskowej.",
            "zmiany ustawień terminala.",
            "tworzenia dowiązania do pliku."
        ],
        poprawna: "D"
    },
    {
        id: 546,
        pytanie: "Program Wireshark stosowany jest do",
        odpowiedzi: [
            "sprawdzania występowania błędów na dysku twardym.",
            "zmiany atrybutów plików i katalogów.",
            "analizy pakietów przesyłanych w sieci komputerowej.",
            "zarządzania zdalnym komputerem w domenie Windows."
        ],
        poprawna: "C"
    },
    {
        id: 547,
        pytanie: "W sieci komputerowej do kierowania ruchem oraz wyznaczania odpowiedniej trasy pakietów stosuje się",
        odpowiedzi: [
            "koncentratory.",
            "adaptery.",
            "ekspandery.",
            "rutery."
        ],
        poprawna: "D"
    },
    {
        id: 548,
        pytanie: "Wychylny drążek, zamontowany na podstawce, służący do sterowania ruchem obiektu jest elementem",
        odpowiedzi: [
            "dżojstika",
            "trackballa",
            "touchpada",
            "digitizera"
        ],
        poprawna: "A"
    },
    {
        id: 549,
        pytanie: "Oprogramowanie Microsoft Hyper-V przeznaczone jest do",
        odpowiedzi: [
            "wirtualizacji fizycznych komputerów.",
            "emulacji procesu podejmowania decyzji przez człowieka.",
            "bezpośredniego strumieniowania materiałów audio i wideo przez Internet.",
            "profesjonalnego składu tekstu przed jego publikacją."
        ],
        poprawna: "A"
    },
    {
        id: 550,
        pytanie: "Szkodliwe oprogramowanie rejestrujące sekwencje wciskanych przez użytkownika komputera przycisków na klawiaturze to",
        odpowiedzi: [
            "crack.",
            "nmap.",
            "backdoor.",
            "keylogger."
        ],
        poprawna: "D"
    },
    {
        id: 551,
        pytanie: "Rozkazem procesora realizującym funkcję odejmowania w języku asembler jest",
        odpowiedzi: [
            "SUB",
            "DEC",
            "ADD",
            "CLR"
        ],
        poprawna: "A"
    },
    {
        id: 552,
        pytanie: "Połączenie ze sobą trzech dysków fizycznych, każdy po 250 GB, w taki sposób, aby widziane one były jako jeden dysk logiczny o wielkości około 750 GB, jest cechą charakterystyczną dla macierzy",
        odpowiedzi: [
            "RAID 5",
            "RAID 3",
            "RAID 1",
            "RAID 0"
        ],
        poprawna: "D"
    },
    {
        id: 553,
        pytanie: "Na ilustracji przedstawiono efekt działania polecenia systemowego, służącego do wyświetlenia",
        odpowiedzi: [
            "informacji o skojarzeniach plików wykonywalnych.",
            "listy katalogów otwartych przez użytkownika zdalnego o nazwie szachy.",
            "atrybuty katalogu szachy.",
            "uprawnień do zasobu lokalnego."
        ],
        poprawna: "D",
        obraz: "553.jpg"
    },
    {
        id: 554,
        pytanie: "Administrator podzielił sieć komputerową o adresie IPv4 192.168.1.0/24, na mniejsze sieci każda o masce 27 bitowej. Ile adresów hostów ma obecnie do dyspozycji w każdej z nich?",
        odpowiedzi: [
            "32",
            "30",
            "14",
            "16"
        ],
        poprawna: "B"
    },
    {
        id: 555,
        pytanie: "Rodzajem licencji wolnego i otwartego oprogramowania jest",
        odpowiedzi: [
            "GPL.",
            "OEM.",
            "EULA.",
            "MOLP."
        ],
        poprawna: "A"
    },
    {
        id: 556,
        pytanie: "W systemie Windows 10 poleceniem służącym do konfiguracji systemu plików jest",
        odpowiedzi: [
            "doskey.",
            "fsutil.",
            "forfiles.",
            "mklink."
        ],
        poprawna: "B"
    },
    {
        id: 557,
        pytanie: "Które złącze USB przedstawiono na ilustracji?",
        odpowiedzi: [
            "Typu B",
            "Typu A",
            "Typu AB",
            "Typu C"
        ],
        poprawna: "D",
        obraz: "557.jpg"
    },
    {
        id: 558,
        pytanie: "# iptables -A INPUT --protocol tcp --destination-port 5555 -j ???\n\nW ramce przedstawiono polecenie systemu Linux służące do konfiguracji zapory sieciowej. Co należy wpisać w miejscu znaków zapytania, aby reguła zezwalała na ruch przychodzący na tym porcie?",
        odpowiedzi: [
            "DROP",
            "START",
            "UP",
            "ACCEPT"
        ],
        poprawna: "D"
    },
    {
        id: 559,
        pytanie: "Która technika ataków hakerskich polega na wysyłaniu do serwera bardzo dużej liczby zapytań, co  powoduje jego przeciążenie, a w konsekwencji nawet jego wyłączenie?",
        odpowiedzi: [
            "XSS",
            "DDoS",
            "Phising",
            "Hijacking"
        ],
        poprawna: "B"
    },
    {
        id: 560,
        pytanie: "Przedstawiony na ilustracji schemat rotacji taśm jest strategią wykonywania kopii zapasowych to",
        odpowiedzi: [
            "Dyspozytor.",
            "Round Robin.",
            "Dziadek-Ojciec-Syn.",
            "Wieża Hanoi."
        ],
        poprawna: "D",
        obraz: "560.jpg"
    },
    {
        id: 561,
        pytanie: "W systemie Linux programem służącym do monitorowania działania sieci komputerowej jest",
        odpowiedzi: [
            "iftop",
            "synaptic",
            "leafpad",
            "wine"
        ],
        poprawna: "A"
    },
    {
        id: 562,
        pytanie: "Który protokół umożliwia synchronizację czasu?",
        odpowiedzi: [
            "RAS",
            "SSH",
            "NTP",
            "PPP"
        ],
        poprawna: "C"
    },
    {
        id: 563,
        pytanie: "Karta telewizyjna komputera przetwarza obraz telewizyjny między innymi poprzez zastosowanie tunera",
        odpowiedzi: [
            "MIME",
            "DQPSK",
            "DVB",
            "HDMI"
        ],
        poprawna: "C"
    },
    {
        id: 564,
        pytanie: "Które oprogramowanie należy zainstalować w systemie operacyjnym Linux, aby możliwe było uruchamianie aplikacji przeznaczonych dla systemu Windows?",
        odpowiedzi: [
            "YaST",
            "Htop",
            "GIMP",
            "Wine"
        ],
        poprawna: "D"
    },
    {
        id: 565,
        pytanie: "Skrótem WLAN oznaczona jest",
        odpowiedzi: [
            "rozległa sieć komputerowa.",
            "bezprzewodowa sieć lokalna.",
            "wirtualna sieć lokalna.",
            "wirtualna sieć przywatna."
        ],
        poprawna: "B"
    },
    {
        id: 566,
        pytanie: "Zgodnie z wytycznymi WCAG 2.0 serwisy internetowe muszą spełniać określone wymagania dotyczące poziomów dostępności. Dla poziomu AA serwis musi spełniać także kryteria dla",
        odpowiedzi: [
            "poziomu AAA",
            "poziomu BBB",
            "poziomu A",
            "poziomu B"
        ],
        poprawna: "C"
    },
    {
        id: 567,
        pytanie: "Dyrektor firmy informatycznej chce przekazać istotną wiadomość swoim współpracownikom. Jak nazywa się pierwszy etap rozpoczynającego się procesu komunikowania?",
        odpowiedzi: [
            "Intencja.",
            "Przekaz.",
            "Kodowanie.",
            "Zrozumienie."
        ],
        poprawna: "A"
    },
    {
        id: 568,
        pytanie: "W sieciach bezprzewodowych standardem szyfrowania używającym najdłuższego klucza szyfrującego jest",
        odpowiedzi: [
            "FMS",
            "WEP",
            "PSK",
            "WPA3"
        ],
        poprawna: "D"
    },
    {
        id: 569,
        pytanie: "Po wymianie procesora w komputerze pracującym pod kontrolą systemu Linux jego obciążenie można monitorować za pomocą polecenia",
        odpowiedzi: [
            "grep",
            "top",
            "stat",
            "uptime"
        ],
        poprawna: "B"
    },
    {
        id: 570,
        pytanie: "Czas trwania blokady konta po nieudanej próbie logowania można skonfigurować w systemie Windows za pomocą przystawki",
        odpowiedzi: [
            "certmgr.msc",
            "secpol.msc",
            "lusrmgr.msc",
            "devmgmt.msc"
        ],
        poprawna: "B"
    },
    {
        id: 571,
        pytanie: "Na ilustracji przedstawiono symbol bramki logicznej, która realizuje funkcję",
        odpowiedzi: [
            "różnicy symetrycznej.",
            "negacji alternatywy wykluczającej.",
            "negacji sumy logicznej.",
            "koniunkcji."
        ],
        poprawna: "B",
        obraz: "571.jpg"
    },
    {
        id: 572,
        pytanie: "Kierownik działu IT opracował szczegółowy plan zmian funkcjonowania swojego działu. Na którym etapie realizacji tego planu będzie mógł uzyskać dane z otoczenia o efektach wprowadzonych zmian?",
        odpowiedzi: [
            "Wdrożenie zmian.",
            "Informacje zwrotne.",
            "Podjęcie próby.",
            "Określenie celu."
        ],
        poprawna: "B"
    },
    {
        id: 573,
        pytanie: "Przetwornik elektroakustyczny stosowany do zamiany fal dźwiękowych na prąd elektryczny to",
        odpowiedzi: [
            "kontroler SCSI.",
            "mikrofon.",
            "głośnik.",
            "frame grabber."
        ],
        poprawna: "B"
    },
    {
        id: 574,
        pytanie: "Zmiana maski podsieci na wartość 29 dla sieci komputerowej o adresie 192.168.1.0/24 umożliwi wydzielenie w niej maksymalnie",
        odpowiedzi: [
            "4 równych podsieci",
            "32 równych podsieci",
            "8 równych podsieci",
            "16 równych podsieci"
        ],
        poprawna: "B"
    },
    {
        id: 575,
        pytanie: "Jak nazywa się punkt rozdzielczy sieci komputerowej obejmujący zasięgiem piętro budynku?",
        odpowiedzi: [
            "centralny punkt dystrybucyjny",
            "lokalny punkt dystrybucyjny",
            "kondygnacyjny punkt dystrybucyjny",
            "budynkowy punkt dystrybucyjny"
        ],
        poprawna: "C"
    },
    {
        id: 577,
        pytanie: "Chorobą zawodową informatyka jest",
        odpowiedzi: [
            "zaburzenia słuchu.",
            "zwyrodnienie stawu kolanowego.",
            "zapalenie krtani.",
            "zespół cieśni nadgarstka."
        ],
        poprawna: "D"
    },
    {
        id: 578,
        pytanie: "Przedstawiona na ilustracji część urządzenia to element",
        odpowiedzi: [
            "karty graficznej do notebooka.",
            "dysku SSD.",
            "modułu pamięci Cache.",
            "GPU."
        ],
        poprawna: "B",
        obraz: "578.png"
    },
    {
        id: 579,
        pytanie: "Elementem służącym do utrwalania tonera na papierze podczas wydruku z drukarki laserowej jest",
        odpowiedzi: [
            "elektroda ładująca.",
            "bęben światłoczuły.",
            "listwa czyszcząca.",
            "wałek grzewczy."
        ],
        poprawna: "D"
    },
    {
        id: 580,
        pytanie: "Który standard szyfrowania  transmisji bezprzewodowej używa mechanizmu SAE (ang. Simultaneous Authentication of Equals) utrudniający ataki brute-force?",
        odpowiedzi: [
            "WPA",
            "WPA3",
            "WEP",
            "WPA2"
        ],
        poprawna: "B"
    },
    {
        id: 581,
        pytanie: "Zarządzanie pasmem w przełączniku (ang. bandwidth control) jest funkcją umożliwiającą",
        odpowiedzi: [
            "przesyłanie danych z wybranego portu do innego portu.",
            "zdalny dostęp do urządzenia.",
            "łączenie przełączników równocześnie kilkoma przewodami.",
            "ograniczenie przepustowości na wybranym porcie."
        ],
        poprawna: "D"
    },
    {
        id: 582,
        pytanie: "Bęben światłoczuły jest stosowany w drukarkach",
        odpowiedzi: [
            "atramentowych.",
            "termosublimacyjnych.",
            "laserowych.",
            "igłowych."
        ],
        poprawna: "C"
    },
    {
        id: 583,
        pytanie: "Urządzenie podłączone do zasilania wtykiem SATA, którego żółty przewód został uszkodzony, nie otrzyma napięcia o wartości",
        odpowiedzi: [
            "12 V",
            "5 V",
            "8,5 V",
            "3,3 V"
        ],
        poprawna: "A"
    },
    {
        id: 584,
        pytanie: "Które rozwiązanie należy zastosować, aby udostępnić w sieci jedynie folder C:\\instrukcje wyłącznie użytkownikom należącym do grupy Serwisanci?",
        odpowiedzi: [
            "Udostępnić grupie Wszyscy dysk C:",
            "Udostępnić grupie Serwisanci dysk C:",
            "Udostępnić grupie Serwisanci folder C:\\instrukcje",
            "Udostępnić grupie Wszyscy folder C:\\instrukcje"
        ],
        poprawna: "C"
    },
    {
        id: 585,
        pytanie: "Który błąd okablowania jest widoczny na przedstawionym wyświetlaczu testera pokazującego mapę połączeń żył kabla typu skrętka?",
        odpowiedzi: [
            "Zwarcie.",
            "Pary odwrócone.",
            "Rozwarcie.",
            "Pary skrzyżowane."
        ],
        poprawna: "C",
        obraz: "585.png"
    },
    {
        id: 586,
        pytanie: "Narzędziem służącym do połączenia pigtaila z włóknami kabla światłowodowego jest",
        odpowiedzi: [
            "stacja lutownicza, wykorzystująca mikroprocesor do regulacji temperatury.",
            "narzędzie zaciskowe do wtyków 8P8C, wyposażone w odpowiednie dla kabla gniazdo.",
            "przedłużacz kategorii 5e z zestawem pasywnych kabli o prędkości połączenia 100 Mb/s.",
            "spawarka światłowodowa, spajająca włókna za pomocą łuku elektrycznego."
        ],
        poprawna: "D"
    },
    {
        id: 587,
        pytanie: "Do której grupy w systemie Windows Server należy przydzielić użytkownika odpowiedzialnego tylko za archiwizowanie danych przechowywanych na dysku serwera?",
        odpowiedzi: [
            "Użytkownicy domeny.",
            "Użytkownicy zaawansowani.",
            "Operatorzy kopii zapasowych.",
            "Użytkownicy pulpitu zdalnego."
        ],
        poprawna: "C"
    },
    {
        id: 588,
        pytanie: "W systemach rodziny Windows, odpowiednikiem Linuksowego programu fsck, jest program",
        odpowiedzi: [
            "icacls",
            "erase",
            "tasklist",
            "chkdsk"
        ],
        poprawna: "D"
    },
    {
        id: 589,
        pytanie: "Usługa umożliwiająca przejęcie pulpitu pomiędzy dwoma systemami Windows to",
        odpowiedzi: [
            "pulpit zdalny",
            "FTP",
            "DHCP",
            "serwer plików"
        ],
        poprawna: "A"
    },
    {
        id: 590,
        pytanie: "Którą technologię, opracowaną przez firmę NVIDIA, powinny wspierać dwie karty graficzne montowane w komputerze, aby możliwa była korelacja ich wzajemnej pracy?",
        odpowiedzi: [
            "CROSSFIRE",
            "RAMDAC",
            "SLI",
            "ATI"
        ],
        poprawna: "C"
    },
    {
        id: 591,
        pytanie: "Spojrzenie na sprawę z perspektywy rozmówcy oraz umiejętność wczucia się w jego emocje i sposób myślenia, to rodzaj słuchania",
        odpowiedzi: [
            "świadomego.",
            "empatycznego.",
            "aktywnego.",
            "otwartego."
        ],
        poprawna: "B"
    },
    {
        id: 592,
        pytanie: "Odpowiednikiem macierzy RAID 1 w systemach Windows jest wolumin",
        odpowiedzi: [
            "prosty.",
            "łączony.",
            "dublowany.",
            "rozłożony."
        ],
        poprawna: "C"
    },
    {
        id: 593,
        pytanie: "Który typ płyty głównej ma najmniejsze rozmiary?",
        odpowiedzi: [
            "Micro BTX",
            "Mini ITX",
            "Flex ATX",
            "Mini ATX"
        ],
        poprawna: "B"
    },
    {
        id: 594,
        pytanie: "Która funkcja punktu dostępowego pozwala zabezpieczyć sieć bezprzewodową tak, aby tylko urządzenia o określonych adresach fizycznych mogły się do niej podłączyć?",
        odpowiedzi: [
            "Uwierzytelnianie.",
            "Nadanie SSID.",
            "Filtrowanie adresów MAC.",
            "Radius (Remote Authentication Dial In User Service)"
        ],
        poprawna: "C"
    },
    {
        id: 595,
        pytanie: "Które elementy podlegają utylizacji w wyspecjalizowanych zakładach przetwarzania z uwagi na zawartość niebezpiecznych substancji lub pierwiastków chemicznych?",
        odpowiedzi: [
            "Przewody.",
            "Radiatory.",
            "Obudowy komputerów.",
            "Tonery."
        ],
        poprawna: "D"
    },
    {
        id: 596,
        pytanie: "Którą maskę podsieci należy zastosować, aby podzielić sieć o adresie 193.115.95.0 z maską 255.255.255.0 na 8 równych podsieci.",
        odpowiedzi: [
            "255.255.255.240",
            "255.255.255.248",
            "255.255.255.224",
            "255.255.255.192"
        ],
        poprawna: "C"
    },
    {
        id: 597,
        pytanie: "Aby umożliwić wymianę danych pomiędzy siecią lokalną a inną siecią, o odmiennej adresacji IP, należy wykorzystać",
        odpowiedzi: [
            "Punkt dostępowy.",
            "Repeater.",
            "Ruter.",
            "Koncentrator."
        ],
        poprawna: "C"
    },
    {
        id: 598,
        pytanie: "Aby możliwe było wykorzystanie macierzy RAID 1, potrzeba minimum",
        odpowiedzi: [
            "4 dysków",
            "3 dysków",
            "5 dysków",
            "2 dysków"
        ],
        poprawna: "D"
    },
    {
        id: 599,
        pytanie: "Który zapis jest postacią kropkowo-dziesiętną maski o prefiksie /25?",
        odpowiedzi: [
            "255.255.255.128",
            "255.255.255.192",
            "255.255.255.0",
            "255.255.0.0"
        ],
        poprawna: "A"
    },
    {
        id: 600,
        pytanie: "Który typ licencji zapewnia użytkownikowi wszystkie 4 wolności zapisane w ramce?",
        odpowiedzi: [
            "FREEWARE",
            "MOLP",
            "ADWARE",
            "GNU GPL"
        ],
        poprawna: "D",
        obraz: "600.jpg"
    },
    {
        id: 601,
        pytanie: "Na podstawie którego adresu w przełączniku jest podejmowana decyzja o przesyłaniu ramki?",
        odpowiedzi: [
            "Adresu docelowego IP.",
            "Adresu docelowego MAC.",
            "Adresu źródłowego MAC.",
            "Adresu źródłowego IP."
        ],
        poprawna: "B"
    },
    {
        id: 602,
        pytanie: "Podłączenie udostępnionego folderu jako zasobu sieciowego w systemie Windows Server, widocznego na stacji roboczej w postaci dysku oznaczonego literą, jest możliwe dzięki wykonaniu operacji",
        odpowiedzi: [
            "defragmentacji.",
            "zerowania.",
            "oczyszczania.",
            "mapowania."
        ],
        poprawna: "D"
    },
    {
        id: 604,
        pytanie: "Kabel typu skrętka, w którym każda para przewodów znajduje się w osobnym ekranie z folii, przy czym wszystkie pary dodatkowo znajdują się w ekranie z folii, jest oznaczony symbolem",
        odpowiedzi: [
            "F/UTP",
            "F/FTP",
            "S/UTP",
            "S/FTP"
        ],
        poprawna: "B"
    },
    {
        id: 605,
        pytanie: "Atak typu hijacking na serwer sieciowy charakteryzuje się",
        odpowiedzi: [
            "zbieraniem informacji na temat atakowanej sieci i szukaniem luk w sieci.",
            "przejęciem kontroli nad połączeniem między komunikującymi się komputerami.",
            "przeciążeniem aplikacji udostępniającej określone dane.",
            "łamaniem zabezpieczeń przed niedozwolonym użytkowaniem programów."
        ],
        poprawna: "B"
    },
    {
        id: 606,
        pytanie: "Które polecenie w systemach operacyjnych Linux jest stosowane do wyświetlania konfiguracji interfejsów sieciowych?",
        odpowiedzi: [
            "tracert",
            "ifconfig",
            "ping",
            "ipconfig"
        ],
        poprawna: "B"
    },
    {
        id: 607,
        pytanie: "Aby zaprojektowaną sieć komputerową można było rozbudować, to powinna się ona charakteryzować",
        odpowiedzi: [
            "nadmiarowością.",
            "wydajnością.",
            "skalowalnością.",
            "redundancją."
        ],
        poprawna: "C"
    },
    {
        id: 608,
        pytanie: "W systemie rodziny Windows, aby sprawdzić, które połączenia są obecnie zestawiane oraz na których portach komputer nasłuchuje, należy zastosować polecenie",
        odpowiedzi: [
            "arp",
            "tracert",
            "net use",
            "netstat"
        ],
        poprawna: "D"
    },
    {
        id: 609,
        pytanie: "Organ administracji państwowej, który został powołany w celu podejmowania działań zmierzających do zapewnienia prawidłowego i bezpiecznego działania urządzeń technicznych, to",
        odpowiedzi: [
            "Inspekcja Ochrony Środowiska (IOŚ).",
            "Urząd Dozoru Technicznego (UDT).",
            "Państwowa Inspekcja Pracy (PIP).",
            "Zakład Ubezpieczeń Społecznych (ZUS)."
        ],
        poprawna: "B"
    },
    {
        id: 610,
        pytanie: "Na podstawie przedstawionych w tabeli danych technicznych drukarki, wskaż maksymalną liczbę arkuszy papieru, którą pomieści taca wyjściowa.",
        odpowiedzi: [
            "150",
            "250",
            "50",
            "80"
        ],
        poprawna: "A",
        obraz: "610.jpg"
    },
    {
        id: 611,
        pytanie: "Wyznaczanie optymalnej trasy dla połączenia sieciowego, to",
        odpowiedzi: [
            "routing.",
            "sniffing.",
            "tracking.",
            "conntrack."
        ],
        poprawna: "A"
    },
    {
        id: 612,
        pytanie: "Wskaż właściwą kolejność operacji przygotowujących nowy laptop do pracy ?",
        odpowiedzi: [
            "Podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego.",
            "Montaż baterii, podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego.",
            "Włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, podłączenie zewnętrznego zasilania sieciowego, wyłączenie laptopa po instalacji systemu operacyjnego.",
            "Podłączenie zewnętrznego zasilania sieciowego, wyłączenia laptopa, instalacja systemu operacyjnego, montaż baterii, wyłączenie laptopa po instalacji systemu operacyjnego."
        ],
        poprawna: "B"
    },
    {
        id: 613,
        pytanie: "Jaki będzie całkowity koszt robocizny montażu 20 modułów RJ45 ze złączem krawędziowym narzędziowym na przewodach 4-parowych, jeżeli stawka godzinowa montera wynosi 15 zł/h, a według tabeli KNR czas montażu jednego modułu to 0,10 r-g?",
        odpowiedzi: [
            "7,50 zł",
            "15,00 zł",
            "50,00 zł",
            "30,00 zł"
        ],
        poprawna: "D"
    },
    {
        id: 614,
        pytanie: "Która usługa pozwala rejestrować i rozpoznawać nazwy NetBIOS jako używane w sieci adresy IP",
        odpowiedzi: [
            "WAS",
            "WINS",
            "DHCP",
            "HTTPS"
        ],
        poprawna: "B"
    },
    {
        id: 615,
        pytanie: "Na zdjęciu przedstawiono kość pamięci",
        odpowiedzi: [
            "SDRAM",
            "SIMM",
            "RIMM",
            "RAMBUS"
        ],
        poprawna: "A",
        obraz: "615.jpg"
    },
    {
        id: 616,
        pytanie: "Jakie elementy znajdują się na przedstawionej płycie głównej?",
        odpowiedzi: [
            "2 złącza ISA, 3 złącza PCI, 4 złącza pamięci DIMM",
            "3 złącza ISA, 4 złącza PCI, 2 złącza pamięci DIMM",
            "2 złącza ISA, 4 złącza PCI, 3 złącza pamięci DIMM",
            "4 złącza ISA, 2 złącza PCI, 3 złącza pamięci DIMM"
        ],
        poprawna: "C",
        obraz: "616.jpg"
    },
    {
        id: 617,
        pytanie: "Na podstawie przedstawionego cennika oblicz, jaki będzie koszt brutto jednego dwumodułowegopodwójnego natynkowego gniazda abonenckiego.",
        odpowiedzi: [
            "25,00 zł",
            "32,00 zł",
            "28,00 zł",
            "18,00 zł"
        ],
        poprawna: "C",
        obraz: "617.jpg"
    },
    {
        id: 618,
        pytanie: "Na rysunku przedstawiono zrzut ekranu z przeprowadzonego testu",
        odpowiedzi: [
            "czasu oczekiwania pamięci.",
            "czasu dostępu do dysku twardego.",
            "czasu dostępu do napędu optycznego.",
            "czasu opróżniania buforu systemowego."
        ],
        poprawna: "A",
        obraz: "618.jpg"
    },
    {
        id: 619,
        pytanie: "Co pozwala utrzymać równomierny rozkład ciepła między procesorem a radiatorem?",
        odpowiedzi: [
            "Pasta grafitowa.",
            "Mieszanka termiczna.",
            "Klej.",
            "Silikonowy spray."
        ],
        poprawna: "B"
    },
    {
        id: 620,
        pytanie: "Wskaż złącze, które należy wykorzystać do podłączenia wentylatora, którego parametry przedstawiono w tabeli.",
        odpowiedzi: [
            "Obraz A.",
            "Obraz B.",
            "Obraz C.",
            "Obraz D."
        ],
        poprawna: "B",
        obraz: "620.jpg"
    },
    {
        id: 621,
        pytanie: "Z przedstawionego zrzutu wynika, że za pomocą przeglądarki internetowej wykonano pomiar",
        odpowiedzi: [
            "strat mocy optycznej.",
            "tłumienia kabla miedzianego.",
            "czasu odpowiedzi od wybranego serwera.",
            "liczby transmitowanych pakietów między wybranymi serwerami."
        ],
        poprawna: "C",
        obraz: "621.png"
    },
    {
        id: 622,
        pytanie: "Którego wkrętu należy użyć, aby zamocować napęd optyczny o szerokości 5,25” w obudowie wymagającej przykręcania napędów?",
        odpowiedzi: [
            "Obraz A.",
            "Obraz B.",
            "Obraz C.",
            "Obraz D."
        ],
        poprawna: "B",
        obraz: "622.png"
    },
    {
        id: 623,
        pytanie: "Przedstawiona na obrazie usterka, widoczna na ekranie komputera, nie może być spowodowana przez",
        odpowiedzi: [
            "przegrzewanie się karty graficznej.",
            "złe napięcia podawane przez zasilacz.",
            "uszkodzenie modułów pamięci operacyjnej.",
            "spalenie rdzenia lub pamięci karty graficznej po overclockingu."
        ],
        poprawna: "C",
        obraz: "623.jpg"
    },
    {
        id: 624,
        pytanie: "Aby w systemie Windows 10 wykonać przedstawioną konfigurację słuchawek w Panelu sterowania, należy użyć apletu",
        odpowiedzi: [
            "ekran.",
            "dźwięk.",
            "menedżer urządzeń.",
            "menedżer poświadczeń."
        ],
        poprawna: "B",
        obraz: "624.png"
    },
    {
        id: 625,
        pytanie: "Protokół przeznaczony do korzystania z usług katalogowych, bazujący na standardzie X.500 i wykorzystywany między innymi do komunikacji z usługą Active Directory, to",
        odpowiedzi: [
            "LDAP",
            "NNTP",
            "OpenID",
            "IMAP"
        ],
        poprawna: "A"
    },
    {
        id: 626,
        pytanie: "Adres IPv4 192.168.100.250 zapisany w systemie dwójkowym ma postać",
        odpowiedzi: [
            "11000000.10101000.01100100.11111010",
            "11000100.10101000.01100100.11111110",
            "11000000.11000000.01100100.11111010",
            "11000000.10101000.01100100.11111110"
        ],
        poprawna: "A"
    },
    {
        id: 628,
        pytanie: "W systemie serwerowym Linux, w celu konfiguracji karty sieciowej o nazwie LAN1 oraz adresacji IP 192.168.100.100/24 wraz z uruchomieniem interfejsu, należy użyć polecenia",
        odpowiedzi: [
            "ifconfig start 192.168.100.100/24 LAN1",
            "ifconfig LAN1 192.168.100.100 netmask 255.255.255.0 up",
            "ifconfig LAN1 192.168.100.100/24 start",
            "ifconfig up 192.168.100.100 netmask 255.255.255.0 LAN1"
        ],
        poprawna: "B"
    },
    {
        id: 629,
        pytanie: "Którą z opcji należy włączyć w BIOS/UEFI, aby była możliwość instalacji systemu Windows 11 Professional zgodnie z zaleceniami producenta?",
        odpowiedzi: [
            "TPM 2.0",
            "RAS to CAS delay",
            "AI Overclock",
            "RAID"
        ],
        poprawna: "A"
    },
    {
        id: 630,
        pytanie: "Na ilustracji przedstawiono",
        odpowiedzi: [
            "dysk SSD M.2",
            "pamięć SO-DIMM do drukarki",
            "pamięć przenośną USB",
            "moduł SFP"
        ],
        poprawna: "A",
        obraz: "630.jpg"
    },
    {
        id: 631,
        pytanie: "Która warstwa modelu TCP/IP  opiera się na wykorzystywaniu określonych portów dla każdego połączenia oraz gwarantuje pewność transmisji?",
        odpowiedzi: [
            "Dostępu do sieci.",
            "Internetu.",
            "Transportu.",
            "Aplikacji."
        ],
        poprawna: "C"
    },
    {
        id: 632,
        pytanie: "Wskaż polecenie systemu Windows, które wyświetla wszystkie pliki o dowolnym rozszerzeniu i nazwie składającej się dokładnie z pięciu znaków, której ostatni znak to litera c",
        odpowiedzi: [
            "dir  ****c.?",
            "dir ?*c.*",
            "dir *c.?",
            "dir ????c.*"
        ],
        poprawna: "D"
    },
    {
        id: 633,
        pytanie: "Aby uzyskać wydruk o rozmiarze B5, należy w przedstawionym oknie ustawień drukarki zmienić opcję",
        odpowiedzi: [
            "Źródło.",
            "Opcje podawania papieru.",
            "Tryb wykończenia.",
            "Format."
        ],
        poprawna: "D",
        obraz: "633.jpg"
    },
    {
        id: 634,
        pytanie: "Przedstawione na ilustracji narzędzie przeznaczone jest do",
        odpowiedzi: [
            "łączenia włókien światłowodowych.",
            "przycinania kabli koncentrycznych.",
            "instalacji kabla w gnieździe LSA.",
            "testowania uszkodzonych par przewodów."
        ],
        poprawna: "C",
        obraz: "634.jpg"
    },
    {
        id: 635,
        pytanie: "W serwerowym systemie operacyjnym Linux, aby uruchomić serwer plików, można użyć oprogramowania",
        odpowiedzi: [
            "Kerberos",
            "LDAP",
            "Samba",
            "IIS"
        ],
        poprawna: "C"
    },
    {
        id: 636,
        pytanie: "Przedstawiony znak, umieszczony w miejscu pracy, ostrzega pracownika przed",
        odpowiedzi: [
            "skażeniem biologicznym.",
            "promieniowaniem laserowym.",
            "porażeniem prądem elektrycznym.",
            "silnym polem magnetycznym."
        ],
        poprawna: "D",
        obraz: "636.jpg"
    },
    {
        id: 637,
        pytanie: "Który protokół służy do połączenia z siecią szerokopasmową w sytuacji, gdy login i hasło użytkownika zostało nadane przez ISP?",
        odpowiedzi: [
            "ICMP",
            "PPPoE",
            "AARP",
            "CSMA/CD"
        ],
        poprawna: "B"
    },
    {
        id: 638,
        pytanie: "Aby zmniejszyć ryzyko nieautoryzowanego dostępu do konta w serwisie społecznościowym, można zastosować",
        odpowiedzi: [
            "uwierzytelnianie dwuskładnikowe.",
            "hasło takie samo jak login.",
            "szyfrowanie dysku lokalnego.",
            "połączenie taryfowe do sieci Internet."
        ],
        poprawna: "A"
    },
    {
        id: 639,
        pytanie: "Emocjonalnym objawem stresu jest",
        odpowiedzi: [
            "problemy z pamięcią.",
            "pocenie się.",
            "uczucie wrogości i odrzucenia.",
            "bezsenność."
        ],
        poprawna: "C"
    },
    {
        id: 640,
        pytanie: "W bezklasowej metodzie przydzielania adresów zapis adresu CIDR /26 oznacza maskę",
        odpowiedzi: [
            "255.255.255.192",
            "255.255.255.240",
            "255.255.254.0",
            "255.255.255.128"
        ],
        poprawna: "A"
    },
    {
        id: 641,
        pytanie: "Na ilustracji przedstawiono",
        odpowiedzi: [
            "tester miedzianych przewodów sieciowych.",
            "miernik uniwersalny.",
            "miernik mocy sygnału sieci bezprzewodowej.",
            "tester światłowodowych przewodów sieciowych."
        ],
        poprawna: "A",
        obraz: "641.jpg"
    },
    {
        id: 642,
        pytanie: "Ile minimalnie dysków należy użyć do utworzenia macierzy RAID 5?",
        odpowiedzi: [
            "2 dyski.",
            "3 dyski.",
            "4 dyski.",
            "5 dysków."
        ],
        poprawna: "B"
    },
    {
        id: 643,
        pytanie: "Na ilustracji przedstawiono szczegóły połączenia sieciowego pewnego komputera, na którym stwierdzono problem z otwieraniem stron internetowych po wpisywaniu ich nazwy w przeglądarce. Przyczyną takiej sytuacji jest",
        odpowiedzi: [
            "brak ustawionego adresu IP dla serwera DNS.",
            "ustawienie błędnego adresu maski podsieci.",
            "błędny adres IP bramy domyślnej.",
            "ustawienie dwóch różnych adresów IP karty sieciowej."
        ],
        poprawna: "A",
        obraz: "643.jpg"
    },
    {
        id: 644,
        pytanie: "Aby w systemie Linux Ubuntu dodać konto istniejącego użytkownika do grupy, można użyć polecenia",
        odpowiedzi: [
            "adduser",
            "usermod",
            "id",
            "groups"
        ],
        poprawna: "B"
    },
    {
        id: 645,
        pytanie: "Przedstawiona na wyświetlaczu urządzenia informacja dotyczy",
        odpowiedzi: [
            "wydruku 381 stron.",
            "konieczności załadowania papieru do podajnika.",
            "Informacji o wydruku jedynie 381 stron jednym tonerem.",
            "zacięcia papieru."
        ],
        poprawna: "D",
        obraz: "645.jpg"
    },
    {
        id: 646,
        pytanie: "W celu nawiązania połączenia stacjonarnego odbiornika z odległym nadajnikiem (połączenie punkt-punkt) stosuje się anteny",
        odpowiedzi: [
            "kierunkowe o dużym kącie apertury i małym zysku.",
            "sektorowe 180 stopni.",
            "dookólne wewnętrzne.",
            "kierunkowe o małym kącie apertury i dużym zysku."
        ],
        poprawna: "D"
    },
    {
        id: 647,
        pytanie: "Która struktura zespołu ma na celu zmniejszenie wpływu indywidualnych charakterów członków zespołu na finalny efekt projektu, a jej główną cechą jest brak rozpoznawalnego przywódcy?",
        odpowiedzi: [
            "Kolektywna.",
            "Terytorialna.",
            "Ekspercka.",
            "Chirurgiczna."
        ],
        poprawna: "A"
    },
    {
        id: 648,
        pytanie: "Na której ilustracji przedstawiono typowe urządzenie wejściowe?",
        odpowiedzi: [
            "Na ilustracji A.",
            "Na ilustracji B.",
            "Na ilustracji C.",
            "Na ilustracji D."
        ],
        poprawna: "B",
        obraz: "648.jpg"
    },
    {
        id: 649,
        pytanie: "Który ze standardów sieci bezprzewodowych używa techniki  wielodostępu z ortogonalnym podziałem częstotliwości OFDMA (Orthogonal frequency-division multiple access)?",
        odpowiedzi: [
            "802.11n",
            "802.11g",
            "802.11ac",
            "802.11ax"
        ],
        poprawna: "D"
    },
    {
        id: 650,
        pytanie: "W systemie Linux w celu ustawienia dostępu do pliku w taki sposób, aby właściciel miał wszystkie prawa do pliku, a pozostali tylko prawo do odczytu i uruchomienia, należy użyć polecenia chmod z wartością",
        odpowiedzi: [
            "711",
            "744",
            "733",
            "755"
        ],
        poprawna: "D"
    },
    {
        id: 651,
        pytanie: "Przedstawiona procedura z dokumentacji technicznej drukarki, dotyczy komunikatu oraz sposobu postępowania w przypadku",
        odpowiedzi: [
            "kalibracji głowic w drukarce atramentowej.",
            "wymiany bębna światłoczułego.",
            "błędnej instalacji kolorowej kasety tonera w odpowiednim miejscu.",
            "wymiany zestawu tuszy w drukarce atramentowej."
        ],
        poprawna: "C",
        obraz: "651.jpg"
    },
    {
        id: 652,
        pytanie: "Który rekord należy skonfigurować, aby powiązać nazwę domeny DNS na jej adres IPv6?",
        odpowiedzi: [
            "CAA",
            "A",
            "AAAA",
            "MX"
        ],
        poprawna: "C"
    },
    {
        id: 653,
        pytanie: "Menedżerem pakietów w systemie Ubuntu, wykorzystywanym między innymi do aktualizacji systemu, jest",
        odpowiedzi: [
            "aptitude",
            "wusa",
            "cat",
            "wuauclt"
        ],
        poprawna: "A"
    },
    {
        id: 654,
        pytanie: "W celu prostego zdalnego zarządzania stacjami roboczymi poprzez sieć Internet bez konieczności konfiguracji VPN można użyć programu",
        odpowiedzi: [
            "VirtualBox.",
            "Hamahi.",
            "WiFi Analyzer.",
            "AnyDesk."
        ],
        poprawna: "D"
    },
    {
        id: 655,
        pytanie: "Wskaż urządzenie umożliwiające bezpośrednie podłączenie sieci LAN do sieci Internet za pomocą medium światłowodowego.",
        odpowiedzi: [
            "Urządzenie A.",
            "Urządzenie B.",
            "Urządzenie C.",
            "Urządzenie D."
        ],
        poprawna: "A",
        obraz: "655.jpg"
    },
    {
        id: 656,
        pytanie: "Narzędzie, lub zestaw narzędzi, którego należy użyć do otwierania obudowy laptopa, by zminimalizować prawdopodobieństwo uszkodzenia obudowy (rysy, załamania tworzywa) przedstawiono na",
        odpowiedzi: [
            "ilustracji A.",
            "ilustracji B.",
            "ilustracji C.",
            "ilustracji D."
        ],
        poprawna: "C",
        obraz: "656.jpg"
    },
    {
        id: 657,
        pytanie: "Na ilustracji przedstawiono schemat ideowy",
        odpowiedzi: [
            "jednozakresowego punktu dostępowego z portem Fast Ethernet.",
            "przełącznika ośmioportowego.",
            "przełącznika warstwy trzeciej z pięcioma portami Gigabit Ethernet.",
            "dwuzakresowego rutera sieci bezprzewodowej z pięcioma portami Fast Ethernet."
        ],
        poprawna: "D",
        obraz: "657.jpg"
    },
    {
        id: 658,
        pytanie: "Które wartości zostaną uzyskane na wyjściu przedstawionego układu kombinacyjnego?",
        odpowiedzi: [
            "X = 1, Y = 0",
            "X = 0, Y = 1",
            "X = 0, Y = 0",
            "X = 1, Y = 1"
        ],
        poprawna: "D",
        obraz: "658.jpg"
    },
    {
        id: 659,
        pytanie: "Która ilustracja przedstawia pasywny element sieci?",
        odpowiedzi: [
            "Ilustracja A.",
            "Ilustracja B.",
            "Ilustracja C.",
            "Ilustracja D."
        ],
        poprawna: "C",
        obraz: "659.jpg"
    },
    {
        id: 661,
        pytanie: "Na ilustracji przedstawiono konfigurację dostępu do sieci bezprzewodowej, która dotyczy",
        odpowiedzi: [
            "ustawienia zabezpieczeń przez wpisanie adresów MAC urządzeń mających dostęp do tej sieci.",
            "nadania SSID sieci i określenia ilości dostępnych kanałów.",
            "podziału pasma przez funkcję QoS.",
            "ustawienia zabezpieczeń poprzez nadanie klucza dostępu do sieci Wi-Fi."
        ],
        poprawna: "D",
        obraz: "661.jpg"
    },
    {
        id: 662,
        pytanie: "Trollowanie w Internecie polega na",
        odpowiedzi: [
            "używaniu emotikonów w treści wiadomości.",
            "przepełnianiu skrzynki mailowej odbiorcy wiadomościami zawierającymi reklamy.",
            "wysyłaniu wiadomości e-mail bez tematu i podpisu.",
            "prowokowaniu kłótni na forum internetowym."
        ],
        poprawna: "D"
    },
    {
        id: 663,
        pytanie: "Aby dostęp do systemu Windows Serwer 2016 był możliwy dla 50 urządzeń, bez względu na liczbę użytkowników, należy w firmie zakupić licencję",
        odpowiedzi: [
            "External Connection.",
            "User CAL.",
            "Public Domain.",
            "Device CAL."
        ],
        poprawna: "D"
    },
    {
        id: 664,
        pytanie: "Na ilustracji przedstawiono opcje karty sieciowej w oprogramowaniu VirtualBox. Ustawienie na wartość sieć wewnętrzna, spowoduje, że",
        odpowiedzi: [
            "karta sieciowa maszyny wirtualnej będzie zmostkowana z kartą maszyny fizycznej.",
            "karta sieciowa maszyny wirtualnej będzie pracować w sieci wirtualnej.",
            "system wirtualny będzie zachowywać się tak, jakby był podłączony do rutera udostępniającego połączenie sieciowe.",
            "system wirtualny nie będzie miał zainstalowanej karty sieciowej."
        ],
        poprawna: "B",
        obraz: "664.jpg"
    },
    {
        id: 666,
        pytanie: "Grafik komputerowy sygnalizuje bardzo wolną pracę komputera. Z ilustracji przedstawiającej okno wydajności komputera wynika, że przyczyną tego może być",
        odpowiedzi: [
            "zbyt mała ilości pamięci RAM.",
            "wolna praca dysku twardego.",
            "wolne łącze internetowe.",
            "niska wydajność procesora graficznego."
        ],
        poprawna: "A",
        obraz: "666.jpg"
    },
    {
        id: 667,
        pytanie: "Która pula adresów IPv6 jest odpowiednikiem adresów prywatnych w IPv4?",
        odpowiedzi: [
            "fe80::/10",
            "fc00::/7",
            "3ffe::/16",
            "ff00::/8"
        ],
        poprawna: "B"
    },
    {
        id: 668,
        pytanie: "W celu doboru właściwej aktualizacji oprogramowania dla punktu dostępowego można skorzystać z identyfikacji",
        odpowiedzi: [
            "MAC",
            "PIN",
            "FCC-ID",
            "IP"
        ],
        poprawna: "C"
    },
    {
        id: 669,
        pytanie: "Aby w przeglądarce internetowej wyczyścić dane dotyczące adresów przeglądanych witryn, należy między innymi podać",
        odpowiedzi: [
            "ścieżkę do folderu przeglądarki z plikami tymczasowymi.",
            "zakres czasu, który ma obejmować ta czynność.",
            "nazwę użytkownika systemu, którego ta czynność dotyczy.",
            "uprawnienia zalogowanego użytkownika systemu operacyjnego."
        ],
        poprawna: "B"
    },
    {
        id: 670,
        pytanie: "Który zestaw przyrządów pomiarowych jest wystarczający do wykonania w obwodzie prądu stałego pomiaru mocy metodą techniczną?",
        odpowiedzi: [
            "Amperomierz i omomierz.",
            "Dwa woltomierze.",
            "Dwa amperomierze.",
            "Woltomierz i amperomierz."
        ],
        poprawna: "D"
    },
    {
        id: 671,
        pytanie: "EN IEC 60276:2019 to przykład oznaczenia normy",
        odpowiedzi: [
            "w przygotowaniu.",
            "polskiej.",
            "odrzuconej.",
            "europejskiej."
        ],
        poprawna: "D"
    },
    {
        id: 672,
        pytanie: "Udostępnienie drukarki sieciowej codziennie o tej samej porze należy ustawić we właściwościach drukarki, w zakładce",
        odpowiedzi: [
            "ogólne.",
            "zaawansowane.",
            "zabezpieczenia.",
            "udostępnianie."
        ],
        poprawna: "B"
    },
    {
        id: 673,
        pytanie: "Aby wyświetlić przedstawione opcje polecenia ping, należy w wierszu polecenia systemu Windows zapisać",
        odpowiedzi: [
            "ping \\?",
            "ping >?",
            "ping |?",
            "ping /?"
        ],
        poprawna: "D",
        obraz: "673.jpg"
    },
    {
        id: 674,
        pytanie: "Liczba 10D w systemie uzupełnień do dwóch jest równa",
        odpowiedzi: [
            "01010U2",
            "11010U2",
            "01110U2",
            "10010U2"
        ],
        poprawna: "A"
    },
    {
        id: 675,
        pytanie: "Która funkcja przełącznika zarządzalnego umożliwia kontrolę przepustowości każdego z wbudowanych portów?",
        odpowiedzi: [
            "IP Security.",
            "Link aggregation.",
            "Port Mirroring.",
            "Bandwidth control."
        ],
        poprawna: "D"
    },
    {
        id: 676,
        pytanie: "Przedstawiony schemat sieci kampusowej zawiera",
        odpowiedzi: [
            "6 pośrednich punktów dystrybucyjnych.",
            "6 budynkowych punktów dystrybucyjnych w 2 różnych obszarach.",
            "2 budynkowe punkty dystrybucyjne.",
            "2 piętrowe punkty dystrybucyjne z 6 gniazdami abonenckimi."
        ],
        poprawna: "C",
        obraz: "676.jpg"
    },
    {
        id: 677,
        pytanie: "Aby była możliwa komunikacja pomiędzy dwiema różnymi sieciami, do których należą karty sieciowe serwera, należy w systemie Windows Server dodać rolę",
        odpowiedzi: [
            "Serwer DNS.",
            "Usługi pulpitu zdalnego.",
            "Dostęp zdalny.",
            "Serwer DHCP."
        ],
        poprawna: "C"
    },
    {
        id: 678,
        pytanie: "Który z profili w systemie Windows umożliwia migrację ustawień konta pomiędzy stacjami roboczymi?",
        odpowiedzi: [
            "Globalny.",
            "Mobilny.",
            "Rozproszony.",
            "Lokalny."
        ],
        poprawna: "B"
    },
    {
        id: 679,
        pytanie: "Na podstawie tabeli wskaż, który model przełącznika Cisco Catalyst, zawiera 48 portów i możliwość doposażenia o wkładki światłowodowe.",
        odpowiedzi: [
            "2960-48TT-L",
            "2960-24PC-L",
            "2960-24LT-L",
            "2960-48TC-L"
        ],
        poprawna: "D",
        obraz: "679.jpg"
    },
    {
        id: 680,
        pytanie: "W procedurze Power-On Self-Test w pierwszej kolejności wykonywane jest sprawdzanie",
        odpowiedzi: [
            "sterowników urządzeń peryferyjnych.",
            "podzespołów niezbędnych do działania komputera.",
            "urządzeń peryferyjnych.",
            "pamięci wirtualnej."
        ],
        poprawna: "B"
    },
    {
        id: 681,
        pytanie: "W serwisie komputerowym dokumentem zawierającym informacje o sprzęcie, opis usterki, datę zgłoszenia i dane klienta jest",
        odpowiedzi: [
            "karta naprawy.",
            "WZ.",
            "paragon.",
            "PZ."
        ],
        poprawna: "A"
    },
    {
        id: 682,
        pytanie: "Przedstawione na ilustracji narzędzie służy do",
        odpowiedzi: [
            "oczyszczania elementów scalonych z kurzu.",
            "testowania płyty głównej.",
            "lutowania.",
            "pomiaru rezystancji."
        ],
        poprawna: "C",
        obraz: "682.jpg"
    },
    {
        id: 683,
        pytanie: "Które urządzenie może zostać wykorzystane do rutowania ruchu sieciowego między sieciami VLAN?",
        odpowiedzi: [
            "Przełącznik warstwy trzeciej.",
            "Przełącznik warstwy drugiej z tablicą adresów MAC komputerów z nim połączonych.",
            "Przełącznik warstwy drugiej obsługujący Port Based.",
            "Punkt dostępowy."
        ],
        poprawna: "A"
    },
    {
        id: 684,
        pytanie: "Jak nazywa się pamięć podręczną procesora?",
        odpowiedzi: [
            "NVRAM",
            "EPROM",
            "ROM",
            "CACHE"
        ],
        poprawna: "D"
    },
    {
        id: 685,
        pytanie: "W warstwie łącza danych modelu odniesienia ISO/OSI możliwą przyczyną błędów działania lokalnej sieci komputerowej jest",
        odpowiedzi: [
            "nadmierna liczba rozgłoszeń.",
            "tłumienie okablowania.",
            "zakłócenie sygnału radiowego.",
            "wadliwe okablowanie."
        ],
        poprawna: "D"
    },
    {
        id: 686,
        pytanie: "Rezultatem działania przedstawionego na ilustracji okna jest",
        odpowiedzi: [
            "wyłączenie konta Gość",
            "zmiana nazwy konta Administrator na Superużytkownik",
            "dodanie użytkownika Superużytkownik",
            "zmiana nazwy konta Gość na Superużytkownik"
        ],
        poprawna: "B",
        obraz: "686.jpg"
    },
    {
        id: 687,
        pytanie: "Ile hostów można zaadresować w sieci o adresie 172.16.3.96/28?",
        odpowiedzi: [
            "62",
            "126",
            "14",
            "254"
        ],
        poprawna: "C"
    },
    {
        id: 688,
        pytanie: "Przedstawione na ilustracji narzędzie jest przeznaczone do",
        odpowiedzi: [
            "łączenia okablowania światłowodowego.",
            "montażu okablowania miedzianego.",
            "zdejmowania izolacji z okablowania miedzianego.",
            "zdejmowania izolacji z okablowania światłowodowego."
        ],
        poprawna: "D",
        obraz: "688.jpg"
    },
    {
        id: 689,
        pytanie: "Rozkaz procesora, przetwarzający informację i zamieniający ją na wynik, należy do grupy rozkazów",
        odpowiedzi: [
            "arytmetyczno-logicznych.",
            "przesłań.",
            "bezwarunkowych i warunkowych.",
            "sterujących."
        ],
        poprawna: "A"
    },
    {
        id: 690,
        pytanie: "Którą czynność należy wykonać podczas konfiguracji rutera, aby ukryta sieć bezprzewodowa była widoczna dla wszystkich użytkowników znajdujących się w jej zasięgu?",
        odpowiedzi: [
            "Zmienić nazwę sieci.",
            "Ustawić szerokość kanału.",
            "Włączyć opcję rozgłaszania sieci.",
            "Zmienić numer kanału."
        ],
        poprawna: "C"
    },
    {
        id: 691,
        pytanie: "Program testujący wydajność sprzętu komputerowego to",
        odpowiedzi: [
            "chkdsk.",
            "sniffer.",
            "exploit.",
            "benchmark."
        ],
        poprawna: "D"
    }
];
