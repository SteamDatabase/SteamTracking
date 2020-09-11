typedef enum EContentCorruptionType
{
    k_EContentCorruptionTypeUnknown, // unknown
    k_EContentCorruptionTypeUnexpected_size, // unexpected_size
    k_EContentCorruptionTypeCrc_header_mismatch, // crc_header_mismatch
    k_EContentCorruptionTypeSha_header_mismatch, // sha_header_mismatch
    k_EContentCorruptionTypeDecompress_failed, // decompress_failed
    k_EContentCorruptionTypeChecksum_error, // checksum_error
    k_EContentCorruptionTypeParsing_failed, // parsing_failed
} EContentCorruptionType;
