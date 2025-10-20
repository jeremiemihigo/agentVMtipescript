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
  const navigate = useNavigate();

  const changePage = (clients: ICustomerManager[]) => {
    navigate("/account_client", { state: { clients } });
  };

  const loadingData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${account_manager}/myDashboard`,
        config
      );
      if (response.status === 200) setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadingData();
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "20px",
    },
    header: {
      marginBottom: "30px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#1e293b",
      marginTop: "10px",
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    statCard: {
      borderRadius: "16px",
      padding: "32px",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
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
  };

  const StatCard = ({
    title,
    number,
    description,
    gradient,
    onClick,
  }: {
    title: string;
    number: number;
    description: string;
    gradient: string;
    onClick: () => void;
  }) => (
    <div
      style={{
        ...styles.statCard,
        background: gradient,
        color: "white",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
        {title}
      </div>
      <div
        style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "8px" }}
      >
        {number}
      </div>
      <div style={{ fontSize: "14px", opacity: 0.9 }}>{description}</div>
    </div>
  );

  const renderEligibility = () => {
    if (!data) return null;
    const total = data.visites.length + data.no_visites.length;
    const styles = {
      card: {
        marginTop: "24px",
        padding: "20px",
        borderRadius: "16px",
        background: "white",
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        textAlign: "center" as const,
        maxWidth: "500px",
        marginInline: "auto",
      },
      percentage: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#1e293b",
      },
      text: {
        fontSize: "16px",
        marginBottom: "8px",
        color: "#475569",
      },
      success: {
        color: "#16a34a",
        fontWeight: "600",
        fontSize: "18px",
        marginTop: "10px",
      },
      danger: {
        color: "#dc2626",
        fontWeight: "600",
        fontSize: "18px",
      },
    };
    if (total < 150) {
      const ratio = data.visites.length / total;
      const percentage = (ratio * 100).toFixed(0);

      return (
        <div style={styles.card}>
          <div style={styles.percentage}>{percentage}% de clients visités</div>
          {ratio >= 0.8 ? (
            <p style={styles.success}>✅ Transport & Comission</p>
          ) : (
            <div>
              <p style={styles.danger}>❌ Transport & Comission</p>
              <p style={styles.success}>
                Il vous reste {(total * 0.8 - data.visites.length).toFixed(0)}{" "}
                visites pour être éligible au transport et commission
              </p>
            </div>
          )}
        </div>
      );
    }
    return (
      <div style={styles.card}>
        <div style={styles.percentage}>
          {data.visites.length} clients visités
        </div>
        {data.visites.length >= 100 ? (
          <p style={styles.success}>✅ Transport & Comission</p>
        ) : (
          <div>
            <p style={styles.danger}>❌ Transport & Comission</p>
            <p style={styles.success}>
              Il vous reste {100 - data.visites.length} visites pour être
              éligible au transport et commission
            </p>
          </div>
        )}
      </div>
    );
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
                  text={`Vous avez une base de ${
                    data.no_visites.length + data.visites.length
                  } clients à tracker`}
                />
                <h1 style={styles.title}>Tableau de bord</h1>
              </div>

              <div style={styles.statsContainer}>
                <StatCard
                  title="Clients visités"
                  number={data.visites.length}
                  description="Nombre total de clients visités ce mois"
                  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  onClick={() => changePage(data.visites)}
                />

                <StatCard
                  title="Clients non visités"
                  number={data.no_visites.length}
                  description="Clients en attente de visite"
                  gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                  onClick={() => changePage(data.no_visites)}
                />

                {renderEligibility()}
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}

export default DashboardIndex;
