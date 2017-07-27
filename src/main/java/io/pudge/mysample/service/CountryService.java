package io.pudge.mysample.service;

import io.pudge.mysample.service.dto.CountryDTO;
import java.util.List;

/**
 * Service Interface for managing Country.
 */
public interface CountryService {

    /**
     * Save a country.
     *
     * @param countryDTO the entity to save
     * @return the persisted entity
     */
    CountryDTO save(CountryDTO countryDTO);

    /**
     *  Get all the countries.
     *
     *  @return the list of entities
     */
    List<CountryDTO> findAll();

    /**
     *  Get the "id" country.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    CountryDTO findOne(Long id);

    /**
     *  Delete the "id" country.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the country corresponding to the query.
     *
     *  @param query the query of the search
     *  
     *  @return the list of entities
     */
    List<CountryDTO> search(String query);
}
