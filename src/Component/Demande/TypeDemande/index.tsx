import { useNavigate } from "react-router-dom";
import Header from "../../Header";

function TypeDemande() {
  const navigation = useNavigate();
  const changePage = (link: string) => {
    navigation(link);
  };
  return (
    <>
      <style>{`
        .type-demande-container {
          min-height: 100vh;
        
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .options-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 800px;
          width: 100%;
          margin-top: 3rem;
        }

        .option-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .option-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .option-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .option-card:hover::before {
          transform: scaleX(1);
        }

        .option-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          transition: all 0.3s ease;
        }

        .option-card:hover .option-icon {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .option-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .option-card p {
          color: #718096;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .option-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 1.5rem;
          color: #cbd5e0;
          transition: all 0.3s ease;
        }

        .option-card:hover .option-arrow {
          color: #667eea;
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .type-demande-container {
            padding: 1rem;
          }

          .options-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .option-card {
            padding: 2rem;
          }

          .option-icon {
            width: 60px;
            height: 60px;
          }

          .option-card h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
      <Header />
      <div className="type-demande-container">
        <div className="options-container">
          <div className="option-card" onClick={() => changePage("/demande")}>
            <div className="option-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Visite ménage</h3>
            <p>Visite ménage sans acte d&apos;engagement</p>
            <div className="option-arrow">→</div>
          </div>
          <div
            className="option-card"
            onClick={() => changePage("/demande_acteengagement")}
          >
            <div className="option-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Visite ménage & Acte d'engagement</h3>
            <p>Visite complète avec signature d'acte d'engagement</p>
            <div className="option-arrow">→</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeDemande;
