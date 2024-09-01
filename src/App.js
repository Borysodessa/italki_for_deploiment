import "./App.css";
import styles from "./styles/app.module.css";
import { useState } from "react";
import json from "./components/data.json";
import { TeacherList } from "./components/teachersList";
import { TeacherContent } from "./components/teacherContent";
import { AllFilters } from "./components/allFilters";

export function App() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [packageMin, setPackageMin] = useState(0);
  const [packageMax, setPackageMax] = useState(20);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [change, setChange] = useState({
    selectButton: "orderByLessons",
    rotate: false,
  });

  return (
    <div className={styles.appMainWrap}>
      <AllFilters
        jsonData={json.data}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        change={change}
        setChange={setChange}
      />
      <div>
        <TeacherList
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedCountry={selectedCountry}
          packageMax={packageMax}
          setPackageMax={setPackageMax}
          packageMin={packageMin}
          setPackageMin={setPackageMin}
          jsonData={json.data}
          setSelectedTeacher={setSelectedTeacher}
        />
      </div>
      <div>
        <TeacherContent
          packageMin={packageMin}
          setPackageMin={setPackageMin}
          packageMax={packageMax}
          setPackageMax={setPackageMax}
          selectedTeacher={selectedTeacher}
        />
      </div>
    </div>
  );
}
