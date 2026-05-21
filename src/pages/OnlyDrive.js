import '../styles/OnlyDrive.css';

function OnlyDrive() {
  return (
    <main id="main" className="content">
      <section className="od">
        <div className="od-text">
          <h1 className="onlyDrive-title">운전만 해주는 이사, 딱 그게 필요했어.</h1>

          <p className="onlyDrive-text">
            요즘 포장이사는 부담스럽고,
            <br />
            짐도 몇 개 없는데 1톤 포터만 쓰고 싶을 때 있잖아요?
            <br />
            <br />
            📦 직접 포장하고, 직접 옮기고
            <br />
            🚚 PackUp은 딱 “운전만” 해드려요.
          </p>

          <ul className="onlyDrive-bullets">
            <li>광주 원룸 이사</li>
            <li>친구들이랑 같이 옮기는 자취생</li>
            <li>최소비용으로 이사하고 싶은 사회초년생</li>
            <li>갑자기 급하게 차량만 필요한 날</li>
          </ul>

          <p className="onlyDrive-text">
            차량만 쓰고 싶을 때, 기사님도 깔끔하게 딱 한 분.
            <br />
            이삿날 시간 맞춰 도착하고, 추가 요금 없이 정직하게 일합니다.
            <br />
            <br />
            🎯 검색 키워드: 광주 운전만, 포터 운전만, 이사 차량만
            <br />
            📲 지금 바로 톡 주세요. 진짜 친절하고 빠릅니다.
          </p>
        </div>

        <div className="od-img" aria-label="운전만 서비스 이미지">
          <img className="od1" src="/img/od1.png" alt="운전만 서비스 소개 이미지 1" />
          <div className="two-img">
            <img className="od2" src="/img/od2.png" alt="운전만 서비스 소개 이미지 2" />
            <img className="od3" src="/img/od3.png" alt="운전만 서비스 소개 이미지 3" />
          </div>
          <img className="od4" src="/img/od4.png" alt="운전만 서비스 소개 이미지 4" />
          <img className="od5" src="/img/od5.png" alt="운전만 서비스 소개 이미지 5" />
        </div>
      </section>
    </main>
  );
}

export default OnlyDrive;