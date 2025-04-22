import {
    Box,
    Modal,
    Typography,
    Grid,
    TextField,
    IconButton,
    MenuItem,
    Select,
    Button,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { useState, useEffect } from "react";
  import axios from "axios";
  
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    bgcolor: "#1a1a1a",
    color: "#fff",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  
  const CreateEventModal = ({ open, handleClose,onEventCreated , refreshCount }) => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      imageUrl: "",
      price: 0,
      soldTickets: 0,
      totalTickets: 0,
      status: "draft",
      startDate: "2025-06-15T10:00", // إضافة startDate
  endDate: "2025-06-15T12:00",
      categoryId: "",
      locationId: "",
    });
  
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
  
    // جلب التصنيفات والمواقع عند فتح المودال
    useEffect(() => {
      if (open) {
        axios.get("http://localhost:8081/api/categories")
          .then(res => setCategories(res.data))
          .catch(err => console.error("Error loading categories", err));
  
        axios.get("http://localhost:8081/api/locations")
          .then(res => setLocations(res.data))
          .catch(err => console.error("Error loading locations", err));
      }
    }, [open]);
  
    const handleChange = (field) => (event) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file)); // preview
      }
    };

    const handleSubmit = async () => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("soldTickets", formData.soldTickets);
        formDataToSend.append("totalTickets", formData.totalTickets);
        formDataToSend.append("status", formData.status);
        formDataToSend.append("startDate", formData.startDate); // تأكد من أن هذه القيمة صحيحة
        formDataToSend.append("endDate", formData.endDate);     // تأكد من أن هذه القيمة صحيحة
        formDataToSend.append("categoryId", formData.categoryId);
        formDataToSend.append("locationId", formData.locationId);
    
         // إضافة الملف بشكل صحيح:
    if (image) {
      formDataToSend.append("file", image);  // تأكد من أن اسم الحقل هو "file"
    }

    // إرسال الطلب
    const response = await axios.post("http://localhost:8081/api/events/upload", formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("✅ Event Created:", response.data);

    if (onEventCreated) {
      onEventCreated(); // ✅ استدعِ التحديث
    }
    handleClose(); 
    
    if (refreshCount) refreshCount();
// ✅ سكّر المودال بعدين    

    
        console.log("✅ Event Created:", response.data);
        handleClose();
      } catch (error) {
        if (error.response) {
          // طباعة تفاصيل الاستجابة من السيرفر بشكل كامل
          console.error("❌ Error response from server:", error.response);
          console.error("Error message:", error.response.data);
        } else {
          // في حال لم يتم الحصول على استجابة
          console.error("❌ Error message:", error.message);
        }
      }
    };
    
    
  
  
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight="bold" color="white">
              CREATE EVENT
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>
  
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                fullWidth
                value={formData.title}
                onChange={handleChange("title")}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
  
            <Grid item xs={12}>
  <Button
    variant="contained"
    component="label"
    fullWidth
    sx={{ bgcolor: "#333", color: "#fff" }}
  >
    Upload Image
    <input type="file" hidden onChange={handleImageChange} accept="image/*" />

  </Button>
  {imagePreview && (
    <Box mt={2}>
      <img src={imagePreview} alt="Preview" style={{ width: "100%", maxHeight: 200, objectFit: "cover" }} />
    </Box>
  )}
</Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange("description")}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
  
            <Grid item xs={6} sm={3}>
  <TextField
    label="Start Date & Time"
    type="datetime-local"
    fullWidth
    value={formData.startDate}
    onChange={handleChange("startDate")}
    InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
    InputProps={{ style: { color: "#fff" } }}
  />
</Grid>

<Grid item xs={6} sm={3}>
  <TextField
    label="End Date & Time"
    type="datetime-local"
    fullWidth
    value={formData.endDate}
    onChange={handleChange("endDate")}
    InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
    InputProps={{ style: { color: "#fff" } }}
  />
</Grid>

  
            <Grid item xs={6} sm={3}>
              <TextField
                label="Price"
                type="number"
                fullWidth
                value={formData.price}
                onChange={handleChange("price")}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
  
            <Grid item xs={6} sm={3}>
              <TextField
                label="Sold Tickets"
                type="number"
                fullWidth
                value={formData.soldTickets}
                onChange={handleChange("soldTickets")}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
  
            <Grid item xs={6} sm={3}>
              <TextField
                label="Total Tickets"
                type="number"
                fullWidth
                value={formData.totalTickets}
                onChange={handleChange("totalTickets")}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
  
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                displayEmpty
                value={formData.categoryId}
                onChange={handleChange("categoryId")}
                sx={{ color: "#fff", backgroundColor: "#333" }}
              >
                <MenuItem value="" disabled>Select Category</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                ))}
              </Select>
            </Grid>
  
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                displayEmpty
                value={formData.locationId}
                onChange={handleChange("locationId")}
                sx={{ color: "#fff", backgroundColor: "#333" }}
              >
                <MenuItem value="" disabled>Select Location</MenuItem>
                {locations.map((loc) => (
                  <MenuItem key={loc.id} value={loc.id}>
                  {loc.venueName} – {loc.fullAddress}
                </MenuItem>
                ))}
              </Select>
            </Grid>
  
            <Grid item xs={12}>
              <Button variant="contained" color="error" fullWidth onClick={handleSubmit}>
                CREATE EVENT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };
  
  export default CreateEventModal;