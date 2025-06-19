import { useState } from "react";

import {
  Background,
  Main,
  TitlePage,
  TagButtons,
  FilterControl,
} from "./App.ts";
import data from "./server/data.json";
import Header from "./components/Header/index.tsx";
import CardExtension from "./components/CardExtension/index.tsx";

function App() {
  const [changeTheme, setChangeTheme] = useState<"dark" | "light">("dark");
  const [dataServer, setDataServer] = useState(data);

  const handleChangeTheme = () => {
    setChangeTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const tags = ["All", "Active", "Inactive"];

  const handleFilter = (tag: string) => {
    if (tag === "All") {
      setDataServer(data);
    } else if (tag === "Active") {
      const filtered = data.filter((item) => item.isActive === true);
      setDataServer(filtered);
    } else if (tag === "Inactive") {
      const filtered = data.filter((item) => item.isActive === false);
      setDataServer(filtered);
    }
  };

  const handleRemoveCard = (name: string) => {
    const updated = dataServer.filter((item) => item.name !== name);
    setDataServer(updated);
  };

  return (
    <>
      <Background theme={changeTheme}>
        <Header theme={changeTheme} onClick={handleChangeTheme} />
        <FilterControl>
          <TitlePage theme={changeTheme}>Extensions List</TitlePage>
          <div>
            {tags.map((tag) => (
              <TagButtons theme={changeTheme} onClick={() => handleFilter(tag)}>
                {tag}
              </TagButtons>
            ))}
          </div>
        </FilterControl>
        <Main>
          {dataServer.map((value: any) => (
            <CardExtension
              key={value.name}
              link={value.logo}
              title={value.name}
              description={value.description}
              theme={changeTheme}
              onClick={() => handleRemoveCard(value.name)}
            />
          ))}
        </Main>
      </Background>
    </>
  );
}

export default App;
