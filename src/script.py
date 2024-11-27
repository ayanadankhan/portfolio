import os

# Define the components to create
components = ["Header", "Hero", "Gallery", "Complements", "ContactUs", "Footer"]

# Define the starter code for each component
starter_code = """
import React from 'react';

const {name} = () => {
    return (
        <div>
            <h1>{name} works</h1>
        </div>
    );
};

export default {name};
"""

# Directory where components will be created
components_dir = os.path.join(os.getcwd(), "src", "components")

# Ensure the components directory exists
os.makedirs(components_dir, exist_ok=True)

# Create each component file with starter code
for component in components:
    file_path = os.path.join(components_dir, f"{component}.jsx")
    with open(file_path, 'w') as file:
        file.write(starter_code.replace("{name}", component).strip())

print("Component files created successfully.")
