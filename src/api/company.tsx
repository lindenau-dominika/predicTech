export const getCompanyDetails = async (companyId: number) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/companies/${companyId}`
    );
    if (!response.ok) {
      throw new Error("Nie udało się pobrać danych");
    }
    const company = await response.json();
    return company; // Zwraca dane firmy
  } catch (error) {
    return { error: "Nie udało się pobrać danych" }; // Zwraca błąd
  }
};
