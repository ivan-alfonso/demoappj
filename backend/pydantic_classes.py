from datetime import datetime, date, time
from typing import Any, List, Optional, Union, Set
from enum import Enum
from pydantic import BaseModel, field_validator


############################################
# Enumerations are defined here
############################################

class Genre(Enum):
    Cookbooks = "Cookbooks"
    Romance = "Romance"
    Horror = "Horror"
    Adventure = "Adventure"
    Thriller = "Thriller"
    Fantasy = "Fantasy"
    Technology = "Technology"
    Philosophy = "Philosophy"
    History = "History"
    Poetry = "Poetry"

############################################
# Classes are defined here
############################################
class AuthorCreate(BaseModel):
    name: str
    birth: date
    books: List[int]  # N:M Relationship


class LibraryCreate(BaseModel):
    address: str
    name: str
    web_page: str
    telephone: str
    books: List[int]  # N:M Relationship


class BookCreate(BaseModel):
    stock: int
    price: float
    pages: int
    genre: Genre
    title: str
    release: date
    library: List[int]  # N:M Relationship
    authors: List[int]  # N:M Relationship

    @field_validator('pages')
    @classmethod
    def validate_pages_1(cls, v):
        """OCL Constraint: constraint_Book_0_1"""
        if not (v > 10):
            raise ValueError('pages must be > 10')
        return v

