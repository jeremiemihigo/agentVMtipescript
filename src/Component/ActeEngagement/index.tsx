import axios from "axios";
import React from "react";
import Loading from "../../Static/Loading";
import Logo from "../../Static/Logo";
import { account_manager, config } from "../../Static/static";
import Header from "../Header";

interface IEngagement {
  region: string;
  shop: string;
  customer_name: string;
  customer_id: string;
  customer_cu: string;
  id_account_manager: string;
  engagement: "OUI" | "NON";
}

function ActeEngagement() {
  const [load, setLoad] = React.useState(true);
  const [data, setData] = React.useState<IEngagement[]>([]);

  const loading = async () => {
    try {
      const response = await axios.get(
        `${account_manager}/readCustomersengagement`,
        config
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  React.useEffect(() => {
    loading();
  }, []);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredClients, setFilteredClients] = React.useState<IEngagement[]>(
    []
  );

  React.useEffect(() => {
    const filtered = data.filter((client: IEngagement) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        client.customer_id.toLowerCase().includes(searchLower) ||
        client.customer_name.toLowerCase().includes(searchLower)
      );
    });
    setFilteredClients(filtered);
  }, [searchTerm, data]);

  return (
    <>
      <Header />
      <Logo text="Tracker by commitment" />
      <Loading open={load} title="Loading..." />

      {!load && (
        <div className="p-4" style={{ padding: "10px" }}>
          {data.length > 0 ? (
            <>
              <div style={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="search by ID or customer name"
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

              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr className="p-3">
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">C.U</th>
                    <th className="border border-gray-300 p-2">Engagement ?</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((customer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">
                        {customer.customer_id}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {customer.customer_name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {customer.customer_cu}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {customer.engagement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-center text-gray-500">No customers found.</p>
          )}
        </div>
      )}
    </>
  );
}
const styles = {
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
};
export default ActeEngagement;
