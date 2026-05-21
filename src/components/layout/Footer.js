function Footer () {
    return (
        <footer className="site-footer">
        <div className="footer-content">
          <ul>
            <li>
              <button type="button" className="footer-link">
                개인정보처리방침
              </button>
            </li>
            <li>
              <button type="button" className="footer-link">
                이메일 수집 거부
              </button>
            </li>
           <li>
              <button type="button" className="footer-link">
                취소 및 환불규정
              </button>
            </li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer;
