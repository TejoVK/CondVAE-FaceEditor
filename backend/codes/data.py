import pandas as pd
data = pd.read_csv("lables.csv")
data.head()
data_new = data[[
    "image_id",
    "Attractive",
    "Bald",
    "Smiling",
    "Wearing_Lipstick",
    "Young",
    "Eyeglasses",
    "Heavy_Makeup",
    "Mustache",
    "No_Beard",
    "Receding_Hairline"
]]
subset_df = data_new.head(162771) 

subset_df.to_csv("filtered_labels.csv", index=False)
subset_df.tail()