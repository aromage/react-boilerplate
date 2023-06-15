export const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const koreaTime = new Date(date.getTime());
  const month = koreaTime.getMonth() + 1;
  const day = koreaTime.getDate();

  const monthString = month >= 10 ? month : "0" + month;
  const dayString = day > 10 ? day : "0" + day;

  return `${koreaTime.getFullYear()}-${monthString}-${dayString}`;
};

export const elapsedTime = (dateString: string) => {
  const start: any = new Date(dateString);
  const end: any = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};

export const getInitials = (string: string) =>
  string
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");

export function formatDateString(dateString: string) {
  const date = new Date(dateString);
  const koreaTime = new Date(date.getTime());
  const month = koreaTime.getMonth() + 1;
  const day = koreaTime.getDate();
  const hour = koreaTime.getHours();
  const minute = koreaTime.getMinutes();
  const second = koreaTime.getSeconds();

  const monthString = month >= 10 ? month : "0" + month;
  const dayString = day > 10 ? day : "0" + day;

  const hourString = hour >= 10 ? hour : "0" + hour;
  const minuteString = minute >= 10 ? minute : "0" + minute;
  const secondString = second >= 10 ? second : "0" + second;

  return `${koreaTime.getFullYear()}-${monthString}-${dayString} ${hourString}:${minuteString}:${secondString}`;

  // const formattedDateString = dateString.slice(0, 19).replace("T", " ");
  // return formattedDateString;
}
