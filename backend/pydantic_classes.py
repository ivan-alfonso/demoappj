from datetime import datetime, date, time
from typing import Any, List, Optional, Union, Set
from enum import Enum
from pydantic import BaseModel, field_validator


############################################
# Enumerations are defined here
############################################

class Genre(Enum):
    Philosophy = "Philosophy"
    Cookbooks = "Cookbooks"
    Adventure = "Adventure"
    Thriller = "Thriller"
    Romance = "Romance"
    Technology = "Technology"
    Fantasy = "Fantasy"
    Poetry = "Poetry"
    Horror = "Horror"
    History = "History"

############################################
# Classes are defined here
############################################
class AuthorCreate(BaseModel):
    name: str
    birth: date
    books: List[int]  # N:M Relationship


class LibraryCreate(BaseModel):
    web_page: str
    address: str
    name: str
    telephone: str
    books: List[int]  # N:M Relationship


class BookCreate(BaseModel):
    price: float
    stock: int
    release: date
    pages: int
    title: str
    genre: Genre
    authors: List[int]  # N:M Relationship
    library: List[int]  # N:M Relationship

    @field_validator('pages')
    @classmethod
    def validate_pages_1(cls, v):
        """OCL Constraint: constraint_Book_0_1"""
        if not (v > 10):
            raise ValueError('pages must be > 10')
        return v

