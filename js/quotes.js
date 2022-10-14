const quotes = [
    {
        quote : "실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
        author: "데일카네기",
    },
    {
        quote : "사람들이 인생에서 실패하는 가장 큰 이유는 친구, 가족, 이웃들의 말을 듣기 때문이다.",
        author : "나폴레온 힐",
    },
    {
        quote : "당신이 다수의 편에 서 있다는 걸 깨닫게 될 때가 다시 생각해볼 때이다.",
        author : "마크 트웨인",
    },
    {
        quote : "진짜 사업가는 안전망이 없는 사람이다. ",
        author : "헨리 크래비스",
    },
    {
        quote : "리더십의 기능은 지도자를 더 많이 만드는 것이지 추종자를 더 많이 만드는 게 아니다.",
        author : "랄프 네이더",
    },
    {
        quote : "삶에 진정한 흥미가 있고 호기심이 있는 삶을 살면 잠이 가장 중요한 것이 아니게 된다는 것을 발견했다.",
        author : "마사 스튜어트",
    },
    {
        quote : "비참해져라. 혹은 스스로에게 동기를 부여하라. 뭘 해야 하든, 그건 언제나 당신의 선택이다.",
        author : "웨인 다이어",
    },
    {
        quote : "진짜 어려움은 극복할 수 있다. 정복할 수 없는 것은 상상 속의 어려움들뿐이다.",
        author : "시어도어N. 베일",
    },
    {
        quote : "당신이 할 수 없는 일이 할 수 있는 일에 지장을 주게 하지 마라.",
        author : "존 R. 우든",
    },
    {
        quote : "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author : "미상"
    }   
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
