import { Button, Card, Dropdown, DropdownButton, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UseFetchContext } from "../../hooks/UseFetchContext";

export function ProductHeader() {
  const {
    handleSortAsc,
    handleSortDesc,
    resetData,
    type,
    getProductTypes,
    items,
  } = UseFetchContext();

  // let { handleSortAsc } = useFetch();
  return (
    <div className="mx-auto max-w-7xl bg-white shadow-sm mb-4 ">
      <Card style={{ background: "#c7d2fe" }}>
        <Card.Body>
          <div className="flex items-center ">
            <DropdownButton variant="outline" title="Sortuj po cenie">
              {/* todo zrobić filtorwanie po typie */}

              {/* Sortowanie po cenie */}
              <Dropdown.ItemText>
                {" "}
                <button onClick={() => handleSortDesc(items)}>Rosnąco</button>
              </Dropdown.ItemText>
              <Dropdown.ItemText>
                <button onClick={() => handleSortAsc(items)}>Malejąco</button>
              </Dropdown.ItemText>
            </DropdownButton>
            <DropdownButton
              className="pl-2"
              variant="outline"
              title="Filtruj po typie"
            >
              {/* todo zrobić filtorwanie po typie */}
              {type.map((typee) => (
                <Dropdown.ItemText key={typee}>
                  <button onClick={() => getProductTypes(typee)}>
                    {typee}
                  </button>
                </Dropdown.ItemText>
              ))}

              <Dropdown.ItemText>dsad</Dropdown.ItemText>
            </DropdownButton>
            {/* Resetowanie sortowania */}
            <Button
              className="pl-2"
              variant="outline"
              onClick={() => resetData()}
            >
              Wyczyść filtry
            </Button>

            <Button className="pl-2" variant="outline ">
              <Nav.Link to={`/add`} as={NavLink}>
                Dodaj produkt
              </Nav.Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
