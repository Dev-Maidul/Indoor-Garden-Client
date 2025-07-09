import axios from "axios";
import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";

const AddPlant = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form?.name?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const category = form?.category?.value;
    const image = form?.image?.files[0];
    // image url response from imageBb
    const imageUrl = await imageUpload(image);
    const plantData = { name, price, quantity, category, image: imageUrl };
    console.table(plantData);
  };
  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddPlant;
