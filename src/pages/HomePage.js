import Heading from "../layout/Heading";
import DatePickerForm from "../components/DatePickerForm";
import CarouselMain from "../components/CarouselMain"
import Container from "react-bootstrap/Container";

function HomePage() {
    return (
        <>
            <CarouselMain />

            <Container>
                <Heading title="Book your next hotel" />

                <DatePickerForm />

            </Container>
        </>
    );
}

export default HomePage