// 정의된 asset 이름들의 목록
const ASSET_NAMES = [
  'ship.svg',
  'bullet.svg',
  'icon64.png',
  'plane.png',
  'octagon.png',
  'circle.png',
  'target.png',
  'meteor.png',
  'meteorv.png',
  'shield1.png',
  'shield2.png',
  'shield3.png',
  'icon_sound_off.png',
  'icon_sound_on.png',
  'dirty-bomb.png',
  'bomb.svg',
  'missile.svg',
  'react.svg',
  'vite.svg',
];

// assets을 저장할 객체
const assets = {};

// 모든 asset을 다운로드하는 프로미스. Promise.all은 주어진 모든 프로미스가 이행되면 이행되는 
// 새로운 프로미스를 반환합니다. 이 경우, 모든 asset이 다운로드되면 이 프로미스가 이행됩니다.
const downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

// asset을 다운로드하는 함수. 이 함수는 주어진 자산 이름에 대한 이미지를 생성하고, 
// 이미지가 로드되면 assets 객체에 이미지를 저장하고 프로미스를 이행하는 새로운 프로미스를 반환합니다.
function downloadAsset(assetName) {
  return new Promise(resolve => {
    const asset = new Image();
    asset.onload = () => {
      console.log(`Downloaded ${assetName}`);
      assets[assetName] = asset;
      resolve();
    };
    asset.src = `/assets/${assetName}`;
  });
}

// 모든 자산을 다운로드하는 프로미스를 반환하는 함수
export const downloadAssets = () => downloadPromise;

// 주어진 자산 이름에 대한 자산을 반환하는 함수
export const getAsset = assetName => assets[assetName];
