import  { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const RunReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Call your API to fetch the report data
    try {
      const response = await fetch(`/api/report?start=${startDate}&end=${endDate}`);
      const data = await response.json();
      setReportData(data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }

    setLoading(false);
  };

  const handleDownloadPdf = () => {
    const input = document.getElementById('report');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('report.pdf');
    });
  };

  return (
    <div className="mx-2">
      <h1 className="text-center mt-[100px] text-3xl font-bold">Run Report</h1>
      <form className="my-10 rounded-xl bg-gray-300 p-9 md:max-w-[60%] mx-auto" onSubmit={handleSubmit}>
        <div className="text-left lg:flex md:max-w-full lg:justify-center items-center">
          {/* start date */}
          <div className="flex justify-center items-center mb-2 mr-10">
            <label className="pr-2 font-semibold" htmlFor="startDate">
              Start <span className="text-pink-600">Date</span>:
            </label>
            <input
              className="rounded-md bg-[#ffffff] px-3 py-2 justify-end"
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              required
            />
          </div>
          {/* end date */}
          <div className="flex justify-center items-center mb-2 mr-10">
            <label className="pr-2 font-semibold" htmlFor="endDate">
              End <span className="text-pink-600">Date</span>:
            </label>
            <input
              className="rounded-md bg-[#ffffff] px-3 py-2 justify-end"
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              required
            />
          </div>
        </div>
        <div className="card-actions justify-center mt-4">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Run Report'}
          </button>
        </div>
      </form>

      {reportData && (
        <div id="report" className="mt-10 p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Report</h2>
          {/* Display your report data here */}
          <pre>{JSON.stringify(reportData, null, 2)}</pre>
          <button className="btn mt-4" onClick={handleDownloadPdf}>
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default RunReport;
