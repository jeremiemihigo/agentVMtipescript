import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ICustomerManager } from "../../../Interface/IAccountManager";
import Logo from "../../../Static/Logo";
import { account_manager, config } from "../../../Static/static";
import Header from "../../Header";

interface IData {
  no_visites: ICustomerManager[];
  visites: ICustomerManager[];
}

function DashboardIndex() {
  const [data, setData] = React.useState<IData>();
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigate();

  const changePage = (donner: ICustomerManager[]) => {
    navigation("/account_client", { state: { clients: donner } });
  };
  const loadingData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${account_manager}/myDashboard`,
        config
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const initialize = async () => {
      await loadingData();
    };
    initialize();
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "20px",
    },
    header: {
      marginBottom: "30px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "10px",
      textAlign: "center" as const,
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    statCard: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "32px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      border: "1px solid #e2e8f0",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      cursor: "pointer",
    },
    statCardHover: {
      transform: "translateY(-4px)",
      boxShadow:
        "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    statTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#475569",
      marginBottom: "8px",
    },
    statNumber: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "8px",
    },
    statDescription: {
      fontSize: "14px",
      color: "#64748b",
    },
    visitedCard: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    },
    notVisitedCard: {
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "white",
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "400px",
    },
    loadingSpinner: {
      width: "40px",
      height: "40px",
      border: "4px solid #e2e8f0",
      borderTop: "4px solid #3b82f6",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        {loading ? (
          <div style={styles.loadingContainer}>
            <div style={styles.loadingSpinner}></div>
          </div>
        ) : (
          data && (
            <>
              <div style={styles.header}>
                <Logo
                  text={` Vous avez une base de
                  ${data?.no_visites.length + data?.visites.length} clients à
                  tracker`}
                />
                <h1 style={styles.title}></h1>
              </div>
              <div style={styles.statsContainer}>
                <div
                  style={{
                    ...styles.statCard,
                    ...styles.visitedCard,
                  }}
                  onClick={() => changePage(data.visites)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div
                    style={{
                      ...styles.statTitle,
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    Clients visités
                  </div>
                  <div style={{ ...styles.statNumber, color: "white" }}>
                    {data.visites.length}
                  </div>
                  <div
                    style={{
                      ...styles.statDescription,
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Nombre total de clients qui sont déjà visités pour ce mois
                  </div>
                </div>

                <div
                  style={{
                    ...styles.statCard,
                    ...styles.notVisitedCard,
                  }}
                  onClick={() => changePage(data.no_visites)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div
                    style={{
                      ...styles.statTitle,
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    Clients non visités
                  </div>
                  <div style={{ ...styles.statNumber, color: "white" }}>
                    {data.no_visites.length}
                  </div>
                  <div
                    style={{
                      ...styles.statDescription,
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Clients en attente de visite
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}

export default DashboardIndex;
