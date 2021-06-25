import { Currency } from './Currency.types';

export type Vacancy = {
  id: number;
  title: string;
  vacancy_code: string;
  code: null;
  description: string;
  stack: string[];
  salary: number;
  currency: Currency;
  city: string;
  address: string;
  type_of_vacancy: string;
  author: string;
  phone: string;
  email: string;
};

const vacancy = (): Vacancy => ({
  id: Math.round(Math.random() * 100000),
  title: 'Frontend разработчик',
  vacancy_code: '',
  description: `Разрабатывать фронт asdasdasdasdasdasdasdasdasdasdasdkpAHSD[HASKd nAP"sd nakpsdk asdj P IASd hjP
    AIsd hAIP
    sd hPAIsd hAP
    sid jAIOPsd 'asdih AISdyh 
    as,;danmsdp'khA{OUsdh UO{Asdh uioashd iAs oAHsd' Jasdip] hAsdip] hAwipd hAsduo' hAsdipgb Asdjo' hAskpdhqwi0]ad hAUIOSdh }APIsdb UO"Asd
    AsdAJSdioANSdkp' hASI)}dh AU)fh weuo[fh 0wsrib a0[wehb UOWEFH Qwsdf huQAwjdf0i  aklsdfb AUsn JKLAOsdh {P"ASdnbf uo[dfgh doghjiSDfhUSDfSDf
    asdjasdjasndjl nasdjn ldbn ;JASdb njo[Asdb IP:AsvdASdjo asjkd ASD /aklsdn jlasDB aSDB ;alSDN jkaSDB ahjiSDBV "auioSDGH UO'
    asdas Adas Ad
    asASDSDASDSD 
    dSD  ASD AS
    asd ADA ASD 
    asdasASSASDDASD SDDd
    asdD AD SD  AA A
    aAS ASSDASDSD AS
    sdSDASD A SSD D DA 
    asD  A AAD  ASSD
    dASASDSD SDASD 
    asdASD ASD AD
    asdD  AAS
    aASSD D 
    dD AS AS
    asdASD ASD
    aS DASDD 
    sdDA AS
    as AS
    dasdNASO{dh O{Asdhol' Asbd AsdbnAHsd io'ASBdo; Uasdb ;iuasdfv uiSBdg uosdbg ajiosdfgb ao'sdfn ioSDFNASJLDHAOSDBH AISDB IASDBA IPSDBIPabSDI BASD ASJKDB JIOASDNUIO ASHD ASD ASD
    `,
  stack: ['React', 'Frontend'],
  salary: 5000,
  currency: 'rub',
  city: 'Екатеринбург',
  address: 'Пушкина, 22',
  type_of_vacancy: 'part-time',
  author: 'ООО Развитие',
  phone: '+79123456789',
  email: 'enotik@poloskun.ru',
  code: null,
});

export const mockVacancies: Vacancy[] = [
  {
    id: 3,
    title: 'Уборщик',
    vacancy_code: '',
    description: 'Драить унитаз',
    stack: ['Уборка', 'Frontend'],
    salary: 100,
    currency: 'rub',
    city: 'Екатеринбург',
    address: 'Пушкина, 22',
    type_of_vacancy: 'part-time',
    author: 'ООО Развитие',
    phone: '+79123456789',
    email: 'enotik@poloskun.ru',
    code: null,
  },
  vacancy(),
  vacancy(),
  vacancy(),
  vacancy(),
  vacancy(),
  vacancy(),
  vacancy(),
];
