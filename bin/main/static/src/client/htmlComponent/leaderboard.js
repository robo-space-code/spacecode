import escape from 'lodash/escape';
import { throttle } from 'throttle-debounce';
import { requestLeaderBoard, playerId, playerName } from '../networking';

const leaderboard = document.getElementById('leaderboard');
const rows = document.querySelectorAll('#leaderboard table tr');

export const updateLeaderboard = throttle(1500, () => {
  var roomId = 1;
  requestLeaderBoard(roomId)
    .then(data => {
      let minLenth = Math.min(data.length, 5);
      let playerRank;

      for (let i = 0; i < data.length; i++) {
        if (playerName === data[i].username) {
          playerRank = i;
        }
      }

      if (playerRank < 5) {
        for (let i = 0; i < minLenth; i++) {
          rows[i + 1].innerHTML = `<td>${i + 1} ${escape(data[i].username.slice(0, 15)) || 'Anonymous'}</td><td>${data[i].score
            }</td>`;
        }
      }
      else {
        for (let i = 0; i < 3; i++) {
          rows[i + 1].innerHTML = `<td>${i + 1} ${escape(data[i].username.slice(0, 15)) || 'Anonymous'}</td><td>${data[i].score
            }</td>`;
        }
        rows[4].innerHTML = '<td>...</td><td>...</td>';
        rows[5].innerHTML = `<td>${playerRank + 1} ${escape(data[playerRank].username.slice(0, 15)) || 'Anonymous'}</td><td>${data[playerRank].score
          }</td>`;
      }

      for (let i = data.length; i < 5; i++) {
        rows[i + 1].innerHTML = '<td>-</td><td>-</td>';
      }
    });
});

export function setLeaderboardHidden(hidden) {
  if (hidden) {
    leaderboard.classList.add('hidden');
  } else {
    leaderboard.classList.remove('hidden');
  }
}
