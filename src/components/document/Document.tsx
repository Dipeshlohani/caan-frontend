'use client'
import React, { useState } from "react";
import styles from "./document.module.css";

type DocumentProps = {
  title: string;
  categories: string[];
  subcategories: Record<string, string[]>;
};

const Document: React.FC<DocumentProps> = ({ title, categories, subcategories }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.documentBox}>
      <div className={styles.heading}>
        {title}
        <button className={styles.toggleButton} onClick={handleToggleClick}>
          {expanded ? "-" : "+"}
        </button>
      </div>
      {expanded && (
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              {category}
              {subcategories[category] && subcategories[category].length > 0 && (
                <div className={styles.subcategories}>
                  {subcategories[category].map((subcategory, subIndex) => (
                    <div key={subIndex} className={styles.subcategory}>
                      <span>{subcategory}</span>
                      <div className={styles.buttons}>
                        <button className={styles.viewButton}>VIEW</button>
                        <button className={styles.downloadButton}>DOWNLOAD</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const DocumentList: React.FC = () => {
  const data: Record<string, string[]> = {
    "Form Category 1": [
      "Civil Aviation Act, 2015",
      "Civil Aviation Authority Act, 2053 (B.S.)",
      "Civil Aviation Security Rule, 2016 (First Amendment, 2019) – English",
      "Civil Aviation Security Rule, 2073 (First Amendment, 2076) – Nepali",
      "Civil Aviation Act, 2015",
    ],
    "Form Category 2": ["Civil Aviation Act, 2015",
      "Civil Aviation Authority Act, 2053 (B.S.)",
      "Civil Aviation Security Rule, 2016 (First Amendment, 2019) – English",
      "Civil Aviation Security Rule, 2073 (First Amendment, 2076) – Nepali",
      "Civil Aviation Act, 2015",],
    "Form Category 3": [],
    "Form Category 4": [],
  };

  const importantLinks = [
    "Operation & Safety",
    "Personal Licensing",
    "Who We Are",
    "Rules & Regulations",
    "E-Services & Forms",
  ];

  return (
    <div className={styles.documentContainer}>
      <div>
        {Object.entries(data).map(([category, categories], index) => (
          <Document
            key={index}
            title={category}
            categories={categories}
            subcategories={{}}
          />
        ))}
      </div>
      <div className={styles.importantLinks}>
        <h3>Important Links</h3>
        <ul className={styles.linkList}>
          {importantLinks.map((link, index) => (
            <li key={index}>
              <span className={styles.importantLink}>
                {link}
                <span className={styles.rightArrow}> &gt; </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className={styles.centeredContainer}>
      <h1>Document List</h1>
      <DocumentList />
    </div>
  );
};

export default App;
