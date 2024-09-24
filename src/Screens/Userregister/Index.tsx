import React, { useState } from "react";
import { Form, Input, Button, Upload, Space, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./style.scss";
import { Col, Row } from "react-bootstrap";

interface DynamicField {
  destination: string;
  departurePoint: string;
  route: string;
  DeparturePoint: String;
  Departuretime: any;
  Destinationtime: any;
  Log: any;
  Lat: any;
}

const BusForm = () => {
  const [form] = Form.useForm();
  const [dynamicFields, setDynamicFields] = useState<DynamicField[]>([
    {
      destination: "",
      departurePoint: "",
      route: "",
      DeparturePoint: "",
      Departuretime: "",
      Destinationtime: "",
      Log: "",
      Lat: "",
    },
  ]);

  const addDynamicField = () => {
    setDynamicFields([
      ...dynamicFields,
      {
        destination: "",
        departurePoint: "",
        route: "",
        DeparturePoint: "",
        Departuretime: "",
        Destinationtime: "",
        Log: "",
        Lat: "",
      },
    ]);
  };

  const handleDynamicFieldChange = (
    index: number,
    field: keyof DynamicField,
    value: string
  ) => {
    const newFields = [...dynamicFields];
    newFields[index][field] = value;
    setDynamicFields(newFields);
  };

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <Row>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Bus Name"
          name="busName"
          rules={[{ required: true, message: "Please input bus name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Driver Name"
          name="driverName"
          rules={[{ required: true, message: "Please input driver name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="District"
          name="district"
          rules={[{ required: true, message: "Please input district!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Place"
          name="place"
          rules={[{ required: true, message: "Please input place!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please input state!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Driver Contact Number"
          name="driverContact"
          rules={[
            { required: true, message: "Please input driver contact number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Owner Contact Number"
          name="ownerContact"
          rules={[
            { required: true, message: "Please input owner contact number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vehicle Register Number"
          name="Registernumber"
          rules={[
            {
              required: true,
              message: "Please input vehicle Register number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vehicle Name"
          name="vehicleName"
          rules={[{ required: true, message: "Please input vehicle name!" }]}
        >
          <Input />
        </Form.Item>

        <Divider>ADD Bus Route and Information</Divider>
        {dynamicFields.map((field, index) => (
          <Row key={index} style={{ marginBottom: 8 }}>
            <Col md={12}>
              <Form.Item
                label="Departure Point"
                name={`departurePoint-${index}`}
                rules={[
                  { required: true, message: "Please input departure point!" },
                ]}
              >
                <Input
                  value={field.departurePoint}
                  onChange={(e) =>
                    handleDynamicFieldChange(
                      index,
                      "DeparturePoint",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                label="Departure Time"
                name={`Departuretime-${index}`}
                rules={[
                  { required: true, message: "Please input Departure Time!" },
                ]}
              >
                <Input
                  type="time"
                  // defaultValue="12:00"
                  onChange={(e) =>
                    handleDynamicFieldChange(
                      index,
                      "Departuretime",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
            </Col>

            <Col md={12}>
              <Form.Item
                label="Route"
                name={`route-${index}`}
                rules={[{ required: true, message: "Please input route!" }]}
              >
                <Input
                  value={field.route}
                  onChange={(e) =>
                    handleDynamicFieldChange(index, "route", e.target.value)
                  }
                />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                label="Destination"
                name={`destination-${index}`}
                rules={[
                  { required: true, message: "Please input destination!" },
                ]}
              >
                <Input
                  value={field.destination}
                  onChange={(e) =>
                    handleDynamicFieldChange(
                      index,
                      "destination",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
            </Col>

            <Col md={12}>
              <Form.Item
                label="Destination Time"
                name={`Destinationtime-${index}`}
                rules={[
                  { required: true, message: "Please input Destination Time!" },
                ]}
              >
                <Input
                  type="time"
                  value={field.Destinationtime}
                  onChange={(e) =>
                    handleDynamicFieldChange(
                      index,
                      "Destinationtime",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
            </Col>

            <Col md={12}>
              <Form.Item
                label="Latitude"
                name={`lat-${index}`}
                rules={[
                  {
                    required: true,
                    message: "Please input Destination Latitude!",
                  },
                ]}
              >
                <Input
                  value={field.Lat}
                  onChange={(e) =>
                    handleDynamicFieldChange(
                      index,
                      "Destinationtime",
                      e.target.value
                    )
                  }
                />
              </Form.Item>
            </Col>

            <Col md={12}>
              <Form.Item
                label="Logitiude"
                name={`log-${index}`}
                rules={[
                  {
                    required: true,
                    message: "Please input Destination Latitude!",
                  },
                ]}
              >
                <Input
                  value={field.Log}
                  onChange={(e) =>
                    handleDynamicFieldChange(index, "Log", e.target.value)
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="dashed" onClick={addDynamicField}>
            + Add All shedule
          </Button>
        </div>

        <Divider>Image Uploads</Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Form.Item label="Upload Driver Image" name="driverImage">
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Driver Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Upload Bus Image" name="busImage">
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Bus Image</Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item>
          <Col md={12}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default BusForm;
