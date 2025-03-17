# Use official Python 3.9 slim image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create instance directory for database
RUN mkdir -p /app/instance

# Copy application files
COPY . .

# Expose port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=pywebtest/app.py
ENV FLASK_ENV=production

# Initialize database and run application
CMD ["sh", "-c", "flask init-db && flask run --host=0.0.0.0"]
