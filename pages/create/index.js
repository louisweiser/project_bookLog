import FilterComponent from "@/components/pages/create/Filter.js";
import Form from "@/components/pages/create/Form.js";
import Currentbook from "@/components/pages/create/Search.js";
import Navigation from "@/components/common/Navigation";

import styles from "@/styles/pages/create.module.css";

export default function CreatePage() {
  return (
    <>
      <FilterComponent></FilterComponent>
      <div className={styles.background}>
        <Form></Form>
        <Currentbook></Currentbook>
      </div>
      <Navigation></Navigation>
    </>
  );
}
