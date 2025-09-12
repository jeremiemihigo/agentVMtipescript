import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../Static/Logo";
import Header from "../Header";

interface ICustomerManager {
  _id: string;
  unique_account_id: string;
  customer_name: string;
  sat: string;
  id_Account_manager: string;
  customer_lookup: string;
  actif: boolean;
  dateuploaded: number;
  datefinished: number;
}

function AccountManager() {
  const params = useLocation();
  const { clients } = params.state;
  const [filteredClients, setFilteredClients] = React.useState<
    ICustomerManager[]
  >([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const filtered = clients.filter((client: ICustomerManager) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        client.unique_account_id.toLowerCase().includes(searchLower) ||
        client.customer_name.toLowerCase().includes(searchLower)
      );
    });
    setFilteredClients(filtered);
  }, [searchTerm, clients]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("fr-FR");
  };

  return (
    <>
      <Header />
      <Logo text="Account manager" />

      <div style={styles.container}>
        <>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Rechercher par ID client ou nom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                style={styles.clearButton}
              >
                ✕
              </button>
            )}
          </div>

          <div style={styles.clientsContainer}>
            {filteredClients.length === 0 ? (
              <div style={styles.emptyState}>
                <p style={styles.emptyText}>
                  {searchTerm
                    ? "Aucun client trouvé pour cette recherche"
                    : "Aucun client trouvé"}
                </p>
              </div>
            ) : (
              filteredClients.map((client) => (
                <div key={client._id} style={styles.clientCard}>
                  <div style={styles.cardHeader}>
                    <h3 style={styles.clientName}>{client.customer_name}</h3>
                    <div
                      style={{
                        ...styles.statusBadge,
                        backgroundColor: client.actif ? "#4CAF50" : "#f44336",
                      }}
                    >
                      {client.actif ? "Actif" : "Inactif"}
                    </div>
                  </div>

                  <div style={styles.cardContent}>
                    <div style={styles.infoRow}>
                      <span style={styles.label}>ID Client:</span>
                      <span style={styles.value}>
                        {client.unique_account_id}
                      </span>
                    </div>

                    <div style={styles.infoRow}>
                      <span style={styles.label}>SAT:</span>
                      <span style={styles.value}>{client.sat}</span>
                    </div>

                    <div style={styles.infoRow}>
                      <span style={styles.label}>Customer Lookup:</span>
                      <span style={styles.value}>{client.customer_lookup}</span>
                    </div>

                    <div style={styles.infoRow}>
                      <span style={styles.label}>Date d'upload:</span>
                      <span style={styles.value}>
                        {formatDate(client.dateuploaded)}
                      </span>
                    </div>

                    {client.datefinished && (
                      <div style={styles.infoRow}>
                        <span style={styles.label}>Date de fin:</span>
                        <span style={styles.value}>
                          {formatDate(client.datefinished)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "16px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  searchContainer: {
    position: "relative" as const,
    marginBottom: "20px",
  },
  searchInput: {
    width: "100%",
    padding: "12px 40px 12px 16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  clearButton: {
    position: "absolute" as const,
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#999",
    padding: "4px",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "16px",
    color: "#666",
    fontSize: "16px",
  },
  clientsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  emptyState: {
    textAlign: "center" as const,
    padding: "40px 20px",
  },
  emptyText: {
    color: "#666",
    fontSize: "16px",
  },
  clientCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e0e0e0",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    paddingBottom: "12px",
    borderBottom: "1px solid #f0f0f0",
  },
  clientName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  statusBadge: {
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
    color: "#ffffff",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
  },
  label: {
    fontSize: "14px",
    color: "#666",
    fontWeight: "500",
  },
  value: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "400",
    textAlign: "right" as const,
    maxWidth: "60%",
    wordBreak: "break-word" as const,
  },
};

// Add CSS animation for loading spinner
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default AccountManager;
